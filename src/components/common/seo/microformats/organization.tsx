export const OrganizationJsonLd = () => {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: 'RedDuck',
    url: 'https://redduck.io',
    logo: {
      '@type': 'ImageObject',
      url: 'https://redduck.io/svg/header/logo.svg',
      contentUrl: 'https://redduck.io/svg/header/logo.svg',
    },
    sameAs: [
      'https://github.com/RedDuck-Software',
      'https://redduck.medium.com',
      'https://www.linkedin.com/company/redduckdev',
    ],
    description:
      'Full-cycle Web3 and Fintech software development company specializing in smart contract engineering, DeFi protocols, RWA tokenization, and Zero-Knowledge infrastructure.',
    email: 'contact@redduck.io',
    telephone: ['+35796333210', '+380502147263'],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '2 Grigori Afxentiou, Akamia Center, office 15',
        addressLocality: 'Larnaca',
        postalCode: '6023',
        addressCountry: 'CY',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Saperne pole 12',
        addressLocality: 'Kyiv',
        postalCode: '01042',
        addressCountry: 'UA',
      },
    ],
    knowsAbout: [
      'Smart Contract Development',
      'Solana Rust Engineering',
      'Ethereum Solidity Development',
      'DeFi Protocol Architecture',
      'RWA Tokenization',
      'Zero-Knowledge Proofs',
      'DAO Governance Frameworks',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
};
