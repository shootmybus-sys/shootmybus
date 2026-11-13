import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import SeoHead from "../../Component/SeoHead/SeoHead";
import { SITE_CONTACT } from "../../config/contactConfig";
import {
  SITE_SEO,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "../../config/seoConfig";
import "./LegalPage.css";

export default function LegalPageLayout({
  eyebrow = "LEGAL INFORMATION",
  title,
  lastUpdated = "November 2026",
  intro,
  toc = [],
  seo,
  children,
}) {
  const schemas = useMemo(() => {
    if (!seo) return [];
    return [
      buildWebPageSchema({
        title: seo.title,
        description: seo.description,
        path: seo.path,
      }),
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: title, path: seo.path },
      ]),
    ];
  }, [seo, title]);

  return (
    <>
      {seo && (
        <SeoHead
          title={seo.title}
          description={seo.description}
          path={seo.path}
          image={seo.image || SITE_SEO.defaultImage}
          imageAlt={seo.imageAlt || title}
          ogType="website"
          schemas={schemas}
        />
      )}

      <main className="smb-legal-page">
        <div className="smb-legal-shell">
          <div className="smb-legal-back-nav">
            <Link to="/" className="smb-legal-back-link">
              <ArrowLeft size={16} aria-hidden="true" /> Back to Home
            </Link>
          </div>

          <header className="smb-legal-header">
            <span className="smb-legal-eyebrow">{eyebrow}</span>
            <h1 className="smb-legal-title">{title}</h1>
            <p className="smb-legal-meta">Last Updated: {lastUpdated} &bull; Shootmybus Official Policy</p>
          </header>

          <div className="smb-legal-grid">
            {toc.length > 0 && (
              <aside className="smb-legal-sidebar" aria-label="Table of contents">
                <h2 className="smb-legal-toc-title">On This Page</h2>
                <nav>
                  <ul className="smb-legal-toc-list">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="smb-legal-toc-link">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            <div className="smb-legal-content">
              {intro && <p className="smb-legal-intro">{intro}</p>}
              {children}

              <div className="smb-legal-callout">
                <h3>Questions or Inquiries Regarding This Policy?</h3>
                <p>
                  Because Shootmybus operates with direct WhatsApp inquiry workflows and custom on-location shoot agreements, our team is always available to clarify any terms before your photoshoot date.
                </p>
                <div className="smb-legal-contact-links">
                  <a
                    href={SITE_CONTACT.whatsapp.href}
                    className="smb-legal-pill-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={15} /> WhatsApp: {SITE_CONTACT.whatsapp.display}
                  </a>
                  <a
                    href={SITE_CONTACT.email.href}
                    className="smb-legal-pill-link"
                  >
                    <Mail size={15} /> Email: {SITE_CONTACT.email.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
