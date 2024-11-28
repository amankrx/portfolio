// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/theme-provider';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Script from 'next/script';
import { Toaster } from '@/components/ui/toaster';

// app/layout.tsx
import { JetBrains_Mono, Inter } from 'next/font/google';
import { siteConfig } from '@/config/site';

// JetBrains Mono for code
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

// Inter for secondary font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.first_name}'s Portfolio`,
    template: '%s | Aman Kumar',
  },
  description:
    'Full-stack software engineer specializing in Rust, backend systems, and scalable architectures. Exploring the intersection of performance and reliable system design.',
  applicationName: 'Aman Kumar Portfolio',
  keywords: [
    'Aman Kumar',
    'Software Engineer',
    'Rust Developer',
    'Backend Engineer',
    'System Design',
    'Full Stack Developer',
    'Software Architecture',
    'Performance Engineering',
    'Distributed Systems',
    'Cloud Architecture',
    'API Design',
    'Microservices',
  ],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Aman Kumar | Software Engineer & Systems Developer',
    description:
      'Full-stack software engineer specializing in Rust, backend systems, and scalable architectures.',
    siteName: 'Aman Kumar Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Aman Kumar - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Kumar | Software Engineer',
    description:
      'Full-stack software engineer specializing in Rust, backend systems, and scalable architectures.',
    creator: '@amankrx',
    images: ['/og.png'],
  },
  alternates: {
    canonical: 'https://amankrx.com',
    types: {
      'application/rss+xml': 'https://amankrx.com/feed.xml',
    },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`RSS Feed for ${siteConfig.name}`}
          href="/rss.xml"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        aria-describedby="main-content"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="flex min-h-screen flex-col bg-background"
            id="main-content"
          >
            <Navbar />
            <main
              className="flex-1"
              // Add semantic attributes
              role="main"
              aria-label="Main page content"
            >
              <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-FGDYH5SZJW"
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-FGDYH5SZJW');
                  `}
              </Script>
              {children}
              <Toaster />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
