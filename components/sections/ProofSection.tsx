import { Container } from "../ui/container";

export function ProofSection({ sha, builtAt }: { sha: string; builtAt: string }) {
  return (
    <section id="proof" className="py-8 lg:py-12">
      <Container>
        <h2 className="h2 mb-2">Proof / Example Output</h2>
        <p className="mb-4">Generated in under 10 seconds. No server required.</p>
        <div className="grid gap-6 lg:grid-cols-2">
          <figure className="card">
          <img src="/proof/latest/console_snippet.png" alt="Console proof snippet" />
          <figcaption className="mt-2 opacity-80">Console snippet</figcaption>
        </figure>
        <figure className="card">
          <img src="/proof/latest/etf_inflow.png" alt="ETF net inflow spike" />
          <figcaption className="mt-2 opacity-80">ETF net inflow spike</figcaption>
        </figure>
        </div>
        <small className="provenance opacity-70">Built from coinbase-trading @{sha} at {builtAt}</small>
      </Container>
    </section>
  );
}
