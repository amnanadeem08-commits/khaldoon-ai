import Link from "next/link";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <LogoMark size={36} />
              <p className="footer-brand">
                Khald<span className="gold">oo</span>n AI
              </p>
            </div>
            <p>Excel products, AI analytics, and custom dashboards for clearer business decisions.</p>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><Link href="/products/excel-mvp">Excel MVP</Link></li>
              <li><Link href="/products/databot">AI DataBot</Link></li>
              <li><Link href="/products/khaldoon-trade">Khaldoon Trade</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">All packages</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Request a quote</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  LinkedIn (TODO: profile URL)
                </a>
              </li>
              <li>
                <a href="https://github.com/amnanadeem08-commits/khaldoon-ai" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:hello@khaldoonai.com">hello@khaldoonai.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Khaldoon AI. All rights reserved.</span>
          <span>Intelligence that creates impact.</span>
        </div>
      </div>
    </footer>
  );
}
