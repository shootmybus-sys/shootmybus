import { SITE_CONTACT } from "./contactConfig";

export const SITE_SEO = {
  brandName: "Shootmybus",
  tagline: "Bus Photography & Cinematic Bus Videography in India",
  // Single configurable production origin (update when deploying final domain)
  siteUrl: "https://www.shootmybus.in",
  defaultImage: "/Images/hero-bus.jpg",
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
    title: "Shootmybus | Bus Photography & Cinematic Bus Videography in India",
    description:
      "Shootmybus specializes in luxury bus photography, cinematic bus reels, aerial drone shoots, and dynamic running shots for travel operators and coach brands across India.",
    path: "/",
    image: "/Images/hero-bus.jpg",
    ogType: "website",
  },
  services: {
    title: "Bus Photography, Reels & Drone Shoot Services | Shootmybus India",
    description:
      "Explore Shootmybus production services across India: Professional Bus Reels, Cinematic Drone Shoots, Highway Running Shots, and Commercial Bus Photography.",
    path: "/services",
    image: "/Images/20.PNG",
    ogType: "website",
  },
  portfolio: {
    title: "Luxury Bus Photography & Reel Portfolio | Shootmybus India",
    description:
      "View Shootmybus luxury coach exteriors, Volvo sleeper interiors, aerial drone perspectives, and highway running photography captured for Indian fleet brands.",
    path: "/portfolio",
    image: "/Images/IMG_2832.JPG.jpeg",
    ogType: "website",
  },
  about: {
    title: "About Shootmybus | Dedicated Coach & Fleet Visual Studio in India",
    description:
      "Learn how Shootmybus plans, directs, and produces cinematic bus photography and commercial coach films tailored for Indian travel operators and bodybuilders.",
    path: "/about",
    image: "/Images/17.PNG",
    ogType: "website",
  },
  blog: {
    title: "Shootmybus Blog | Bus Photography, Reels & Fleet Marketing Guides",
    description:
      "Read practical guides on luxury bus photography, cinematic Instagram reels, aerial drone shoots, highway running shots, and fleet branding in India.",
    path: "/blog",
    image: "/Images/IMG_2833.JPG.jpeg",
    ogType: "website",
  },
  contact: {
    title: "Book a Bus Photoshoot or Video Production | Contact Shootmybus",
    description:
      "Get in touch with Shootmybus to book luxury bus reels, drone videography, running shots, or commercial fleet photography anywhere in India.",
    path: "/contact",
    image: "/Images/IMG_2835.JPG.jpeg",
    ogType: "website",
  },
  notFound: {
    title: "Page Not Found | Shootmybus",
    description: "The requested page could not be found on Shootmybus.",
    path: "/404",
    image: "/Images/hero-bus.jpg",
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

