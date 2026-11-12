import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
          <span className="smb-subpage-eyebrow">404 ERROR</span>
          <h1 className="smb-subpage-h1">This Page Could Not Be Found</h1>
          <p className="smb-subpage-lead">
            The route or article you were looking for may have moved. Explore our bus photography
            services, portfolio showcase, or production guides below.
          </p>
          <div className="smb-notfound-actions">
            <Link to="/" className="smb-subpage-btn-primary">
              <ArrowLeft size={16} aria-hidden="true" /> Back to Home
            </Link>
            <Link to="/services" className="smb-subpage-btn-outline">
              View Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/blog" className="smb-subpage-btn-outline">
              Read Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

