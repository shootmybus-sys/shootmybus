import { useEffect } from "react";
import { SITE_SEO, toAbsoluteUrl } from "../../config/seoConfig";

function upsertMetaTag(attributeName, attributeValue, content) {
  if (!content) return null;
  let element = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
  return element;
}

function upsertCanonical(href) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", href);
}

/**
 * Updates document head metadata, Open Graph, Twitter Card, canonical URL,
 * and JSON-LD structured data cleanly per route.
 */
export default function SeoHead({
  title,
  description,
  path = "/",
  image = SITE_SEO.defaultImage,
  ogType = "website",
  robots = "index, follow",
  schemas = [],
}) {
  const fullTitle = title || `${SITE_SEO.brandName} | ${SITE_SEO.tagline}`;
  const canonicalUrl = toAbsoluteUrl(path);
  const absoluteImage = toAbsoluteUrl(image);
  const serializedSchemas = JSON.stringify(schemas.filter(Boolean));

  useEffect(() => {
    document.title = fullTitle;

    upsertMetaTag("name", "description", description);
    upsertMetaTag("name", "robots", robots);
    upsertCanonical(canonicalUrl);

    // Open Graph
    upsertMetaTag("property", "og:type", ogType);
    upsertMetaTag("property", "og:site_name", SITE_SEO.brandName);
    upsertMetaTag("property", "og:locale", SITE_SEO.locale);
    upsertMetaTag("property", "og:title", fullTitle);
    upsertMetaTag("property", "og:description", description);
    upsertMetaTag("property", "og:url", canonicalUrl);
    upsertMetaTag("property", "og:image", absoluteImage);

    // Twitter Card
    upsertMetaTag("name", "twitter:card", "summary_large_image");
    upsertMetaTag("name", "twitter:title", fullTitle);
    upsertMetaTag("name", "twitter:description", description);
    upsertMetaTag("name", "twitter:image", absoluteImage);

    // Remove previous route JSON-LD tags and inject current ones
    document.head.querySelectorAll('script[data-smb-schema="true"]').forEach((node) => node.remove());

    const parsedSchemas = JSON.parse(serializedSchemas);
    const createdNodes = parsedSchemas.map((schemaObj) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-smb-schema", "true");
      script.textContent = JSON.stringify(schemaObj);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      createdNodes.forEach((node) => node.remove());
    };
  }, [fullTitle, description, robots, canonicalUrl, ogType, absoluteImage, serializedSchemas]);

  return null;
}

