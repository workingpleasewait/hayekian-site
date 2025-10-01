import { Container } from "../ui/container";

export function SiteFooter() {
  return (
    <footer id="footer" className="py-8">
      <Container>
        <p className="disclaimer">
        Educational use only. Not financial advice. No performance guarantees. Tools run locally; you
        control your keys.
        </p>
      </Container>
    </footer>
  );
}
