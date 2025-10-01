import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function CtaRibbon() {
  return (
    <section className="py-8">
      <Container>
        <div className="rounded-[var(--radius)] border border-white/10 bg-[color:var(--surface)]/60 px-6 py-6">
          <div className="max-w-3xl">
          <p className="lead mb-3">See the real outputs used to plan the day.</p>
          <Button as-child>
            <a href="#proof">Jump to Proof</a>
          </Button>
        </div>
        </div>
      </Container>
    </section>
  );
}
