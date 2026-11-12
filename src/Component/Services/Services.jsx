import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./Services.css";

// Set `videoSrc` (e.g. "/Videos/service-bus-reels.mp4") on any item to replace its image with an autoplaying background video.
const SERVICES = [
  {
    // number: "01",
    title: "Professional Bus Reels",
    imageSrc: "/Images/IMG_2832.JPG.jpeg",
    imageAlt: "Luxury twin MG Tigra coaches staged for cinematic commercial reel shoot",
    videoSrc: "/Images/new.mp4",
  },
  {
    // number: "02",
    title: "Cinematic Drone Shoots",
    imageSrc: "/Images/1.PNG",
    imageAlt: "Aerial drone photography of a luxury bus on a winding coastal road",
    videoSrc: "",
  },
  {
    // number: "03",
    title: "Running Shots",
    imageSrc: "/Images/IMG_2831.JPG.jpeg",
    imageAlt: "Dynamic rolling tracking shot of a moving luxury bus on a highway",
    videoSrc: "",
  },
  {
    // number: "04",
    title: "Professional Bus Photography",
    imageSrc: "/Images/IMG_2832.JPG.jpeg",
    imageAlt: "Close-up cinematic automotive photography of a luxury bus front",
    videoSrc: "",
  },
];

function Services() {
  const [isInView, setIsInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );
  const [activeIndex, setActiveIndex] = useState(null);
  const [failedVideos, setFailedVideos] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    if (isInView || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  const handleCardToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleVideoError = (serviceNumber) => {
    setFailedVideos((prev) => ({ ...prev, [serviceNumber]: true }));
  };

  return (
    <div ref={containerRef} className="smb-services">
      <div className="smb-services-container">
        <div className={`smb-services-header${isInView ? " is-inview" : ""}`}>
          <p className="smb-services-eyebrow">OUR SERVICES</p>
          <h2 className="smb-services-title">What We Do</h2>
        </div>

        <div
          className={`smb-accordion${isInView ? " is-inview" : ""}${activeIndex !== null ? " has-active" : ""
            }`}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {SERVICES.map((service, index) => {
            const isActive = activeIndex === index;
            const showVideo =
              Boolean(service.videoSrc) && !failedVideos[service.number];

            return (
              <article
                key={service.number}
                tabIndex={0}
                className={`smb-accordion-item${isActive ? " is-active" : ""}`}
                onClick={() => handleCardToggle(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleCardToggle(index);
                  }
                }}
              >
                {showVideo ? (
                  <video
                    className="smb-accordion-media"
                    src={service.videoSrc}
                    poster={service.imageSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    onError={() => handleVideoError(service.number)}
                  />
                ) : (
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width="1600"
                    height="900"
                    className="smb-accordion-media"
                    loading="lazy"
                  />
                )}

                <div className="smb-accordion-overlay" aria-hidden="true" />

                <div className="smb-accordion-content">
                  <div className="smb-accordion-top">
                    <span className="smb-accordion-number">
                      {service.number}
                    </span>
                    <span className="smb-accordion-arrow" aria-hidden="true">
                      <ArrowUpRight className="smb-accordion-arrow-icon" />
                    </span>
                  </div>

                  <div className="smb-accordion-bottom">
                    <h3 className="smb-accordion-title">{service.title}</h3>
                    <span className="smb-accordion-bar" aria-hidden="true" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
