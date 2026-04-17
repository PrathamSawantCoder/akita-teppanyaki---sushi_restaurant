import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Buffet', href: '#buffet' },
  { name: 'Delivery', href: '#delivery' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col">
          <span className={cn(
            "text-2xl md:text-3xl font-serif tracking-tight transition-colors duration-300",
            isScrolled ? "text-brand-green" : "text-white"
          )}>
            Akita
          </span>
          <span className={cn(
            "text-[10px] uppercase tracking-[0.3em] font-sans font-medium -mt-1 transition-colors duration-300",
            isScrolled ? "text-brand-gold" : "text-brand-gold/90"
          )}>
            Teppanyaki & Sushi
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brand-gold',
                isScrolled ? 'text-brand-charcoal' : 'text-white'
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="outline" size="sm" className={cn(
            "border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white cursor-pointer",
            !isScrolled && "border-white/30 text-white hover:bg-white hover:text-brand-green cursor-pointer"
          )}>
            <Calendar className="w-4 h-4 mr-2" />
            Reserve
          </Button>
          <Button variant="wolt" size="sm" className="cursor-pointer">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Order on Wolt
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-brand-charcoal" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-brand-charcoal" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-brand-charcoal hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-4 pt-4">
                <Button variant="outline" className="w-full cursor-pointer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Reserve Table
                </Button>
                <Button variant="wolt" className="w-full cursor-pointer">
                  <ShoppingBag className="w-4 h-4 mr-2 " />
                  Order on Wolt
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
