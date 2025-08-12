import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'וילה בנוף כנרת | חופשה יוקרתית עם בריכה ומקווה פרטי',
  description: 'וילה יוקרתית להשכרה בנוף כנרת עם בריכת שחייה, מקווה פרטי, חצר, ונוף עוצר נשימה. חופשה חלומית בפרטיות מלאה למשפחות וקבוצות.',
  keywords: "וילה בנוף כנרת, חופשה עם בריכה, מקווה פרטי, וילה יוקרתית כנרת, וילה למשפחות",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
