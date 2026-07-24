interface ArticleJsonLdProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}

export const ArticleJsonLd = ({
  headline,
  description,
  datePublished,
  dateModified,
  authorName,
}: ArticleJsonLdProps) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    datePublished,
    dateModified,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
