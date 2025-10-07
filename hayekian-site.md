# Claude Context File — Verified Reality Baseline (Hayekian Site)
Created: 2025-10-01T04:53:00Z  
Method: Verified-facts only (anti‑drift)  
Principle: Document reality, not intentions

Overview
- Repository: hayekian-site (public)
- Purpose: Single-page site introducing Hayekian and the toolkit with concrete proof
- Source-of-truth for visuals: coinbase-trading repo (proof assets) with CI sync to this repo

Source of truth (governance)
- Ongoing work and decisions are governed solely by this file (hayekian-site.md)
- Any prior ClickUp tasks are archival only and must not be treated as authoritative
Trigger phrases
- "start with claude"
- "check claude context"

Decisions (v1 — Locked)
- Stack: Next.js (App Router OK; static export acceptable)
- Hosting: Vercel
- Analytics: Cloudflare Web Analytics (cookie‑less)
- CTAs: Primary "See Example Output" → anchors to Proof; purchase/download CTA hidden until Gumroad is ready
- Proof visuals: Console snippet (cropped terminal) + ETF net inflow spike chart
- Compliance: Educational-only disclaimer; no performance or return claims
- Provenance: Footer shows coinbase-trading @<short_sha> and UTC build time from manifest.json

References
- Source of truth (ongoing): This file (hayekian-site.md)
- Historical spec (archival): coinbase-trading/docs/hayekian_v1_spec.md
- Historical reference (archival): https://app.clickup.com/t/86dxx22w6
Anti‑drift policy
- This file is the single source of truth for the site’s verified baseline
- Update this file whenever: decisions change, DoD changes, or governance/workflows are adjusted
- Root markdown placement policy enforced via CI (see docs-organization-check)

Definition of Done (v1)
- Content: All sections present; no dead-end CTAs
- Performance: Lighthouse (mobile) ≥95; lazy images; budgets met
- Accessibility: H1/H2 structure, contrast, focus states, alt text
- SEO: Title/meta/OG set; no broken links
- Analytics: Cloudflare Web Analytics live
- Provenance: Footer shows coinbase-trading @<sha> and UTC timestamp (manifest.json)
- Deploy: Live on Vercel (domain or preview), anchors work on mobile

Doc placement rules (summary)
- Root-level markdown allowed: README.md, hayekian-site.md, claude2.md (temporary symlink), SECURITY.md
- All other docs live under docs/

Notes
- The site is public; coinbase-trading remains private. Proof assets are synced via CI with a manifest to prevent drift.

Changelog
- 2025-10-01: Added provenance line under Proof using manifest.json (coinbase-trading @<sha>, UTC build time). Also updated hero CTA label to “See Example Output”.
- 2025-10-01: Integrated semantic design tokens (Tailwind v4 @theme) and updated landing to use bg-background, text-foreground, text-muted-foreground, bg-card, border-border, and feature token colors. No new deps.
- 2025-10-01: Added v0 Tailwind-only landing page into app/page.tsx via sanitized branch (no new deps; proof assets preserved).
- 2025-10-01: Physically removed legacy directories components/ and lib/ to keep the repo clean after reset.
- 2025-10-01: Site reset to clean slate. Removed all sections, analytics, and proof sync from the app surface. Homepage now shows a minimal "Coming soon" message. Infrastructure (repo, Vercel project, domains) retained to enable rapid redesign.
- 2025-10-01: Replaced initial Hero + Features with consolidated v0-guided section component HeroAndWhat (components/sections/HeroAndWhat.tsx). Wired into app/page.tsx, preserving Proof, CTA, FAQ, and Footer sections. Uses token-aware UI primitives (Container, Button, Card, Badge).
