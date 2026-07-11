"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark, LogoWord } from "./Logo";

const links = [
  { href: "/", label: "Home", exact: true },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <nav className={`nav${open ? " open" : ""}`} aria-label="Primary">
          <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
            <LogoMark size={40} />
            <LogoWord />
          </Link>

          <div className="nav-actions">
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="primary-menu"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
            <Link className="nav-cta nav-cta-desktop" href="/contact" onClick={() => setOpen(false)}>
              Start a project
            </Link>
          </div>

          <ul id="primary-menu" className="nav-links">
            {links.map((link) => {
              const active = link.exact ? pathname === link.href : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={active ? "active" : undefined}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="nav-cta-mobile-item">
              <Link className="nav-cta nav-cta-mobile" href="/contact" onClick={() => setOpen(false)}>
                Start a project
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
