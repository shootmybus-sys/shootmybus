import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import SeoHead from "../Component/SeoHead/SeoHead";
import Experience from "../Component/Experience/Experience";
import Process from "../Component/Process/Process";
import WhyChooseUs from "../Component/WhyChooseUs/WhyChooseUs";
import Portfolio from "../Component/Portfolio/Portfolio";
import Contact from "../Component/Contact/Contact";
import {
  PAGE_SEO,
  SITE_SEO,
  buildBreadcrumbSchema,
  toAbsoluteUrl,
} from "../config/seoConfig";
import "./Blog/BlogPage.css";
import "./SubPages.css";

export function AboutPage() {
  const schemas = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: PAGE_SEO.about.title,
        description: PAGE_SEO.about.description,
        url: toAbsoluteUrl("/about"),
        mainEntity: {
          "@type": "Organization",
          name: SITE_SEO.brandName,
          url: SITE_SEO.siteUrl,
        },
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
    []
  );

  return (
    <>
      <SeoHead
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        path={PAGE_SEO.about.path}
        image={PAGE_SEO.about.image}
        schemas={schemas}
      />

      <main className="smb-subpage-shell smb-subpage-shell--about">
        <div className="smb-subpage-banner">
          <nav className="smb-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">About</span>
          </nav>
          <span className="smb-subpage-eyebrow">ABOUT SHOOTMYBUS</span>
          <h1 className="smb-subpage-h1">
            Dedicated Automotive Visual Storytelling Built Around Luxury Coaches
          </h1>
          <p className="smb-subpage-lead">
            From planning expressway camera angles to delivering colour-graded stills and social
            reels across India, Shootmybus brings specialized craft to every fleet shoot.
          </p>
        </div>

        <WhyChooseUs />
        <Experience />
        <Process />

        <section className="smb-subpage-cta-band" aria-label="Explore next steps">
          <div className="smb-subpage-cta-card">
            <div>
              <h2>Explore Our Production Services &amp; Guides</h2>
              <p>
                Review what each package includes or read our India-focused guides for fleet
                launches, sleeper interiors, and drone shoots.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link to="/services" className="smb-subpage-btn-primary">
                View Services <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/blog" className="smb-subpage-btn-outline">
                Read Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function PortfolioPage() {
  const schemas = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: PAGE_SEO.portfolio.title,
        description: PAGE_SEO.portfolio.description,
        url: toAbsoluteUrl("/portfolio"),
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
      ]),
    ],
    []
  );

  return (
    <>
      <SeoHead
        title={PAGE_SEO.portfolio.title}
        description={PAGE_SEO.portfolio.description}
        path={PAGE_SEO.portfolio.path}
        image={PAGE_SEO.portfolio.image}
        schemas={schemas}
      />

      <main className="smb-subpage-shell smb-subpage-shell--portfolio">
        <div className="smb-subpage-banner">
          <nav className="smb-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Portfolio</span>
          </nav>
          <span className="smb-subpage-eyebrow">FEATURED GALLERY</span>
          <h1 className="smb-subpage-h1">
            Luxury Bus Exteriors, Sleeper Cabins &amp; Highway Production Highlights
          </h1>
          <p className="smb-subpage-lead">
            Click any frame below to inspect lighting, livery balance, cabin ambiance, and aerial
            compositions captured across recent luxury fleet showcases.
          </p>
        </div>

        <Portfolio />

        <section className="smb-subpage-cta-band" aria-label="Book portfolio shoot">
          <div className="smb-subpage-cta-card">
            <div>
              <h2>Want Your Coaches Featured Like This?</h2>
              <p>
                Plan your upcoming coach delivery or flagship corridor production with Shootmybus.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link to="/contact" className="smb-subpage-btn-primary">
                Book Your Shoot <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/services" className="smb-subpage-btn-outline">
                See Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function ContactPage() {
  const schemas = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: PAGE_SEO.contact.title,
        description: PAGE_SEO.contact.description,
        url: toAbsoluteUrl("/contact"),
      },
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
    []
  );

  return (
    <>
      <SeoHead
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        path={PAGE_SEO.contact.path}
        image={PAGE_SEO.contact.image}
        schemas={schemas}
      />

      <main className="smb-subpage-shell">
        <div className="smb-subpage-banner">
          <nav className="smb-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Contact</span>
          </nav>
          <span className="smb-subpage-eyebrow">BOOK A PRODUCTION</span>
          <h1 className="smb-subpage-h1">Schedule Your Bus Photography or Reel Shoot</h1>
          <p className="smb-subpage-lead">
            Share your preferred service, fleet size, city or highway corridor, and launch timeline
            below.
          </p>
        </div>

        <Contact />
      </main>
    </>
  );
}

