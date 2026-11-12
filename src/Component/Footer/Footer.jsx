import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { SITE_CONTACT } from "../../config/contactConfig";
import { InstagramIcon, YoutubeIcon } from "../../utils/socialIcons";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

const QUICK_LINKS = [
  { id: "home", label: "Home", to: "/" },
  { id: "service", label: "Services", to: "/services" },
  { id: "about", label: "About", to: "/about" },
  { id: "portfolio", label: "Portfolio", to: "/portfolio" },
  { id: "blog", label: "Blog", to: "/blog" },
  { id: "contact", label: "Contact", to: "/contact" },
];

function Footer() {
  const contactItems = [
    {
      id: "phone",
      label: `Phone: ${SITE_CONTACT.phone.display}`,
      icon: Phone,
      href: SITE_CONTACT.phone.href,
    },
    {
      id: "email",
      label: SITE_CONTACT.email.display,
      icon: Mail,
      href: SITE_CONTACT.email.href,
    },
    {
      id: "whatsapp",
      label: `WhatsApp: ${SITE_CONTACT.whatsapp.display}`,
      icon: MessageCircle,
      href: SITE_CONTACT.whatsapp.href,
    },
  ];

  const socialItems = [
    {
      id: "instagram",
      label: "Instagram",
      icon: InstagramIcon,
      href: SITE_CONTACT.instagram.href,
    },
    {
      id: "youtube",
      label: "YouTube",
      icon: YoutubeIcon,
      href: SITE_CONTACT.youtube.href,
    },
  ];

  return (
    <div className="smb-footer-wrap">
      <footer className="smb-footer">
        <div className="smb-footer-container">
          <div className="smb-footer-top">
            <div className="smb-footer-brand">
              <Link
                to="/"
                className="smb-footer-logo-link"
                aria-label="Shootmybus Home"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="smb-footer-logo-frame">
                  <img
                    src="/Logo/shootmybus.jpeg"
                    alt="Shootmybus — Not Just a Shoot, It's a Memory."
                    width="640"
                    height="640"
                    loading="lazy"
                    className="smb-footer-logo-img"
                  />
                </span>
              </Link>
              <p className="smb-footer-desc">
                India&apos;s Exclusive Bus Photography &amp; Film Production
                Company.
              </p>
            </div>

            <div>
              <h3 className="smb-footer-heading">Quick Links</h3>
              <ul className="smb-footer-links">
                {QUICK_LINKS.map((link) => (
                  <li key={link.id}>
                    <Link to={link.to} className="smb-footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="smb-footer-heading">Contact</h3>
              <div className="smb-footer-socials">
                {contactItems.map((item) => {
                  const IconComponent = item.icon;
                  const isExternal = item.href.startsWith("http");

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className="smb-footer-social-link"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      <span
                        className="smb-footer-social-icon-box"
                        aria-hidden="true"
                      >
                        <IconComponent className="smb-footer-social-icon" />
                      </span>
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="smb-footer-heading">Social Media</h3>
              <div className="smb-footer-socials">
                {socialItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className="smb-footer-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        className="smb-footer-social-icon-box"
                        aria-hidden="true"
                      >
                        <IconComponent className="smb-footer-social-icon" />
                      </span>
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="smb-footer-bottom">
            <p className="smb-footer-copyright">
              &copy; {CURRENT_YEAR} Shootmybus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
