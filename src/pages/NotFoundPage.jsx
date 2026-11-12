import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Bus } from "lucide-react";
import SeoHead from "../Component/SeoHead/SeoHead";
import { PAGE_SEO } from "../config/seoConfig";
import "./SubPages.css";

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title={PAGE_SEO.notFound.title}
        description={PAGE_SEO.notFound.description}
        path={PAGE_SEO.notFound.path}
        image={PAGE_SEO.notFound.image}
        robots={PAGE_SEO.notFound.robots}
      />

      <main className="smb-subpage-shell smb-notfound">
        <div className="smb-subpage-container smb-notfound-inner">
          <div className="smb-notfound-route" aria-hidden="true">
            <span className="smb-notfound-code">404</span>
            <span className="smb-notfound-track">
              <span className="smb-notfound-bus-badge">
                <Bus className="smb-notfound-bus-icon" />
              </span>
              <span className="smb-notfound-road" />
              <span className="smb-notfound-stop" />
            </span>
          </div>

          <span className="smb-subpage-eyebrow">OOPS! WRONG TURN</span>
          <h1 className="smb-subpage-h1">404 &ndash; Page Not Found</h1>
          <p className="smb-subpage-lead">
            Looks like this journey has taken an unexpected turn. The page
            you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>

          <div className="smb-notfound-actions">
            <Link to="/" className="smb-subpage-btn-primary">
              <ArrowLeft size={16} aria-hidden="true" /> Back to Home
            </Link>
            <Link to="/services" className="smb-subpage-btn-outline">
              Explore Our Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

