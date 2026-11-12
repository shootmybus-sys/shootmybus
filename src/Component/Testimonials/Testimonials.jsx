import React from "react";
import { BadgeCheck, Bus, Camera, CheckCircle2, Quote, Star } from "lucide-react";
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
          aria-label="Featured client testimonials"
        >
          {TESTIMONIALS_DATA.map((item) => {
            const confirmedRating =
              item.ratingConfirmed && typeof item.rating === "number"
                ? Math.min(5, Math.max(0, item.rating))
                : 0;

            return (
              <article key={item.id} className="smb-testi-card">
                <div className="smb-testi-card-top">
                  <span className="smb-testi-quote-icon-box" aria-hidden="true">
                    <Quote className="smb-testi-quote-icon" />
                  </span>

                  {item.isVerifiedClient && (
                    <span className="smb-testi-verified-badge">
                      <CheckCircle2
                        className="smb-testi-badge-icon"
                        aria-hidden="true"
                      />
                      Verified Client
                    </span>
                  )}
                </div>

                {confirmedRating > 0 && (
                  <div
                    className="smb-testi-rating-row"
                    aria-label={`${confirmedRating.toFixed(1)} out of 5 stars`}
                  >
                    <div className="smb-testi-stars" aria-hidden="true">
                      {Array.from({ length: 5 }, (_, idx) => (
                        <Star
                          key={idx}
                          className={`smb-testi-star${idx < confirmedRating ? " is-filled" : ""
                            }`}
                        />
                      ))}
                    </div>
                    <span className="smb-testi-rating-score">
                      {confirmedRating.toFixed(1)}
                    </span>
                  </div>
                )}

                <h3 className="smb-testi-card-heading">{item.heading}</h3>
                <p className="smb-testi-quote">&ldquo;{item.quote}&rdquo;</p>

                <div className="smb-testi-author">
                  <div className="smb-testi-author-left">
                    <span className="smb-testi-avatar" aria-hidden="true">
                      <Bus className="smb-testi-avatar-icon" />
                    </span>
                    <div className="smb-testi-author-info">
                      <p className="smb-testi-name">{item.brandName}</p>
                      <p className="smb-testi-company">{item.category}</p>
                    </div>
                  </div>

                  {item.approved ? (
                    <span className="smb-testi-approved-badge">
                      <BadgeCheck
                        className="smb-testi-badge-icon"
                        aria-hidden="true"
                      />
                      Approved
                    </span>

                  ) : (
                    <span className="smb-testi-pending-note">
                      Approved
                    </span>
                  )}

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
