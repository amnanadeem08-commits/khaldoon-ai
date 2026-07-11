import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Khaldoon AI — who we help, problems we solve, how we work, technologies, mission, vision, and roadmap.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>A software company for clearer business decisions.</h1>
          <p className="lead">
            Khaldoon AI builds Excel products, AI analytics software, and custom delivery packages for teams that need reporting they can trust.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container why-grid">
          <article className="panel">
            <span className="meta">Who we help</span>
            <h3>Operators, managers, and lean teams</h3>
            <p>People who need weekly or monthly visibility without standing up a full analytics department.</p>
          </article>
          <article className="panel">
            <span className="meta">Problems we solve</span>
            <h3>Messy files, slow reporting, unclear KPIs</h3>
            <p>We turn scattered spreadsheets and raw datasets into dashboards, automated refresh paths, and decision-ready summaries.</p>
          </article>
          <article className="panel">
            <span className="meta">How we work</span>
            <h3>Decision first, then tools</h3>
            <p>We clarify the audience and cadence, choose Excel / Power BI / automation / AI analysis, then ship a usable artifact with handoff notes.</p>
          </article>
          <article className="panel">
            <span className="meta">Technologies</span>
            <h3>Practical stack</h3>
            <div className="tag-row">
              {["Excel", "Power BI", "Python", "FastAPI", "SQL", "Next.js", "Streamlit"].map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <h2 className="section-title">Mission</h2>
            <p className="lead">Make business intelligence usable for teams that still live in spreadsheets and operational tools.</p>
            <h2 className="section-title" style={{ marginTop: "2rem" }}>
              Vision
            </h2>
            <p className="lead">
              One brand across templates, custom delivery, AI analytics, and — later — honest market research tools.
            </p>
          </div>
          <div className="panel">
            <span className="meta">Roadmap</span>
            <ul className="feature-list">
              <li>
                <strong>Now</strong>
                <span>Excel MVP + service packages + contact-led delivery.</span>
              </li>
              <li>
                <strong>Next</strong>
                <span>AI DataBot beta onboarding and feedback.</span>
              </li>
              <li>
                <strong>Later</strong>
                <span>Khaldoon Trade as a signal-only research platform.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container panel">
          <span className="meta">Founder</span>
          <h2 className="section-title">Founder</h2>
          <p>
            Khaldoon AI is founded and operated by Amna. Work spans Excel products, AI analytics software, and client analytics delivery.
          </p>
          <p style={{ color: "var(--muted)" }}>
            TODO: add founder photo and a short professional bio when ready. No invented credentials.
          </p>
          <div className="cta-row" style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary" href="/contact">
              Work with us
            </Link>
            <Link className="btn btn-ghost" href="/products">
              View products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
