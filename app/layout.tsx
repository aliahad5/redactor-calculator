import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sighthound Redactor - Competitive Analysis Hub',
  description:
    'AI-Powered Video, Audio & Image Redaction Solutions - Market Analysis for Sales & Marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* Lucide icons - must be loaded before script.js tries to call lucide.createIcons() */}
        <Script
          src="https://unpkg.com/lucide@latest"
          strategy="beforeInteractive"
        />
        {/* App script - defines all global functions (switchTab, calculatePricing, ...) */}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
