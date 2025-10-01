import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

import { Container } from "../ui/container";

export function FaqSection() {
  return (
    <section id="faq" className="py-8 lg:py-12">
      <Container>
        <h2 className="h2 mb-4">FAQ</h2>
        <Accordion type="single" collapsible className="max-w-3xl">
        <AccordionItem value="q1">
          <AccordionTrigger>Is this financial advice?</AccordionTrigger>
          <AccordionContent>No—educational tools only.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>Do I need exchange keys?</AccordionTrigger>
          <AccordionContent>Not for the examples; extended features can run locally with your own keys.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>Does it place trades?</AccordionTrigger>
          <AccordionContent>No. It generates ladders and daily intelligence.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger>Will there be more?</AccordionTrigger>
          <AccordionContent>Potentially: DeFi add‑ons and deeper dashboards if there’s traction.</AccordionContent>
        </AccordionItem>
        <Accordion>
      </Container>
    </section>
  );
}
