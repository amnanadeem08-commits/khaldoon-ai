# Khaldoon AI — Website Audit Report

**Date:** 2026-07-12  
**Scope:** Local Next.js company site (`khaldoon-ai`) before public launch  
**Mode:** Audit only — **no implementation** until approval  

---

## Executive verdict

Brand foundation is **strong** (navy/gold, interlocking mark, tagline, clean layout).  
The site is **not launch-ready** as a software company website: too much **internal founder/strategy language**, **broken lead capture**, and **empty trust surfaces** (Blog / Case Studies / Pricing honesty).

**Launch gate:** Complete **P0** before connecting `khaldoonai.com` publicly.

| Severity | Count |
|----------|------:|
| Critical | 4 |
| High | 7 |
| Medium | 8 |
| Low | 1 |

---

## Scores by dimension (1–5)

| # | Dimension | Score | Snapshot |
|---|-----------|------:|----------|
| 1 | Navigation | 3 | Complete but overstuffed; mobile CTA gap |
| 2 | Information hierarchy | 3 | Home brand-first good; inner pages thin |
| 3 | Visual consistency | 4 | Tokens / panels consistent |
| 4 | Typography | 4 | Serif/sans on-brand |
| 5 | White space | 4 | Generally generous |
| 6 | Colors | 4 | On-brand; gold small-text contrast risk |
| 7 | CTA placement | 2 | Present but inconsistent / some broken promises |
| 8 | Trust building | 1 | Placeholders, no proof, no founder face |
| 9 | SEO | 2 | Meta titles OK; no sitemap / OG image / schema / content |
| 10 | Accessibility | 2 | Basics only; focus / motion gaps |
| 11 | Mobile responsiveness | 3 | Grids collapse; menu CTA missing |
| 12 | Performance | 4 | Light stack; watch images later |
| 13 | Conversion optimization | 2 | Messaging fights conversion |
| 14 | Product messaging | 3 | Clear structure; lacks proof |
| 15 | Services messaging | 2 | Keyword list, not sellable offers |
| 16 | Pricing clarity | 1 | Seller goals ≠ buyer prices |
| 17 | Contact flow | 1 | `mailto:` dead-end |
| 18 | Footer completeness | 3 | Links OK; legal / social missing |
| 19 | Internal linking | 3 | Footer helps; body weak |
| 20 | Brand consistency | 4 | Strong palette/mark; official PNGs unused |

---

## Prioritized recommendations

### P0 — Before public launch (approve first)

1. Rewrite all **customer-facing copy** (remove internal strategy language)  
2. Fix **working contact / lead capture**  
3. **Hide** empty Blog (and Case Studies until real) from nav  
4. Rewrite **Pricing** for buyers  
5. Fix **mobile menu primary CTA**

### P1 — First conversion week

6. Real Excel buy path or honest CTA wording  
7. Product **screenshots / demo**  
8. Trim navigation  
9. Repackage **Services** into 3–5 offers  
10. Rewrite **About** for trust  

### P2 — SEO & polish

11. Technical SEO (sitemap, robots, OG, JSON-LD)  
12. CTA map consistency  
13. Accessibility (skip link, focus, reduced motion, contrast)  
14. Footer legal + social  
15. Stronger internal linking; integrate official logo assets  

---

## Findings (Problem · Why · Severity · Solution)

### A1 — Internal founder language exposed
- **Problem:** Labels/copy like “Lead magnet”, “Freelance delivery that funds the company”, “Stage 1 cash flow”, “Built to convert, then to compound”, Gumroad-ready / revenue-path language.
- **Why it matters:** Visitors judge you as a company selling to *them*. Internal roadmap language destroys trust.
- **Severity:** Critical  
- **Solution:** Rewrite every page for customer outcomes. Keep strategy language in Notion/PIOS only.

### A2 — Contact form is not a real pipeline
- **Problem:** Form uses `mailto:hello@khaldoonai.com`; inbox may not exist; no success/error UX.
- **Why it matters:** Primary conversion path fails silently on many browsers.
- **Severity:** Critical  
- **Solution:** Formspree / Resend / API route + verified inbox; thank-you state.

### A3 — Trust pages are placeholders in public
- **Problem:** Case Studies say “Placeholder stories…”. Blog is “Upcoming” titles only.
- **Why it matters:** Looks unfinished; hurts SEO and credibility.
- **Severity:** Critical  
- **Solution:** Remove Blog from nav until ≥1 real post. Case Studies: real/anonymized story or remove from nav.

### A4 — Pricing shows seller goals, not buyer prices
- **Problem:** Shows freelancing target band and SaaS path to “$1000+/mo”; “Scoped” / “Beta” without buyer clarity.
- **Why it matters:** Confuses purchase decision; feels amateur.
- **Severity:** Critical  
- **Solution:** Buyer tiers only (e.g. Free template · Pack $X · Custom quote · Beta waitlist). No ARR targets.

### A5 — Excel “Buy now” does not buy
- **Problem:** CTA goes to Contact; no Gumroad/checkout.
- **Why it matters:** Broken promise → bounce.
- **Severity:** High  
- **Solution:** Live purchase URL, or rename CTA to “Request pack” until store is live.

### A6 — No product visual proof
- **Problem:** No screenshots, video, or UI on product landings (copy even promises screenshots/video).
- **Why it matters:** Analytics products convert on visual proof.
- **Severity:** High  
- **Solution:** 1–3 real screenshots or short Loom per product.

### A7 — Navigation overpromises for a thin site
- **Problem:** 7 primary links for pre-launch content depth.
- **Why it matters:** Sends traffic into empty/thin pages.
- **Severity:** High  
- **Solution:** Trim to Products · Services · Pricing · About · Contact (+ Case Studies when real).

