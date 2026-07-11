import type { Metadata } from "next";
import Link from "next/link";
import { ProductPreview } from "@/components/ProductPreview";
import { ScreenshotSlot } from "@/components/ScreenshotSlot";

export const metadata: Metadata = {
  title: "AI DataBot",
  description:
    "AI DataBot beta by Khaldoon AI — upload, clean, analyze, dashboard, executive report, AI chat, and export.",
};

const workflow = [
  ["Upload", "Bring in your dataset."],
  ["Clean", "Prepare fields for analysis."],
  ["Analyze", "Run assisted analysis on the prepared data."],
  ["Dashboard", "Review KPI and chart views."],
  ["Executive report", "Package findings for stakeholders."],
  ["AI chat", "Ask follow-up questions on the analysis."],
  ["Export", "Share outputs with your team."],
];

export default function DataBotPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Product · Beta</p>
          <h1>From dataset to executive report.</h1>
          <p className="lead">
            AI DataBot helps teams move through upload, cleaning, analysis, dashboards, reporting, chat, and export — without buying a finished enterprise suite first.
          </p>
          <div className="cta-row" style={{ marginTop: "1.25rem" }}>
            <Link className="btn btn-primary" href="/contact">
              Join Beta
            </Link>
            <Link className="btn btn-ghost" href="/products/excel-mvp">
              Start with Excel MVP
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <h2 className="section-title">Workflow</h2>
            <ol className="workflow">
              {workflow.map(([title, body], index) => (
                <li key={title}>
                  <span className="workflow-num">{index + 1}</span>
                  <div>
                    <strong>{title}</strong>
                    <p style={{ margin: "0.2rem 0 0", color: "var(--muted)" }}>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <ProductPreview
              title="DataBot workspace"
              caption="Illustrative beta UI — replace with real screenshots."
              variant="databot"
            />
            <div style={{ marginTop: "1rem" }}>
              <ScreenshotSlot label="AI DataBot — dashboard / chat view" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Beta</p>
            <h2 className="section-title">Join Beta — not buy now</h2>
            <p className="lead">
              DataBot is in early access. We onboard carefully, collect feedback, and expand features as the product stabilizes.
            </p>
          </div>
          <div className="flow">
            {["Upload", "Clean", "Analyze", "Dashboard", "Report", "Chat", "Export"].map((step) => (
              <div className="flow-step" key={step}>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <div className="cta-row" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-gold" href="/contact">
              Join Beta
            </Link>
            <Link className="btn btn-ghost" href="/products/khaldoon-trade" style={{ borderColor: "var(--line-light)", color: "var(--cream)" }}>
              Later: Khaldoon Trade
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
