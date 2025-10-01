import fs from 'node:fs';
import path from 'node:path';

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
    <main>
      <section id="hero" className="container">
        <h1>Market intelligence for self-sovereign investors.</h1>
        <p>
          Daily signals—regimes, ETF flows, VolumeGate—packaged into the toolkit I use myself.
        </p>
        <p>
          <a className="cta" href="#proof">See Example Output</a>
        </p>
      </section>

      <section id="what" className="container">
        <h2>What It Is</h2>
        <div className="cards">
          <div className="card">
            <h3>DCA/VA Ladder Planner</h3>
            <p>Structured buys, no guesswork.</p>
          </div>
          <div className="card">
            <h3>Daily Intelligence Signals</h3>
            <p>Regime, ETF flows, DXY/DVOL proxy, VolumeGate.</p>
          </div>
          <div className="card">
            <h3>Local, No Custody</h3>
            <p>Runs on your machine; your keys stay yours.</p>
          </div>
        </div>
      </section>

      <section id="why" className="container">
        <h2>Why It Helps</h2>
        <p>
          When dollar strength (DXY) rises and ETF flows weaken, BTC often ‘sulks.’ When flows surge and
          volatility picks up, BTC ‘gets excited.’ This toolkit turns those patterns into a simple, daily
          plan you can repeat.
        </p>
      </section>

      <section id="proof" className="container">
        <h2>Proof / Example Output</h2>
        <p>Generated in under 10 seconds. No server required.</p>
        <div className="proof">
          <figure>
            <img src="/proof/latest/console_snippet.png" alt="Console proof snippet" />
            <figcaption>Console snippet</figcaption>
          </figure>
          <figure>
            <img src="/proof/latest/etf_inflow.png" alt="ETF net inflow spike" />
            <figcaption>ETF net inflow spike</figcaption>
          </figure>
        </div>
        <small className="provenance">
          Built from coinbase-trading @{sha} at {builtAt}
        </small>
      </section>

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

      <section id="faq" className="container">
        <h2>FAQ</h2>
        <details>
          <summary>Is this financial advice?</summary>
          <p>No—educational tools only.</p>
        </details>
        <details>
          <summary>Do I need exchange keys?</summary>
          <p>Not for the examples; extended features can run locally with your own keys.</p>
        </details>
        <details>
          <summary>Does it place trades?</summary>
          <p>No. It generates ladders and daily intelligence.</p>
        </details>
        <details>
          <summary>Will there be more?</summary>
          <p>Potentially: DeFi add‑ons and deeper dashboards if there’s traction.</p>
        </details>
      </section>

      <footer id="footer" className="container footer">
        <p className="disclaimer">
          Educational use only. Not financial advice. No performance guarantees. Tools run locally; you
          control your keys.
        </p>
        <p className="note">
          <a href="/og-preview" aria-label="Open Graph preview">OG preview</a>
        </p>
      </footer>
    </main>
  );
}
