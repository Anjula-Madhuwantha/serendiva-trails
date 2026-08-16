import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from './Button';
import heroimage from '../assets/heroimage.jpg';

const Hero = () => (
  <section id="home" className="relative h-[100svh] min-h-[640px] w-full flex items-end overflow-hidden">
    <img
      src= {heroimage}
      alt="Ancient rock fortress of Sigiriya rising above the jungle canopy at sunrise in Sri Lanka"
      className="absolute inset-0 w-full h-full object-cover"
      fetchPriority="high"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/20" />

    <div className="container relative z-10 pb-28 md:pb-36 text-white">
      <motion.p
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        className="text-xs md:text-sm tracking-[0.3em] uppercase text-sand mb-4 font-medium"
      >
        Authentic Sri Lanka • Private Journeys
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] max-w-3xl"
      >
        Your Sri Lanka<br /> Story Starts Here.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 max-w-xl text-base md:text-lg text-white/85"
      >
        Discover ancient kingdoms, wild landscapes, golden beaches and unforgettable local experiences — crafted around you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-9 flex flex-wrap gap-4"
      >
        <Button as="a" href="#tours" size="lg">Explore Our Tours</Button>
        <Button as="a" href="#plan-trip" variant="outline" size="lg">Plan Your Journey</Button>
      </motion.div>
    </div>

    <motion.a
      href="#plan-trip" aria-label="Scroll to plan your journey"
      className="hidden md:flex absolute bottom-8 right-8 z-10 flex-col items-center gap-2 text-white/80"
      animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-[10px] tracking-[0.25em] uppercase [writing-mode:vertical-rl]">Scroll</span>
      <ChevronDown size={18} />
    </motion.a>
  </section>
);

export default Hero;