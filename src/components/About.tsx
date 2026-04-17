import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();
  const features = t<string[]>('about.features');

  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
                alt={t<string>('about.imageAlt')}
                className="w-full aspect-4/5 object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-brand-gold/10 blur-3xl -z-10 sm:-bottom-10 sm:-right-10 sm:h-64 sm:w-64" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 z-20 hidden rounded-2xl bg-brand-green p-5 shadow-xl sm:block md:-bottom-6 md:-right-6 md:p-8"
            >
              <p className="text-white font-serif text-2xl mb-1">{t<string>('about.experienceYears')}</p>
              <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold">{t<string>('about.experienceLabel')}</p>
            </motion.div>
          </div>

          {/* Text Side */}
          <div>
            <SectionHeading
              centered={false}
              subtitle={t<string>('about.subtitle')}
              title={t<string>('about.title')}
              description={t<string>('about.description')}
            />

            <div className="mb-8 space-y-4 sm:mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-sm font-medium text-brand-charcoal/80 sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-brand-gold/20 bg-brand-warm-white p-5 sm:p-6"
            >
              <p className="italic text-brand-charcoal/70 leading-relaxed">
                &quot;{t<string>('about.quote')}&quot;
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <span className="text-brand-green font-serif font-bold">A</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-charcoal">{t<string>('about.author')}</p>
                  <p className="text-xs text-brand-gold uppercase tracking-wider">{t<string>('about.role')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
