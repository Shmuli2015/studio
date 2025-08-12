
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { he } from 'date-fns/locale';
import { Calendar as CalendarIcon, Phone, Mail, MessageSquare } from "lucide-react";
import { contactSchema } from "@/lib/schema";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { AnimatedSection } from "./animated-section";
import { DateRange } from "react-day-picker";

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      notes: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    const whatsAppNumber = "972532861478"; // מספר טלפון בינלאומי ללא '+'
    const name = `שם: ${data.name}`;
    const phone = `טלפון: ${data.phone}`;
    
    let dateRange = "";
    if (data.date?.from) {
      if (data.date.to) {
        dateRange = `תאריכים: ${format(data.date.from, "d בLLL", { locale: he })} - ${format(data.date.to, "d בLLL, yyyy", { locale: he })}`;
      } else {
        dateRange = `תאריך: ${format(data.date.from, "d בLLL, yyyy", { locale: he })}`;
      }
    }

    const notes = data.notes ? `הערות: ${data.notes}` : "";
    
    const message = [
        "היי, אני פונה בנוגע לוילה בנוף כנרת.",
        name,
        phone,
        dateRange,
        notes
    ].filter(Boolean).join("\n");
    
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  }

  return (
    <AnimatedSection id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">הזמינו את החופשה שלכם</h2>
            <p className="text-muted-foreground mt-2 text-lg mb-6">
              מוכנים לחופשה בלתי נשכחת? השאירו פרטים ונחזור אליכם בהקדם.
            </p>
            <div className="space-y-4">
               <a href="tel:053-2861478" className="flex items-center gap-3 text-lg transition-colors hover:text-primary">
                <Phone className="w-5 h-5 text-accent" />
                <span>053-2861478</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Card className="p-6 sm:p-8 shadow-lg">
              <CardContent className="p-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>שם מלא</FormLabel>
                            <FormControl>
                              <Input placeholder="ישראל ישראלי" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>מספר טלפון</FormLabel>
                            <FormControl>
                              <Input placeholder="050-1234567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>טווח תאריכים (אופציונלי)</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-start text-right font-normal",
                                    !field.value?.from && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="ml-2 h-4 w-4" />
                                  {field.value?.from ? (
                                    field.value.to ? (
                                      <>
                                        {format(field.value.from, "d LLL, y", { locale: he })} -{' '}
                                        {format(field.value.to, "d LLL, y", { locale: he })}
                                      </>
                                    ) : (
                                      format(field.value.from, "d LLL, y", { locale: he })
                                    )
                                  ) : (
                                    <span>בחרו טווח תאריכים</span>
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="range"
                                selected={field.value as DateRange}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                                initialFocus
                                locale={he}
                                numberOfMonths={2}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>הערות/בקשות מיוחדות</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="מספר אורחים, בקשות מיוחדות..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full text-lg" size="lg">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      שלחו פנייה בוואטסאפ
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
