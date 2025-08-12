"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { KinneretVistaLogo } from '@/components/icons/logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'אודות' },
    { href: '#gallery', label: 'גלריה' },
    { href: '#features', label: 'יתרונות' },
    { href: '#contact', label: 'צור קשר' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <KinneretVistaLogo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-primary-foreground hidden sm:inline" style={{ color: 'hsl(var(--primary))' }}>
            וילת נוף כנרת
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <a href="#contact">צרו קשר</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
