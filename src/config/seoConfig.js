import { SITE_CONTACT } from "./contactConfig.js";

export const SITE_SEO = {
  brandName: "Shootmybus",
  tagline: "India's Exclusive Bus Photography & Film Production Company",
  // Single configurable production origin (update when deploying final domain)
  siteUrl: "https://www.shootmybus.com",
  defaultImage: "/Images/og-preview.jpg",
  defaultImageWidth: "1200",
  defaultImageHeight: "630",
  defaultImageAlt: "Shootmybus Professional Bus Photography",
  logoUrl: "/Logo/shootmybus.jpeg",
  locale: "en_IN",
};

export function toAbsoluteUrl(pathOrUrl = "/") {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_SEO.siteUrl}${normalizedPath}`;
}

export const PAGE_SEO = {
  home: {
    title: "Shootmybus | India's Exclusive Bus Photography & Film Production Company",
    description:
      "Professional bus photography, cinematic bus reels, drone shoots and creative film production across India.",
    path: "/",
    image: "/Images/og-preview.jpg",
    imageAlt: "Shootmybus Professional Bus Photography",
    ogType: "website",
  },
  services: {
    title: "Bus Photography, Reels & Drone Shoot Services | Shootmybus India",
    description:
      "Explore Shootmybus production services across India: Professional Bus Reels, Cinematic Drone Shoots, Highway Running Shots, and Commercial Bus Photography.",
    path: "/services",
    image: "/Images/20.PNG",
    imageAlt: "Shootmybus Bus Photography and Film Production Services",
    ogType: "website",
  },
  portfolio: {
    title: "Luxury Bus Photography & Reel Portfolio | Shootmybus India",
    description:
      "View Shootmybus luxury coach exteriors, Volvo sleeper interiors, aerial drone perspectives, and highway running photography captured for Indian fleet brands.",
    path: "/portfolio",
    image: "/Images/IMG_2832.JPG.jpeg",
    imageAlt: "Shootmybus Luxury Bus Photography Portfolio",
    ogType: "website",
  },
  about: {
    title: "About Shootmybus | Dedicated Coach & Fleet Visual Studio in India",
    description:
      "Learn how Shootmybus plans, directs, and produces cinematic bus photography and commercial coach films tailored for Indian travel operators and bodybuilders.",
    path: "/about",
    image: "/Images/17.PNG",
    imageAlt: "About Shootmybus Bus Visual Production Studio",
    ogType: "website",
  },
  blog: {
    title: "Shootmybus Blog | Bus Photography, Reels & Fleet Marketing Guides",
    description:
      "Read practical guides on luxury bus photography, cinematic Instagram reels, aerial drone shoots, highway running shots, and fleet branding in India.",
    path: "/blog",
    image: "/Images/IMG_2833.JPG.jpeg",
    imageAlt: "Shootmybus Bus Photography and Production Blog",
    ogType: "website",
  },
  contact: {
    title: "Book a Bus Photoshoot or Video Production | Contact Shootmybus",
    description:
      "Get in touch with Shootmybus to book luxury bus reels, drone videography, running shots, or commercial fleet photography anywhere in India.",
    path: "/contact",
    image: "/Images/IMG_2835.JPG.jpeg",
    imageAlt: "Book a Bus Photoshoot with Shootmybus",
    ogType: "website",
  },
  notFound: {
    title: "Page Not Found | Shootmybus",
    description: "The requested page could not be found on Shootmybus.",
    path: "/404",
    image: "/Images/og-preview.jpg",
    imageAlt: "Shootmybus Professional Bus Photography",
    ogType: "website",
    robots: "noindex, nofollow",
  },
};

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_SEO.brandName,
    url: SITE_SEO.siteUrl,
    logo: toAbsoluteUrl(SITE_SEO.logoUrl),
    email: SITE_CONTACT.email.display,
    telephone: "+91-86902-60722",
    sameAs: [SITE_CONTACT.instagram.href, SITE_CONTACT.youtube.href],
    description:
      "Dedicated automotive visual studio specializing in commercial bus photography, cinematic coach reels, drone shoots, and running shots across India.",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_SEO.brandName,
    url: SITE_SEO.siteUrl,
    inLanguage: "en-IN",
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

