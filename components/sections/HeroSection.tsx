import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Container } from "../ui/container";

export function HeroSection() {
  return (
    <section id="hero" className="py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge className="mb-3">Hayekian</Badge>
            <h1 className="h1 mb-3">Market intelligence for self-sovereign investors.</h1>
            <p className="lead mb-6 max-w-2xl">
              Daily signals—regimes, ETF flows, VolumeGate—packaged into the toolkit I use myself.
            </p>
            <Button as-child>
              <a href="#proof">See Example Output</a>
            </Button>
          </div>
          <div className="hidden lg:block">
            <figure className="rounded-[var(--radius)] border border-white/10 overflow-hidden shadow-card">
              <img
                src="/proof/latest/console_snippet.png"
                alt="Console proof snippet preview"
                className="w-full h-auto"
              />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
