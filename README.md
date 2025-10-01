# hayekian-site

Public landing site for Hayekian.

- Tech: Next.js (App Router) + Tailwind v4
- Design tokens: app/styles/tokens.css (Tailwind @theme)
- Entry page: app/page.tsx (Tailwind-only, no external UI libs)
- Proof assets: public/proof/latest/* (console_snippet.png, etf_inflow.png, manifest.json)
- Provenance: Proof section shows coinbase-trading @<sha> and UTC build time from manifest
- Governance: See claude2.md for verified baseline and changelog

Local dev
- npm run dev

Deploy
- Push to main → Vercel auto‑deploys

Notes
- Repo has been cleaned of legacy components and extra branches for a lean baseline.
