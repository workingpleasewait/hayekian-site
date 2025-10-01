import type { Metadata } from 'next';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hayekian — Bitcoin Market Intelligence Toolkit (DCA/VA, ETF Flows, VolumeGate)',
  description:
    'A lean toolkit that explains daily BTC behavior—regimes, ETF flows, VolumeGate—so you can build a simple, repeatable plan.',
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
        {/* Vercel Speed Insights (RUM for Core Web Vitals) */}
        <SpeedInsights />
      </body>
    </html>
  );
}