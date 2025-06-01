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
  image = "/EthHeroImag-desktop.png", // Default OG image
  url = "https://ethbari.org", // Default URL
}) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const defaultTitle = t("seo.title", "ETH Bari - Costruisci il Futuro Crypto");
  const defaultDescription = t(
    "seo.description",
    "ETH Bari è l'evento che porta l'innovazione crypto e della finanza decentralizzata (DeFi) nel Sud Italia. Unisciti a studenti, giovani professionisti e appassionati di innovazione tecnologica per esplorare, costruire e dare forma al futuro della finanza."
  );

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />

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

      {/* Additional Meta Tags */}
      <meta
        name="keywords"
        content="ETH Bari, DeFi, Blockchain, Finanza Decentralizzata, Cryptocurrency, Web3, Bari, Italia"
      />
      <meta name="author" content="ETH Bari" />
      <meta name="robots" content="index, follow" />
      <meta
        name="language"
        content={currentLang === "it" ? "Italian" : "English"}
      />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default SEO;
