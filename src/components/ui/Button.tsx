import * as React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../../lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold' | 'wolt';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-green text-white hover:bg-brand-emerald shadow-lg shadow-brand-green/10',
      secondary: 'bg-brand-charcoal text-white hover:bg-black',
      outline: 'border border-brand-green text-brand-green hover:bg-brand-green hover:text-white',
      ghost: 'text-brand-green hover:bg-brand-green/5',
      gold: 'bg-brand-gold text-white hover:brightness-110 shadow-lg shadow-brand-gold/20',
      wolt: 'bg-[#00c2e8] text-white hover:brightness-110 shadow-lg shadow-[#00c2e8]/20',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-medium',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-green/50 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
