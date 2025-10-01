import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function HeroSection() {
  return (
    <section id="hero" className="px-6 py-16">
      <div className="max-w-3xl">
        <Badge className="mb-3">Hayekian</Badge>
        <h1 className="h1 mb-3">Market intelligence for self-sovereign investors.</h1>
        <p className="lead mb-6">
          Daily signals—regimes, ETF flows, VolumeGate—packaged into the toolkit I use myself.
        </p>
        <Button as-child>
          <a href="#proof">See Example Output</a>
        </Button>
      </div>
    </section>
  );
}