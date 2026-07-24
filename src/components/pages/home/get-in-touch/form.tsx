import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from '~/components/ui';
import { FormSelect } from '~/components/ui/form-select';
import { ANALYTICS_EVENTS } from '~/constants';
import { LINKS } from '~/constants/links';
import {
  getInTouchSchema,
  type GetInTouchSchema,
} from '~/schemas/get-in-touch';
import {
  cn,
  openCalendlyPopup,
  trackEvent,
  trackFormConversion,
} from '~/utils';

const HEAR_ABOUT_US_OPTIONS = [
  'Google',
  'Social Media',
  'Clutch',
  'Upwork',
  'Rating Website',
  'GitHub',
  'Referral',
  'Other',
] as const;

const HEAR_ABOUT_US_SELECT_OPTIONS = HEAR_ABOUT_US_OPTIONS.map((opt) => ({
  label: opt,
  value: opt,
}));

export function showCalendly(data: GetInTouchSchema) {
  const { fullName, email, yourPhone, telegram, idea } = data;
  const telegramInfo = telegram ? `Telegram: ${telegram}` : '';
  const phoneInfo = yourPhone ? `Phone: ${yourPhone}` : '';
  const additionalInfo = `Idea: ${idea} | ${telegramInfo} | ${phoneInfo}`;

  const calendlyUrl = `${LINKS.Calendly}?name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(additionalInfo)}`;

  openCalendlyPopup(calendlyUrl);
}

export function GetInTouchForm({
  className,
  onSubmit,
  isLoading,
}: {
  className?: string;
  onSubmit: (values: GetInTouchSchema) => Promise<string | undefined>;
  isLoading: boolean;
}) {
  const form = useForm<GetInTouchSchema>({
    resolver: zodResolver(getInTouchSchema),
    defaultValues: {
      fullName: '',
      email: '',
      yourPhone: '',
      telegram: '',
      idea: '',
      hearAboutUs: '',
      hearAboutUsDetails: '',
      scheduleCall: false,
    },
  });

  const hearAboutUs = form.watch('hearAboutUs');
  const showHearAboutUsDetails =
    hearAboutUs === 'Referral' || hearAboutUs === 'Other';
  const hearAboutUsDetailsLabel =
    hearAboutUs === 'Referral' ? 'Who referred you?' : 'Please specify';

  const handleSubmit = async (data: GetInTouchSchema) => {
    trackEvent(ANALYTICS_EVENTS.FormSubmit);

    const taskId = await onSubmit(data);

    // onSubmit returns a task id on success, undefined on failure.
    if (!taskId) {
      return;
    }

    trackFormConversion();

    if (data.scheduleCall) {
      showCalendly(data);
    }
  };

  const handleHearAboutUsChange = (
    val: string,
    onChange: (val: string) => void,
  ) => {
    onChange(val);
    if (val !== 'Referral' && val !== 'Other') {
      form.setValue('hearAboutUsDetails', '');
    }
  };

  useEffect(() => {
    function isNeededEvent(e: MessageEvent) {
      return (
        e.origin === 'https://calendly.com' &&
        e.data?.event === 'calendly.event_scheduled'
      );
    }

    const handler = (e: MessageEvent) => {
      if (isNeededEvent(e)) {
        toast.success(
          'Thank you for scheduling a call! We will get back to you as soon as possible.',
        );
      }
    };

    window.addEventListener('message', handler);

    return () => {
      window.removeEventListener('message', handler);
    };
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn(
          'flex flex-1 flex-col justify-between p-5 2xl:p-10',
          className,
        )}
      >
        <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2 2xl:gap-y-10">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder={'Adam Smith'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            rules={{ deps: ['yourPhone', 'telegram'] }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder={'user@gmail.com'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="yourPhone"
            rules={{ deps: ['email', 'telegram'] }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Phone</FormLabel>
                <FormControl>
                  <Input placeholder={'+1 555 123 4567'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telegram"
            rules={{ deps: ['email', 'yourPhone'] }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telegram Username</FormLabel>
                <FormControl>
                  <Input placeholder={'@username or link'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="idea"
            render={({ field }) => (
              <FormItem className="lg:col-span-2">
                <FormLabel>About Project</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={'Describe your idea'}
                    {...field}
                    className="max-h-[150px] min-h-[120px] resize-y"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hearAboutUs"
            render={({ field }) => (
              <FormItem className="lg:col-span-2">
                <FormLabel>How Did You Hear About Us?</FormLabel>
                <FormControl>
                  <FormSelect
                    value={field.value || ''}
                    onChange={(val) =>
                      handleHearAboutUsChange(val, field.onChange)
                    }
                    placeholder="Select an option"
                    options={HEAR_ABOUT_US_SELECT_OPTIONS}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {showHearAboutUsDetails && (
            <FormField
              control={form.control}
              name="hearAboutUsDetails"
              render={({ field }) => (
                <FormItem className="lg:col-span-2">
                  <FormLabel>{hearAboutUsDetailsLabel}</FormLabel>
                  <FormControl>
                    <Input placeholder="[Optional]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="scheduleCall"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 lg:col-span-2">
                <FormControl>
                  <Checkbox
                    className="size-6"
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                    }}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer">
                  Schedule a call with our team
                </FormLabel>
              </FormItem>
            )}
          />
        </div>

        <div className="mt-[50px] flex flex-col items-center gap-10 md:mt-5 md:flex-row 2xl:mt-[110px]">
          <Button
            type="submit"
            className="] min-w-[260px] max-md:w-full"
            disabled={form.formState.isSubmitting || isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
          <p className="text-[20px] text-black">
            By sending this form I confirm that I have read and accept the{' '}
            <Link
              className="border-b hover:border-b-2"
              resetScroll
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}

export default GetInTouchForm;
