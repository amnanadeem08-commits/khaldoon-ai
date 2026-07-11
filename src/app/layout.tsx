import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-loaded",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-loaded",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khaldoonai.com"),
  title: {
    default: "Khaldoon AI — Excel dashboards, AI analytics, custom BI",
    template: "%s | Khaldoon AI",
  },
  description:
    "Turn Excel files into dashboards, automate reporting, and explore AI-assisted business intelligence with Khaldoon AI.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Khaldoon AI",
    description: "Turn Excel files into dashboards. Automate reporting. Build AI-assisted business intelligence.",
    url: "https://khaldoonai.com",
    siteName: "Khaldoon AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaldoon AI",
    description: "Turn Excel files into dashboards. Automate reporting. Build AI-assisted business intelligence.",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Khaldoon AI",
  url: "https://khaldoonai.com",
  email: "hello@khaldoonai.com",
  logo: "https://khaldoonai.com/favicon.svg",
  sameAs: ["https://github.com/amnanadeem08-commits/khaldoon-ai"],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Khaldoon AI",
  url: "https://khaldoonai.com",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I start with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most teams start with Excel MVP templates, then move to AI DataBot beta if they need assisted analysis.",
      },
    },
    {
      "@type": "Question",
      name: "Is Khaldoon Trade available now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Khaldoon Trade is coming soon as a signal-only research platform. It does not guarantee returns.",
      },
    },
    {
      "@type": "Question",
      name: "How do service packages work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose a Business Dashboard, AI Analytics, or Automation package, then request a scoped quote after discovery.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body
        style={{
          ["--font-display" as string]: "var(--font-display-loaded), Georgia, serif",
          ["--font-body" as string]: "var(--font-body-loaded), Segoe UI, sans-serif",
        }}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <JsonLd data={faqLd} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
