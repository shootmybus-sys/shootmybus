import React from "react";
import { Bus, Camera, Quote } from "lucide-react";
import {
  TESTIMONIALS_DATA,
  TRUSTED_BRANDS_ROW_ONE,
  TRUSTED_BRANDS_ROW_TWO,
  TRUST_HIGHLIGHT,
} from "../../config/contactConfig";
import { useInView } from "../../hooks/useInView";
import "./Testimonials.css";

function BrandMarqueeRow({ brands, direction }) {
  return (
    <div className="smb-brand-marquee-viewport">
      <div className={`smb-brand-marquee-track smb-brand-marquee-track--${direction}`}>
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="smb-brand-marquee-group"
            aria-hidden={copyIndex === 1}
          >
            {brands.map((brand) => (
              <div key={`${copyIndex}-${brand}`} className="smb-brand-pill">
                <span className="smb-brand-dot" aria-hidden="true" />
                <span className="smb-brand-name">{brand}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const [sectionRef, isInView] = useInView(0.14);

  return (
    <div ref={sectionRef} className="smb-testimonials">
      <div className="smb-testimonials-container">
        <div className={`smb-testi-top-row${isInView ? " is-inview" : ""}`}>
          <div className="smb-testi-header">
            <p className="smb-testi-eyebrow">TRUSTED BY BUS OPERATORS</p>
            <h2 className="smb-testi-heading">
              The Names Behind{" "}
              <span className="smb-testi-highlight">Our Journey.</span>
            </h2>
            <p className="smb-testi-subtitle">
              We&apos;ve had the opportunity to capture buses and create cinematic
              visuals for some recognized names in the Indian transport industry.
            </p>
          </div>

          <div className="smb-trust-highlight-card" aria-label="400+ Buses Captured">
            <span className="smb-trust-icon-box" aria-hidden="true">
              <Camera className="smb-trust-icon" />
            </span>
            <div className="smb-trust-text">
              <span className="smb-trust-stat">{TRUST_HIGHLIGHT.stat}</span>
              <span className="smb-trust-label">{TRUST_HIGHLIGHT.label}</span>
            </div>
          </div>
        </div>

        <div
          className={`smb-brand-marquee-section${isInView ? " is-inview" : ""}`}
          aria-label="Featured Indian bus operators and transport brands"
        >
          <BrandMarqueeRow brands={TRUSTED_BRANDS_ROW_ONE} direction="left" />
          <BrandMarqueeRow brands={TRUSTED_BRANDS_ROW_TWO} direction="right" />
        </div>

        <div
          className={`smb-testi-cards-grid${isInView ? " is-inview" : ""}`}
          aria-label="Featured client draft testimonials"
        >
          {TESTIMONIALS_DATA.map((item) => (
            <article key={item.id} className="smb-testi-card">
              <div className="smb-testi-card-top">
                <span className="smb-testi-quote-icon-box" aria-hidden="true">
                  <Quote className="smb-testi-quote-icon" />
                </span>
                {item.isDraft && (
                  <span className="smb-testi-draft-badge">
                    {item.statusLabel}
                  </span>
                )}
              </div>

              <p className="smb-testi-focus">{item.focusTag}</p>
              <p className="smb-testi-quote">{item.draftSummary}</p>

              <div className="smb-testi-author">
                <span className="smb-testi-avatar" aria-hidden="true">
                  <Bus className="smb-testi-avatar-icon" />
                </span>
                <div className="smb-testi-author-info">
                  <h3 className="smb-testi-name">{item.brandName}</h3>
                  <p className="smb-testi-company">{item.category}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
