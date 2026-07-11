import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Khaldoon AI for Excel MVP, AI DataBot beta, service packages, or the Trade waitlist.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Tell us what you need built.</h1>
          <p className="lead">
            Excel MVP, DataBot beta, dashboard work, automation, or the Trade waitlist — send details and we will reply with next steps.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <ContactForm />
          <div>
            <h2 className="section-title">What happens next</h2>
            <ul className="feature-list">
              <li>
                <strong>24–48 hour reply</strong>
                <span>We confirm fit and ask only for missing details.</span>
              </li>
              <li>
                <strong>Scoped next step</strong>
                <span>Products get a clear path. Services get a quote after discovery.</span>
              </li>
              <li>
                <strong>Marketplace visitors welcome</strong>
                <span>If you found us via Fiverr, Upwork, LinkedIn, or Gumroad, mention that in the message.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
