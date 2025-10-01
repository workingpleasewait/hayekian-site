import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const contentType = 'image/png';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get('title') ?? 'Hayekian — Market Intelligence Toolkit';
  const subtitle =
    searchParams.get('subtitle') ??
    'Regimes, ETF flows, VolumeGate — lean, local, and fast.';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: '#0b0f1a',
          color: '#ffffff',
          padding: '64px',
          backgroundImage:
            'radial-gradient(1200px 600px at 0% 0%, #10203a 0%, rgba(16,32,58,0) 60%), radial-gradient(800px 400px at 100% 100%, #11263f 0%, rgba(17,38,63,0) 60%)',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '6px 12px',
            borderRadius: 6,
            background: '#2563eb',
            color: '#fff',
            fontSize: 28,
            marginBottom: 18,
          }}
        >
          HAYEKIAN
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>
          {title}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 32,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 1000,
          }}
        >
          {subtitle}
        </div>
        <div style={{ marginTop: 'auto', fontSize: 24, color: 'rgba(255,255,255,0.7)' }}>
          hayekian.io
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}