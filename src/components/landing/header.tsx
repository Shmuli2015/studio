"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { KinneretVistaLogo } from '@/components/icons/logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <span className={cn("text-xl font-bold font-headline transition-colors", isScrolled ? 'text-primary' : 'text-white')}>
            וילת נוף כנרת
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn("text-sm font-medium transition-colors hover:text-primary", { 'text-white': !isScrolled, 'text-foreground': isScrolled })}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:flex">
            <a href="tel:053-2861478">
              <Phone className="h-4 w-4 mr-2"/>
              התקשרו עכשיו
            </a>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("md:hidden", isScrolled ? "text-primary" : "text-white hover:text-white hover:bg-white/10")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 p-4 border-b">
                   <KinneretVistaLogo className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold font-headline text-primary">
                      וילת נוף כנרת
                    </span>
                </div>
                <nav className="flex flex-col gap-4 p-4 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t">
                  <Button asChild className="w-full" size="lg">
                     <a href="#contact">צרו קשר להזמנה</a>
                  </Button>
                   <a href="tel:053-2861478" className="flex items-center justify-center gap-2 text-lg font-semibold mt-4 transition-colors hover:text-primary">
                        <Phone className="h-5 w-5" />
                        <span>053-2861478</span>
                    </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
