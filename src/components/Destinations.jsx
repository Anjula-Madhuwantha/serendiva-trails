import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { destinations } from '../data/destinations';

const Destinations = () => (
  <section id="destinations" className="py-24 md:py-32 bg-offwhite">
    <div className="container">
      <SectionHeading eyebrow="Where to Go" title="One Island. Endless Stories." align="center" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-6 mt-16">
        {destinations.map((d, i) => (
          <motion.a
            key={d.name}
            href="#tours"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className={`group relative rounded-2xl overflow-hidden block ${d.size === 'lg' ? 'lg:col-span-2 lg:row-span-2' : ''}`}
          >
            <img
              src={d.image} alt={`${d.name}, ${d.region}, Sri Lanka`} loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <span className="text-xs uppercase tracking-wide text-sand/90 mb-1">{d.region}</span>
              <h3 className="font-serif text-2xl text-white mb-2">{d.name}</h3>
              <p className="text-sm text-white/80 max-w-xs mb-3 hidden sm:block">{d.description}</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-medium">
                Explore <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Destinations;