import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, User } from "lucide-react";
import { TESTIMONIALS_DATA } from "../../config/contactConfig";
import { useInView } from "../../hooks/useInView";
import "./Testimonials.css";

function Testimonials() {
  const [sectionRef, isInView] = useInView(0.14);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = TESTIMONIALS_DATA.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div ref={sectionRef} className="smb-testimonials">
      <div className="smb-testimonials-container">
        <div className={`smb-testi-header${isInView ? " is-inview" : ""}`}>
          <p className="smb-testi-eyebrow">CLIENT STORIES</p>
          <h2 className="smb-testi-heading">
            Words That{" "}
            <span className="smb-testi-highlight">Drive Us Forward.</span>
          </h2>
          <p className="smb-testi-subtitle">
            Experiences and feedback from the people who trust our work.
          </p>
        </div>

        <div className={`smb-testi-slider${isInView ? " is-inview" : ""}`}>
          <div className="smb-testi-viewport">
            <div
              className="smb-testi-track"
              style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
            >
              {TESTIMONIALS_DATA.map((item) => {
                const hasValidRating =
                  typeof item.rating === "number" && item.rating > 0;
                const starCount = hasValidRating
                  ? Math.min(5, Math.round(item.rating))
                  : 0;

                return (
                  <div key={item.id} className="smb-testi-slide">
                    <article className="smb-testi-card">
                      <span
                        className="smb-testi-quote-icon-box"
                        aria-hidden="true"
                      >
                        <Quote className="smb-testi-quote-icon" />
                      </span>

                      {hasValidRating && (
                        <div
                          className="smb-testi-stars"
                          aria-label={`Rated ${starCount} out of 5`}
                        >
                          {Array.from({ length: starCount }).map((_, idx) => (
                            <Star key={idx} className="smb-testi-star" />
                          ))}
                        </div>
                      )}

                      <p className="smb-testi-quote">&ldquo;{item.quote}&rdquo;</p>

                      <div className="smb-testi-author">
                        <span className="smb-testi-avatar" aria-hidden="true">
                          {item.profileImage ? (
                            <img
                              src={item.profileImage}
                              alt={item.authorName}
                              className="smb-testi-avatar-img"
                            />
                          ) : (
                            <User className="smb-testi-avatar-icon" />
                          )}
                        </span>

                        <div className="smb-testi-author-info">
                          <p className="smb-testi-name">{item.authorName}</p>
                          <p className="smb-testi-company">{item.company}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {totalSlides > 1 && (
            <div className="smb-testi-controls">
              <button
                type="button"
                className="smb-testi-arrow"
                aria-label="Previous testimonial"
                onClick={handlePrev}
              >
                <ChevronLeft className="smb-testi-arrow-icon" />
              </button>

              <div className="smb-testi-dots" role="tablist" aria-label="Testimonials">
                {TESTIMONIALS_DATA.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`smb-testi-dot${
                      index === activeIndex ? " is-active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="smb-testi-arrow"
                aria-label="Next testimonial"
                onClick={handleNext}
              >
                <ChevronRight className="smb-testi-arrow-icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

