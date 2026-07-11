import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Khaldoon AI website inquiries and product communications.",
};

export default function PrivacyPage() {
  return (
    <section className="page-hero">
      <div className="container" style={{ maxWidth: "720px" }}>
        <p className="eyebrow">Legal</p>
        <h1>Privacy</h1>
        <p className="lead">
          We collect information you submit through the contact form (name, email, company, project details, and budget preference) to respond to inquiries.
        </p>
        <ul className="feature-list">
          <li>
            <strong>Use</strong>
            <span>Inquiry response, project scoping, and product waitlist communication.</span>
          </li>
          <li>
            <strong>Storage</strong>
            <span>Processed via configured email providers (Formspree, Web3Forms, Resend, or FormSubmit).</span>
          </li>
          <li>
            <strong>Sharing</strong>
            <span>We do not sell contact data. Providers process messages only to deliver them.</span>
          </li>
          <li>
            <strong>Contact</strong>
            <span>
              Questions: <a href="mailto:hello@khaldoonai.com">hello@khaldoonai.com</a>
            </span>
          </li>
        </ul>
        <p style={{ color: "var(--muted)" }}>TODO: expand with jurisdiction-specific clauses before broad public launch.</p>
        <Link className="btn btn-ghost" href="/contact">
          Contact
        </Link>
      </div>
    </section>
  );
}
