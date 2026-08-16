import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TourCard = ({ tour }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}
    className="group flex flex-col rounded-2xl overflow-hidden bg-offwhite border border-charcoal/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={tour.image} alt={tour.alt} loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <span className="absolute top-4 left-4 bg-white/90 text-jungle text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full">
        {tour.category}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <span className="text-xs uppercase tracking-wide text-sunset font-semibold mb-2">{tour.duration}</span>
      <h3 className="font-serif text-xl text-jungle mb-2">{tour.title}</h3>
      <p className="text-sm text-charcoal/60 mb-4">{tour.route}</p>
      <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{tour.description}</p>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-charcoal/10">
        <span className="font-serif text-lg text-jungle">{tour.price}</span>
        <a
          href="#contact" aria-label={`Enquire about ${tour.title}`}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-jungle text-white group-hover:bg-sunset transition-colors"
        >
          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  </motion.article>
);

export default TourCard;