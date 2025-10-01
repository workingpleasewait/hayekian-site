export default function OgPreviewPage() {
  const base = '/og';
  const title = encodeURIComponent('Hayekian — Market Intelligence Toolkit');
  const subtitle = encodeURIComponent('Regimes, ETF flows, VolumeGate — lean, local, and fast.');

  return (
    <main>
      <section className="container">
        <h2>OG Preview</h2>
        <p>This page helps verify the Open Graph image generator output.</p>
        <div className="proof">
          <figure>
            <img src={`${base}`} alt="OG default" />
            <figcaption>Default OG (1200x630)</figcaption>
          </figure>
          <figure>
            <img src={`${base}?title=${title}&subtitle=${subtitle}`} alt="OG with params" />
            <figcaption>OG with title/subtitle params</figcaption>
          </figure>
        </div>
        <p>
          <a className="cta" href="/">Back to home</a>
        </p>
      </section>
    </main>
  );
}