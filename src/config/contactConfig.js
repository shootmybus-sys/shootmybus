// Centralized editable configuration for Shootmybus contact details, social links,
// backend form submission endpoint, and placeholder testimonials.
// Replace empty values with verified production details when ready.

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

// Placeholder testimonials — replace with actual approved client feedback and optional verified ratings (1–5).
export const TESTIMONIALS_DATA = [
  {
    id: "placeholder-1",
    quote:
      "Placeholder client testimonial — replace this text with verified feedback from a Shootmybus fleet partner once approved for publication.",
    authorName: "Client Name (Placeholder)",
    company: "Bus Operator / Travel Brand",
    profileImage: "",
    rating: null,
  },
  {
    id: "placeholder-2",
    quote:
      "Placeholder client testimonial — add a real client quote describing their experience with Shootmybus reels, drone shoots, or photography.",
    authorName: "Client Name (Placeholder)",
    company: "Luxury Coach Fleet",
    profileImage: "",
    rating: null,
  },
  {
    id: "placeholder-3",
    quote:
      "Placeholder client testimonial — update author name, company identity, optional avatar, and verified rating in src/config/contactConfig.js.",
    authorName: "Client Name (Placeholder)",
    company: "Transport Partner",
    profileImage: "",
    rating: null,
  },
];

