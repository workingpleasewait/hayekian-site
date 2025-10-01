import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

import { Container } from "../ui/container";

export function FeaturesGrid() {
  return (
    <section id="what" className="py-8 lg:py-12">
      <Container>
        <h2 className="h2 mb-4">What It Is</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  );
}
