# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project summary
- Stack: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- Purpose: Public, single‑page marketing site with a “Proof” section sourced from external artifacts
- Deployment: Push to main → Vercel auto‑deploys (see README)

Common commands
- Dev server
  - npm run dev
- Build
  - npm run build
- Start (after a build)
  - npm start
- Type check (no emit)
  - npx tsc --noEmit
- Tests
  - Not configured in v1 (npm test prints a placeholder and exits). Single‑test: N/A.

High‑level architecture
- Routing (Next.js App Router)
  - app/layout.tsx — global <html> shell and metadata; imports app/globals.css
  - app/page.tsx — the landing page (Hero, Features, Proof, Pricing, FAQ, Footer)
  - app/lab/page.tsx — client‑only “Look & Feel Lab” that live‑tunes design tokens via CSS variables and persists theme to localStorage
  - app/og-preview/page.tsx — intentionally 404 via notFound(), placeholder for future OG tooling

- Styling & design tokens
  - Tailwind v4 with a token layer:
    - app/globals.css imports Tailwind and app/styles/tokens.css
    - app/styles/tokens.css defines @theme tokens for light/dark and maps them to CSS variables
    - Base layer applies tokens to body and border defaults; components use semantic classes (bg-background, text-foreground, bg-card, border-border, etc.)

- Proof assets & provenance
  - Static artifacts live under public/proof/latest/ (console_snippet.png, etf_inflow.png, manifest.json)
  - app/page.tsx reads public/proof/latest/manifest.json on the server (fs.readFileSync) to render provenance: coinbase-trading @<sha> and build time (UTC)
  - Manifest fields expected: { source_repo, source_sha, built_at_utc, assets }

- Configuration
  - next.config.ts — reactStrictMode enabled; redirect canonicalizes www → apex (www.hayekian.io → hayekian.io)
  - tsconfig.json — strict TS, Bundler module resolution, includes only app/**/* and Next types; no emit in repo

Development notes specific to this repo
- There is no ESLint/Prettier setup in v1; rely on TypeScript strictness and Next build/type‑checks
- The lab route (/lab) is for visual tuning of tokens and primitives; adjust CSS variables to explore scale/density/radius/contrast and theme class (theme-dark/light)

Governance and docs (from claude2.md and docs/README)
- Verified baseline (claude2.md)
  - Single source of truth for decisions and anti‑drift; update when decisions/DoD/workflows change
  - Trigger phrases: “start with claude”, “check claude context”
  - Decisions (v1): Next.js App Router, Vercel hosting, Cloudflare Web Analytics (cookie‑less), educational disclaimer, provenance footer (coinbase-trading @<sha>, UTC build time)
- Documentation placement policy
  - Root markdown allowed: README.md, claude2.md, SECURITY.md
  - All other docs belong in docs/
  - docs/README describes checks: docs-organization-check (root .md guard) and docs-link-check (link scan)

Operational tips (non‑obvious)
- To verify provenance locally, ensure public/proof/latest/manifest.json is present; the homepage will fall back to “unknown” values if absent
- To preview a production build locally, run: npm run build && npm start (Next’s production server)
