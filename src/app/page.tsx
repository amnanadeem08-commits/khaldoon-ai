import Link from "next/link";
import { HeroOrbit } from "@/components/Logo";
import { ProductJourney } from "@/components/ProductJourney";
import { ProductPreview } from "@/components/ProductPreview";
import { ScreenshotSlot } from "@/components/ScreenshotSlot";

const whyItems = [
  {
    title: "Dashboards people can run a meeting from",
    body: "Power BI and Excel views built around KPIs, trends, and the next decision — not chart clutter.",
  },
  {
    title: "Reporting that does not depend on copy-paste",
    body: "Python and workbook automation to clean data and refresh reports on a repeatable schedule.",
  },
  {
    title: "AI analysis when speed matters",
    body: "AI DataBot supports upload → clean → analyze → dashboard → report → chat → export (beta).",
  },
  {
    title: "Systems that connect",
    body: "SQL analysis and FastAPI services when analytics needs to live inside existing tools.",
  },
];

const milestones = [
  { title: "Excel MVP", body: "Template packs for finance, sales, HR, and inventory reporting." },
  { title: "AI DataBot beta", body: "Assisted analytics workflow from dataset to executive report." },
  { title: "Custom delivery", body: "Dashboard, automation, and AI analytics packages for client work." },
  { title: "Khaldoon Trade", body: "Coming soon — signal-only research platform with paper trading context." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroOrbit />
        <div className="container hero-grid">
          <p className="eyebrow">Analytics for operators and teams</p>
          <h1>Turn Excel files into dashboards.</h1>
          <p className="lead">
            Automate reporting. Build AI-assisted business intelligence. Start with templates, then grow into analysis and custom delivery.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/products/excel-mvp">
              See Excel MVP
            </Link>
            <Link className="btn btn-ghost" href="/products/databot">
              Request AI DataBot Beta
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Product path</p>
            <h2 className="section-title">From messy spreadsheets to clearer decisions</h2>
            <p className="lead">Each product leads to the next when you need more depth — not more complexity up front.</p>
          </div>
          <ProductJourney />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <p className="eyebrow">Hero product</p>
            <h2 className="section-title">Excel MVP</h2>
            <p className="lead">
              Ready KPI and dashboard workbooks for teams that still live in Excel — and need something clean enough to share.
            </p>
            <div className="cta-row">
              <Link className="btn btn-gold" href="/products/excel-mvp">
                See Excel MVP
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Request a pack
              </Link>
            </div>
          </div>
          <ScreenshotSlot label="Excel MVP dashboard preview" />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2 className="section-title">Need something built for your data?</h2>
            <p className="lead">
              Business dashboards, AI analytics setups, and automation packages — scoped after a short discovery call.
            </p>
          </div>
          <div className="product-grid">
            <article className="panel panel-dark">
              <h3>Business Dashboard Package</h3>
              <p>Power BI or Excel, KPIs, reports, and an executive view your team can use weekly.</p>
            </article>
            <article className="panel panel-dark">
              <h3>AI Analytics Package</h3>
              <p>Cleaning, insight summaries, KPI detection, dashboards, and PDF-ready reporting.</p>
            </article>
            <article className="panel panel-dark">
              <h3>Automation Package</h3>
              <p>Python, FastAPI, Excel automation, and workflow glue for recurring reporting.</p>
            </article>
          </div>
          <div className="cta-row" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-gold" href="/services">
              View service packages
            </Link>
            <Link className="btn btn-ghost" href="/contact" style={{ borderColor: "var(--line-light)", color: "var(--cream)" }}>
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why Khaldoon AI</p>
            <h2 className="section-title">What we actually deliver</h2>
            <p className="lead">Capabilities we can scope and ship. No invented clients, reviews, or statistics.</p>
          </div>
          <div className="why-grid">
            {whyItems.map((item) => (
              <article className="panel" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Trust</p>
            <h2 className="section-title">Build in public — with honest status</h2>
            <p className="lead">Milestones and stack we use. Screenshots and docs land here as they become real.</p>
          </div>
          <div className="why-grid" style={{ marginBottom: "1.5rem" }}>
            {milestones.map((m) => (
              <article className="panel" key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
          <div className="split">
            <ScreenshotSlot label="Architecture / product screenshot" />
            <div className="panel">
              <span className="meta">Stack</span>
              <h3>Technologies</h3>
              <div className="tag-row">
                {["Excel", "Power BI", "Python", "FastAPI", "SQL", "Next.js", "Streamlit"].map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <ul className="feature-list" style={{ marginTop: "1rem" }}>
                <li>
                  <strong>GitHub</strong>
                  <span>
                    <a href="https://github.com/amnanadeem08-commits/khaldoon-ai" target="_blank" rel="noreferrer">
                      khaldoon-ai website repo
                    </a>
                  </span>
                </li>
                <li>
                  <strong>Documentation</strong>
                  <span>TODO: link public docs when published.</span>
                </li>
                <li>
                  <strong>Roadmap</strong>
                  <span>Excel MVP → DataBot beta → Khaldoon Trade (coming soon).</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="cta-row" style={{ marginTop: "2rem" }}>
            <Link className="btn btn-primary" href="/products/excel-mvp">
              See Excel MVP
            </Link>
            <Link className="btn btn-ghost" href="/about">
              About Khaldoon AI
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <p className="eyebrow">Preview</p>
            <h2 className="section-title">Reporting surfaces, not slideware</h2>
            <p className="lead">Illustrative layout only. Real captures replace these slots as products ship.</p>
          </div>
          <ProductPreview
            title="Dashboard layout"
            caption="Illustrative wireframe — not live client data."
            variant="dashboard"
          />
        </div>
      </section>
    </>
  );
}
