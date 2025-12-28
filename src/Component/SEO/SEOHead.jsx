import Head from 'next/head';

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  robots = 'index, follow',
  structuredData,
  additionalMeta = []
}) => {
  const defaultTitle = "Dev Pixel Solutions - Mobile App Development & Presentation Design Expert";
  const defaultDescription = "Professional React Native mobile app development and presentation design services. Expert in cross-platform apps, PowerPoint templates, pitch decks, and business presentations.";
  const defaultKeywords = "Mobile App Development, presentation design, PowerPoint templates, pitch deck design, cross-platform apps, business presentations, Google Slides, investor pitch decks";
  const baseUrl = "https://devpixelsolutions.com";

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonicalUrl = canonicalUrl || baseUrl;
  const finalOgImage =  `https://devpixelsolutions.com/images/logo.png`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Dev Pixel Solutions" />

      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || finalTitle} />
      <meta property="og:description" content={ogDescription || finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={ogUrl || finalCanonicalUrl} />
      <meta property="og:site_name" content="Dev Pixel Solutions" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || finalTitle} />
      <meta name="twitter:description" content={ogDescription || finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
  );
};

export default SEOHead;