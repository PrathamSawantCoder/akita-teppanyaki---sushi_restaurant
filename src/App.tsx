import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BuffetHighlights } from './components/BuffetHighlights';
import { DeliverySection } from './components/DeliverySection';
import { MenuPreview } from './components/MenuPreview';
import { PricingHours } from './components/PricingHours';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BuffetHighlights />
        <DeliverySection />
        <MenuPreview />
        <PricingHours />
        <Gallery />
        <Testimonials />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
