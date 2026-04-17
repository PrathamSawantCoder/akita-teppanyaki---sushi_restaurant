import { motion } from 'motion/react';
import { ShoppingBag, Calendar, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 sm:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=2000"
          alt={t<string>('hero.heroAlt')}
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-charcoal/70 via-brand-charcoal/40 to-brand-charcoal/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-5 inline-block rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1.5 backdrop-blur-sm sm:mb-6 sm:px-4"
        >
          <span className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.22em] sm:tracking-[0.3em] text-brand-gold">
            {t<string>('hero.eyebrow')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-tight sm:leading-[1.1] text-balance text-white drop-shadow-[5px_2px_3px_rgba(0,0,0,0.65)] sm:mb-8"
        >
          {t<string>('hero.titleLineOne')} <br className="hidden sm:block" />
          <span className="text-brand-gold italic drop-shadow-[5px_2px_10px_rgba(0,0,0,0.65)]">{t<string>('hero.titleAccent')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-balance text-white/80 sm:text-lg md:text-xl sm:mb-12"
        >
          {t<string>('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Button variant="gold" size="lg" className="w-full sm:w-auto cursor-pointer">
            <Calendar className="w-5 h-5 mr-2" />
            {t<string>('hero.primaryCta')}
          </Button>
          <Button variant="wolt" size="lg" className="w-full sm:w-auto cursor-pointer">
            <ShoppingBag className="w-5 h-5 mr-2 " />
            {t<string>('hero.secondaryCta')}
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:bottom-10 sm:block"
      >
        <a href="#about" className="flex flex-col items-center text-white/50 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">{t<string>('hero.scroll')}</span>
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
