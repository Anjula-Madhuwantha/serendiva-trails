import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Lightbox from './Lightbox';
import { galleryImages } from '../data/gallery';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="container">
        <SectionHeading eyebrow="Moments" title="A Glimpse of the Island" align="center" />
        <div className="columns-2 md:columns-3 gap-4 mt-16">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="group relative w-full mb-4 break-inside-avoid rounded-xl overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset"
              aria-label={`View larger image: ${img.alt}`}
            >
              <img
                src={img.src} alt={img.alt} loading="lazy"
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${i % 3 === 0 ? 'h-80' : 'h-56'}`}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
      <Lightbox images={galleryImages} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onChangeIndex={setActiveIndex} />
    </section>
  );
};

export default Gallery;