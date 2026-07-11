import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description: "Excel MVP, AI DataBot beta, and Khaldoon Trade — the Khaldoon AI product path.",
};

const products = [
  {
    href: "/products/excel-mvp",
    meta: "Start here",
    title: "Excel MVP",
    body: "Turn messy spreadsheets into KPI packs and dashboard workbooks your team can present.",
    cta: "See Excel MVP",
  },
  {
    href: "/products/databot",
    meta: "Next · Beta",
    title: "AI DataBot",
    body: "When Excel is not enough — upload, clean, analyze, dashboard, report, chat, and export.",
    cta: "Join Beta",
  },
  {
    href: "/products/khaldoon-trade",
    meta: "Later · Coming soon",
    title: "Khaldoon Trade",
    body: "Signal-only research platform with paper trading context. No guaranteed returns.",
    cta: "Join waitlist",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>A simple path from files to insight.</h1>
          <p className="lead">
            Start with Excel MVP. Move to AI DataBot when you need assisted analysis. Explore Khaldoon Trade later as a research tool.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container product-grid">
          {products.map((p) => (
            <article className="panel" key={p.href}>
              <span className="meta">{p.meta}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <Link className="btn btn-primary" href={p.href}>
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
