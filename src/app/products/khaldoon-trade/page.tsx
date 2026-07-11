import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Khaldoon Trade",
  description:
    "Khaldoon Trade — coming soon. Signal-only research platform with paper trading context. No guaranteed returns.",
};

export default function TradePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Coming soon · Research platform</p>
          <h1>Khaldoon Trade</h1>
          <p className="lead">
            A signal-only market intelligence product with indicators, AI analysis notes, paper-trading context, and Telegram delivery when launched.
          </p>
          <div className="cta-row" style={{ marginTop: "1.25rem" }}>
            <Link className="btn btn-gold" href="/contact">
              Join waitlist
            </Link>
            <Link className="btn btn-ghost" href="/products/databot">
              Use AI DataBot beta first
            </Link>
          </div>
          <p className="disclaimer" role="note">
            <strong>Disclaimer:</strong> Khaldoon Trade is a signal-only research platform. It is not investment advice,
            does not manage funds, does not execute trades for you, and does not guarantee returns. Trading involves risk,
            including possible loss of capital. Paper trading context is for learning and review only.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container product-grid">
          {[
            ["Coming soon", "Not available for purchase yet — waitlist only."],
            ["Signal-only", "Market signals and analysis — not managed trading."],
            ["Research platform", "Built for review and context, not promises."],
            ["Paper trading", "Practice and evaluate ideas without treating signals as instructions."],
            ["Indicators + AI notes", "Technical context with narrative summaries."],
            ["Telegram delivery", "Alert channel planned for launch."],
          ].map(([title, body]) => (
            <article className="panel" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
