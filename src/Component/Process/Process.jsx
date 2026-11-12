import React from "react";
import { Aperture, Compass, MessageSquare, Sparkles } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./Process.css";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Connect",
    description:
      "Understand the client's bus photography and film production requirements.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Plan the location, creative direction and perfect shooting angles.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Shoot",
    description:
      "Capture stunning photographs, cinematic videos and breathtaking drone shots.",
    icon: Aperture,
  },
  {
    step: "04",
    title: "Deliver",
    description: "Provide professionally edited photographs and videos.",
    icon: Sparkles,
  },
];

function Process() {
  const [sectionRef, isInView] = useInView(0.14);

  return (
    <div ref={sectionRef} className="smb-process">
      <div className="smb-process-container">
        <div className={`smb-process-header${isInView ? " is-inview" : ""}`}>
          <p className="smb-process-eyebrow">HOW WE WORK</p>
          <h2 className="smb-process-heading">
            From Planning to{" "}
            <span className="smb-process-highlight">Perfect Frames.</span>
          </h2>
          <p className="smb-process-subtitle">
            Every great shot starts with an idea. We turn that idea into
            cinematic memories.
          </p>
        </div>

        <div className="smb-process-grid">
          {PROCESS_STEPS.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.step}
                className={`smb-process-slot${isInView ? " is-inview" : ""}`}
                style={{
                  transitionDelay: isInView ? `${index * 100}ms` : "0ms",
                }}
              >
                <article className="smb-process-card">
                  <div className="smb-process-top">
                    <span className="smb-process-icon-box" aria-hidden="true">
                      <IconComponent className="smb-process-icon" />
                    </span>
                    <span className="smb-process-step">{item.step}</span>
                  </div>

                  <h3 className="smb-process-title">{item.title}</h3>
                  <p className="smb-process-desc">{item.description}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Process;

