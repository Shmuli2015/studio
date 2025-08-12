import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Gallery } from "@/components/landing/gallery";
import { Features } from "@/components/landing/features";
import { ContactSection } from "@/components/landing/contact-section";
import { MapSection } from "@/components/landing/map-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Features />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
