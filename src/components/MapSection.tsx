import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ShoppingBag, Navigation } from 'lucide-react';
import { Button } from './ui/Button';

export const MapSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-brand-gold font-semibold uppercase tracking-[0.2em] mb-6"
            >
              Find Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal mb-8 leading-tight"
            >
              Visit Us in <br />
              <span className="text-brand-green italic">The Heart of Joensuu</span>
            </motion.h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center shrink-0 text-brand-green">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-brand-gold uppercase tracking-widest font-bold mb-1">Address</p>
                  <p className="text-lg text-brand-charcoal/80">Kauppakatu 25, 80100 Joensuu, Finland</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center shrink-0 text-brand-green">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-brand-gold uppercase tracking-widest font-bold mb-1">Phone</p>
                  <p className="text-lg text-brand-charcoal/80">+358 12 345 6789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center shrink-0 text-brand-green">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-brand-gold uppercase tracking-widest font-bold mb-1">Current Status</p>
                  <p className="text-lg text-brand-charcoal/80 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    Open Now until 21:00
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="cursor-pointer">
                <Navigation className="w-4 h-4 mr-2 cursor-pointer" />
                Get Directions
              </Button>
              <Button variant="outline" className="cursor-pointer">
                <Phone className="w-4 h-4 mr-2 cursor-pointer" />
                Call Now
              </Button>
              <Button variant="wolt" className="cursor-pointer">
                <ShoppingBag className="w-4 h-4 mr-2 cursor-pointer" />
                Order on Wolt
              </Button>
            </div>
          </div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-100 lg:min-h-full border border-gray-100"
          >
            {/* Using an iframe for a real Google Map placeholder */}
            <iframe
              title="Akita Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551.6278820255288!2d29.76199490000001!3d62.603228099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469b87245c9d0e1d%3A0xc673a7d9f9e2842e!2sAkita%20Teppanyaki%20%26%20Sushi!5e1!3m2!1sen!2sfi!4v1776335101498!5m2!1sen!2sfi"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay for premium feel */}
            <div className="absolute inset-0 pointer-events-none border-[1.5rem] border-white/10 rounded-[2.5rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
