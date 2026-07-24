export const ANALYTICS_EVENTS = {
  CalendlyClick: 'calendly_click',
  TelegramClick: 'tg_click',
  FormSubmit: 'form_submit',
} as const;

// Google Ads conversion tracking. ConversionId configures the Ads tag via
// gtag('config', ...); ConversionLabel is the `send_to` for conversion events.
export const GOOGLE_ADS = {
  ConversionId: 'AW-18172241178',
  CalendlyConversionLabel: 'AW-18172241178/bX98CJKL1LEcEJrKmdlD',
  FormConversionLabel: 'AW-18172241178/e2JdCKvjj7QcEJrKmdlD',
} as const;
