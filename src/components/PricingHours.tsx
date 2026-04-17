import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { Clock, Tag, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

export const PricingHours = () => {
  const { t } = useLanguage();
  const pricing = t<Array<{ title: string; time: string; price: string; features: string[]; highlight?: boolean }>>('pricing.cards');
  const hours = t<Array<{ day: string; time: string }>>('pricing.hours');

  return (
    <section className="relative overflow-hidden bg-brand-green py-20 md:py-32">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-emerald/20 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <SectionHeading
          light
          subtitle={t<string>('pricing.subtitle')}
          title={t<string>('pricing.title')}
          description={t<string>('pricing.description')}
        />

        <div className="grid items-start gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Pricing Cards */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:col-span-2">
            {pricing.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-4xl border p-6 sm:p-8 lg:p-10 transition-all duration-500 ${
                  item.highlight 
                    ? 'z-10 scale-100 bg-white border-brand-gold shadow-2xl md:scale-[1.02] lg:scale-105' 
                    : 'bg-brand-emerald/30 border-white/10 text-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  item.highlight ? 'bg-brand-gold/10 text-brand-gold' : 'bg-white/10 text-brand-gold'
                }`}>
                  <Tag className="w-6 h-6" />
                </div>
                <h3 className={`mb-2 text-2xl sm:text-3xl font-serif ${item.highlight ? 'text-brand-green' : 'text-white'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm font-medium mb-6 ${item.highlight ? 'text-brand-charcoal/60' : 'text-white/60'}`}>
                  {item.time}
                </p>
                <div className="mb-8 flex items-baseline">
                  <span className={`text-4xl sm:text-5xl font-serif font-bold ${item.highlight ? 'text-brand-green' : 'text-white'}`}>
                    {item.price}
                  </span>
                  <span className={`ml-2 text-sm ${item.highlight ? 'text-brand-charcoal/40' : 'text-white/40'}`}>
                    {t<string>('pricing.perPerson')}
                  </span>
                </div>
                <ul className="space-y-4 mb-10">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${item.highlight ? 'bg-brand-gold' : 'bg-brand-gold'}`} />
                      <span className={item.highlight ? 'text-brand-charcoal/80' : 'text-white/80'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={item.highlight ? 'primary' : 'outline'} 
                  className={`w-full cursor-pointer ${!item.highlight && 'border-white/30 text-white hover:bg-white hover:text-brand-green cursor-pointer'}`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t<string>('pricing.reserveNow')}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-4xl border border-white/10 bg-brand-charcoal p-6 text-white sm:p-8 lg:p-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-brand-gold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-serif mb-8">{t<string>('pricing.hoursTitle')}</h3>
            <div className="space-y-6">
              {hours.map((item) => (
                <div key={item.day} className="flex items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <span className="text-white/60 text-sm font-medium">{item.day}</span>
                  <span className="text-right text-base sm:text-lg font-serif text-brand-gold">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 sm:mt-10 sm:p-6">
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2">{t<string>('pricing.noteLabel')}</p>
              <p className="text-sm text-white/70 leading-relaxed">
                {t<string>('pricing.note')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
