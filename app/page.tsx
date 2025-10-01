import fs from 'node:fs';
import path from 'node:path';
import { HeroAndWhat } from "../components/sections/HeroAndWhat";
import { ProofSection } from "../components/sections/ProofSection";
import { CtaRibbon } from "../components/sections/CtaRibbon";
import { FaqSection } from "../components/sections/FaqSection";
import { SiteFooter } from "../components/sections/SiteFooter";

type Manifest = {
  source_repo: string;
  source_sha: string;
  built_at_utc: string;
  assets: string[];
};

async function getManifest(): Promise<Manifest | null> {
  try {
    const p = path.join(process.cwd(), 'public', 'proof', 'latest', 'manifest.json');
    const json = fs.readFileSync(p, 'utf8');
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export default async function Page() {
  const manifest = await getManifest();
  const sha = manifest?.source_sha ?? 'unknown';
  const builtAt = manifest?.built_at_utc ?? 'unknown time';

  return (
    <main className="min-h-dvh">
      <HeroAndWhat />

      <section id="why" className="container">
        <h2>Why It Helps</h2>
        <p>
          When dollar strength (DXY) rises and ETF flows weaken, BTC often ‘sulks.’ When flows surge and
          volatility picks up, BTC ‘gets excited.’ This toolkit turns those patterns into a simple, daily
          plan you can repeat.
        </p>
      </section>

      <ProofSection sha={sha} builtAt={builtAt} />
      <CtaRibbon />

      <section id="included" className="container">
        <h2>What’s Included</h2>
        <ul>
          <li>CLI + configs</li>
          <li>Sample outputs</li>
          <li>5‑page Quickstart PDF</li>
          <li>Disclaimer</li>
        </ul>
      </section>

      <section id="pricing" className="container">
        <h2>Pricing</h2>
        <p>Early Access — coming soon</p>
        <p className="note">Planned options include fixed $29 or pay‑what‑you‑want (min $19).</p>
      </section>

      <section id="philosophy" className="container">
        <h2>Philosophy (Hayekian)</h2>
        <p>
          Clarity without central planning. Tools that help you reason from first principles—transparent,
          local, and simple by design.
        </p>
      </section>

      <FaqSection />

      <SiteFooter />
    </main>
  );
}
