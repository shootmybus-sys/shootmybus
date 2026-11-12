import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { SITE_CONTACT } from "../../config/contactConfig";
import { useInView } from "../../hooks/useInView";
import { InstagramIcon, YoutubeIcon } from "../../utils/socialIcons";
import "./Contact.css";

const BOOKING_SERVICE_OPTIONS = [
  "Professional Bus Reels",
  "Cinematic Drone Shoots",
  "Running Shots",
  "Professional Bus Photography",
  "Multiple Services",
  "Other",
];

function getTodayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function resolveServiceOption(candidate) {
  if (!candidate) return BOOKING_SERVICE_OPTIONS[0];
  const matched = BOOKING_SERVICE_OPTIONS.find(
    (option) => option.toLowerCase() === candidate.trim().toLowerCase()
  );
  return matched || BOOKING_SERVICE_OPTIONS[0];
}

function validateBookingForm(values, minDate) {
  const errors = {};
  const trimmedName = values.fullName.trim();
  const phoneDigits = values.phone.replace(/\D/g, "");
  const trimmedEmail = values.email.trim();
  const trimmedLocation = values.location.trim();

  if (trimmedName.length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.phone = "Please enter a valid phone number (at least 10 digits).";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  if (trimmedLocation.length < 2) {
    errors.location = "Please enter your city or shoot location.";
  }

  if (!values.shootDate) {
    errors.shootDate = "Please select a preferred shoot date.";
  } else if (values.shootDate < minDate) {
    errors.shootDate = "Please select today or a future shoot date.";
  }

  if (!BOOKING_SERVICE_OPTIONS.includes(values.service)) {
    errors.service = "Please select a service.";
  }

  return errors;
}

function buildWhatsAppBookingUrl(values) {
  const lines = [
    "Hello Shootmybus!",
    "I would like to book a shoot.",
    "",
    `Name: ${values.fullName.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Email: ${values.email.trim()}`,
    `City / Location: ${values.location.trim()}`,
    `Preferred Shoot Date: ${values.shootDate}`,
    `Service: ${values.service}`,
    `Requirements: ${values.message.trim() || "Not specified"}`,
    "",
    "Please share further details.",
  ];

  const encodedMessage = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${SITE_CONTACT.whatsapp.number}?text=${encodedMessage}`;
}

function Contact({ preselectedService }) {
  const [sectionRef, isInView] = useInView(0.12);
  const [searchParams] = useSearchParams();
  const queryService = searchParams.get("service");
  const todayDate = getTodayDateString();

  const [hasEditedService, setHasEditedService] = useState(false);
  const [formValues, setFormValues] = useState(() => ({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    shootDate: "",
    service: resolveServiceOption(preselectedService || queryService),
    message: "",
  }));

  const activeService = hasEditedService
    ? formValues.service
    : resolveServiceOption(preselectedService || queryService || formValues.service);

  const [fieldErrors, setFieldErrors] = useState({});
  const [whatsappFallbackUrl, setWhatsappFallbackUrl] = useState("");
  const [submitState, setSubmitState] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const channels = [
    {
      id: "phone",
      icon: Phone,
      label: SITE_CONTACT.phone.label,
      handle: SITE_CONTACT.phone.display,
      href: SITE_CONTACT.phone.href,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: SITE_CONTACT.whatsapp.label,
      handle: SITE_CONTACT.whatsapp.display,
      href: SITE_CONTACT.whatsapp.href,
    },
    {
      id: "email",
      icon: Mail,
      label: SITE_CONTACT.email.label,
      handle: SITE_CONTACT.email.display,
      href: SITE_CONTACT.email.href,
    },
    {
      id: "instagram",
      icon: InstagramIcon,
      label: SITE_CONTACT.instagram.label,
      handle: SITE_CONTACT.instagram.handle,
      href: SITE_CONTACT.instagram.href,
    },
    {
      id: "youtube",
      icon: YoutubeIcon,
      label: SITE_CONTACT.youtube.label,
      handle: SITE_CONTACT.youtube.handle,
      href: SITE_CONTACT.youtube.href,
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "service") {
      setHasEditedService(true);
    }
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
    const submissionValues = { ...formValues, service: activeService };
    const errors = validateBookingForm(submissionValues, todayDate);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const whatsappUrl = buildWhatsAppBookingUrl(submissionValues);
    setWhatsappFallbackUrl(whatsappUrl);

    // Optional future backend endpoint integration without blocking WhatsApp handoff
    if (SITE_CONTACT.formEndpoint) {
      setIsSubmitting(true);
      try {
        await fetch(SITE_CONTACT.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(submissionValues),
        });
      } catch {
        // Proceed with WhatsApp handoff even if optional webhook fails
      } finally {
        setIsSubmitting(false);
      }
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitState({
      type: "info",
      message:
        "WhatsApp has been opened with your shoot details. Please send the pre-filled message to complete your inquiry.",
    });
  };

  return (
    <div ref={sectionRef} className="smb-contact">
      <div className="smb-contact-container">
        <div className={`smb-contact-info${isInView ? " is-inview" : ""}`}>
          <p className="smb-contact-eyebrow">LET&apos;S PLAN YOUR SHOOT</p>
          <h2 className="smb-contact-heading">
            Book{" "}
            <span className="smb-contact-highlight">Your Shoot.</span>
          </h2>
          <p className="smb-contact-subtitle">
            Have a bus photography or cinematic production project in mind?
            Share your requirements and let&apos;s create something memorable.
          </p>

          <div className="smb-contact-channels">
            {channels.map((channel) => {
              const IconComponent = channel.icon;
              const isExternal = channel.href.startsWith("http");

              return (
                <a
                  key={channel.id}
                  href={channel.href}
                  className="smb-contact-channel"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
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
                </a>
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
                Full Name *
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
                required
              />
              {fieldErrors.fullName && (
                <p className="smb-field-error">{fieldErrors.fullName}</p>
              )}
            </div>

            <div className="smb-contact-row">
              <div className="smb-field">
                <label htmlFor="smb-phone" className="smb-field-label">
                  Phone Number *
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
                  required
                />
                {fieldErrors.phone && (
                  <p className="smb-field-error">{fieldErrors.phone}</p>
                )}
              </div>

              <div className="smb-field">
                <label htmlFor="smb-email" className="smb-field-label">
                  Email Address *
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
                  required
                />
                {fieldErrors.email && (
                  <p className="smb-field-error">{fieldErrors.email}</p>
                )}
              </div>
            </div>

            <div className="smb-contact-row">
              <div className="smb-field">
                <label htmlFor="smb-location" className="smb-field-label">
                  City / Location *
                </label>
                <input
                  id="smb-location"
                  name="location"
                  type="text"
                  className="smb-input"
                  placeholder="e.g. Mumbai, Pune, Bengaluru"
                  value={formValues.location}
                  aria-invalid={Boolean(fieldErrors.location)}
                  onChange={handleChange}
                  required
                />
                {fieldErrors.location && (
                  <p className="smb-field-error">{fieldErrors.location}</p>
                )}
              </div>

              <div className="smb-field">
                <label htmlFor="smb-shootDate" className="smb-field-label">
                  Shoot Date *
                </label>
                <input
                  id="smb-shootDate"
                  name="shootDate"
                  type="date"
                  min={todayDate}
                  className="smb-input"
                  value={formValues.shootDate}
                  aria-invalid={Boolean(fieldErrors.shootDate)}
                  onChange={handleChange}
                  required
                />
                {fieldErrors.shootDate && (
                  <p className="smb-field-error">{fieldErrors.shootDate}</p>
                )}
              </div>
            </div>

            <div className="smb-field">
              <label htmlFor="smb-service" className="smb-field-label">
                Service Required *
              </label>
              <select
                id="smb-service"
                name="service"
                className="smb-select"
                value={activeService}
                aria-invalid={Boolean(fieldErrors.service)}
                onChange={handleChange}
                required
              >
                {BOOKING_SERVICE_OPTIONS.map((option) => (
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
                Additional Requirements (Optional)
              </label>
              <textarea
                id="smb-message"
                name="message"
                className="smb-textarea"
                placeholder="Share coach model, fleet count, route, or preferred shoot style..."
                value={formValues.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="smb-contact-submit"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Opening WhatsApp..." : "BOOK YOUR SHOOT"}</span>
              <Send className="smb-contact-submit-icon" aria-hidden="true" />
            </button>

            {submitState.message && (
              <div
                className={`smb-contact-status smb-contact-status--${submitState.type}`}
                role="status"
                aria-live="polite"
              >
                <p style={{ margin: 0 }}>{submitState.message}</p>
                {whatsappFallbackUrl && (
                  <a
                    href={whatsappFallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="smb-contact-wa-link"
                  >
                    Click here if WhatsApp did not open automatically
                  </a>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
