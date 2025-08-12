"use client";

import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FloatingWhatsAppButton() {
  const whatsAppNumber = "972532861478";
  const message = "היי, אני פונה בנוגע לוילה בנוף כנרת.";
  const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "flex h-16 w-16 items-center justify-center rounded-full",
        "bg-[#25D366] text-white",
        "shadow-lg transition-transform hover:scale-110",
        "animate-pulse-whatsapp"
      )}
      aria-label="צור קשר בוואטסאפ"
    >
      <MessageSquare className="h-8 w-8" />
    </Link>
  );
}
