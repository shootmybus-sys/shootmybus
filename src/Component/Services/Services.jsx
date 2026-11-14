import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./Services.css";

// Set `videoSrc` (e.g. "/Videos/service-bus-reels.mp4") on any item to replace its image with an autoplaying background video.
const SERVICES = [
  {
    id: "service-bus-reels",
    title: "Professional Bus Reels",
    imageSrc: "/Images/Add a heading-65.png",
    imageAlt: "Luxury twin MG Tigra coaches staged for cinematic commercial reel shoot",
    videoSrc: "/Images/new.mp4",
  },
  {
    id: "service-drone-shoots",
    title: "Cinematic Drone Shoots",
    imageSrc: "/Images/1.webp",
    imageAlt: "Aerial drone photography of a luxury bus on a winding coastal road",
    videoSrc: "",
  },
  {
    id: "service-running-shots",
    title: "Running Shots",
    imageSrc: "/Images/IMG_2831.webp",
    imageAlt: "Dynamic rolling tracking shot of a moving luxury bus on a highway",
    videoSrc: "",
  },
  {
    id: "service-bus-photography",
    title: "Professional Bus Photography",
    imageSrc: "/Images/IMG_2832.webp",
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

  const handleVideoError = (serviceId) => {
    setFailedVideos((prev) => ({ ...prev, [serviceId]: true }));
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
              Boolean(service.videoSrc) && !failedVideos[service.id];

            return (
              <article
                key={service.id}
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
                    onError={() => handleVideoError(service.id)}
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
                    {service.number && (
                      <span className="smb-accordion-number">
                        {service.number}
                      </span>
                    )}
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
