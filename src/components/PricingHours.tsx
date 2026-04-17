import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { Clock, Tag, Calendar } from 'lucide-react';
import { Button } from './ui/Button';

const pricing = [
  {
    title: 'Lunch Buffet on Workdays',
    time: 'Mon - Fri | 11:00 - 15:00',
    price: '14.50€',
    features: ['Full Sushi Selection', 'Hot Dishes', 'Salad Bar', 'Coffee & Tea'],
  },
  {
    title: 'On Weekend',
    time: 'Sat - Sun | 15:00 - Close',
    price: '17.90€',
    features: ['Premium Sushi Selection', 'Teppanyaki Grill', 'Specialty Rolls', 'Dessert Buffet'],
    highlight: true,
  },
];

const hours = [
  { day: 'Monday - Thursday', time: '11:00 - 21:00' },
  { day: 'Friday', time: '11:00 - 22:00' },
  { day: 'Saturday', time: '12:00 - 22:00' },
  { day: 'Sunday', time: '12:00 - 21:00' },
];

export const PricingHours = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-green relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-emerald/20 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          light
          subtitle="Plan Your Visit"
          title="Buffet Pricing & Hours"
          description="Join us for a delightful culinary journey. We offer special rates for lunch and a premium experience for dinner and weekends."
        />

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Pricing Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {pricing.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-10 rounded-4xl border transition-all duration-500 ${
                  item.highlight 
                    ? 'bg-white border-brand-gold shadow-2xl scale-105 z-10' 
                    : 'bg-brand-emerald/30 border-white/10 text-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  item.highlight ? 'bg-brand-gold/10 text-brand-gold' : 'bg-white/10 text-brand-gold'
                }`}>
                  <Tag className="w-6 h-6" />
                </div>
                <h3 className={`text-3xl font-serif mb-2 ${item.highlight ? 'text-brand-green' : 'text-white'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm font-medium mb-6 ${item.highlight ? 'text-brand-charcoal/60' : 'text-white/60'}`}>
                  {item.time}
                </p>
                <div className="flex items-baseline mb-8">
                  <span className={`text-5xl font-serif font-bold ${item.highlight ? 'text-brand-green' : 'text-white'}`}>
                    {item.price}
                  </span>
                  <span className={`ml-2 text-sm ${item.highlight ? 'text-brand-charcoal/40' : 'text-white/40'}`}>
                    / person
                  </span>
                </div>
                <ul className="space-y-4 mb-10">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
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
                  Reserve Now
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-charcoal p-10 rounded-4xl border border-white/10 text-white"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-brand-gold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-serif mb-8">Opening Hours</h3>
            <div className="space-y-6">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-white/60 text-sm font-medium">{item.day}</span>
                  <span className="text-brand-gold font-serif text-lg">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2">Note</p>
              <p className="text-sm text-white/70 leading-relaxed">
                Kitchen closes 30 minutes before closing time. Special holiday hours may apply.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
