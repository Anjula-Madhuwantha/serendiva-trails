import { MessageCircle } from 'lucide-react';
import Button from './Button';
import SriLankancoast from '../assets/SriLankancoast.jpg';

const CTA = () => (
  <section className="relative py-28 md:py-36">
    <img
      src={SriLankancoast}
      alt="Sunset over the Indian Ocean along the Sri Lankan coast"
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-charcoal/70" />
    <div className="container relative z-10 text-center max-w-2xl mx-auto text-white">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5">Ready to Discover Your Sri Lanka?</h2>
      <p className="text-white/85 mb-9 leading-relaxed">
        Tell us what you dream of experiencing, and we'll turn it into a journey you'll never forget.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button as="a" href="#contact" size="lg">Start Planning</Button>
        <Button as="a" href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
          <MessageCircle size={18} /> WhatsApp Us
        </Button>
      </div>
    </div>
  </section>
);

export default CTA;