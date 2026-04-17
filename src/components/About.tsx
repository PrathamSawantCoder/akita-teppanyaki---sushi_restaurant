import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { Check } from 'lucide-react';

const features = [
  'Authentic Japanese Buffet Dining',
  'Fresh Sushi Handcrafted Daily',
  'Sizzling Teppanyaki Favorites',
  'Cozy & Premium Atmosphere',
  'Fast Takeaway & Delivery',
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                alt="Restaurant Interior"
                className="w-full aspect-4/5 object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-brand-green p-8 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <p className="text-white font-serif text-2xl mb-1">10+ Years</p>
              <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold">Of Culinary Excellence</p>
            </motion.div>
          </div>

          {/* Text Side */}
          <div>
            <SectionHeading
              centered={false}
              subtitle="Our Story"
              title="A Tradition of Excellence in Every Bite"
              description="Akita Teppanyaki & Sushi brings the authentic flavors of Japan to the heart of Joensuu. Our mission is to provide a premium dining experience that combines traditional techniques with modern culinary creativity."
            />

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-brand-charcoal/80 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-brand-warm-white border border-brand-gold/20"
            >
              <p className="italic text-brand-charcoal/70 leading-relaxed">
                "We believe that great food starts with the finest ingredients. 
                Our chefs meticulously select every piece of fish and every vegetable 
                to ensure that every dish served at Akita meets our high standards 
                of quality and freshness."
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <span className="text-brand-green font-serif font-bold">A</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-charcoal">Master Chef Akita</p>
                  <p className="text-xs text-brand-gold uppercase tracking-wider">Executive Chef</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
