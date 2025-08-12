import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { KinneretVistaLogo } from "@/components/icons/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <KinneretVistaLogo className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold text-white">וילת נוף כנרת</span>
            </div>
            <p className="max-w-xs text-gray-400">
              חופשה יוקרתית ופרטית עם כל הפינוקים, אל מול הנוף המהפנט של הכנרת.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col items-center md:items-end">
             <h3 className="text-2xl font-bold text-white mb-4">מוכנים לחופשה של פעם בחיים?</h3>
              <p className="text-gray-400 mb-6">צרו קשר עכשיו ושריינו את התאריכים שלכם!</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                 <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105" asChild>
                    <a href="#contact">הזמינו עכשיו</a>
                </Button>
                <div className="flex flex-col items-center sm:items-start gap-2">
                   <a href="tel:053-2861478" className="flex items-center gap-2 text-lg font-semibold transition-colors hover:text-white">
                        <Phone className="h-5 w-5 text-accent" />
                        <span>053-2861478</span>
                    </a>
                </div>
              </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {year} וילת נוף כנרת. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
