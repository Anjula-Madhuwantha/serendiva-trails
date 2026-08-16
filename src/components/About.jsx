import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import StatCounter from './StatCounter';
import Button from './Button';
import aboutimage from '../assets/aboutimage.jpg';

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 2500, suffix: '+', label: 'Happy Travellers' },
  { value: 25, suffix: '+', label: 'Unique Experiences' },
  { value: 9, suffix: '', label: 'Regions Across Sri Lanka' },
];

const About = () => (
  <section id="about" className="py-24 md:py-32 bg-offwhite overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
        className="relative"
      >
        <img
          src={aboutimage}
          alt="Traveller overlooking emerald tea plantations in the Sri Lankan highlands"
          className="rounded-2xl w-full h-[420px] md:h-[520px] object-cover"
          loading="lazy"
        />
        <div className="hidden sm:flex absolute -bottom-8 -right-6 md:-right-10 bg-jungle text-white rounded-2xl p-6 w-52 flex-col shadow-xl">
          <span className="font-serif text-3xl">9</span>
          <span className="text-xs uppercase tracking-wide text-sand mt-1">Regions, one unforgettable island</span>
        </div>
      </motion.div>

      <div>
        <SectionHeading
          eyebrow="The Serendiva Experience"
          title="More than a holiday. A journey into the heart of Sri Lanka."
        />
        <p className="mt-6 text-charcoal/70 leading-relaxed max-w-lg">
          Serendiva Trails designs private, personalised journeys across Sri Lanka — from mist-covered
          tea country to wild coastlines and ancient stone cities. We work with a small circle of local
          guides, drivers and boutique stays to build trips that feel less like a tour, and more like
          being shown the island by someone who truly loves it.
        </p>
        <Button as="a" href="#tours" variant="outlineDark" className="mt-8">Discover Our Story</Button>

        <div className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-charcoal/10">
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </div>
    </div>
  </section>
);

export default About;