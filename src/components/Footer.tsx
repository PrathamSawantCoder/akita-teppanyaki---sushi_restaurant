import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, ShoppingBag, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col">
            <a href="#home" className="flex flex-col mb-6">
              <span className="text-3xl font-serif tracking-tight text-white">Akita</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-medium -mt-1 text-brand-gold">
                Teppanyaki & Sushi
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              Experience the finest Japanese buffet in Joensuu. Fresh sushi, 
              sizzling teppanyaki, and a premium atmosphere await you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-brand-gold">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Buffet', 'Delivery', 'About', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-brand-gold">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/60 text-sm">Kauppakatu 25, 80100 Joensuu, Finland</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/60 text-sm">+358 12 345 6789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/60 text-sm">info@akitajoensuu.fi</span>
              </li>
            </ul>
          </div>

          {/* Order Now */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-brand-gold">Order Online</h4>
            <p className="text-white/50 text-sm mb-6">
              Get your favorite Japanese dishes delivered directly to your door via Wolt.
            </p>
            <Button variant="wolt" className="w-full mb-4 cursor-pointer">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Order on Wolt
            </Button>
            <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold text-center">
              Fast & Secure Delivery
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Akita Teppanyaki & Sushi. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
