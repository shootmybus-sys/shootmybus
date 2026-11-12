import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

// Switch `type` to "video" and set `videoSrc` when replacing the background image with video.
const HERO_MEDIA = {
  type: "video",
  imageSrc: "/Images/hero-bus.jpg",
  imageAlt: "Luxury tour coach bus driving on a scenic misty highway at twilight",
  videoSrc: "/Images/hero.mp4",
};

const EYEBROW_TEXT =
  "INDIA'S EXCLUSIVE BUS PHOTOGRAPHY & FILM PRODUCTION COMPANY";
const EYEBROW_WORDS = EYEBROW_TEXT.split(" ");
const WORD_DELAY_MS = 230;
const REPEAT_PAUSE_MS = 2000;

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function findSectionElement(id) {
  const element = document.getElementById(id);
  if (element) return element;
  if (id === "service") return document.getElementById("services");
  return null;
}

function Hero() {
  const [isMediaReady, setIsMediaReady] = useState(false);
  const [visibleWordCount, setVisibleWordCount] = useState(() =>
    prefersReducedMotion() ? EYEBROW_WORDS.length : 1
  );
  const imgRef = useRef(null);

  useEffect(() => {
    if (HERO_MEDIA.type === "image" && imgRef.current?.complete) {
      setIsMediaReady(true);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    const isComplete = visibleWordCount >= EYEBROW_WORDS.length;
    const delay = isComplete ? REPEAT_PAUSE_MS : WORD_DELAY_MS;

    const timer = window.setTimeout(() => {
      setVisibleWordCount((prev) =>
        prev >= EYEBROW_WORDS.length ? 0 : prev + 1
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [visibleWordCount]);

  const isTypingComplete = visibleWordCount >= EYEBROW_WORDS.length;
  const typedText = EYEBROW_WORDS.slice(0, visibleWordCount).join(" ");

  const handleSectionScroll = (event, targetId, hash) => {
    const target = findSectionElement(targetId);
    if (!target) return;

    event.preventDefault();
    const headerElement = document.querySelector(".smb-header");
    const headerHeight = headerElement?.offsetHeight ?? 84;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const scrollDestination = Math.max(0, targetTop - headerHeight - 8);

    window.scrollTo({
      top: scrollDestination,
      behavior: "smooth",
    });

    if (window.location.hash !== hash) {
      window.history.replaceState(null, "", hash);
    }
  };

  return (
    <div className="smb-hero">
      <div className="smb-hero-frame">
        <div className="smb-hero-backdrop" aria-hidden="true" />

        {HERO_MEDIA.type === "video" ? (
          <video
            className={`smb-hero-media${isMediaReady ? " is-ready" : ""}`}
            src="/Images/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onLoadedData={() => setIsMediaReady(true)}
            onCanPlay={() => setIsMediaReady(true)}
          />
        ) : (
          <img
            ref={imgRef}
            className={`smb-hero-media${isMediaReady ? " is-ready" : ""}`}
            src={HERO_MEDIA.imageSrc}
            alt={HERO_MEDIA.imageAlt}
            width="1376"
            height="768"
            fetchPriority="high"
            onLoad={() => setIsMediaReady(true)}
          />
        )}

        <div className="smb-hero-overlay" aria-hidden="true" />

        <div className="smb-hero-content">
          <p className="smb-hero-eyebrow" aria-label={EYEBROW_TEXT}>
            <span className="smb-hero-eyebrow-ghost" aria-hidden="true">
              {EYEBROW_TEXT}
            </span>
            <span className="smb-hero-eyebrow-live" aria-hidden="true">
              {typedText}
              {!isTypingComplete && <span className="smb-typing-cursor" />}
            </span>
          </p>

          <h1 className="smb-hero-heading">
            Every Bus Has a{" "}
            <span className="smb-hero-accent-green">Story.</span>
            <br />
            We Capture It{" "}
            <span className="smb-hero-accent-teal">Beautifully.</span>
          </h1>

          <p className="smb-hero-tagline">
            We Shoot. We Create{" "}
            <span className="smb-hero-accent-green">Memories.</span>
          </p>

          <div className="smb-hero-actions">
            <a
              href="#service"
              className="smb-hero-btn smb-hero-btn--primary"
              onClick={(event) =>
                handleSectionScroll(event, "service", "#service")
              }
            >
              <span>Explore Our Work</span>
              <ArrowRight className="smb-hero-btn-icon" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="smb-hero-btn smb-hero-btn--secondary"
              onClick={(event) =>
                handleSectionScroll(event, "contact", "#contact")
              }
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
