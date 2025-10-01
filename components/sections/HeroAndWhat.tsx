import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function HeroAndWhat() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Badge className="mb-3">Hayekian</Badge>
              <h1 className="h1 mb-3">Market intelligence for self-sovereign investors.</h1>
              <p className="lead mb-6 max-w-2xl">
                Daily signals—regimes, ETF flows, VolumeGate—packaged into the toolkit I use myself.
              </p>
              <Button as-child>
                <a href="#proof" aria-label="See example output">See Example Output</a>
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="relative max-w-xl ml-auto">
                <figure className="rounded-[var(--radius)] border border-black/10 overflow-hidden shadow-card">
                  <img
                    src="/proof/latest/console_snippet.png"
                    alt="Cropped console output of a local run"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">Console snippet</figcaption>
                </figure>
                <figure className="absolute -bottom-6 -left-8 w-40 rounded-[calc(var(--radius)-.25rem)] border border-black/10 overflow-hidden shadow-card">
                  <img
                    src="/proof/latest/etf_inflow.png"
                    alt="ETF net inflow spike thumbnail"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">ETF net inflow spike</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What It Is */}
      <section id="what" className="py-10 md:py-14">
        <Container>
          <h2 className="h2 mb-4">What It Is</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>DCA/VA Ladder Planner</CardTitle>
              </CardHeader>
              <CardContent>Structured buys, no guesswork.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Daily Intelligence Signals</CardTitle>
              </CardHeader>
              <CardContent>Regime, ETF flows, DXY/DVOL proxy, VolumeGate.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Local, No Custody</CardTitle>
              </CardHeader>
              <CardContent>Runs on your machine; your keys stay yours.</CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}