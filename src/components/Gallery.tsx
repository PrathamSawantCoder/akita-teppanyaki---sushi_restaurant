import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { cn } from '../lib/utils';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800',
    title: 'Sushi Platter',
    size: 'large',
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    title: 'Dining Area',
    size: 'small',
  },
  {
    url: 'https://images.unsplash.com/photo-1632158929962-a929c9e87570?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Teppanyaki Grill',
    size: 'small',
  },
  {
    url: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800',
    title: 'Fresh Sashimi',
    size: 'medium',
  },
  {
    url: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    title: 'Buffet Selection',
    size: 'medium',
  },
  {
    url: 'https://images.unsplash.com/photo-1581184953963-d15972933db1?auto=format&fit=crop&q=80&w=800',
    title: 'Japanese Sides',
    size: 'small',
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Visual Journey"
          title="Inside Akita"
          description="Take a look at our beautiful dining space and the exquisite dishes we prepare with passion."
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
                alt={image.title}
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
