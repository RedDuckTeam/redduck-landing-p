interface ReviewCase {
  score: number;
  text: string;
  author: string;
}

export const ProductJsonLd = ({
  name,
  description,
  image,
  price,
  currency,
  url,
  reviews,
}: {
  name: string;
  description: string;
  image: string;
  price: string;
  currency: string;
  url: string;
  reviews: ReviewCase[];
}) => {
  const getBestAndAverageRating = (reviews: ReviewCase[]) => {
    if (reviews.length === 0) {
      return { bestRating: '5', ratingValue: '0' };
    }
    const bestRating = Math.max(...reviews.map((r) => r.score)).toString();
    const avg = reviews.reduce((sum, r) => sum + r.score, 0) / reviews.length;
    return { bestRating, ratingValue: avg.toFixed(1) };
  };

  const { bestRating, ratingValue } = getBestAndAverageRating(reviews);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    aggregateRating: {
      '@type': 'AggregateRating',
      bestRating: bestRating,
      ratingCount: reviews.length.toString(),
      ratingValue: ratingValue,
    },
    name,
    image: [image],
    description,
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: currency,
      price,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: r.author,
      reviewBody: r.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.score.toString(),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
