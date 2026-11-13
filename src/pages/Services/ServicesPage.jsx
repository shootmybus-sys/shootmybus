import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import SeoHead from "../../Component/SeoHead/SeoHead";
import { useInView } from "../../hooks/useInView";
import {
  PAGE_SEO,
  SITE_SEO,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  toAbsoluteUrl,
} from "../../config/seoConfig";
import "../Blog/BlogPage.css";
import "./ServicesPage.css";

const SERVICES_GALLERY = [
  {
    id: "gallery-tigra-front",
    src: "/Images/IMG_2832.webp",
    width: 1600,
    height: 900,
    alt: "Twin MG Tigra luxury buses front-angle exterior showcase",
    caption: "Commercial Fleet Exterior Portrait",
  },
  {
    id: "gallery-volvo-aerial",
    src: "/Images/20.webp",
    width: 1600,
    height: 900,
    alt: "Elevated aerial view of twin Tegra Express Volvo 9600s coaches",
    caption: "Aerial Convoy Perspective",
  },
  {
    id: "gallery-sleeper-cabin",
    src: "/Images/4.webp",
    width: 1600,
    height: 900,
    alt: "Warm illuminated Tegra Express Volvo sleeper berth interior",
    caption: "Sleeper Berth Interior Lighting",
  },
  {
    id: "gallery-tata-profile",
    src: "/Images/IMG_2834.webp",
    width: 1600,
    height: 900,
    alt: "Tata BS6 13.5m luxury coach full side profile photography",
    caption: "Side-Profile Coach Craftsmanship",
  },
];

const SERVICES_DETAIL = [
  {
    number: "01",
    title: "Professional Bus Reels",
    description:
      "Vertical 9:16 storytelling engineered specifically for Instagram Reels, YouTube Shorts, and travel launch announcements. From stabilized walkthroughs of plush sleeper cabins to beat-synced exterior transitions, we turn new deliveries and flagship routes into memorable films.",
    highlights: [
      "Gimbal-stabilized interior and exterior motion framing",
      "Vertical 9:16 social edits plus clean widescreen master cuts",
      "Rich sound design capturing real cabin and coach ambience",
    ],
    imageSrc: "/Images/17.webp",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt:
      "Warm ambient aisle lighting inside a luxury Volvo sleeper coach captured for vertical reels",
    guideSlug: "/blog/how-to-shoot-cinematic-bus-reels-india",
  },
  {
    number: "02",
    title: "Cinematic Drone Shoots",
    description:
      "Expansive aerial cinematography that showcases your coach conquering winding mountain ghats, coastal bridges, and six-lane Indian expressways. Every flight path is planned for crisp convoy alignment, top-down symmetry, and dramatic golden-hour depth.",
    highlights: [
      "Low-altitude lead chases and sweeping coastal or ghat reveals",
      "Synchronized multi-bus fleet formation framing from above",
      "Colour-matched aerial footage integrated with ground cameras",
    ],
    imageSrc: "/Images/20.webp",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt:
      "Elevated aerial exterior view of twin Tegra Express Volvo 9600s luxury coaches",
    guideSlug: "/blog/drone-videography-for-luxury-buses-india",
  },
  {
    number: "03",
    title: "Running Shots",
    description:
      "Dynamic pace-car rolling photography and tracking shots captured at cruising speed on open highways. Your luxury coach bodywork, headlamps, and brand livery stay razor-sharp against smooth directional wheel and asphalt motion blur.",
    highlights: [
      "Tack-sharp livery lettering, grill work, and alloy wheel motion",
      "Disciplined pace-car coordination on early-morning expressways",
      "Built for website hero banners, print brochures, and route launches",
    ],
    imageSrc: "/Images/IMG_2831.webp",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt:
      "Luxury MG Tigra Tata BS6 13.5m coaches framed along open asphalt corridor",
    guideSlug: "/blog/running-shots-luxury-coaches-highway-photography",
  },
  {
    number: "04",
    title: "Professional Bus Photography",
    description:
      "Comprehensive commercial still photography for fleet operators, Volvo/BharatBenz/Scania deliveries, and custom coachbuilders. We document exterior stance, LED light signatures, cockpit ergonomics, and warm sleeper berth comfort without harsh glare.",
    highlights: [
      "Full exterior three-quarter, side profile, and fleet symmetry sets",
      "Balanced twilight cabin lighting for sleeper berths and seating",
      "Print-ready and web-optimized deliverables for portals and WhatsApp",
    ],
    imageSrc: "/Images/IMG_2832.webp",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt:
      "Commercial exterior bus photography of twin MG Tigra coaches for Shree Ramkrupa Travels",
    guideSlug: "/blog/bus-photography-india-complete-guide",
  },
];

