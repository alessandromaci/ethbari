import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = "/og-image.png", // Default OG image - should be 1200x630px PNG
  url = "https://ethbari.org", // Default URL
}) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const eventDate = "25-28 Settembre 2025";
  const defaultTitle = t(
    "seo.title",
    `ETH Bari - ${eventDate} - Costruisci il Futuro Crypto`
  );
  const defaultDescription = t(
    "seo.description",
    `ETH Bari si terrà dal ${eventDate}. È l'evento che porta l'innovazione crypto e della finanza decentralizzata (DeFi) nel Sud Italia. Unisciti a studenti, giovani professionisti e appassionati di innovazione tecnologica per esplorare, costruire e dare forma al futuro della finanza.`
  );

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;

  // Structured data for the event
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ETH Bari",
    description: seoDescription,
    startDate: "2025-09-25",
    endDate: "2025-09-28",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Spazio Murat",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bari",
        addressCountry: "IT",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "ETH Bari",
      url: "https://ethbari.org",
    },
    offers: {
      "@type": "Offer",
      url: "https://app.mego.tickets/event/2915db7c-40dc-402e-84de-20076403bf12",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta
        name="keywords"
        content="ETH Bari, DeFi, Blockchain, Finanza Decentralizzata, Cryptocurrency, Web3, Bari, Italia, Ethereum, Smart Contracts, Workshop, Evento Crypto"
      />
      <meta name="author" content="ETH Bari" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="language"
        content={currentLang === "it" ? "Italian" : "English"}
      />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#FF0012" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ethereumbari" />
      <meta name="twitter:creator" content="@ethereumbari" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />

      {/* Language */}
      <html lang={currentLang} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional Meta Tags */}
      <meta name="geo.region" content="IT-BA" />
      <meta name="geo.placename" content="Bari" />
      <meta name="geo.position" content="41.1171;16.8719" />
      <meta name="ICBM" content="41.1171, 16.8719" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
