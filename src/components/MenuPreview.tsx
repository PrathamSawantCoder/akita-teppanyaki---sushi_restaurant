import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

export const MenuPreview = () => {
  const { t } = useLanguage();
  const menuItems = t<Array<{ name: string; description: string; image: string; imageAlt: string }>>('menu.items');

  return (
    <section id="menu" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle={t<string>('menu.subtitle')}
          title={t<string>('menu.title')}
          description={t<string>('menu.description')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif mb-2 text-brand-charcoal group-hover:text-brand-gold transition-colors">
                {item.name}
              </h3>
              <p className="text-brand-charcoal/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
