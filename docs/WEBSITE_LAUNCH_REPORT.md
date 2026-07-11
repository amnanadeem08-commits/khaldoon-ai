# Khaldoon AI — Website Launch Report

**Date:** 2026-07-12  
**Branch:** `develop`  
**Domain:** khaldoonai.com  
**Repo:** https://github.com/amnanadeem08-commits/khaldoon-ai  

---

## Summary

The site was upgraded from a thin brand brochure into a **conversion-oriented software company website** without replacing the visual identity (navy / gold / cream, typography, component language).

Primary funnel order is now explicit:

1. **Excel MVP** (sell / request first)  
2. **AI DataBot beta** (join waitlist / beta)  
3. **Services** (freelance / package quotes)  
4. **Company trust** (About, roadmap, stack, honest placeholders)  
5. **Khaldoon Trade** (visible, coming soon, strong disclaimer)

---

## Changes made

### Home
- Outcome-first hero: “Turn Excel files into dashboards.”
- CTAs: **See Excel MVP** · **Request AI DataBot Beta**
- Product journey path (messy Excel → Excel MVP → DataBot → Trade)
- Excel highlighted as hero product with screenshot TODO slots
- Service package teaser + Why Khaldoon AI (factual only)
- Trust block: milestones, stack, GitHub, roadmap TODOs — no fake testimonials

### Products
- Repositioned as a customer journey (start → next → later)
- **Excel MVP:** before/after, comparison table, screenshot placeholders marked “Replace with real screenshot”, next-step to DataBot
- **AI DataBot:** full workflow (Upload → Clean → Analyze → Dashboard → Executive report → AI chat → Export), **Join Beta** (not Buy now)
- **Khaldoon Trade:** Coming soon + signal-only + paper trading + prominent disclaimer

### Services
- Three outcome packages: Business Dashboard, AI Analytics, Automation
- “Starting from — contact for quote”

### Pricing
- Fully customer-facing packages only
- Starting from / Custom quote / Join Beta / Waitlist
- No founder revenue targets

### Contact
- Production-ready form: Name, Email, Company, Project type, Budget, Message
- Loading / success / error states
- API supports Formspree, Web3Forms, Resend, FormSubmit

### Navigation & footer
- Nav: Home, Products, Services, Pricing, About, Contact
- Blog / Case Studies remain hidden (redirect home)
- Footer: Products, Services, Company, Privacy, Terms, LinkedIn TODO, GitHub, email, copyright

### About
- Who we help, problems, how we work, technologies, mission, vision, roadmap, founder section with TODO for photo/bio

### SEO
- `robots.ts`, `sitemap.ts`
- Open Graph + Twitter image routes
- Organization, WebSite, FAQ JSON-LD

### Accessibility
- Skip to content
- `:focus-visible` styles
- `prefers-reduced-motion` disables hero animation
- `aria-current` / `aria-expanded` / live regions on form
- Stronger eyebrow contrast (navy instead of gold for small text)

---

## UX improvements
- Clearer primary path on every major page
- Mobile CTA remains visible (header + menu)
- Honest placeholders instead of invented proof
- Reduced nav noise (no empty Blog/Case Studies)

## Conversion improvements
- Excel-first CTAs sitewide
- DataBot beta language (Join Beta)
- Service packages mapped to quote form project types
- Pricing cards map 1:1 to actions

## SEO improvements
- Crawlable sitemap + robots
- Social cards via `opengraph-image` / `twitter-image`
- Structured data for organization, website, FAQ

## Accessibility improvements
- Keyboard focus visibility
- Skip link
- Reduced motion
- Form status announced politely

---

## Remaining TODO before public launch

| Item | Why |
|------|-----|
| Configure Formspree / Web3Forms / Resend env on Vercel | Real lead delivery |
| Verify `hello@khaldoonai.com` inbox | Reply path |
| Replace screenshot slots with real Excel / DataBot captures | Conversion proof |
| Connect Gumroad URLs for Excel packs | Direct product sales |
| Add real LinkedIn profile URL in footer | Social proof / discovery |
| Founder photo + short bio | About completeness |
| Counsel review of Privacy / Terms | Legal readiness |
| Optional: real case study page when one exists | Trust ceiling |
| Deploy to Vercel + connect `khaldoonai.com` | Go live |

---

## Launch recommendation

**Soft-launch ready** after contact env + domain DNS.  
**Full public launch** after real screenshots + Gumroad link + verified inbox.

Do not invent testimonials, logos, or statistics to fill gaps — replace TODOs with real artifacts only.
