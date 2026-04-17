import { motion } from 'motion/react';
import { ShoppingBag, Calendar, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-175 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=2000"
          alt="Premium Sushi Platter"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-charcoal/70 via-brand-charcoal/40 to-brand-charcoal/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm"
        >
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Fresh Sushi • Teppanyaki • Buffet • Delivery
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] text-balance drop-shadow-[5px_2px_3px_rgba(0,0,0,0.65)]"
        >
          Premium Japanese Buffet <br className="hidden md:block" />
          <span className="text-brand-gold italic drop-shadow-[5px_2px_10px_rgba(0,0,0,0.65)]">Experience in Joensuu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-12 leading-relaxed text-balance"
        >
          Discover the art of Japanese cuisine. From fresh sushi made daily to 
          sizzling teppanyaki favorites, enjoy a refined dining experience or 
          fast delivery to your door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="gold" size="lg" className="w-full sm:w-auto cursor-pointer">
            <Calendar className="w-5 h-5 mr-2" />
            Reserve Table
          </Button>
          <Button variant="wolt" size="lg" className="w-full sm:w-auto cursor-pointer">
            <ShoppingBag className="w-5 h-5 mr-2 " />
            Order on Wolt
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center text-white/50 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
