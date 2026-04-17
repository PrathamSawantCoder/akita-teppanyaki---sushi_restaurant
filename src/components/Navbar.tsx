import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import { useLanguage, type Language } from '../contexts/LanguageContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = t<Array<{ name: string; href: string }>>('navbar.links');
  const brandPrimary = t<string>('navbar.brandPrimary');
  const brandSecondary = t<string>('navbar.brandSecondary');
  const reserve = t<string>('navbar.reserve');
  const reserveTable = t<string>('navbar.reserveTable');
  const orderOnWolt = t<string>('navbar.orderOnWolt');
  const openMenu = t<string>('navbar.openMenu');
  const closeMenu = t<string>('navbar.closeMenu');
  const switchLabel = t<string>('languageSwitcher.label');
  const english = t<string>('languageSwitcher.english');
  const finnish = t<string>('languageSwitcher.finnish');
  const shortEnglish = t<string>('languageSwitcher.shortEnglish');
  const shortFinnish = t<string>('languageSwitcher.shortFinnish');

  const options: Array<{ value: Language; label: string; short: string }> = [
    { value: 'en', label: english, short: shortEnglish },
    { value: 'fi', label: finnish, short: shortFinnish },
  ];

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
      <div className="xl:container mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#home" className="flex max-w-[11rem] flex-col sm:max-w-none">
          <span className={cn(
            "text-xl sm:text-2xl md:text-3xl font-serif tracking-tight transition-colors duration-300",
            isScrolled ? "text-brand-green" : "text-white"
          )}>
            {brandPrimary}
          </span>
          <span className={cn(
            "-mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.3em] font-sans font-medium transition-colors duration-300",
            isScrolled ? "text-brand-gold" : "text-brand-gold/90"
          )}>
            {brandSecondary}
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
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'relative flex items-center rounded-full border p-1 backdrop-blur-xl transition-all duration-300',
              isScrolled
                ? 'border-brand-gold/25 bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
                : 'border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.18)]'
            )}
            role="group"
            aria-label={switchLabel}
          >
            <span className="sr-only">{switchLabel}</span>
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className={cn(
                'absolute top-1 bottom-1 w-[calc(50%-0.125rem)] rounded-full',
                language === 'en' ? 'left-1' : 'left-[calc(50%+0.125rem)]',
                isScrolled ? 'bg-brand-green shadow-sm' : 'bg-white/90 shadow-[0_6px_20px_rgba(255,255,255,0.2)]'
              )}
            />
            {options.map((option) => {
              const active = language === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  aria-label={`${switchLabel}: ${option.label}`}
                  onClick={() => setLanguage(option.value)}
                  className={cn(
                    'relative z-10 min-w-12 rounded-full px-3 py-2 text-xs font-semibold tracking-[0.24em] transition-all duration-300 cursor-pointer',
                    active
                      ? isScrolled
                        ? 'text-white'
                        : 'text-brand-green'
                      : isScrolled
                        ? 'text-brand-charcoal/70 hover:text-brand-green'
                        : 'text-white/75 hover:text-white'
                  )}
                >
                  {option.short}
                </button>
              );
            })}
          </motion.div>
          <div className="hidden min-[1140px]:flex items-center space-x-4">
            <Button variant="outline" size="sm" className={cn(
              "border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white cursor-pointer",
              !isScrolled && "border-white/30 text-white hover:bg-white hover:text-brand-green cursor-pointer"
            )}>
              <Calendar className="w-4 h-4 mr-2" />
              {reserve}
            </Button>
            <Button variant="wolt" size="sm" className="cursor-pointer">
              <ShoppingBag className="w-4 h-4 mr-2" />
              {orderOnWolt}
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? closeMenu : openMenu}
          className="lg:hidden rounded-full p-2"
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
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="container mx-auto flex flex-col space-y-6 px-4 py-6 sm:px-6 sm:py-8">
              <div className="flex flex-col gap-4 rounded-2xl border border-brand-gold/15 bg-brand-warm-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">{switchLabel}</p>
                  <p className="text-sm text-brand-charcoal/60">{language === 'en' ? english : finnish}</p>
                </div>
                <motion.button
                  type="button"
                  aria-label={switchLabel}
                  aria-pressed={language === 'fi'}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setLanguage(language === 'en' ? 'fi' : 'en')}
                  className="relative inline-flex h-12 w-full max-w-28 items-center self-start rounded-full bg-brand-charcoal p-1 shadow-[0_12px_30px_rgba(16,24,32,0.18)] cursor-pointer sm:self-auto"
                >
                  <motion.span
                    layout
                    transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                    className={cn(
                      'absolute top-1 bottom-1 w-13 rounded-full bg-brand-gold',
                      language === 'en' ? 'left-1' : 'left-14'
                    )}
                  />
                  <span className={cn('relative z-10 flex-1 text-center text-xs font-semibold tracking-[0.24em]', language === 'en' ? 'text-brand-charcoal' : 'text-white/75')}>
                    {shortEnglish}
                  </span>
                  <span className={cn('relative z-10 flex-1 text-center text-xs font-semibold tracking-[0.24em]', language === 'fi' ? 'text-brand-charcoal' : 'text-white/75')}>
                    {shortFinnish}
                  </span>
                </motion.button>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-medium text-brand-charcoal transition-colors hover:text-brand-gold"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-4 pt-4">
                <Button variant="outline" className="w-full cursor-pointer">
                  <Calendar className="w-4 h-4 mr-2" />
                  {reserveTable}
                </Button>
                <Button variant="wolt" className="w-full cursor-pointer">
                  <ShoppingBag className="w-4 h-4 mr-2 " />
                  {orderOnWolt}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
