import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Khaldoon AI website and product information.",
};

export default function TermsPage() {
  return (
    <section className="page-hero">
      <div className="container" style={{ maxWidth: "720px" }}>
        <p className="eyebrow">Legal</p>
        <h1>Terms</h1>
        <p className="lead">
          This website describes products and services offered by Khaldoon AI. Custom work is governed by a separate scope and quote.
        </p>
        <ul className="feature-list">
          <li>
            <strong>Products</strong>
            <span>Excel MVP availability and DataBot beta access are confirmed during inquiry. Features may change during beta.</span>
          </li>
          <li>
            <strong>Khaldoon Trade</strong>
            <span>
              Coming soon. Signal-only research information is not investment advice and does not guarantee returns.
            </span>
          </li>
          <li>
            <strong>Services</strong>
            <span>Deliverables, timeline, and price are defined in the agreed quote before work begins.</span>
          </li>
          <li>
            <strong>Contact</strong>
            <span>
              <a href="mailto:hello@khaldoonai.com">hello@khaldoonai.com</a>
            </span>
          </li>
        </ul>
        <p style={{ color: "var(--muted)" }}>TODO: have counsel review before high-volume public launch.</p>
        <Link className="btn btn-ghost" href="/">
          Back home
        </Link>
      </div>
    </section>
  );
}
