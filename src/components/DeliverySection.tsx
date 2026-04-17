import { motion } from 'motion/react';
import { ShoppingBag, Phone, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

export const DeliverySection = () => {
  const { t } = useLanguage();

  return (
    <section id="delivery" className="overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative rounded-[2.5rem] bg-brand-green overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#c5a059_1px,transparent_1px)] bg-size-[40px_40px]" />
          </div>

          <div className="relative z-10 grid items-center lg:grid-cols-2">
            {/* Text Content */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-5 inline-block text-brand-gold font-semibold uppercase tracking-[0.18em] sm:mb-6 sm:tracking-[0.2em]"
              >
                {t<string>('delivery.eyebrow')}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-white sm:mb-8"
              >
                {t<string>('delivery.titleLineOne')} <br className="hidden sm:block" /> 
                <span className="text-brand-gold italic">{t<string>('delivery.titleAccent')}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8 max-w-lg text-base leading-relaxed text-white/70 sm:mb-10 sm:text-lg lg:mb-12"
              >
                {t<string>('delivery.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-3 sm:flex-row sm:gap-4"
              >
                <Button variant="wolt" size="lg" className="group w-full sm:w-auto cursor-pointer">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {t<string>('delivery.orderCta')}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-brand-green cursor-pointer">
                  <Phone className="w-5 h-5 mr-2" />
                  {t<string>('delivery.pickupCta')}
                </Button>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="relative order-first min-h-72 sm:min-h-96 lg:order-none lg:h-full lg:min-h-full">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=1200"
                  alt={t<string>('delivery.imageAlt')}
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