const SERVICES_FAQS = [
  {
    question: "Where can I book professional bus photography in India?",
    answer:
      "You can book professional bus photography in India directly through Shootmybus at shootmybus.com/contact, via WhatsApp or phone on +91 86902 60722, or by emailing shootmybus@gmail.com.",
  },
  {
    question: "Who provides cinematic bus reels?",
    answer:
      "Shootmybus produces cinematic bus reels tailored for intercity operators, sleeper coach brands, and travel companies looking to showcase exteriors, cabins, and highway motion on Instagram and YouTube.",
  },
  {
    question: "Can I book drone photography for my bus?",
    answer:
      "Yes. Shootmybus offers bus drone photography and aerial videography to capture highway tracking sequences, depot fleet lineups, and wide-angle scenic coach visuals.",
  },
  {
    question: "Do you provide running bus photography?",
    answer:
      "Yes. Our team captures dynamic running bus photography and rolling highway shots designed to highlight road presence, livery design, and motion.",
  },
  {
    question: "How can bus operators book a professional photoshoot?",
    answer:
      "Bus operators can submit their name, contact details, city, preferred shoot date, and required service on our Book Your Shoot page (/contact) or message us on WhatsApp at +91 86902 60722 to coordinate the shoot schedule.",
  },
  {
    question: "Which cities in India do you serve?",
    answer:
      "Shootmybus operates across India, traveling on-location to fleet depots, highway corridors, and bus delivery hubs nationwide based on your route and rollout schedule.",
  },
];

