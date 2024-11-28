// components/navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import ThemeSwitcher from '@/components/theme-switcher';
import { useEffect, useState } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { siteConfig } from '@/config/site';

// Dynamically import the hamburger icon with ssr disabled
const HamburgerIcon = dynamic(
  () => import('react-icons/gi').then((mod) => mod.GiHamburgerMenu),
  { ssr: false }
);

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setCurrentPath(pathName);
    setMounted(true);
  }, [pathName]);

  const isActive = (path: string) =>
    currentPath === path
      ? 'text-foreground font-semibold border-b-2 border-primary'
      : 'text-muted-foreground hover:text-foreground transition-colors';

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  const closeSidebar = () => setSidebarOpen(false);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Minimal content for loading state */}
          <Skeleton className="h-8 w-24" />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={
              resolvedTheme === 'light' ? '/logo/light.png' : '/logo/dark.png'
            }
            alt={`${siteConfig.name}'s Logo`}
            className="h-8"
            width={32}
            height={32}
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${isActive(href)} py-1 text-sm tracking-wide`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 shrink-0 md:hidden"
            >
              {mounted && <HamburgerIcon className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px]">
            <VisuallyHidden>
              <SheetTitle>Navigation</SheetTitle>
            </VisuallyHidden>
            <nav className="mt-6 grid gap-4">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block px-2 py-1 text-sm ${isActive(href)}`}
                  onClick={closeSidebar}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Theme Switcher */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
