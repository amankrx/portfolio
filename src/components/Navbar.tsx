// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Package2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useEffect, useState } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useProfile } from '@/context/ProfileContext';

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const pathName = usePathname();
  const { profile } = useProfile();

  useEffect(() => {
    setCurrentPath(pathName);
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-semibold tracking-tight hover:text-foreground"
          >
            <Package2 className="h-5 w-5" />
            <span>{profile.personal.first_name}</span>
          </Link>
          {links.slice(1).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${isActive(href)} py-1 text-sm tracking-wide`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
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
                >
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
