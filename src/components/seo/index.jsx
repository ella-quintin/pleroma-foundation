import { Helmet } from "react-helmet-async";

const SITE_NAME = "Pleroma Sycamore Foundation";
// Set VITE_SITE_URL once the production domain is live, so canonical/OG tags
// resolve to absolute URLs (required for OG, strongly recommended for
// canonical). Until then this falls back to relative URLs, which still work
// but aren't best practice.
const SITE_URL = (import.meta.env.VITE_SITE_URL || "").replace(/\/$/, "");
const DEFAULT_IMAGE = "/favicon.png";

/**
 * Centralised per-page SEO tags: title, description, canonical, Open Graph,
 * and Twitter card. Use on every route so sharing/search behave the same
 * everywhere, and so a new page can't accidentally ship with none of this.
 */
const SEO = ({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}) => {
  const url = SITE_URL ? `${SITE_URL}${path}` : path;
  const absoluteImage =
    image.startsWith("http") || !SITE_URL ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {SITE_URL && <link rel="canonical" href={url} />}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={absoluteImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
    </Helmet>
  );
};

export default SEO;
