import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import "./Portfolio.css";

// Editable portfolio image list — replace or reorder local paths in public/Images/ anytime.
const PORTFOLIO_ROW_ONE = [
  {
    id: "fleet-tigra-front",
    src: "/Images/IMG_2832.webp",
    alt: "Front-angle luxury MG Tigra fleet photography for Shree Ramkrupa Travels",
  },
  {
    id: "fleet-tata-bs6",
    src: "/Images/IMG_2831.webp",
    alt: "MG Tigra Tata BS6 13.5m luxury coaches parked in crisp side formation",
  },
  {
    id: "tegra-sleeper-cabin",
    src: "/Images/4.webp",
    alt: "Tegra Express luxury Volvo sleeper cabin interior photography",
  },
  {
    id: "tegra-usb-infotainment",
    src: "/Images/10.webp",
    alt: "Onboard infotainment and USB charging console inside Tegra Express Volvo sleeper",
  },
  {
    id: "fleet-tigra-angle",
    src: "/Images/IMG_2833.webp",
    alt: "Dual luxury MG Tigra coach exterior shoot in daylight",
  },
  {
    id: "tegra-ambient-aisle",
    src: "/Images/17.webp",
    alt: "Ambient warm cabin aisle lighting inside a luxury Volvo sleeper coach",
  },
  {
    id: "ramkrupa-ac-airflow",
    src: "/Images/IMG_2841.webp",
    alt: "Personal AC vent and ambient ceiling strip lighting detail inside sleeper berth",
  },
  {
    id: "ramkrupa-gangway",
    src: "/Images/IMG_2847.webp",
    alt: "Luxury coach spacious gangway and quilted sleeper berths",
  },
  {
    id: "shrinath-solitaire-volvo",
    src: "/Images/21.webp",
    alt: "Shrinath Solitaire Volvo luxury coach exterior and driver cockpit showcase",
  },
  {
    id: "zingbus-maxx-baba-delivery",
    src: "/Images/22.webp",
    alt: "Baba Holidays Zingbus Maxx twin black Volvo sleeper coaches showcase",
  },
  {
    id: "zingbus-maxx-twin-front",
    src: "/Images/23.webp",
    alt: "Zingbus Maxx Baba Holidays twin black Volvo coaches front lineup",
  },
];

const PORTFOLIO_ROW_TWO = [
  {
    id: "tegra-twin-9600s",
    src: "/Images/20.webp",
    alt: "Aerial exterior showcase of twin Tegra Express Volvo 9600s coaches",
  },
  {
    id: "tegra-cctv-security",
    src: "/Images/11.webp",
    alt: "360-degree CCTV cabin monitoring system inside Tegra Express luxury coach",
  },
  {
    id: "ramkrupa-side-profile",
    src: "/Images/IMG_2834.webp",
    alt: "Full side-profile luxury coach showcase for Shree Ramkrupa Travels",
  },
  {
    id: "tegra-soft-pillows",
    src: "/Images/16.webp",
    alt: "Soft embroidered pillows and plush sleeper berth inside Tegra Express",
  },
  {
    id: "ramkrupa-berth-detail",
    src: "/Images/IMG_2840.webp",
    alt: "Quilted sleeper seat, USB Type-C ports, and curtain detail shot",
  },
  {
    id: "tegra-bottle-holder",
    src: "/Images/19.webp",
    alt: "Dedicated cabin bottle holder and privacy curtain finish detail",
  },
  {
    id: "tegra-backrest-pillow",
    src: "/Images/5.webp",
    alt: "Luxury Volvo sleeper backrest and branded leather pillows",
  },
  {
    id: "ramkrupa-dual-lineup",
    src: "/Images/IMG_2835.webp",
    alt: "Three-quarter twin luxury bus fleet lineup photography",
  },
  {
    id: "zingbus-maxx-wheel-detail",
    src: "/Images/24.webp",
    alt: "Zingbus Maxx Volvo luxury coach wheel arch and Michelin tyre detail",
  },
  {
    id: "zingbus-maxx-depot-fleet",
    src: "/Images/25.webp",
    alt: "Baba Holidays Zingbus Maxx black Volvo sleeper fleet parked in formation",
  },
  {
    id: "zingbus-maxx-owner-portrait",
    src: "/Images/26.webp",
    alt: "Baba Holidays Zingbus Maxx twin black Volvo coaches delivery portrait",
  },
];

