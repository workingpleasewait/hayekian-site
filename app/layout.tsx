import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hayekian — Bitcoin Market Intelligence Toolkit (DCA/VA, ETF Flows, VolumeGate)',
  description:
    'A lean toolkit that explains daily BTC behavior—regimes, ETF flows, VolumeGate—so you can build a simple, repeatable plan.',
  metadataBase: new URL('https://hayekian.io'),
  openGraph: {
    type: 'website',
    url: 'https://hayekian.io',
    siteName: 'Hayekian',
    title: 'Hayekian — Bitcoin Market Intelligence Toolkit (DCA/VA, ETF Flows, VolumeGate)',
    description:
      'A lean toolkit that explains daily BTC behavior—regimes, ETF flows, VolumeGate—so you can build a simple, repeatable plan.',
    images: [
      {
        url: 'https://hayekian.io/og',
        width: 1200,
        height: 630,
        alt: 'Hayekian — Market Intelligence Toolkit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hayekian',
    title:
      'Hayekian — Bitcoin Market Intelligence Toolkit (DCA/VA, ETF Flows, VolumeGate)',
    description:
      'A lean toolkit that explains daily BTC behavior—regimes, ETF flows, VolumeGate—so you can build a simple, repeatable plan.',
    images: ['https://hayekian.io/og'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        {/* Cloudflare Web Analytics (token via NEXT_PUBLIC_CF_ANALYTICS_TOKEN) */}
        <Script
          id="cf-analytics"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          defer
          {...{
            'data-cf-beacon': `{"token": "${process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN ?? ''}"}`,
          }}
        />
      </body>
    </html>
  );
}