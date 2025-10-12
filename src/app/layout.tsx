// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/theme-provider';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Script from 'next/script';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import { siteConfig } from '@/config/site';

// JetBrains Mono for code
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

// Inter for primary font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Software Engineer & Backend Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name}'s Portfolio`,
  keywords: [
    'Aman Kumar',
    'Software Engineer',
    'Backend Developer',
    'Rust Developer',
    'Distributed Systems Engineer',
    'System Design',
    'Full Stack Developer',
    'Software Architecture',
    'Performance Engineering',
    'Distributed Systems',
    'Cloud Architecture',
    'API Design',
    'Microservices',
    'NativeLink',
    'Remote Build Execution',
    'Bazel',
    'Kubernetes',
    'DevOps',
    'Systems Programming',
    'Low-Level Engineering',
    'Cloud Infrastructure',
    'Python Developer',
    'Open Source Contributor',
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
    nocache: false,
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
    title: `${siteConfig.name} - Software Engineer & Backend Developer`,
    description: siteConfig.description,
    siteName: `${siteConfig.name}'s Portfolio`,
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Software Engineer specializing in Rust, Distributed Systems, and Backend Development`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Software Engineer & Backend Developer`,
    description: siteConfig.description,
    creator: '@amankrx',
    site: '@amankrx',
    images: ['/api/og'],
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      'application/rss+xml': `${siteConfig.url}/rss.xml`,
    },
  },
  manifest: '/site.webmanifest',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: 'technology',
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/api/og`,
  jobTitle: 'Backend Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'NativeLink',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'IIIT Nagpur',
  },
  sameAs: [
    siteConfig.author.github,
    siteConfig.author.linkedin,
    siteConfig.author.x,
  ],
  knowsAbout: [
    'Rust Programming',
    'Backend Development',
    'Distributed Systems',
    'Cloud Infrastructure',
    'Kubernetes',
    'Bazel',
    'Remote Build Execution',
    'Systems Programming',
  ],
  email: siteConfig.author.email,
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${siteConfig.name}'s Portfolio`,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    '@type': 'Person',
    name: siteConfig.name,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/blog?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
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
        <link rel="canonical" href={siteConfig.url} />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
            <main className="flex-1" role="main" aria-label="Main page content">
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
              <SpeedInsights />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
