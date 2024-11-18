// components/theme-provider.tsx

'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

const NextThemesProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
);

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
