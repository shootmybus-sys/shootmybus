import React from "react";
import { Award, Compass, Eye, Heart } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./WhyChooseUs.css";

const WHY_FEATURES = [
  {
    number: "01",
    title: "Creative Vision",
    description: "Unique photography and cinematic storytelling.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Professional Quality",
    description: "High-quality equipment and professional editing.",
    icon: Award,
  },
  {
    number: "03",
    title: "Unique Perspectives",
    description: "Ground-level, running and breathtaking aerial shots.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Passion for Buses",
    description: "A dedicated creative approach to every shoot.",
    icon: Heart,
  },
];

function WhyChooseUs() {
  const [sectionRef, isInView] = useInView(0.14);

  return (
    <div ref={sectionRef} className="smb-why">
      <div className="smb-why-container">
        <div className={`smb-why-content${isInView ? " is-inview" : ""}`}>
          <p className="smb-why-eyebrow">WHY SHOOTMYBUS</p>
          <h2 className="smb-why-heading">
            We Don&apos;t Just Shoot Buses. We Capture{" "}
            <span className="smb-why-highlight">Their Identity.</span>
          </h2>
          <p className="smb-why-subtitle">
            Creative storytelling, professional equipment and a passion for
            capturing buses from extraordinary perspectives.
          </p>

          <div className="smb-why-list">
            {WHY_FEATURES.map((feature) => {
              const IconComponent = feature.icon;

              return (
                <div key={feature.number} className="smb-why-item">
                  <span className="smb-why-icon-box" aria-hidden="true">
                    <IconComponent className="smb-why-icon" />
                  </span>
                  <div className="smb-why-item-body">
                    <div className="smb-why-item-title-row">
                      <span className="smb-why-item-num">{feature.number}</span>
                      <h3 className="smb-why-item-title">{feature.title}</h3>
                    </div>
                    <p className="smb-why-item-desc">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`smb-why-visual-wrap${isInView ? " is-inview" : ""}`}>
          <div className="smb-why-visual-frame">
            <img
              src="/Images/17.webp"
              alt="Warm ambient aisle lighting inside a luxury Volvo sleeper coach"
              width="1600"
              height="900"
              className="smb-why-image"
              loading="lazy"
            />
            <div className="smb-why-visual-overlay" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

