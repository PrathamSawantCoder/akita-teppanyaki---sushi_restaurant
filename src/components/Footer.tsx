import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, ShoppingBag, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const links = t<Array<{ name: string; href: string }>>('footer.links');

  return (
    <footer className="bg-brand-charcoal pb-10 pt-16 text-white sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:mb-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="flex flex-col">
            <a href="#home" className="flex flex-col mb-6">
              <span className="text-2xl sm:text-3xl font-serif tracking-tight text-white">Akita</span>
              <span className="-mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.3em] font-sans font-medium text-brand-gold">
                Teppanyaki & Sushi
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              {t<string>('footer.description')}
            </p>
            <div className="flex flex-wrap gap-4">
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
            <h4 className="text-lg font-serif mb-6 text-brand-gold">{t<string>('footer.quickLinksTitle')}</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-brand-gold">{t<string>('footer.contactTitle')}</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/60 text-sm">{t<string>('contact.address')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/60 text-sm">{t<string>('contact.phone')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/60 text-sm">info@akitajoensuu.fi</span>
              </li>
            </ul>
          </div>

          {/* Order Now */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-brand-gold">{t<string>('footer.orderTitle')}</h4>
            <p className="text-white/50 text-sm mb-6">
              {t<string>('footer.orderDescription')}
            </p>
            <Button variant="wolt" className="w-full mb-4 cursor-pointer">
              <ShoppingBag className="w-4 h-4 mr-2" />
              {t<string>('footer.orderCta')}
            </Button>
            <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold text-center">
              {t<string>('footer.deliveryNote')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center md:flex-row md:text-left">
          <p className="text-xs text-white/30">
            {t<string>('footer.copyright').replace('2026', String(new Date().getFullYear()))}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:justify-end">
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">{t<string>('footer.privacy')}</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">{t<string>('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
