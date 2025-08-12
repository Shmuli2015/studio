import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Home } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center md:text-right">
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Home className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold text-foreground">וילת נוף כנרת</span>
            </div>
            <p className="max-w-xs text-muted-foreground">
              חופשה יוקרתית ופרטית עם כל הפינוקים, אל מול הנוף המהפנט של הכנרת.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
             <h3 className="text-xl font-bold text-foreground mb-4">ניווט מהיר</h3>
             <div className="flex flex-col space-y-2">
                <Link href="#about" className="text-muted-foreground transition-colors hover:text-primary">אודות</Link>
                <Link href="#gallery" className="text-muted-foreground transition-colors hover:text-primary">גלריה</Link>
                <Link href="#features" className="text-muted-foreground transition-colors hover:text-primary">יתרונות</Link>
             </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
             <h3 className="text-xl font-bold text-foreground mb-4">צרו קשר</h3>
             <div className="flex flex-col space-y-3">
                <a href="tel:053-2861478" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>053-2861478</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>nof.kinneret.villa@email.com</span>
                </div>
                <Button className="mt-2" asChild>
                  <a href="#contact">השאירו פנייה</a>
                </Button>
              </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
          <p>&copy; {year} וילת נוף כנרת. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
