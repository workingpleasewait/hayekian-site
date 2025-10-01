export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Track Market Data with Confidence
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Real-time insights and analytics to help you make informed investment decisions. Monitor trends, analyze
            data, and stay ahead of the market.
          </p>
          <div className="mt-10">
            <a
              href="#proof"
              className="inline-block rounded-lg bg-primary-cta px-8 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary-cta-hover focus:outline-none focus:ring-2 focus:ring-primary-cta focus:ring-offset-2"
            >
              See It In Action
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-muted px-4 py-16 md:py-24" aria-labelledby="features-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="features-heading" className="text-balance text-center text-3xl font-bold md:text-4xl">
            Everything You Need
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="rounded-lg bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-feature-1-bg">
                <svg
                  className="h-6 w-6 text-feature-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Real-Time Updates</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Get instant notifications and live data streams so you never miss a critical market movement.
              </p>
            </article>

            <article className="rounded-lg bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-feature-2-bg">
                <svg
                  className="h-6 w-6 text-feature-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Advanced Analytics</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Powerful charting tools and technical indicators to analyze trends and identify opportunities.
              </p>
            </article>

            <article className="rounded-lg bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-feature-3-bg">
                <svg
                  className="h-6 w-6 text-feature-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Secure & Private</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Your data is encrypted and protected with industry-leading security standards and protocols.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section id="proof" className="px-4 py-16 md:py-24" aria-labelledby="proof-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="proof-heading" className="text-balance text-center text-3xl font-bold md:text-4xl">
            See the Data in Action
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <figure className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <img
                src="/proof/latest/console_snippet.png"
                alt="Console interface showing real-time data streams and API responses"
                className="h-auto w-full rounded"
              />
              <figcaption className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                Live console output with real-time market data feeds
              </figcaption>
            </figure>

            <figure className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <img
                src="/proof/latest/etf_inflow.png"
                alt="Chart displaying ETF inflow trends and volume analysis"
                className="h-auto w-full rounded"
              />
              <figcaption className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                ETF inflow tracking with historical trend analysis
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-muted px-4 py-16 md:py-24" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="pricing-heading" className="text-balance text-3xl font-bold md:text-4xl">
            Pricing
          </h2>
          <div className="mt-12 rounded-lg border-2 border-dashed border-border bg-card px-8 py-16">
            <p className="text-2xl font-semibold">Coming Soon</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We're finalizing our pricing plans. Check back soon for updates.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq-heading" className="text-balance text-center text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-4">
            <details className="group rounded-lg border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50">
                What data sources do you use?
                <span className="ml-4 flex-shrink-0 text-gray-500 transition group-open:rotate-180" aria-hidden="true">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-gray-200 px-6 py-4 leading-relaxed text-gray-600">
                We aggregate data from multiple reputable financial data providers and exchanges to ensure accuracy and
                reliability. All data is verified and updated in real-time.
              </div>
            </details>

            <details className="group rounded-lg border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50">
                How often is the data updated?
                <span className="ml-4 flex-shrink-0 text-gray-500 transition group-open:rotate-180" aria-hidden="true">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-gray-200 px-6 py-4 leading-relaxed text-gray-600">
                Market data is updated in real-time during trading hours. Historical data and analytics are refreshed
                every few minutes to provide the most current insights.
              </div>
            </details>

            <details className="group rounded-lg border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50">
                Can I export my data?
                <span className="ml-4 flex-shrink-0 text-gray-500 transition group-open:rotate-180" aria-hidden="true">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-gray-200 px-6 py-4 leading-relaxed text-gray-600">
                Yes, you can export your tracked data and analytics in multiple formats including CSV, JSON, and PDF for
                further analysis or record-keeping.
              </div>
            </details>

            <details className="group rounded-lg border border-gray-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50">
                Is there a mobile app available?
                <span className="ml-4 flex-shrink-0 text-gray-500 transition group-open:rotate-180" aria-hidden="true">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-gray-200 px-6 py-4 leading-relaxed text-gray-600">
                Our web platform is fully responsive and works seamlessly on mobile devices. Native iOS and Android apps
                are currently in development and will be available soon.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong>Educational Disclaimer:</strong> This platform provides market data and analytics for
              informational and educational purposes only. It is not intended as financial advice, investment
              recommendations, or an offer to buy or sell securities. Always conduct your own research and consult with
              a qualified financial advisor before making investment decisions. Past performance does not guarantee
              future results.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Market Data Tracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
