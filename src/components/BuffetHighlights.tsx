import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

export const BuffetHighlights = () => {
  const { t } = useLanguage();
  const highlights = t<Array<{ title: string; description: string; image: string; imageAlt: string }>>('buffet.items');

  return (
    <section id="buffet" className="py-24 md:py-32 bg-brand-warm-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle={t<string>('buffet.subtitle')}
          title={t<string>('buffet.title')}
          description={t<string>('buffet.description')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3 text-brand-green group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-brand-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
