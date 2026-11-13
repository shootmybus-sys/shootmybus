import React from "react";
import LegalPageLayout from "./LegalPageLayout";
import { PAGE_SEO } from "../../config/seoConfig";

const TOC = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "services", label: "2. Production Services" },
  { id: "booking-confirmation", label: "3. Booking & Confirmation" },
  { id: "shoot-coordination", label: "4. Schedule, Location & Timing" },
  { id: "client-responsibilities", label: "5. Client Responsibilities" },
  { id: "pricing-payments", label: "6. Quotations & Payment Terms" },
  { id: "weather-safety", label: "7. Weather, Traffic & Safety" },
  { id: "vehicle-authorization", label: "8. Vehicle & Brand Authorization" },
  { id: "liability", label: "9. Limitation of Liability" },
  { id: "governing-law", label: "10. Governing Law & Jurisdiction" },
  { id: "contact", label: "11. Contact" },
];

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout
      eyebrow="TERMS OF SERVICE"
      title="Terms & Conditions"
      lastUpdated="November 2026"
      intro="These Terms & Conditions govern the commercial bus photography, cinematic videography, aerial drone filming, and production services provided by Shootmybus ('we', 'us', or 'our') to fleet operators, coachbuilders, travel companies, and individual clients ('Client' or 'you')."
      toc={TOC}
      seo={PAGE_SEO.termsConditions}
    >
      <section id="acceptance" className="smb-legal-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By browsing this website, requesting a photoshoot quotation, or confirming a booking through our official WhatsApp, email, or telephone channels, you acknowledge that you have read, understood, and agreed to be bound by these Terms &amp; Conditions.
        </p>
      </section>

      <section id="services" className="smb-legal-section">
        <h2>2. Production Services</h2>
        <p>
          Shootmybus provides automotive and commercial transport visual production services across India, including but not limited to:
        </p>
        <ul className="smb-legal-list">
          <li><strong>Professional Bus Photography:</strong> High-resolution exterior three-quarters, cabin layouts, luxury sleeper berth detail, cockpit ergonomics, and fleet deliveries.</li>
          <li><strong>Cinematic Bus Reels:</strong> Vertically framed (9:16) and widescreen promotional video cuts engineered for social media and marketing campaigns.</li>
          <li><strong>Aerial Drone Shoots:</strong> Licensed, safety-compliant drone videography capturing highway tracking sequences, overhead convoy patterns, and depot reveals.</li>
          <li><strong>Rolling Running Shots:</strong> Dynamic highway pace-car rolling tracking photography capturing vehicles in authentic road transit.</li>
          <li><strong>Custom Film Production:</strong> Turnkey visual projects for fleet launches, delivery ceremonies, and operator brand overhauls.</li>
        </ul>
      </section>

      <section id="booking-confirmation" className="smb-legal-section">
        <h2>3. Booking &amp; Confirmation via WhatsApp</h2>
        <p>
          Initial project inquiries are initiated through our Book Your Shoot form or direct WhatsApp messaging. A booking is considered officially confirmed only after:
        </p>
        <ul className="smb-legal-list">
          <li>Both parties mutually agree upon the shoot dates, operating location, scope of deliverables, and service package in writing.</li>
          <li>The agreed booking advance or project retainer (as specified in your individual project quotation) has been received and acknowledged by Shootmybus.</li>
        </ul>
      </section>

      <section id="shoot-coordination" className="smb-legal-section">
        <h2>4. Schedule, Location &amp; Timing</h2>
        <p>
          Automotive and coach photography relies heavily on natural lighting conditions (such as dawn golden hour, twilight, and dusk). Shoot timing, meeting points, and transit corridors are planned jointly.
        </p>
        <p>
          The Client agrees to ensure that the designated coach(es) and assigned operational crew arrive punctually at the scheduled time and location to maximize favorable lighting and shoot windows.
        </p>
      </section>

      <section id="client-responsibilities" className="smb-legal-section">
        <h2>5. Client Responsibilities</h2>
        <p>To achieve the highest production quality, the Client agrees to:</p>
        <ul className="smb-legal-list">
          <li><strong>Vehicle Preparation:</strong> Deliver the bus in thoroughly washed, detailed, and polished condition, with clean windshields, mirrors, alloy wheels, and immaculate cabin interiors.</li>
          <li><strong>Driver Coordination:</strong> Provide an experienced, licensed bus driver who can safely follow pace-car tracking directions, maintain consistent highway cruising speeds, and perform safe maneuvers.</li>
          <li><strong>Site Permissions:</strong> Secure any necessary permits or approvals required for filming on private depot grounds, transport hubs, factory premises, or private expressways.</li>
        </ul>
      </section>

      <section id="pricing-payments" className="smb-legal-section">
        <h2>6. Quotations &amp; Payment Terms</h2>
        <p>
          Because fleet sizes, geographic travel requirements, and deliverables vary widely, Shootmybus provides transparent, customized project quotations based on each Client&rsquo;s specific scope.
        </p>
        <ul className="smb-legal-list">
          <li>All prices and accepted payment schedules (advance deposit, mid-production milestones, and balance upon master asset delivery) are communicated and agreed upon in writing prior to commencing the shoot.</li>
          <li>Full resolution photo deliverables, unwatermarked master video cuts, and final usage licenses are delivered upon receipt of the final project balance.</li>
        </ul>
      </section>

      <section id="weather-safety" className="smb-legal-section">
        <h2>7. Weather, Traffic &amp; Highway Safety</h2>
        <p>
          Public road and highway safety is paramount during all rolling pace-car and drone tracking shoots. Shootmybus adheres strictly to Indian traffic laws, drone operating regulations, and safe highway following distances.
        </p>
        <p>
          In the event of severe adverse weather (torrential rain, thick smog/fog with zero visibility), highway closures, or hazardous road conditions, shoots may be paused or rescheduled by mutual agreement to protect personnel, vehicles, and equipment.
        </p>
      </section>

      <section id="vehicle-authorization" className="smb-legal-section">
        <h2>8. Vehicle &amp; Brand Authorization</h2>
        <p>
          The Client warrants that they are the legal owner of the vehicle(s) or hold full authority and permission from the fleet operator, bodybuilder, or trademark owner to commission photography and video production featuring the vehicle, brand livery, logos, and registration markings.
        </p>
      </section>

      <section id="liability" className="smb-legal-section">
        <h2>9. Limitation of Liability</h2>
        <p>
          While Shootmybus exercises the highest professional diligence, care, and redundant data backup procedures:
        </p>
        <ul className="smb-legal-list">
          <li>Shootmybus is not liable for indirect, incidental, or consequential losses, delays, or revenue loss resulting from traffic delays, third-party logistics, vehicle mechanical breakdowns, or unforeseen equipment malfunctions.</li>
          <li>In the improbable event that Shootmybus is unable to complete a shoot due to sudden crew illness, equipment catastrophe, or force majeure events, our total liability shall be strictly limited to a full refund of any unexpended advance deposit paid for the shoot or offering an immediate mutually agreed rescheduling date.</li>
        </ul>
      </section>

      <section id="governing-law" className="smb-legal-section">
        <h2>10. Governing Law &amp; Dispute Resolution</h2>
        <p>
          These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with our services shall first be addressed through good-faith commercial negotiation via direct communication.
        </p>
      </section>

      <section id="contact" className="smb-legal-section">
        <h2>11. Inquiries &amp; Legal Contact</h2>
        <p>
          For any clarifications regarding our service terms, please contact us:
        </p>
        <ul className="smb-legal-list">
          <li><strong>Email:</strong> shootmybus@gmail.com</li>
          <li><strong>WhatsApp / Phone:</strong> +91 86902 60722</li>
          <li><strong>Official Website:</strong> https://www.shootmybus.com</li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}

