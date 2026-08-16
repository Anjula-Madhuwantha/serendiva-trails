import { motion } from 'framer-motion';
import Button from './Button';
import ella from '../assets/Ella.jpg';

const FeaturedExperience = () => (
  <section className="bg-offwhite">
    <div className="grid lg:grid-cols-2 min-h-[600px]">
      <div className="relative h-72 lg:h-auto">
        <img
          src={ella}
          alt="Blue train winding through green tea plantations near Ella, Sri Lanka"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center bg-jungle text-white p-8 sm:p-14 lg:p-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-sand mb-4 block">A Journey Within a Journey</span>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-6">The Journey Is Part of the Destination</h2>
          <p className="text-white/80 leading-relaxed mb-8 max-w-md">
            Wind through emerald tea plantations, misty mountains and little villages aboard one of the
            world's most beautiful train journeys — from Kandy up to Ella's cool highland air.
          </p>
          <Button as="a" href="#tours">Explore Tea Country</Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeaturedExperience;