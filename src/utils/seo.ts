export const SITE_URL = 'https://redduck.io';

export const canonical = (path: string) => ({
  rel: 'canonical' as const,
  href: `${SITE_URL}${path}`,
});

export const seo = ({
  title,
  description,
  keywords,
  image,
  robots,
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  robots?: string;
}) => {
  const tags = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    ...(image
      ? [
          { name: 'twitter:image', content: image },
          { name: 'twitter:image:src', content: image },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'og:image', content: image },
          { name: 'image', property: 'og:image', content: image },
          { name: 'og:type', content: 'image/png' },
          { name: 'og:width', content: '960' },
          { name: 'og:height', content: '540' },
        ]
      : []),
    ...(robots ? [{ name: 'robots', content: robots }] : []),
  ];

  return tags;
};
