import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&h=1080&fit=crop"
        alt="נוף פנורמי של הוילה עם בריכה ושקיעה על הכנרת"
        fill
        quality={80}
        className="z-0 brightness-50 object-cover"
        data-ai-hint="luxury villa pool"
        priority
      />
      <div className="relative z-10 flex flex-col items-center gap-6 p-4">
        <div className="animate-fade-in-down">
          <h1 className="text-4xl font-black md:text-6xl lg:text-7xl !leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            וילה יוקרתית בנוף כנרת
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">חופשה חלומית בפרטיות מלאה</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-200 mt-4" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            בריכת שחייה, מקווה פרטי, חצר ירוקה עם ערסלים ומטבח מאובזר – הכל מחכה לכם!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-fade-in-down" style={{animationDelay: '0.3s', animationFillMode: 'backwards'}}>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
            <a href="#contact">צרו קשר להזמנה</a>
          </Button>
          <a href="tel:053-2861478" className="flex items-center gap-2 text-lg font-semibold tracking-wider transition-colors hover:text-primary-foreground/80">
            <Phone className="h-5 w-5" />
            <span>חייגו עכשיו: 053-2861478</span>
          </a>
        </div>
      </div>
    </section>
  );
}
