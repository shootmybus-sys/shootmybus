// Centralized editable configuration for Shootmybus contact details, social links,
// backend form submission endpoint, trusted brand marquee, and editable draft testimonials.

export const SITE_CONTACT = {
  formEndpoint: "", // Optional backend/Formspree URL for live form submissions
  whatsapp: {
    label: "WhatsApp Contact",
    handle: "Configure WhatsApp in src/config/contactConfig.js",
    href: "", // e.g. "https://wa.me/91XXXXXXXXXX"
  },
  email: {
    label: "Email Contact",
    handle: "Configure email in src/config/contactConfig.js",
    href: "", // e.g. "mailto:hello@shootmybus.in"
  },
  instagram: {
    label: "Instagram",
    handle: "Configure Instagram in src/config/contactConfig.js",
    href: "", // e.g. "https://instagram.com/shootmybus"
  },
  youtube: {
    label: "YouTube",
    handle: "Configure YouTube in src/config/contactConfig.js",
    href: "", // e.g. "https://youtube.com/@shootmybus"
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

// Editable testimonial drafts — clearly marked as drafts until approved feedback is provided by each client.
export const TESTIMONIALS_DATA = [
  {
    id: "draft-ram-dalal",
    brandName: "Ram Dalal",
    category: "Fleet Operator",
    isDraft: true,
    statusLabel: "Draft Testimonial",
    focusTag: "Professional Bus Photography & Visual Presentation",
    draftSummary:
      "Editable draft showcase highlighting professional bus photography, crisp exterior visual presentation, and cinematic coach shots. Replace with verified feedback upon client approval.",
  },
  {
    id: "draft-zingbus",
    brandName: "Zingbus",
    category: "Intercity Travel Brand",
    isDraft: true,
    statusLabel: "Draft Testimonial",
    focusTag: "Creative Bus Visuals & Cinematic Storytelling",
    draftSummary:
      "Editable draft showcase focusing on creative bus visuals, cinematic storytelling, and end-to-end commercial film production. Replace with verified feedback upon client approval.",
  },
  {
    id: "draft-vrl-travels",
    brandName: "VRL Travels",
    category: "Transport Partner",
    isDraft: true,
    statusLabel: "Draft Testimonial",
    focusTag: "Photography Quality & Attention to Detail",
    draftSummary:
      "Editable draft showcase centered on commercial bus photography quality, attention to fleet detail, and streamlined production experience. Replace with verified feedback upon client approval.",
  },
];
