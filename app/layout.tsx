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
