"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryImages } from "@/lib/constants";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { AnimatedSection } from "./animated-section";

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <AnimatedSection id="gallery" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">הצצה לוילה שלכם</h2>
          <p className="text-muted-foreground mt-2 text-lg">גלריית תמונות מתוך הוילה והנוף המרהיב</p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={image['data-ai-hint']}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-11/12" onClick={() => openLightbox(index)}>
                    <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
                       <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                        data-ai-hint={image['data-ai-hint']}
                      />
                       <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-sm font-semibold">{image.alt}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-3" />
              <CarouselNext className="absolute right-3" />
            </Carousel>
        </div>

      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 max-w-4xl w-full bg-transparent border-0 shadow-none">
          <div className="relative">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              width={1600}
              height={900}
              className="w-full h-auto object-contain rounded-lg max-h-[80vh]"
              data-ai-hint={galleryImages[currentIndex]['data-ai-hint']}
            />
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/75 hover:text-white"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/50 text-white hover:bg-black/75 hover:text-white"
              onClick={goToPrevious}
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/50 text-white hover:bg-black/75 hover:text-white"
              onClick={goToNext}
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </AnimatedSection>
  );
}
