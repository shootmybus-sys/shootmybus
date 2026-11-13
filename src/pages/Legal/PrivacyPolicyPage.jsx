import React from "react";
import LegalPageLayout from "./LegalPageLayout";
import { PAGE_SEO } from "../../config/seoConfig";

const TOC = [
  { id: "overview", label: "1. Overview & Scope" },
  { id: "information-collected", label: "2. Information We Collect" },
  { id: "how-we-use-information", label: "3. How Information Is Used" },
  { id: "whatsapp-integration", label: "4. WhatsApp & Third Parties" },
  { id: "cookies-analytics", label: "5. Cookies & Tracking" },
  { id: "data-retention", label: "6. Data Retention & Security" },
  { id: "user-rights", label: "7. Your Rights & Data Deletion" },
  { id: "policy-updates", label: "8. Policy Updates" },
  { id: "contact-us", label: "9. Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="PRIVACY & DATA PROTECTION"
      title="Privacy Policy"
      lastUpdated="November 2026"
      intro="Shootmybus ('we', 'us', or 'our') values the privacy and confidentiality of our clients, bus operators, fleet owners, and website visitors. This Privacy Policy explains how information is handled when you browse our website (https://www.shootmybus.com/) or contact us to book professional bus photography and videography shoots."
      toc={TOC}
      seo={PAGE_SEO.privacyPolicy}
    >
      <section id="overview" className="smb-legal-section">
        <h2>1. Overview &amp; Scope</h2>
        <p>
          Shootmybus operates a static informational showcase portfolio website that presents our photography and video production services for the Indian transport and coach industry. We do not maintain user account registrations, e-commerce checkout portals, or online payment gateways on this website. All booking inquiries, scheduling negotiations, and client communication occur directly through WhatsApp, telephone, or email.
        </p>
      </section>

      <section id="information-collected" className="smb-legal-section">
        <h2>2. Information We Collect</h2>
        <p>
          Because our website does not require account creation, we only receive personal information that you voluntarily choose to share with us when initiating a photoshoot inquiry:
        </p>
        <ul className="smb-legal-list">
          <li><strong>Contact Information:</strong> Your full name, telephone / WhatsApp phone number, and email address.</li>
          <li><strong>Shoot Logistics &amp; Requirements:</strong> Operating city or depot location, preferred photoshoot date, fleet details, bus model or configuration, and specific production requirements (e.g., drone cinematography, rolling running shots, cabin interiors, or promotional reels).</li>
          <li><strong>Direct Communications:</strong> Any reference photos, schedule constraints, or specific creative notes you share during WhatsApp or email discussions.</li>
        </ul>
      </section>

      <section id="how-we-use-information" className="smb-legal-section">
        <h2>3. How Information Is Used</h2>
        <p>We use your inquiry and shoot details solely for legitimate commercial production purposes:</p>
        <ul className="smb-legal-list">
          <li>To review your requirements and provide an accurate quotation and availability timeline.</li>
          <li>To coordinate on-location shoot logistics, safety protocols, and route planning.</li>
          <li>To communicate project milestones, preliminary review cuts, and deliver final high-resolution photo/video files.</li>
          <li>To maintain basic business records, invoices, and ongoing customer support for future fleet updates.</li>
        </ul>
        <p>
          We do not sell, rent, monetize, or trade your personal information with third-party marketing brokers or advertisers.
        </p>
      </section>

      <section id="whatsapp-integration" className="smb-legal-section">
        <h2>4. WhatsApp &amp; Third-Party Services</h2>
        <p>
          When you click &ldquo;Book Your Shoot&rdquo; or any WhatsApp button on our website, your browser or device initiates an encrypted direct chat with our official business line (+91 86902 60722) via WhatsApp&rsquo;s standard API (<code style={{ color: "#102b60" }}>https://wa.me/</code>).
        </p>
        <p>
          Please note that communications sent via WhatsApp are governed by WhatsApp&rsquo;s own Terms of Service and Privacy Policy. Similarly, if you choose to interact with our official social media channels on Instagram or YouTube, your interactions are governed by the privacy practices of those respective platforms.
        </p>
      </section>

      <section id="cookies-analytics" className="smb-legal-section">
        <h2>5. Cookies &amp; Tracking Technologies</h2>
        <p>
          Our website is built as a clean, static single-page application. We do not use third-party behavioral advertising trackers, cross-site profiling cookies, or invasive spyware.
        </p>
        <p>
          Our hosting infrastructure (such as Vercel or cloud content delivery networks) may record standard technical server logs (including IP addresses, browser user-agent strings, and visited page paths) strictly for security, DDoS mitigation, and operational uptime monitoring. These logs do not identify individuals and are automatically rotated.
        </p>
      </section>

      <section id="data-retention" className="smb-legal-section">
        <h2>6. Data Retention &amp; Security</h2>
        <p>
          Client contact details and shoot project archives (including RAW source footage and exported master photos/videos) are maintained securely on password-protected storage systems. We retain project communication records for as long as needed to fulfill contractual obligations, provide re-export access to clients, and comply with standard business and tax accounting practices.
        </p>
      </section>

      <section id="user-rights" className="smb-legal-section">
        <h2>7. Your Rights &amp; Data Deletion Requests</h2>
        <p>
          You have the right to request access to, correction of, or deletion of any personal contact information we hold in our communication records. If you wish to update your details or request the deletion of past inquiry records, simply notify us via WhatsApp or email. We will process your request promptly, provided there are no active contractual or legal retention requirements.
        </p>
      </section>

      <section id="policy-updates" className="smb-legal-section">
        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect improvements in our website operations or changes in relevant regulations. Any revisions will be published on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage clients to review this page periodically.
        </p>
      </section>

      <section id="contact-us" className="smb-legal-section">
        <h2>9. Contact Information</h2>
        <p>
          For any questions, concerns, or data requests regarding this Privacy Policy, please contact our team directly:
        </p>
        <ul className="smb-legal-list">
          <li><strong>Business Name:</strong> Shootmybus</li>
          <li><strong>Website:</strong> https://www.shootmybus.com</li>
          <li><strong>Email:</strong> shootmybus@gmail.com</li>
          <li><strong>Phone / WhatsApp:</strong> +91 86902 60722</li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}

