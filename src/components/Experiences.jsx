import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experiences } from '../data/experiences';

const Experiences = () => (
  <section id="experiences" className="py-24 md:py-32 bg-white">
    <div className="container">
      <SectionHeading eyebrow="How You'll Travel" title="Experience Sri Lanka Your Way" align="center" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="group relative h-48 md:h-56 rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              src={exp.image} alt={`${exp.title} experience in Sri Lanka`} loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/55 transition-colors flex items-end p-4">
              <h3 className="text-white font-serif text-base md:text-lg">{exp.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experiences;