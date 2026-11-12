import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import SeoHead from "../../Component/SeoHead/SeoHead";
import { useInView } from "../../hooks/useInView";
import {
  PAGE_SEO,
  SITE_SEO,
  buildBreadcrumbSchema,
  toAbsoluteUrl,
} from "../../config/seoConfig";
import "../Blog/BlogPage.css";
import "./ServicesPage.css";

const SERVICES_DETAIL = [
  {
    number: "01",
    title: "Professional Bus Reels",
    description:
      "Vertical 9:16 storytelling engineered specifically for Instagram Reels, YouTube Shorts, and travel launch announcements. From stabilized door-entry walkthroughs of plush sleeper cabins to beat-synced exterior transitions, we turn new deliveries and flagship routes into high-engagement digital films.",
    highlights: [
      "Gimbal-stabilized interior and exterior motion framing",
      "Vertical 9:16 social edits plus clean widescreen master cuts",
      "Rich sound design capturing real cabin and coach ambience",
    ],
    imageSrc: "/Images/17.PNG",
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
      "Expansive aerial cinematography that showcases your coach conquering winding mountain ghats, coastal bridges, and six-lane Indian expressways. Every flight path is planned for crisp convoy alignment, clean top-down symmetry, and dramatic golden-hour depth.",
    highlights: [
      "Low-altitude lead chases and sweeping coastal or ghat reveals",
      "Synchronized multi-bus fleet formation framing from above",
      "Colour-matched aerial footage integrated with ground cameras",
    ],
    imageSrc: "/Images/20.PNG",
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
    imageSrc: "/Images/IMG_2831.JPG.jpeg",
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
    imageSrc: "/Images/IMG_2832.JPG.jpeg",
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt:
      "Commercial exterior bus photography of twin MG Tigra coaches for Shree Ramkrupa Travels",
    guideSlug: "/blog/bus-photography-india-complete-guide",
  },
];

function ServiceDetailRow({ service, index }) {
  const [rowRef, isInView] = useInView(0.14);
  const isReversed = index % 2 === 1;

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
          loading={index === 0 ? "eager" : "lazy"}
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
          <Link to="/contact" className="smb-srv-btn-primary">
            Book Your Shoot <ArrowRight size={16} aria-hidden="true" />
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
            <span className="smb-srvpage-eyebrow">WHAT WE OFFER</span>
            <h1 className="smb-srvpage-h1">
              Professional Bus Photography &amp; Film Production Services
            </h1>
            <p className="smb-srvpage-lead">
              Dedicated production workflows crafted for Indian intercity operators, luxury charter
              fleets, and coach bodybuilders—combining clean ground photography, stabilized vertical
              reels, aerial drones, and expressway running shots.
            </p>
          </header>

          <div className="smb-srvpage-list">
            {SERVICES_DETAIL.map((service, index) => (
              <ServiceDetailRow key={service.number} service={service} index={index} />
            ))}
          </div>

          <section className="smb-srvpage-footer-cta" aria-label="Book production">
            <div>
              <h2>Launching a New Coach or Refreshing Your Fleet Visuals?</h2>
              <p>
                Tell us your coach configuration, operating city, and preferred rollout schedule—we
                will plan every shot from static interior comfort to golden-hour running sequences.
              </p>
            </div>
            <Link to="/contact" className="smb-cta-pill-btn">
              Contact Shootmybus <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

