import React, { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { SITE_CONTACT } from "../../config/contactConfig";
import { useInView } from "../../hooks/useInView";
import { InstagramIcon } from "../../utils/socialIcons";
import "./Contact.css";

const SERVICE_OPTIONS = [
  "Professional Bus Reels",
  "Cinematic Drone Shoots",
  "Running Shots",
  "Professional Bus Photography",
  "Other",
];

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  service: SERVICE_OPTIONS[0],
  message: "",
};

function validateForm(values) {
  const errors = {};
  const trimmedName = values.fullName.trim();
  const phoneDigits = values.phone.replace(/\D/g, "");
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!SERVICE_OPTIONS.includes(values.service)) {
    errors.service = "Please select a service.";
  }

  if (trimmedMessage.length < 10) {
    errors.message = "Please add a short message (at least 10 characters).";
  }

  return errors;
}

function Contact() {
  const [sectionRef, isInView] = useInView(0.12);
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitState, setSubmitState] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const channels = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      ...SITE_CONTACT.whatsapp,
    },
    {
      id: "email",
      icon: Mail,
      ...SITE_CONTACT.email,
    },
    {
      id: "instagram",
      icon: InstagramIcon,
      ...SITE_CONTACT.instagram,
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitState.message) {
      setSubmitState({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm(formValues);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    if (!SITE_CONTACT.formEndpoint) {
      setSubmitState({
        type: "info",
        message:
          "Your details are validated, but no backend endpoint is configured yet. Set formEndpoint and contact links in src/config/contactConfig.js to enable live submissions.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ type: "", message: "" });

    try {
      const response = await fetch(SITE_CONTACT.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFormValues(INITIAL_FORM);
      setSubmitState({
        type: "success",
        message: "Thank you. Your shoot inquiry has been received.",
      });
    } catch {
      setSubmitState({
        type: "error",
        message:
          "Unable to submit right now. Please try again or reach out via the direct contact options.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={sectionRef} className="smb-contact">
      <div className="smb-contact-container">
        <div className={`smb-contact-info${isInView ? " is-inview" : ""}`}>
          <p className="smb-contact-eyebrow">LET&apos;S CREATE SOMETHING</p>
          <h2 className="smb-contact-heading">
            Ready to{" "}
            <span className="smb-contact-highlight">Capture Your Bus?</span>
          </h2>
          <p className="smb-contact-subtitle">
            Have a bus photography or film production project in mind? Let&apos;s
            make it unforgettable.
          </p>

          <div className="smb-contact-channels">
            {channels.map((channel) => {
              const IconComponent = channel.icon;
              const isExternal = channel.href.startsWith("http");
              const content = (
                <>
                  <span
                    className="smb-contact-channel-icon-box"
                    aria-hidden="true"
                  >
                    <IconComponent className="smb-contact-channel-icon" />
                  </span>
                  <div>
                    <p className="smb-contact-channel-label">{channel.label}</p>
                    <p className="smb-contact-channel-value">
                      {channel.handle}
                    </p>
                  </div>
                </>
              );

              if (channel.href) {
                return (
                  <a
                    key={channel.id}
                    href={channel.href}
                    className="smb-contact-channel"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={channel.id} className="smb-contact-channel">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`smb-contact-form-card${isInView ? " is-inview" : ""}`}
        >
          <form className="smb-contact-form" onSubmit={handleSubmit} noValidate>
            <div className="smb-field">
              <label htmlFor="smb-fullName" className="smb-field-label">
                Full Name
              </label>
              <input
                id="smb-fullName"
                name="fullName"
                type="text"
                className="smb-input"
                placeholder="Enter your full name"
                value={formValues.fullName}
                aria-invalid={Boolean(fieldErrors.fullName)}
                onChange={handleChange}
              />
              {fieldErrors.fullName && (
                <p className="smb-field-error">{fieldErrors.fullName}</p>
              )}
            </div>

            <div className="smb-contact-row">
              <div className="smb-field">
                <label htmlFor="smb-phone" className="smb-field-label">
                  Phone Number
                </label>
                <input
                  id="smb-phone"
                  name="phone"
                  type="tel"
                  className="smb-input"
                  placeholder="Enter your phone number"
                  value={formValues.phone}
                  aria-invalid={Boolean(fieldErrors.phone)}
                  onChange={handleChange}
                />
                {fieldErrors.phone && (
                  <p className="smb-field-error">{fieldErrors.phone}</p>
                )}
              </div>

              <div className="smb-field">
                <label htmlFor="smb-email" className="smb-field-label">
                  Email Address
                </label>
                <input
                  id="smb-email"
                  name="email"
                  type="email"
                  className="smb-input"
                  placeholder="Enter your email address"
                  value={formValues.email}
                  aria-invalid={Boolean(fieldErrors.email)}
                  onChange={handleChange}
                />
                {fieldErrors.email && (
                  <p className="smb-field-error">{fieldErrors.email}</p>
                )}
              </div>
            </div>

            <div className="smb-field">
              <label htmlFor="smb-service" className="smb-field-label">
                Service Required
              </label>
              <select
                id="smb-service"
                name="service"
                className="smb-select"
                value={formValues.service}
                aria-invalid={Boolean(fieldErrors.service)}
                onChange={handleChange}
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldErrors.service && (
                <p className="smb-field-error">{fieldErrors.service}</p>
              )}
            </div>

            <div className="smb-field">
              <label htmlFor="smb-message" className="smb-field-label">
                Message
              </label>
              <textarea
                id="smb-message"
                name="message"
                className="smb-textarea"
                placeholder="Tell us about your bus fleet, location, and shoot requirements"
                value={formValues.message}
                aria-invalid={Boolean(fieldErrors.message)}
                onChange={handleChange}
              />
              {fieldErrors.message && (
                <p className="smb-field-error">{fieldErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="smb-contact-submit"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Submitting..." : "Book Your Shoot"}</span>
              <Send className="smb-contact-submit-icon" aria-hidden="true" />
            </button>

            {submitState.message && (
              <p
                role="status"
                className={`smb-contact-status smb-contact-status--${submitState.type}`}
              >
                {submitState.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
