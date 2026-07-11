import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business Dashboard, AI Analytics, and Automation packages from Khaldoon AI — scoped quotes for client work.",
};

const packages = [
  {
    title: "Business Dashboard Package",
    body: "A reporting system your operators and executives can use every week.",
    includes: ["Power BI or Excel delivery", "KPI design", "Reports and executive dashboard", "Handoff notes"],
    price: "Starting from — contact for quote",
  },
  {
    title: "AI Analytics Package",
    body: "From raw data to insight summaries and stakeholder-ready outputs.",
    includes: ["Data cleaning", "AI insights", "KPI detection", "Dashboard", "PDF reports"],
    price: "Starting from — contact for quote",
  },
  {
    title: "Automation Package",
    body: "Remove repetitive reporting work from your team’s week.",
    includes: ["Python automation", "FastAPI workflows", "Excel automation", "CRM / workflow automation where scoped"],
    price: "Starting from — contact for quote",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Packages built around outcomes.</h1>
          <p className="lead">
            Choose a package, tell us about your data and decisions, and we return a scoped quote — not a vague hourly pitch.
          </p>
          <div className="cta-row" style={{ marginTop: "1.25rem" }}>
            <Link className="btn btn-primary" href="/contact">
              Request a quote
            </Link>
            <Link className="btn btn-ghost" href="/pricing">
              Compare pricing
            </Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container service-grid">
          {packages.map((s) => (
            <article className="panel" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="package-list">
                {s.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="meta">{s.price}</p>
              <Link className="btn btn-ghost" href="/contact">
                Discuss this package
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
