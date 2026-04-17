import { motion } from 'motion/react';
import { ShoppingBag, Phone, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const DeliverySection = () => {
  return (
    <section id="delivery" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[2.5rem] bg-brand-green overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#c5a059_1px,transparent_1px)] bg-size-[40px_40px]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="p-12 md:p-20">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-brand-gold font-semibold uppercase tracking-[0.2em] mb-6"
              >
                Akita at Home
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight"
              >
                Enjoy the Taste of Japan <br /> 
                <span className="text-brand-gold italic">Delivered to Your Door</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-lg mb-12 max-w-lg leading-relaxed"
              >
                Craving fresh sushi or sizzling teppanyaki? Order your favorites 
                through Wolt for fast and convenient delivery, or call us for a 
                quick pickup. Perfect for family dinners or office lunches.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="wolt" size="lg" className="group cursor-pointer">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Order on Wolt
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-brand-green cursor-pointer">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Pickup
                </Button>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="relative h-full min-h-100 lg:min-h-full">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=1200"
                  alt="Sushi Delivery Packaging"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-r from-brand-green via-brand-green/20 to-transparent lg:block hidden" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-green via-brand-green/20 to-transparent lg:hidden block" />
              </motion.div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
