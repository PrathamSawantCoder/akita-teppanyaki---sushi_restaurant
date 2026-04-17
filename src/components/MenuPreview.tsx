import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';

const menuItems = [
  {
    name: 'Dragon Roll',
    description: 'Tempura shrimp, cucumber, topped with avocado, eel sauce, and spicy mayo.',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Salmon Nigiri Platter',
    description: 'Fresh Atlantic salmon slices over hand-pressed seasoned rice.',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Teppanyaki Ribeye',
    description: 'Premium ribeye steak grilled with garlic butter and Japanese soy sauce.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Vegetable Tempura',
    description: 'Assorted seasonal vegetables in a light, crispy tempura batter.',
    image: 'https://images.unsplash.com/photo-1581184953963-d15972933db1?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Chicken Teriyaki',
    description: 'Grilled chicken breast glazed with our house-made teriyaki sauce.',
    image: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Matcha Cheesecake',
    description: 'Creamy cheesecake infused with premium Japanese green tea.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600',
  },
];

export const MenuPreview = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Signature Dishes"
          title="A Glimpse of Our Menu"
          description="From our signature rolls to sizzling teppanyaki, discover the dishes that make Akita a local favorite."
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
                  alt={item.name}
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
