import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export function FeaturesGrid() {
  return (
    <section id="what" className="px-6 py-8">
      <h2 className="h2 mb-4 max-w-3xl">What It Is</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}