import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound, Gem, Mountain } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection } from "./animated-section";

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: KeyRound,
    title: "פרטיות מוחלטת",
    description: "וילה מגודרת עם כניסה פרטית, המבטיחה לכם חופשה שלווה ואינטימית ללא הפרעות."
  },
  {
    icon: Gem,
    title: "מתקני יוקרה",
    description: "כל מה שצריך לחופשה מושלמת: בריכה מפנקת, מקווה פרטי, מטבח מאובזר וחצר ירוקה."
  },
  {
    icon: Mountain,
    title: "מיקום חלומי",
    description: "בלב נוף כנרת, עם נוף עוצר נשימה וגישה נוחה למגוון אטרקציות ומסלולי טיול בגליל."
  }
];

export function Features() {
  return (
    <AnimatedSection id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">למה לבחור בנו?</h2>
          <p className="text-muted-foreground mt-2 text-lg">היתרונות שהופכים את החופשה שלכם למושלמת</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <Card key={advantage.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-accent">
              <CardHeader className="items-center">
                <div className="bg-accent/10 text-accent p-4 rounded-full mb-4">
                  <advantage.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
