import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';

const highlights = [
  {
    title: 'Sushi Selection',
    description: 'Hand-rolled nigiri, maki, and sashimi using the freshest catch of the day.',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Teppanyaki Favorites',
    description: 'Sizzling meats and vegetables grilled to perfection on our traditional iron plate.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Fresh Sides',
    description: 'Crispy tempura, edamame, and authentic Japanese salads to complement your meal.',
    image: 'https://images.unsplash.com/photo-1581184953963-d15972933db1?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Hot Buffet Dishes',
    description: 'A wide variety of hot Japanese and Asian fusion dishes, from gyoza to teriyaki.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Decadent Desserts',
    description: 'Sweet endings featuring matcha treats, fresh fruits, and traditional Japanese sweets.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
  },
];

export const BuffetHighlights = () => {
  return (
    <section id="buffet" className="py-24 md:py-32 bg-brand-warm-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="The Experience"
          title="Buffet Highlights"
          description="Explore our diverse selection of authentic Japanese flavors, prepared fresh throughout the day."
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
                  alt={item.title}
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
