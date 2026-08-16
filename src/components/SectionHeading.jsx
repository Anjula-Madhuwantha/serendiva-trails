import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, description, align = 'left', light = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
  >
    {eyebrow && (
      <span className={`block text-xs tracking-[0.3em] uppercase font-medium mb-3 ${light ? 'text-sand' : 'text-sunset'}`}>
        {eyebrow}
      </span>
    )}
    <h2 className={`font-serif text-3xl sm:text-4xl md:text-[2.75rem] leading-tight ${light ? 'text-white' : 'text-jungle'}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/80' : 'text-charcoal/70'}`}>{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;