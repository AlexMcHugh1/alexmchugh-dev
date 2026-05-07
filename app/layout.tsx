import type { Metadata } from 'next';
import { JetBrains_Mono, Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import AsciiDonut from '@/components/AsciiDonut';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alex McHugh · DevSecOps Engineer',
  description:
    'Portfolio of Alex McHugh. DevSecOps engineer and MSc Computer Science student.',
  metadataBase: new URL('https://alexmchugh.dev'),
  openGraph: {
    title: 'Alex McHugh · DevSecOps Engineer',
    description:
      'DevSecOps engineer building secure, observable, GitOps-driven systems.',
    url: 'https://alexmchugh.dev',
    siteName: 'alexmchugh.dev',
    type: 'website',
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
      className={`${mono.variable} ${sans.variable} ${display.variable}`}
    >
      <body className="min-h-screen bg-bg text-ink antialiased">
        <AsciiDonut />
        {children}
      </body>
    </html>
  );
}