function ServiceDetailRow({ service, index }) {
  const [rowRef, isInView] = useInView(0.14);
  const isReversed = index % 2 === 1;
  const bookHref = `/contact?service=${encodeURIComponent(service.title)}`;

  return (
    <article
      ref={rowRef}
      className={`smb-srv-row ${isReversed ? "is-reversed" : ""} ${
        isInView ? "is-inview" : ""
      }`}
    >
      <div className="smb-srv-media">
        <span className="smb-srv-index-badge">SERVICE {service.number}</span>
        <img
          src={service.imageSrc}
          alt={service.imageAlt}
          width={service.imageWidth}
          height={service.imageHeight}
          loading="lazy"
        />
      </div>

      <div className="smb-srv-content">
        <span className="smb-srv-number">{service.number}.</span>
        <h2 className="smb-srv-title">{service.title}</h2>
        <p className="smb-srv-desc">{service.description}</p>

        <ul className="smb-srv-highlights">
          {service.highlights.map((item) => (
            <li key={item}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="smb-srv-actions">
          <Link to={bookHref} className="smb-srv-btn-primary">
            Book This Service <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to={service.guideSlug} className="smb-srv-btn-link">
            Read Production Guide <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isLightboxOpen = selectedIndex !== null;
  const activeGalleryItem = isLightboxOpen
    ? SERVICES_GALLERY[selectedIndex]
    : null;

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + SERVICES_GALLERY.length) % SERVICES_GALLERY.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % SERVICES_GALLERY.length
    );
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleClose();
      else if (event.key === "ArrowLeft") handlePrev();
      else if (event.key === "ArrowRight") handleNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, handleClose, handlePrev, handleNext]);

  const schemas = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Commercial Bus Photography & Video Production Services",
        provider: {
          "@type": "Organization",
          name: SITE_SEO.brandName,
          url: SITE_SEO.siteUrl,
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        url: toAbsoluteUrl("/services"),
        description: PAGE_SEO.services.description,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Shootmybus Production Services",
          itemListElement: SERVICES_DETAIL.map((srv) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: srv.title,
              description: srv.description,
            },
          })),
        },
      },
      buildWebPageSchema(PAGE_SEO.services),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: SERVICES_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
    ],
    []
  );

  return (
    <>
      <SeoHead
        title={PAGE_SEO.services.title}
        description={PAGE_SEO.services.description}
        path={PAGE_SEO.services.path}
        image={PAGE_SEO.services.image}
        schemas={schemas}
      />

      <main className="smb-srvpage">
        <div className="smb-srvpage-container">
          <nav className="smb-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Services</span>
          </nav>

          <header className="smb-srvpage-header">
            <span className="smb-srvpage-eyebrow">OUR SERVICES</span>
            <h1 className="smb-srvpage-h1">
              Professional Bus Photography &amp; Film Production
            </h1>
            <p className="smb-srvpage-lead">
              From cinematic bus reels to breathtaking aerial perspectives, we
              capture every journey through our lens.
            </p>
          </header>

          <section
            className="smb-srv-gallery-section"
            aria-label="Services showcase gallery"
          >
            <div className="smb-srv-gallery-grid">
              {SERVICES_GALLERY.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className="smb-srv-gallery-card"
                  aria-label={`Preview ${item.caption}`}
                  onClick={() => setSelectedIndex(idx)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="smb-srv-gallery-img"
                  />
                  <span className="smb-srv-gallery-scrim" aria-hidden="true" />
                  <span className="smb-srv-gallery-badge" aria-hidden="true">
                    <Expand size={16} />
                  </span>
                  <span className="smb-srv-gallery-caption">{item.caption}</span>
                </button>
              ))}
            </div>
          </section>

          <div className="smb-srvpage-list">
            {SERVICES_DETAIL.map((service, index) => (
              <ServiceDetailRow
                key={service.number}
                service={service}
                index={index}
              />
            ))}
          </div>

          <section className="smb-srvpage-faq" aria-label="Frequently asked questions">
            <div className="smb-srvpage-faq-header">
              <span className="smb-subpage-eyebrow">COMMON QUESTIONS</span>
              <h2>Bus Photoshoot &amp; Film Production FAQs</h2>
            </div>
            <div className="smb-srvpage-faq-grid">
              {SERVICES_FAQS.map((faq) => (
                <article key={faq.question} className="smb-srvpage-faq-card">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="smb-srvpage-footer-cta" aria-label="Book production">
            <div>
              <h2>Launching a New Coach or Refreshing Your Fleet Visuals?</h2>
              <p>
                Tell us your coach configuration, operating city, and preferred
                rollout schedule—we will plan every shot from static interior
                comfort to golden-hour running sequences.
              </p>
            </div>
            <Link to="/contact" className="smb-cta-pill-btn">
              Book Your Shoot <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </section>
        </div>

        {isLightboxOpen && activeGalleryItem && (
          <div
            className="smb-srv-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Service gallery preview"
            onClick={handleClose}
          >
            <button
              type="button"
              className="smb-srv-lightbox-close"
              aria-label="Close preview"
              onClick={(event) => {
                event.stopPropagation();
                handleClose();
              }}
            >
              <X size={22} />
            </button>

            <button
              type="button"
              className="smb-srv-lightbox-nav smb-srv-lightbox-nav--prev"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <div
              className="smb-srv-lightbox-stage"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeGalleryItem.src}
                alt={activeGalleryItem.alt}
                className="smb-srv-lightbox-img"
              />
              <div className="smb-srv-lightbox-meta">
                <span>{activeGalleryItem.alt}</span>
                <span className="smb-srv-lightbox-count">
                  {selectedIndex + 1} / {SERVICES_GALLERY.length}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="smb-srv-lightbox-nav smb-srv-lightbox-nav--next"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </main>
    </>
  );
}
