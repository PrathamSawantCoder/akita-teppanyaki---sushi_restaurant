import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

export const Gallery = () => {
  const { t } = useLanguage();
  const images = t<Array<{ url: string; title: string; size: 'large' | 'medium' | 'small'; alt: string }>>('gallery.images');

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle={t<string>('gallery.subtitle')}
          title={t<string>('gallery.title')}
          description={t<string>('gallery.description')}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative group overflow-hidden rounded-3xl cursor-pointer",
                image.size === 'large' ? 'col-span-2 row-span-2 aspect-square' : 
                image.size === 'medium' ? 'col-span-2 aspect-video' : 'aspect-square'
              )}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white font-serif text-xl md:text-2xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
