import { motion } from 'framer-motion';

const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants = {
  primary: 'bg-sunset text-white hover:bg-sunset-dark focus-visible:ring-sunset shadow-lg shadow-sunset/20',
  secondary: 'bg-white text-jungle hover:bg-sand focus-visible:ring-jungle',
  outline: 'border border-white/70 text-white hover:bg-white/10 focus-visible:ring-white',
  outlineDark: 'border border-jungle/30 text-jungle hover:bg-jungle hover:text-white focus-visible:ring-jungle',
  ghost: 'text-jungle hover:text-sunset',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm md:text-base',
  lg: 'px-8 py-4 text-base md:text-lg',
};

const Button = ({ as = 'button', variant = 'primary', size = 'md', className = '', children, ...props }) => {
  const Comp = as === 'a' ? motion.a : motion.button;
  return (
    <Comp
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;