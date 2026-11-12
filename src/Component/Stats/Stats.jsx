import React, { useEffect, useRef, useState } from "react";
import { Award, Camera, FolderCheck, Users } from "lucide-react";
import "./Stats.css";

// Editable placeholder configuration — replace `target` and `suffix` with verified Shootmybus metrics.
const STATS_CONFIG = [
  {
    id: "projects",
    label: "Projects Completed",
    target: 500, // Placeholder value
    suffix: "+",
    icon: FolderCheck,
  },
  {
    id: "experience",
    label: "Years of Experience",
    target: 5, // Placeholder value
    suffix: "+",
    icon: Award,
  },
  {
    id: "clients",
    label: "Happy Clients",
    target: 200, // Placeholder value
    suffix: "+",
    icon: Users,
  },
  {
    id: "productions",
    label: "Photoshoots & Productions",
    target: 120, // Placeholder value
    suffix: "+",
    icon: Camera,
  },
];

const ANIMATION_DURATION_MS = 1400;

function Stats() {
  const [hasEntered, setHasEntered] = useState(
    () => typeof IntersectionObserver === "undefined"
  );
  const [counts, setCounts] = useState(() => STATS_CONFIG.map(() => 0));
  const sectionRef = useRef(null);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (hasEntered || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasEntered]);

  useEffect(() => {
    if (!hasEntered || hasCompletedRef.current) {
      return undefined;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId = 0;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = prefersReducedMotion
        ? 1
        : Math.min(elapsed / ANIMATION_DURATION_MS, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        STATS_CONFIG.map((item) => Math.round(item.target * easedProgress))
      );

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        hasCompletedRef.current = true;
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [hasEntered]);

  return (
    <div ref={sectionRef} className="smb-stats">
      <div className="smb-stats-wrapper">
        <div className={`smb-stats-header${hasEntered ? " is-inview" : ""}`}>
          <p className="smb-stats-eyebrow">OUR ACHIEVEMENTS</p>
          <h2 className="smb-stats-heading">
            Every Frame Tells a{" "}
            <span className="smb-stats-highlight">Story.</span>
            <br />
            Every Project Builds Our{" "}
            <span className="smb-stats-highlight">Journey.</span>
          </h2>
          <p className="smb-stats-subtitle">
            A growing journey of creativity, passion and unforgettable bus photography experiences across India.
          </p>
        </div>

        <div className="smb-stats-container">
          <div className="smb-stats-grid">
            {STATS_CONFIG.map((stat, index) => {
              const IconComponent = stat.icon;

              return (
                <div
                  key={stat.id}
                  className={`smb-stat-slot${hasEntered ? " is-inview" : ""}`}
                  style={{
                    transitionDelay: hasEntered ? `${index * 90}ms` : "0ms",
                  }}
                >
                  <div className="smb-stat-card">
                    <div className="smb-stat-icon-box" aria-hidden="true">
                      <IconComponent className="smb-stat-icon" />
                    </div>

                    <p className="smb-stat-value">
                      {counts[index]}
                      {stat.suffix && (
                        <span className="smb-stat-suffix">{stat.suffix}</span>
                      )}
                    </p>

                    <p className="smb-stat-label">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
