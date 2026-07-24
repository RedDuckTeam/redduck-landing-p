// Consent-gated regions: EEA (EU-27 + IS/LI/NO) + UK. ISO-3166 alpha-2,
// UPPERCASE. Single source of truth — do not duplicate elsewhere.
export const EEA_UK_SET: ReadonlySet<string> = new Set<string>([
  // EU-27
  'AT', // Austria
  'BE', // Belgium
  'BG', // Bulgaria
  'HR', // Croatia
  'CY', // Cyprus
  'CZ', // Czechia
  'DK', // Denmark
  'EE', // Estonia
  'FI', // Finland
  'FR', // France
  'DE', // Germany
  'GR', // Greece
  'HU', // Hungary
  'IE', // Ireland
  'IT', // Italy
  'LV', // Latvia
  'LT', // Lithuania
  'LU', // Luxembourg
  'MT', // Malta
  'NL', // Netherlands
  'PL', // Poland
  'PT', // Portugal
  'RO', // Romania
  'SK', // Slovakia
  'SI', // Slovenia
  'ES', // Spain
  'SE', // Sweden
  // EEA (non-EU)
  'IS', // Iceland
  'LI', // Liechtenstein
  'NO', // Norway
  // United Kingdom
  'GB',
]);
