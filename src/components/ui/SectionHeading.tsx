import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        centered ? 'text-center' : 'text-left',
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            'block text-sm font-semibold uppercase tracking-[0.2em] mb-3',
            light ? 'text-brand-gold/80' : 'text-brand-gold'
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight',
          light ? 'text-white' : 'text-brand-charcoal'
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            'max-w-2xl text-lg leading-relaxed',
            centered ? 'mx-auto' : '',
            light ? 'text-white/70' : 'text-brand-charcoal/70'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
