// app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ThemeProvider from '@/components/theme-provider';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ProfileProvider } from '@/context/profile-context';
import React from 'react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap', // Improves performance and accessibility
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap', // Improves performance and accessibility
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-website-domain.com'), // Add your actual domain
  title: {
    default: 'Your Website Name | Primary Tagline',
    template: '%s | Your Website Name',
  },
  description:
    'Comprehensive description of your website, its purpose, and key offerings',
  applicationName: 'Your Website Name',
  keywords: ['key', 'words', 'relevant', 'to', 'your', 'site'],
  authors: [{ name: 'Your Name', url: 'https://your-website-domain.com' }],
  creator: 'Your Name',
  publisher: 'Your Company Name',
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
    url: 'https://your-website-domain.com',
    title: 'Your Website Name | Primary Tagline',
    description:
      'Comprehensive description of your website, its purpose, and key offerings',
    siteName: 'Your Website Name',
    images: [
      {
        url: '/images/og-image.jpg', // Create and add an Open Graph image
        width: 1200,
        height: 630,
        alt: 'Your website description',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Website Name | Primary Tagline',
    description:
      'Comprehensive description of your website, its purpose, and key offerings',
    creator: '@your_twitter_handle',
    images: ['/images/twitter-image.jpg'], // Create and add a Twitter card image
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-dark.png',
        href: '/images/icon-dark.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon-light.png',
        href: '/images/icon-light.png',
      },
    ],
    apple: '/images/apple-touch-icon.png', // Add an Apple touch icon
  },
  verification: {
    google: 'your-google-site-verification-code', // Add your Google Search Console verification code
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        // Add aria attributes for improved accessibility
        aria-describedby="main-content"
      >
        <ProfileProvider>
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
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
