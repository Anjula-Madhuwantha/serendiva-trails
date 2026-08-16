import { Compass, Users, Headphones, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const benefits = [
  { icon: Users, title: 'Local Experts', text: 'Travel with people who know Sri Lanka beyond the guidebooks.' },
  { icon: Compass, title: 'Private Journeys', text: 'Every itinerary can be tailored around your interests.' },
  { icon: Headphones, title: '24/7 Support', text: 'We are there before, during and after your journey.' },
  { icon: Leaf, title: 'Responsible Travel', text: 'We support local communities and responsible tourism.' },
];

const WhyChooseUs = () => (
  <section className="py-24 md:py-32 bg-jungle text-white">
    <div className="container">
      <SectionHeading light eyebrow="Why Serendiva Trails" title="Travel differently. Travel with confidence." align="center" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center px-4"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-5">
              <b.icon size={24} className="text-sand" />
            </div>
            <h3 className="font-serif text-xl mb-2">{b.title}</h3>
            <p className="text-sm text-white/70 leading-relaxed">{b.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;