const ALL_PORTFOLIO_ITEMS = [...PORTFOLIO_ROW_ONE, ...PORTFOLIO_ROW_TWO];

function MarqueeRow({ items, direction, isPaused, onSelect }) {
  const trackClass = `smb-marquee-track smb-marquee-track--${direction}`;

  return (
    <div className={`smb-marquee-viewport${isPaused ? " is-paused" : ""}`}>
      <div className={trackClass}>
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="smb-marquee-group"
            aria-hidden={copyIndex === 1}
          >
            {items.map((item) => (
              <button
                key={`${copyIndex}-${item.id}`}
                type="button"
                className="smb-portfolio-card"
                tabIndex={copyIndex === 1 ? -1 : 0}
                aria-label={`View ${item.alt}`}
                onClick={() => onSelect(item.id)}
              >
                <img
                  src={item.src}
                  alt={copyIndex === 1 ? "" : item.alt}
                  width="1600"
                  height="900"
                  className="smb-portfolio-card-img"
                  loading="lazy"
                />
                <span className="smb-portfolio-card-scrim" aria-hidden="true" />
                <span className="smb-portfolio-card-badge" aria-hidden="true">
                  <Expand className="smb-portfolio-card-icon" />
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Portfolio() {
  const [isInView, setIsInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );
  const [selectedIndex, setSelectedIndex] = useState(null);
  const sectionRef = useRef(null);

  const isLightboxOpen = selectedIndex !== null;
  const activeItem = isLightboxOpen
    ? ALL_PORTFOLIO_ITEMS[selectedIndex]
    : null;

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
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  const handleOpenImage = useCallback((id) => {
    const index = ALL_PORTFOLIO_ITEMS.findIndex((item) => item.id === id);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + ALL_PORTFOLIO_ITEMS.length) % ALL_PORTFOLIO_ITEMS.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % ALL_PORTFOLIO_ITEMS.length
    );
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, handleClose, handlePrev, handleNext]);

  return (
    <div ref={sectionRef} className="smb-portfolio">
      <div className={`smb-portfolio-header${isInView ? " is-inview" : ""}`}>
        <p className="smb-portfolio-eyebrow">OUR PORTFOLIO</p>
        <h2 className="smb-portfolio-heading">
          Captured Moments.{" "}
          <span className="smb-portfolio-highlight">Cinematic Stories.</span>
        </h2>
        <p className="smb-portfolio-subtitle">
          Explore our collection of bus photography, cinematic reels and
          breathtaking aerial shots.
        </p>
      </div>

      <div className={`smb-marquee-stack${isInView ? " is-inview" : ""}`}>
        <MarqueeRow
          items={PORTFOLIO_ROW_ONE}
          direction="left"
          isPaused={isLightboxOpen}
          onSelect={handleOpenImage}
        />
        <MarqueeRow
          items={PORTFOLIO_ROW_TWO}
          direction="right"
          isPaused={isLightboxOpen}
          onSelect={handleOpenImage}
        />
      </div>

      {activeItem && (
        <div
          className="smb-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image preview"
          onClick={handleClose}
        >
          <button
            type="button"
            className="smb-lightbox-close"
            aria-label="Close preview"
            onClick={(event) => {
              event.stopPropagation();
              handleClose();
            }}
          >
            <X className="smb-lightbox-icon" />
          </button>

          <button
            type="button"
            className="smb-lightbox-nav smb-lightbox-nav--prev"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              handlePrev();
            }}
          >
            <ChevronLeft className="smb-lightbox-icon" />
          </button>

          <div
            className="smb-lightbox-stage"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={activeItem.id}
              src={activeItem.src}
              alt={activeItem.alt}
              className="smb-lightbox-image"
            />
            <div className="smb-lightbox-meta">
              <span>{activeItem.alt}</span>
              <span className="smb-lightbox-counter">
                {selectedIndex + 1} / {ALL_PORTFOLIO_ITEMS.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="smb-lightbox-nav smb-lightbox-nav--next"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              handleNext();
            }}
          >
            <ChevronRight className="smb-lightbox-icon" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Portfolio;

