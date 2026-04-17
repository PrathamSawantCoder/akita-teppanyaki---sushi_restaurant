import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Anna K.',
    role: 'Local Guide',
    content: 'The best sushi buffet in Joensuu! Everything is so fresh, and the variety is impressive. The teppanyaki is a must-try.',
    rating: 5,
  },
  {
    name: 'Markus L.',
    role: 'Regular Customer',
    content: 'We often order through Wolt, and the food always arrives fresh and beautifully presented. Fast delivery and great quality.',
    rating: 5,
  },
  {
    name: 'Elena S.',
    role: 'Food Enthusiast',
    content: 'A truly premium atmosphere. Perfect for a business lunch or a special family dinner. The staff is incredibly friendly.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-warm-white relative overflow-hidden">
      {/* Decorative Quote Icon */}
      <div className="absolute top-20 left-10 opacity-5 pointer-events-none">
        <Quote className="w-64 h-64 text-brand-green" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle="Guest Reviews"
          title="What Our Guests Say"
          description="We take pride in providing an exceptional dining experience. Here is what some of our valued guests have to say."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-brand-charcoal/70 italic leading-relaxed mb-8 text-lg">
                "{item.content}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <span className="text-brand-green font-serif font-bold text-lg">{item.name[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-brand-charcoal">{item.name}</p>
                  <p className="text-xs text-brand-gold uppercase tracking-widest font-bold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