### A8 — Mobile menu hides primary CTA
- **Problem:** `.nav.open .nav-cta { display: none }` — “Start a project” never appears in mobile menu.
- **Why it matters:** Highest-intent action missing on phones.
- **Severity:** High  
- **Solution:** Show CTA inside open mobile menu.

### A9 — Technical SEO incomplete
- **Problem:** No `sitemap`, `robots.txt`, OG images, per-page Open Graph, or JSON-LD.
- **Why it matters:** Weak crawl/share readiness at domain launch.
- **Severity:** High  
- **Solution:** Add `sitemap.ts`, `robots.ts`, default OG image, Organization + WebSite schema.

### A10 — Services are a keyword grid
- **Problem:** 10 cards share identical boilerplate; H1 frames freelancing as company funding.
- **Why it matters:** Not sellable; SEO thin; wrong message.
- **Severity:** High  
- **Solution:** 3–5 packages (e.g. Power BI Sprint, Excel Automation, AI Insight Pack) with outcomes, deliverables, timeline, “from $X / scoped”.

### A11 — About is a founder memo
- **Problem:** “From builder to founder” + cash-flow/SaaS engine framing.
- **Why it matters:** Buyers want credibility and who you serve.
- **Severity:** High  
- **Solution:** Who we help · what we deliver · founder bio/photo · proof points.

### A12 — CTA language conflicts across site
- **Problem:** Start a project / Book a call / Buy now / Request beta / Join waitlist / Get a quote.
- **Why it matters:** Unclear primary path.
- **Severity:** Medium  
- **Solution:** One primary CTA per page type; secondary optional.

### A13 — Accessibility gaps
- **Problem:** No skip link; no `:focus-visible`; hero `drift` animation ignores `prefers-reduced-motion`.
- **Why it matters:** Keyboard / vestibular accessibility risk.
- **Severity:** Medium  
- **Solution:** Skip to `#main`; focus rings; disable animation under reduced-motion.

### A14 — Gold on cream for small text
- **Problem:** Meta/eyebrow uses gold `#B58E45` at small sizes on cream.
- **Why it matters:** Likely fails WCAG AA for small text.
- **Severity:** Medium  
- **Solution:** Navy for small labels; gold for large accents / decoration.

### A15 — Footer incomplete for a company
- **Problem:** No Privacy, Terms, social, or live email.
- **Why it matters:** Trust + legal baseline for a real company site.
- **Severity:** Medium  
- **Solution:** Minimal Privacy/Terms stubs; LinkedIn; email when live.

### A16 — Internal linking underused
- **Problem:** Weak body cross-links; Trade weighted similarly to Excel/Services in Phase 1.
- **Why it matters:** Conversion & SEO paths diluted.
- **Severity:** Medium  
- **Solution:** Related links on product/service pages; soft-pedal Trade until Month 3.

### A17 — Official brand assets unused
- **Problem:** SVG recreation only; provided PNG logos not in `public/`.
- **Why it matters:** Brand fidelity below available identity.
- **Severity:** Medium  
- **Solution:** Drop official horizontal + favicon into header/footer when available.

### A18 — Home hero hierarchy slightly noisy
- **Problem:** Eyebrow “Khaldoon AI” + giant brand word + H1 tagline compete.
- **Why it matters:** Minor hierarchy noise (brand-first intent is correct).
- **Severity:** Medium  
- **Solution:** Keep giant brand + tagline H1; remove redundant eyebrow.

### A19 — Performance fine for now
- **Problem:** Continuous animation; future screenshots need `next/image`.
- **Why it matters:** Low risk until media-heavy.
- **Severity:** Low  
- **Solution:** Reduced-motion; optimize images when added.

### A20 — Trade risk messaging light
- **Problem:** “No guaranteed profits” exists but not prominent enough for a signal product.
- **Why it matters:** Trust / compliance posture if promoted early.
- **Severity:** Medium  
- **Solution:** Clear disclaimer block; keep Coming Soon; avoid investment claims.

---

## Page-by-page review

| Page | Verdict | Notes |
|------|---------|-------|
| **Home** | Strong brand first viewport; weak commercial proof after | Remove “Lead magnet”. Add proof later. |
| **Products** | Clear trio | Rewrite “Built to convert…” for buyers. |
| **Excel MVP** | Best structure; conversion broken | Buy now ≠ purchase. Missing promised screenshots/video. |
| **AI DataBot** | Clear workflow | Needs UI proof + beta criteria. |
| **Khaldoon Trade** | Honest coming-soon | Overexposed for Phase 1; strengthen disclaimer. |
| **Services** | Not sellable | Repackage; fix H1. |
| **Case Studies** | Not launch-ready | Placeholders — hide or replace. |
| **Pricing** | Confuses buyers | Seller goals → buyer tiers. |
| **About** | Founder memo | Customer trust rewrite. |
| **Blog** | SEO theater | Remove from nav until published. |
| **Contact** | Layout good; mechanism broken | Highest priority functional fix. |
| **Header / Footer** | On-brand | Mobile CTA; legal/social; real contact. |

---

## What is already good (keep)

- Brand-first home hero (name dominates viewport)  
- Consistent navy / gold / cream system  
- Interlocking-circle mark + OO color logic  
- Clean section rhythm and card system  
- Product IA (Excel → DataBot → Trade) matches roadmap  
- Per-page `<title>` / description metadata present  
- Trade “no guaranteed profits” intent (needs stronger presentation)

---

## Approval ask

Reply with one of:

1. **Approve P0 only** — messaging + contact + hide empty pages + pricing + mobile CTA  
2. **Approve P0 + P1** — also screenshots placeholders, nav trim, services packages, About  
3. **Approve full P0–P2** — include SEO/a11y/footer polish  
4. **Hold** — no changes yet  

No code changes will be made until you approve.
