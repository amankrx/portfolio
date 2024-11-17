import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ProfileProvider } from '@/context/ProfileContext';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Aman Kumar - Developer Portfolio',
  description:
    'Personal portfolio and blog of Aman Kumar showcasing projects, articles, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Title with Logo */}
        <title>
          <Image src="/logo/dark.png" alt="Logo" width={50} height={50} />
          {' Aman Kumar - Developer Portfolio'}
        </title>
        {/* Favicon for Light Mode */}
        <link
          rel="icon"
          href="/logo/light.png"
          media="(prefers-color-scheme: light)"
          type="image/png"
        />
        {/* Favicon for Dark Mode */}
        <link
          rel="icon"
          href="/logo/dark.png"
          media="(prefers-color-scheme: dark)"
          type="image/png"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ProfileProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col bg-background">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
