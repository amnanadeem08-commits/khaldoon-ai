import Link from "next/link";

const steps = [
  {
    title: "Messy Excel",
    body: "Spreadsheets that are hard to read, hard to refresh, and hard to share.",
  },
  {
    title: "Excel MVP",
    body: "Clean templates and KPI packs your team can open today.",
    href: "/products/excel-mvp",
  },
  {
    title: "Need AI insights?",
    body: "Move from files to assisted analysis, dashboards, and reports.",
    href: "/products/databot",
  },
  {
    title: "AI DataBot",
    body: "Upload, clean, analyze, dashboard, report, chat, export — currently in beta.",
    href: "/products/databot",
  },
  {
    title: "Need market intelligence?",
    body: "Signal-only research tools for later — honest coming-soon status.",
    href: "/products/khaldoon-trade",
  },
  {
    title: "Khaldoon Trade",
    body: "Coming soon. No guaranteed returns.",
    href: "/products/khaldoon-trade",
  },
];

export function ProductJourney() {
  return (
    <ol className="journey">
      {steps.map((step, index) => (
        <li className="journey-step" key={step.title}>
          <span className="journey-index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
          {step.href ? (
            <Link href={step.href} className="journey-link">
              Learn more
            </Link>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
