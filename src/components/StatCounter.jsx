import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const StatCounter = ({ value, suffix = '', label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 1400;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <span className="font-serif text-3xl md:text-4xl text-jungle">{count.toLocaleString()}{suffix}</span>
      <p className="text-sm text-charcoal/60 mt-1">{label}</p>
    </div>
  );
};

export default StatCounter;