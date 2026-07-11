import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Customer packages for Excel MVP, AI DataBot beta, and Khaldoon AI service delivery.",
};

const packages = [
  {
    meta: "Product",
    title: "Excel MVP",
    price: "Starting from",
    detail: "Custom quote per pack until Gumroad checkout is connected.",
    points: ["KPI / dashboard workbook", "Editable structure", "Setup notes"],
    cta: "Request Excel MVP",
    href: "/contact",
    primary: true,
  },
  {
    meta: "Beta",
    title: "AI DataBot",
    price: "Join Beta",
    detail: "Early access — not a public buy-now plan.",
    points: ["Upload → export workflow", "Onboarding guidance", "Feedback loop during beta"],
    cta: "Join Beta",
    href: "/contact",
    primary: false,
  },
  {
    meta: "Services",
    title: "Business Dashboard Package",
    price: "Custom quote",
    detail: "Power BI / Excel dashboards scoped to your KPIs.",
    points: ["Discovery call", "Build + revision", "Handoff documentation"],
    cta: "Request a quote",
    href: "/contact",
    primary: false,
  },
  {
    meta: "Services",
    title: "AI Analytics Package",
    price: "Custom quote",
    detail: "Cleaning, insights, dashboards, and PDF reporting.",
    points: ["Dataset review", "Insight outputs", "Dashboard or report"],
    cta: "Request a quote",
    href: "/contact",
    primary: false,
  },
  {
    meta: "Services",
    title: "Automation Package",
    price: "Custom quote",
    detail: "Python, FastAPI, and Excel automation for recurring work.",
    points: ["Process review", "Working automation", "Run instructions"],
    cta: "Request a quote",
    href: "/contact",
    primary: false,
  },
  {
    meta: "Coming soon",
    title: "Khaldoon Trade",
    price: "Waitlist",
    detail: "Signal-only research platform. No guaranteed returns.",
    points: ["Waitlist access", "Launch updates", "Clear risk disclaimer"],
    cta: "Join waitlist",
    href: "/contact",
    primary: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1>Simple packages. Honest scoping.</h1>
          <p className="lead">
            Product requests and service packages are quoted after we understand your data and decisions. No hidden founder targets — only what you can buy or join.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container pricing-grid">
          {packages.map((p) => (
            <article className="panel" key={p.title}>
              <span className="meta">{p.meta}</span>
              <h3>{p.title}</h3>
              <p className="price">{p.price}</p>
              <p>{p.detail}</p>
              <ul className="package-list">
                {p.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className={p.primary ? "btn btn-primary" : "btn btn-ghost"} href={p.href}>
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
