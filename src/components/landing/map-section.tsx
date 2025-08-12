"use client";

import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export function MapSection() {
  const position = { lat: 32.867, lng: 35.535 }; // Approximate coordinates for Nof Kinneret
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <section id="location" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">היכן אנו נמצאים?</h2>
          <div className="mt-8 p-8 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p>מפתח ה-API של גוגל מפות אינו מוגדר.</p>
            <p>אנא הגדירו את המשתנה `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` בקובץ `.env.local`.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="location" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">היכן אנו נמצאים?</h2>
          <p className="text-muted-foreground mt-2 text-lg">רחוב נוף העמק, נוף כנרת</p>
        </div>
        <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg border">
          <APIProvider apiKey={apiKey}>
            <Map
              defaultCenter={position}
              defaultZoom={15}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapId="kinneret_vista_map"
            >
              <Marker position={position} />
            </Map>
          </APIProvider>
        </div>
         <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
          הוילה ממוקמת במיקום מושלם עם נוף עוצר נשימה לכנרת וגישה נוחה לאטרקציות, מסלולי טיולים ומסעדות באזור.
        </p>
      </div>
    </section>
  );
}
