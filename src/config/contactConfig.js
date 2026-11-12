// Centralized editable configuration for Shootmybus contact details, social links,
// backend form submission endpoint, trusted brand marquee, and editable draft testimonials.

export const SITE_CONTACT = {
  formEndpoint: "", // Optional backend/Formspree URL for live form submissions
  phone: {
    label: "Phone",
    display: "86902 60722",
    handle: "+91 86902 60722",
    href: "tel:+918690260722",
  },
  whatsapp: {
    label: "WhatsApp",
    display: "86902 60722",
    number: "918690260722",
    handle: "86902 60722",
    href: "https://wa.me/918690260722",
  },
  email: {
    label: "Email",
    display: "shootmybus@gmail.com",
    handle: "shootmybus@gmail.com",
    href: "mailto:shootmybus@gmail.com",
  },
  instagram: {
    label: "Instagram",
    handle: "@shootmybus",
    href: "https://www.instagram.com/shootmybus",
  },
  youtube: {
    label: "YouTube",
    handle: "@buses_lover_rakesh",
    href: "https://www.youtube.com/@buses_lover_rakesh",
  },
};

export const TRUST_HIGHLIGHT = {
  stat: "400+",
  label: "BUSES CAPTURED",
};

// Clean text-based operator brand list (replace with verified image logos in public/Logo/ if provided later).
export const TRUSTED_BRANDS_ROW_ONE = [
  "Ram Dalal",
  "Tegra Express",
  "VRL Travels",
  "Koolkarsh",
  "Baba Holidays",
  "Zingbus",
];

export const TRUSTED_BRANDS_ROW_TWO = [
  "Synatyautomotive",
  "Jakhar Travels",
  "Shrinath Solitaire",
  "Falcon Travels",
  "Rajan Travels",
  "Palbus Travels",
];

// Proposed review copies — keep `approved: false` and `ratingConfirmed: false`
// until the respective clients approve the wording and confirm their rating.
export const TESTIMONIALS_DATA = [
  {
    id: "ram-dalal",
    brandName: "Ram Dalal",
    category: "Fleet Operator",
    isVerifiedClient: true,
    approved: false,
    approvalStatus: "awaiting_client_approval",
    rating: null,
    ratingConfirmed: false,
    heading: "Professional Photography & Visual Excellence",
    quote:
      "An impressive approach to bus photography with exceptional attention to detail. The cinematic shots, creative compositions and professional presentation bring out the true beauty and identity of every bus. A great visual experience from start to finish.",
  },
  {
    id: "zingbus",
    brandName: "Zingbus",
    category: "Intercity Travel Brand",
    isVerifiedClient: true,
    approved: false,
    approvalStatus: "awaiting_client_approval",
    rating: null,
    ratingConfirmed: false,
    heading: "Creative Vision & Cinematic Storytelling",
    quote:
      "Outstanding creativity and a fresh perspective on bus photography. The cinematic visuals, thoughtful compositions and professional storytelling create a distinctive visual experience that makes every frame memorable.",
  },
  {
    id: "vrl-travels",
    brandName: "VRL Travels",
    category: "Transport Partner",
    isVerifiedClient: true,
    approved: false,
    approvalStatus: "awaiting_client_approval",
    rating: null,
    ratingConfirmed: false,
    heading: "Professional Quality & Attention to Detail",
    quote:
      "Beautifully captured bus photography with a strong focus on visual quality, composition and detail. The professional presentation and cinematic approach make the overall work stand out.",
  },
];
