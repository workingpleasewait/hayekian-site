# Documentation (Hayekian Site)

Purpose
- Keep documentation accurate, organized, and drift‑free.

Placement policy (enforced by CI)
- Root-level markdown allowed only: README.md, claude2.md, SECURITY.md
- All other docs belong under docs/

Suggested structure
- docs/guides/ — How‑to guides and operations notes
- docs/specs/ — Specifications (e.g., one‑pager spec copies or diffs)
- docs/reports/ — Verification/proof reports (optional; can link to external artifacts)

Workflows
- docs-organization-check: fails PRs that add non‑whitelisted root .md files
- docs-link-check: scans changed markdown for dead links (lightweight)

Authoritative baseline
- See claude2.md at repo root for the verified baseline and decisions locked.
- The v1 site spec lives in coinbase-trading (source of truth) and is referenced from claude2.md.
