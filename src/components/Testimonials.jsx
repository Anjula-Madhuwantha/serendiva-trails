import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/testimonials';

const Testimonials = () => (
  <section className="py-24 md:py-32 bg-sand/40">
    <div className="container">
      <SectionHeading eyebrow="Traveller Stories" title="Stories From Our Travellers" align="center" />
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm relative"
          >
            <Quote className="text-sand-dark absolute top-6 right-6" size={36} aria-hidden="true" />
            <div className="flex items-center gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} size={16} className="fill-sunset text-sunset" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="text-charcoal/80 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="flex items-center gap-3">
              <img src={t.avatar} alt={`${t.name}, traveller from ${t.country}`} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="font-medium text-jungle text-sm">
                  {t.name} <span className="text-charcoal/50 font-normal">· {t.country}</span>
                </p>
                <p className="text-xs text-charcoal/50">{t.trip}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;