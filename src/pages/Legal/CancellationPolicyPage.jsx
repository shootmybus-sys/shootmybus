import React from "react";
import LegalPageLayout from "./LegalPageLayout";
import { PAGE_SEO } from "../../config/seoConfig";

const TOC = [
  { id: "overview", label: "1. Overview & Principles" },
  { id: "how-to-cancel", label: "2. Cancellation Procedure" },
  { id: "rescheduling", label: "3. Rescheduling Requests" },
  { id: "weather-cancellations", label: "4. Weather & Environmental Delays" },
  { id: "late-cancellations", label: "5. Late Cancellations & Mobilization" },
  { id: "refund-terms", label: "6. Refund Eligibility & Retainers" },
  { id: "cancellation-by-us", label: "7. Cancellations by Shootmybus" },
  { id: "contact", label: "8. Contact & Coordination" },
];

export default function CancellationPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="BOOKING & SCHEDULING"
      title="Cancellation & Rescheduling Policy"
      lastUpdated="November 2026"
      intro="Commercial bus photography and cinematic video production require careful crew allocation, travel coordination, and specialized equipment reservation. This policy outlines the guidelines and procedures for canceling or rescheduling booked shoots with Shootmybus."
      toc={TOC}
      seo={PAGE_SEO.cancellationPolicy}
    >
      <section id="overview" className="smb-legal-section">
        <h2>1. Overview &amp; Principles</h2>
        <p>
          We understand that intercity bus operations, coach delivery schedules, and fleet availability can shift unexpectedly due to route demands or bodybuilding delays. Our cancellation and rescheduling policy is designed to be fair, accommodating, and transparent, while respecting the advance logistics and crew mobilization required for on-location filming across India.
        </p>
      </section>

      <section id="how-to-cancel" className="smb-legal-section">
        <h2>2. How to Request a Cancellation</h2>
        <p>
          All cancellation requests must be submitted in writing by the registered client through our official communication channels:
        </p>
        <ul className="smb-legal-list">
          <li><strong>WhatsApp Message:</strong> Sent to our official business number (+91 86902 60722).</li>
          <li><strong>Email Notice:</strong> Sent to shootmybus@gmail.com with your shoot booking details and contact number.</li>
        </ul>
        <p>
          Verbal discussions or phone conversations should be followed by a written message to establish an exact timestamp for the cancellation request.
        </p>
      </section>

      <section id="rescheduling" className="smb-legal-section">
        <h2>3. Rescheduling Requests</h2>
        <p>
          If your coach delivery is postponed or operational requirements change, we prioritize rescheduling over cancellation whenever possible:
        </p>
        <ul className="smb-legal-list">
          <li><strong>Advance Notice:</strong> We request that clients notify us as soon as a scheduling conflict arises so that alternative production dates can be evaluated.</li>
          <li><strong>Calendar Availability:</strong> Rescheduled dates are subject to our existing shoot calendar, travel itinerary, and crew availability in your region.</li>
          <li><strong>Deposit Rollover:</strong> Any advance deposit or retainer already paid will be credited toward your newly confirmed shoot date according to the specific terms confirmed in your project agreement.</li>
        </ul>
      </section>

      <section id="weather-cancellations" className="smb-legal-section">
        <h2>4. Weather-Related Delays &amp; Safety Postponements</h2>
        <p>
          High-speed highway pace-car rolling shots and aerial drone cinematography cannot proceed safely in extreme weather, including torrential monsoon downpours, severe waterlogging, dense winter fog with poor highway visibility, or government-imposed safety shutdowns.
        </p>
        <p>
          If a shoot must be paused or postponed due to adverse weather or road safety concerns, there are <strong>no penalties or administrative fees</strong> for rescheduling. Both parties will coordinate the next mutually feasible date with optimal lighting and weather conditions.
        </p>
      </section>

      <section id="late-cancellations" className="smb-legal-section">
        <h2>5. Late Cancellations &amp; Mobilization Expenses</h2>
        <p>
          When a shoot requires outstation travel, intercity transport, hotel accommodations, or dedicated equipment rentals:
        </p>
        <ul className="smb-legal-list">
          <li>If a cancellation occurs after our production crew has already traveled or arrived on location, non-recoverable travel expenses (such as train/flight tickets, fuel, and lodging already incurred) will be deducted from any refundable balance or invoiced to the client.</li>
          <li>Any specific late cancellation conditions or minimum notice windows are agreed upon mutually in your customized project quote prior to confirmation.</li>
        </ul>
      </section>

      <section id="refund-terms" className="smb-legal-section">
        <h2>6. Refund Eligibility According to Booking Agreement</h2>
        <p>
          Because Shootmybus undertakes tailored commercial productions rather than standardized retail bookings, refund eligibility is governed strictly by the specific terms agreed upon in your confirmed WhatsApp or email quotation:
        </p>
        <ul className="smb-legal-list">
          <li>We do not impose arbitrary, automated deduction percentages.</li>
          <li>Advance retainers cover reserved calendar dates and pre-production logistics. Where full or partial refunds are applicable under your confirmed agreement, they will be processed directly through the original payment mode used during booking.</li>
          <li>Completed photography, edited reels, or delivered media assets are non-refundable once approved and delivered.</li>
        </ul>
      </section>

      <section id="cancellation-by-us" className="smb-legal-section">
        <h2>7. Cancellations Initiated by Shootmybus</h2>
        <p>
          In the rare event that Shootmybus must cancel or postpone a confirmed shoot due to unforeseen circumstances, critical equipment failure, or crew emergency:
        </p>
        <ul className="smb-legal-list">
          <li>We will immediately notify you and offer priority rescheduling.</li>
          <li>If a mutually agreeable rescheduling date cannot be identified, we will provide a 100% full refund of any advance retainer paid for the affected shoot, without delay.</li>
        </ul>
      </section>

      <section id="contact" className="smb-legal-section">
        <h2>8. Scheduling Support &amp; Inquiries</h2>
        <p>
          To discuss rescheduling your upcoming bus photoshoot or to inquire about date adjustments, please connect with us directly:
        </p>
        <ul className="smb-legal-list">
          <li><strong>WhatsApp:</strong> +91 86902 60722</li>
          <li><strong>Email:</strong> shootmybus@gmail.com</li>
          <li><strong>Website:</strong> https://www.shootmybus.com/contact</li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}

