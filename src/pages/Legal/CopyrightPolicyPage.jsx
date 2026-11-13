import React from "react";
import LegalPageLayout from "./LegalPageLayout";
import { PAGE_SEO } from "../../config/seoConfig";

const TOC = [
  { id: "authorship-ownership", label: "1. Authorship & Intellectual Property" },
  { id: "client-licensing", label: "2. Client Commercial Usage License" },
  { id: "unauthorized-use", label: "3. Unauthorized Use & Infringement" },
  { id: "social-reposting", label: "4. Social Media Reposting & Attribution" },
  { id: "vehicle-owner-consent", label: "5. Vehicle Owner & Brand Consent" },
  { id: "portfolio-display", label: "6. Shootmybus Portfolio & Promotional Rights" },
  { id: "third-party-rights", label: "7. Third-Party Trademarks" },
  { id: "contact-licensing", label: "8. Licensing Inquiries & Infringement Notice" },
];

export default function CopyrightPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="MEDIA RIGHTS & INTELLECTUAL PROPERTY"
      title="Copyright & Media Usage Policy"
      lastUpdated="November 2026"
      intro="All photographs, cinematic reels, drone visuals, and video footage produced by Shootmybus represent original creative works protected by Indian and international copyright laws. This policy explains our ownership structure, client licensing terms, and rules regarding media reproduction."
      toc={TOC}
      seo={PAGE_SEO.copyrightPolicy}
    >
      <section id="authorship-ownership" className="smb-legal-section">
        <h2>1. Authorship &amp; Intellectual Property Ownership</h2>
        <p>
          Unless explicitly agreed otherwise in a written copyright assignment contract signed by Shootmybus:
        </p>
        <ul className="smb-legal-list">
          <li>Shootmybus retains full, exclusive copyright, artistic ownership, and moral rights in all original photographs, RAW sensor recordings, unedited video footage, color grades, and master video compositions created during our shoots.</li>
          <li>Commissioning a photoshoot does not automatically transfer master copyright; rather, it grants the commissioning client an agreed commercial usage license upon receipt of full project payment.</li>
        </ul>
      </section>

      <section id="client-licensing" className="smb-legal-section">
        <h2>2. Client Commercial Usage License</h2>
        <p>
          Upon full settlement of all project invoices, Shootmybus grants the commissioning client a non-exclusive, perpetual, worldwide commercial usage license to utilize the delivered, finalized media assets for:
        </p>
        <ul className="smb-legal-list">
          <li><strong>Digital Marketing:</strong> Official brand website, online booking portals (e.g., RedBus, AbhiBus, Paytm), and digital banner advertisements.</li>
          <li><strong>Social Media Channels:</strong> Official Instagram, YouTube, Facebook, LinkedIn, and WhatsApp channels of the client&rsquo;s fleet brand.</li>
          <li><strong>Print &amp; Outdoor Displays:</strong> Physical bus depot signage, brand hoardings, vehicle wraps, brochures, and travel trade exhibition stalls.</li>
          <li><strong>Press &amp; Editorial:</strong> Press releases, trade magazine interviews, and editorial articles announcing fleet expansion or coach deliveries.</li>
        </ul>
        <p>
          The client may not resell, sub-license, or lease these master media files to unrelated third parties for stock photography or independent commercial resale without our express written consent.
        </p>
      </section>

      <section id="unauthorized-use" className="smb-legal-section">
        <h2>3. Unauthorized Downloading &amp; Commercial Infringement</h2>
        <p>
          Third parties, unaffiliated bus operators, travel aggregators, or content creators are strictly prohibited from:
        </p>
        <ul className="smb-legal-list">
          <li>Downloading, scraping, or screen-recording photos or video reels from this website or our official social media accounts for commercial use.</li>
          <li>Removing, cropping, or modifying embedded Shootmybus watermarks, logos, or author credits.</li>
          <li>Using Shootmybus imagery to represent other fleets, sell competing transport services, or mislead passengers regarding vehicle quality and interior comfort.</li>
        </ul>
        <p>
          Shootmybus actively monitors unauthorized media misuse and reserves the right to issue formal copyright takedown notices (under DMCA and Indian copyright statutes) and initiate appropriate legal action against commercial infringers.
        </p>
      </section>

      <section id="social-reposting" className="smb-legal-section">
        <h2>4. Social Media Reposting &amp; Attribution</h2>
        <p>
          Bus enthusiast communities, fan pages, and transport blogs that wish to share our video reels or photographs for non-commercial editorial appreciation are welcome to do so under the following conditions:
        </p>
        <ul className="smb-legal-list">
          <li><strong>Clear Attribution:</strong> Tag and credit Shootmybus visibly in the caption and on the post (@shootmybus on Instagram, @buses_lover_rakesh on YouTube).</li>
          <li><strong>No Alteration:</strong> Do not crop out watermarks, alter colors, or apply heavy filters that degrade the original cinematography.</li>
          <li><strong>No False Claims:</strong> Do not claim authorship or mislead viewers regarding who produced the shoot.</li>
        </ul>
      </section>

      <section id="vehicle-owner-consent" className="smb-legal-section">
        <h2>5. Vehicle Owner &amp; Client Consent</h2>
        <p>
          When commissioned by a fleet operator or bus bodybuilder, we photograph and film vehicles operating on public roads or within authorized depots with the client&rsquo;s knowledge and consent. Shootmybus respects privacy and does not publish sensitive private personal data, passenger faces without consent, or confidential operational documents.
        </p>
      </section>

      <section id="portfolio-display" className="smb-legal-section">
        <h2>6. Shootmybus Portfolio &amp; Promotional Rights</h2>
        <p>
          As an active visual production studio, Shootmybus reserves the professional right to showcase completed, non-confidential photographs, cinematic reels, and behind-the-scenes clips across our website portfolio, social media feeds, promotional showreels, and award submissions to demonstrate our capabilities.
        </p>
        <p>
          If a client is launching a proprietary new coach model or requires a temporary embargo (non-disclosure period prior to a public launch event), we gladly respect written embargo requests until the vehicle&rsquo;s official unveiling date.
        </p>
      </section>

      <section id="third-party-rights" className="smb-legal-section">
        <h2>7. Third-Party Trademarks</h2>
        <p>
          Any vehicle brand names, manufacturer emblems (e.g., Volvo, BharatBenz, Scania, Tata Motors, Ashok Leyland), or operator trade names depicted in our portfolio photographs remain the exclusive trademarks of their respective owners. Their depiction serves purely editorial and commercial portfolio presentation of authentic visual production work performed.
        </p>
      </section>

      <section id="contact-licensing" className="smb-legal-section">
        <h2>8. Licensing Requests &amp; Infringement Notices</h2>
        <p>
          If you wish to obtain commercial licensing for any photo or video featured on Shootmybus, or if you believe content on our platform infringes your intellectual property, please contact us promptly:
        </p>
        <ul className="smb-legal-list">
          <li><strong>Email:</strong> shootmybus@gmail.com</li>
          <li><strong>WhatsApp:</strong> +91 86902 60722</li>
          <li><strong>Official Website:</strong> https://www.shootmybus.com</li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}

