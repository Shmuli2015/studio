import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Home, Trees, ChefHat, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection } from "./animated-section";

interface Feature {
  icon: LucideIcon;
  name: string;
  description: string;
}

const features: Feature[] = [
  { icon: Waves, name: "בריכת שחייה פרטית", description: "מרווחת ומטופחת" },
  { icon: Home, name: "מקווה פרטי", description: "כשר, מתאים לקהל דתי" },
  { icon: Trees, name: "חצר ירוקה", description: "דשא, ערסלים ונדנדות" },
  { icon: ChefHat, name: "מטבח מאובזר", description: "כלי בישול, אפייה ומכשור מודרני" },
  { icon: ShieldCheck, name: "פרטיות מלאה", description: "וילה מגודרת ללא הפרעות" },
];

export function About() {
  return (
    <AnimatedSection id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              הוילה המושלמת לחופשה שלכם
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              הוילה בנוף כנרת מציעה חווית אירוח יוקרתית בלב נוף עוצר נשימה. עם בריכת שחייה פרטית, מקווה כשר, חצר מגודרת עם דשא, ערסלים ונדנדות, ומטבח גדול ומאובזר – זו החופשה שתמיד רציתם.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{feature.name}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden shadow-2xl rounded-2xl">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x700.png"
                  alt="סלון מרווח ומעוצב בוילה"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  data-ai-hint="luxury villa interior"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
