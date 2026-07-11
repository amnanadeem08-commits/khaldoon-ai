import type { Metadata } from "next";
import Link from "next/link";
import { ProductPreview } from "@/components/ProductPreview";
import { ScreenshotSlot } from "@/components/ScreenshotSlot";

export const metadata: Metadata = {
  title: "Excel MVP",
  description:
    "Excel MVP by Khaldoon AI — KPI and dashboard templates that turn messy spreadsheets into clear reporting packs.",
};

export default function ExcelMvpPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Hero product · Excel MVP</p>
          <h1>Excel files your team can actually present.</h1>
          <p className="lead">
            KPI packs and dashboard workbooks for finance, sales, HR, and inventory — structured for weekly and monthly reporting.
          </p>
          <div className="cta-row" style={{ marginTop: "1.25rem" }}>
            <Link className="btn btn-gold" href="/contact">
              Request Excel MVP
            </Link>
            <Link className="btn btn-ghost" href="/pricing">
              See packages
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Before → after</p>
            <h2 className="section-title">From spreadsheet mess to a readable pack</h2>
          </div>
          <div className="before-after">
            <div className="ba-card">
              <h3>Before</h3>
              <p>Scattered tabs, unclear KPIs, manual updates, and reports that take too long to explain in a meeting.</p>
            </div>
            <div className="ba-card">
              <h3>After</h3>
              <p>One pack with summary KPIs, charts, and a layout your team can refresh and share without rebuilding from scratch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <ScreenshotSlot label="Excel MVP — main dashboard tab" />
          <ScreenshotSlot label="Excel MVP — KPI summary view" />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <h2 className="section-title">What is included</h2>
            <ul className="feature-list">
              <li>
                <strong>Dashboard previews</strong>
                <span>Summary sheets designed for operators and managers.</span>
              </li>
              <li>
                <strong>Feature comparison</strong>
                <span>Choose the pack that matches your reporting need.</span>
              </li>
              <li>
                <strong>Export-ready structure</strong>
                <span>Workbooks built to share as files — Gumroad delivery when your store link is live.</span>
              </li>
              <li>
                <strong>Next step</strong>
                <span>Need AI insights on top of Excel? Continue to AI DataBot beta.</span>
              </li>
            </ul>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/products/databot">
                Next: AI DataBot
              </Link>
            </div>
          </div>
          <ProductPreview title="Excel pack preview" caption="Illustrative layout — replace with real workbook screenshots." variant="excel" />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Pack comparison
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Pack</th>
                  <th>Best for</th>
                  <th>Includes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Financial</td>
                  <td>Cash, P&amp;L-style summaries, monthly finance reviews</td>
                  <td>KPI sheet, charts, editable inputs</td>
                </tr>
                <tr>
                  <td>Sales</td>
                  <td>Pipeline and performance reporting</td>
                  <td>KPI sheet, trend charts, category breakdown</td>
                </tr>
                <tr>
                  <td>HR</td>
                  <td>Headcount and people operations summaries</td>
                  <td>KPI sheet, simple workforce views</td>
                </tr>
                <tr>
                  <td>Inventory</td>
                  <td>Stock and movement visibility</td>
                  <td>KPI sheet, status views</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="lead" style={{ marginTop: "1rem" }}>
            TODO: attach real export samples and GIF walkthroughs when available.
          </p>
          <div className="cta-row">
            <Link className="btn btn-gold" href="/contact">
              Request Excel MVP
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
