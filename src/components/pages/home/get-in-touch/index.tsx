import { useState } from 'react';
import { toast } from 'sonner';

import { GetInTouchForm } from './form';

import { CustomSection, SectionHeader, TextWithDot } from '~/components/common';
import {
  EmailIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsUpIcon,
} from '~/components/svg/icons';
import { Button } from '~/components/ui';
import { LINKS } from '~/constants';
import type { GetInTouchSchema } from '~/schemas/get-in-touch';
import { sendToEmail } from '~/server-fns';
import type { BaseComponentProps } from '~/types';
import { cn } from '~/utils';

function Link({
  href,
  children,
  className,
  'aria-label': ariaLabel,
}: BaseComponentProps<{
  href: string;
  'aria-label': string;
}>) {
  return (
    <Button
      variant="link"
      className={cn('aspect-square h-[60px] p-0', className)}
      asChild
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </Button>
  );
}

export function GetInTouch() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: GetInTouchSchema) => {
    setIsLoading(true);

    try {
      const taskId = await sendToEmail({
        data,
      });
      console.log('Server response:', taskId);

      if (!taskId) {
        throw new Error('Failed to send message');
      }

      toast.success(
        'Thank you for your message! We will get back to you as soon as possible.',
      );

      return String(taskId);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Server error:', error);
      // Show a fixed friendly message — never the raw server/provider error.
      toast.error(
        'Something went wrong while sending your message. Please try again later.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CustomSection className="[&_*]:border-dark-gray bg-gray relative flex flex-col">
      <div
        id="getInTouch"
        className="grid flex-1 border-y md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-[180px_auto]"
      >
        <SectionHeader className="order-1 text-black max-lg:col-span-2 lg:border-r 2xl:col-span-2 2xl:!h-full">
          _GET IN TOUCH
        </SectionHeader>

        <TextWithDot
          className={cn(
            'order-2 flex flex-col justify-center',
            'border-b 2xl:border-r',
            'col-span-1 !py-0 max-lg:col-span-2 max-lg:h-[120px] max-sm:h-[150px]',
            '2xl:!space-y-2 2xl:!px-4',
          )}
        >
          Fill in the short form to start your journey with us
        </TextWithDot>

        {/* Mark's Photo */}
        <div
          className={cn(
            'flex flex-col items-center justify-start',
            'space-y-5 p-10 2xl:space-y-10',
            'order-5 max-md:col-span-2 2xl:order-3 2xl:row-span-2',
          )}
        >
          <img
            src="/images/landing/mark.webp"
            alt="Mark Virchenko"
            loading="lazy"
            className={cn(
              'w-full max-w-full sm:max-w-[295px] 2xl:max-w-[360px]',
              'w-full object-cover max-2xl:!aspect-square max-2xl:bg-[110%_auto] max-sm:!aspect-auto',
            )}
          />
          <p className="flex flex-col space-y-[10px] text-center text-black">
            <span className="text-2xl">Mark Virchenko</span>
            <span className="text-xl">Chief Executive Officer</span>
          </p>
        </div>

        <GetInTouchForm
          onSubmit={onSubmit}
          isLoading={isLoading}
          className="order-3 col-span-2 max-2xl:border-b 2xl:order-4 2xl:border-r"
        />

        {/* Contact Us */}
        <div
          className={cn(
            'flex flex-col justify-end space-y-5 p-10 2xl:space-y-10',
            'order-3 max-md:col-span-2 max-md:border-b md:border-r 2xl:order-5',
          )}
        >
          <p className="text-xl uppercase text-black 2xl:text-2xl">
            contact us
          </p>

          {/* Links block that will wrap in two */}
          <div
            className={cn(
              'flex flex-row flex-wrap gap-5 max-sm:hidden',
              '*:flex *:flex-row *:flex-wrap *:gap-5',
            )}
          >
            <div>
              <Link href={`mailto:${LINKS.Email}`} aria-label="Email us">
                <EmailIcon />
              </Link>
              <Link href={LINKS.WhatsUp} aria-label="Contact us on WhatsApp">
                <WhatsUpIcon />
              </Link>
            </div>
            <div>
              <Link href={LINKS.Telegram} aria-label="Contact us on Telegram">
                <TelegramIcon />
              </Link>
              <Link href={LINKS.LinkedIn} aria-label="RedDuck on LinkedIn">
                <LinkedInIcon />
              </Link>
            </div>
          </div>

          {/* Links block for small screens: this one will stretch to a full width */}
          <div className="flex flex-row justify-between sm:hidden">
            <Link href={`mailto:${LINKS.Email}`} aria-label="Email us">
              <EmailIcon />
            </Link>
            <Link href={LINKS.WhatsUp} aria-label="Contact us on WhatsApp">
              <WhatsUpIcon />
            </Link>
            <Link href={LINKS.Telegram} aria-label="Contact us on Telegram">
              <TelegramIcon />
            </Link>
            <Link href={LINKS.LinkedIn} aria-label="RedDuck on LinkedIn">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </CustomSection>
  );
}

export default GetInTouch;
