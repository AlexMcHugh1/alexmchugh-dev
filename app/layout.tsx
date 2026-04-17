import type { Metadata } from 'next';
import { JetBrains_Mono, Syne, Inter } from 'next/font/google';
import './globals.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const display = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alex McHugh — DevSecOps Engineer',
  description:
    'Portfolio of Alex McHugh — DevSecOps engineer and MSc Computer Science student. Secure software delivery, Kubernetes, GitOps, supply-chain security.',
  metadataBase: new URL('https://alexmchugh.dev'),
  openGraph: {
    title: 'Alex McHugh — DevSecOps Engineer',
    description:
      'DevSecOps engineer building secure, observable, GitOps-driven systems.',
    url: 'https://alexmchugh.dev',
    siteName: 'alexmchugh.dev',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${display.variable} ${sans.variable}`}
    >
      <body className="min-h-screen bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
