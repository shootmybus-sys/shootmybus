import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";

// Set `videoSrc` (e.g. "/Videos/experience-main.mp4") on any item to replace its image with an autoplaying background video.
const EXPERIENCE_MEDIA = {
  main: {
    id: "main",
    imageSrc: "/Images/22.webp",
    imageAlt: "Baba Holidays Zingbus Maxx twin black Volvo sleeper coaches delivery showcase",
    videoSrc: "",
  },
  supporting: [
    {
      id: "cabin",
      imageSrc: "/Images/21.webp",
      imageAlt: "Shrinath Solitaire Volvo luxury coach exterior and driver cockpit showcase",
      videoSrc: "",
    },
    {
      id: "highway",
      imageSrc: "/Images/23.webp",
      imageAlt: "Zingbus Maxx Baba Holidays twin black Volvo coaches front lineup",
      videoSrc: "",
    },
  ],
};

function MediaFrame({ item, variant, isFailed, onVideoError }) {
  const showVideo = Boolean(item.videoSrc) && !isFailed;

  return (
    <div className={`smb-exp-media-box smb-exp-media-box--${variant}`}>
      {showVideo ? (
        <video
          className="smb-exp-media"
          src={item.videoSrc}
          poster={item.imageSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onError={() => onVideoError(item.id)}
        />
      ) : (
        <img
          className="smb-exp-media"
          src={item.imageSrc}
          alt={item.imageAlt}
          width="1600"
          height="900"
          loading="lazy"
        />
      )}
      <div className="smb-exp-media-tint" aria-hidden="true" />
    </div>
  );
}

function Experience() {
  const [isInView, setIsInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );
  const [failedVideos, setFailedVideos] = useState({});
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  const handleVideoError = (id) => {
    setFailedVideos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div
      ref={sectionRef}
      className="smb-experience"
      aria-labelledby="smb-experience-heading"
    >
      <div className="smb-experience-container">
        <div className={`smb-exp-header${isInView ? " is-inview" : ""}`}>
          <div>
            <p className="smb-exp-eyebrow">THE SHOOTMYBUS EXPERIENCE</p>
            <h2 id="smb-experience-heading" className="smb-exp-heading">
              More Than Photography.
              <br />
              It&apos;s an <span className="smb-exp-highlight">Experience.</span>
            </h2>
          </div>

          <p className="smb-exp-subtext">
            From breathtaking drone perspectives to dynamic running shots, we
            capture every journey with creativity, precision and cinematic
            storytelling.
          </p>
        </div>

        <div className="smb-exp-gallery">
          <div
            className={`smb-exp-media-slot smb-exp-media-slot--main${isInView ? " is-inview" : ""
              }`}
            style={{ transitionDelay: isInView ? "100ms" : "0ms" }}
          >
            <MediaFrame
              item={EXPERIENCE_MEDIA.main}
              variant="main"
              isFailed={Boolean(failedVideos[EXPERIENCE_MEDIA.main.id])}
              onVideoError={handleVideoError}
            />
          </div>

          <div className="smb-exp-secondary-stack">
            {EXPERIENCE_MEDIA.supporting.map((item, index) => (
              <div
                key={item.id}
                className={`smb-exp-media-slot${isInView ? " is-inview" : ""}`}
                style={{
                  transitionDelay: isInView ? `${220 + index * 120}ms` : "0ms",
                }}
              >
                <MediaFrame
                  item={item}
                  variant="supporting"
                  isFailed={Boolean(failedVideos[item.id])}
                  onVideoError={handleVideoError}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
