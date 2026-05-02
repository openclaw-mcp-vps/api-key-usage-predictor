import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "API Key Usage Predictor — Predict API costs before hitting limits",
  description: "Analyzes API usage patterns to predict monthly costs and warns before hitting rate limits or budget caps. Built for backend developers and DevOps engineers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e475d4b3-5186-40be-a4dd-7e73e7f3f1d1"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
