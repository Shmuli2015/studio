import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Home, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-8 mb-10 text-center md:text-right">
          
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">וילת נוף כנרת</span>
            </Link>
            <p className="max-w-md text-muted-foreground mb-6">
              חופשה יוקרתית ופרטית עם כל הפינוקים, אל מול הנוף המהפנט של הכנרת. אנו מזמינים אתכם לחוויה בלתי נשכחת.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
             <h3 className="text-xl font-bold text-foreground mb-4">ניווט מהיר</h3>
             <nav className="flex flex-col space-y-2">
                <Link href="#about" className="text-muted-foreground transition-colors hover:text-primary">אודות</Link>
                <Link href="#gallery" className="text-muted-foreground transition-colors hover:text-primary">גלריה</Link>
                <Link href="#features" className="text-muted-foreground transition-colors hover:text-primary">יתרונות</Link>
                <Link href="#contact" className="text-muted-foreground transition-colors hover:text-primary">צור קשר</Link>
             </nav>
          </div>
          
          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start">
             <h3 className="text-xl font-bold text-foreground mb-4">צרו קשר</h3>
             <div className="flex flex-col space-y-3">
                <a href="tel:053-2861478" className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>053-2861478</span>
                </a>
                <a href="mailto:nof.kinneret.villa@email.com" className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>nof.kinneret.villa@email.com</span>
                </a>
              </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
           <p className="text-sm text-muted-foreground">
            &copy; {year} וילת נוף כנרת. כל הזכויות שמורות. נבנה ע"י שמואל רוזנברג
          </p>
           <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
}
