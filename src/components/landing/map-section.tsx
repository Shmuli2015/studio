"use client";

import React from 'react';
import { AnimatedSection } from './animated-section';

export function MapSection() {
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Nof+Kinneret`;

  return (
    <AnimatedSection id="location" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">היכן אנו נמצאים?</h2>
          <p className="text-muted-foreground mt-2 text-lg">רחוב נוף העמק, נוף כנרת</p>
        </div>
        <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg border">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.669383333905!2d35.53241607567303!3d32.88000097365281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c0e38608d81b3%3A0x1d8a780b3c6e2677!2sNof%20Kinneret!5e0!3m2!1sen!2sil!4v1719842616147!5m2!1sen!2sil"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Villa Location Map"
          ></iframe>
        </div>
         <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
          הוילה ממוקמת במיקום מושלם עם נוף עוצר נשימה לכנרת וגישה נוחה לאטרקציות, מסלולי טיולים ומסעדות באזור.
        </p>
      </div>
    </AnimatedSection>
  );
}
