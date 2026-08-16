import { useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, activeIndex, onClose, onChangeIndex }) => {
  const isOpen = activeIndex !== null;

  const goNext = useCallback(() => onChangeIndex((activeIndex + 1) % images.length), [activeIndex, images.length, onChangeIndex]);
  const goPrev = useCallback(() => onChangeIndex((activeIndex - 1 + images.length) % images.length), [activeIndex, images.length, onChangeIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        role="dialog" aria-modal="true" aria-label="Image viewer"
      >
        <button type="button" onClick={onClose} aria-label="Close image viewer" className="absolute top-5 right-5 text-white/80 hover:text-white p-2">
          <X size={28} />
        </button>
        <button type="button" onClick={goPrev} aria-label="Previous image" className="absolute left-3 md:left-8 text-white/80 hover:text-white p-2">
          <ChevronLeft size={32} />
        </button>
        <motion.img
          key={images[activeIndex].src}
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          className="max-h-[85vh] max-w-[90vw] object-contain rounded-md"
        />
        <button type="button" onClick={goNext} aria-label="Next image" className="absolute right-3 md:right-8 text-white/80 hover:text-white p-2">
          <ChevronRight size={32} />
        </button>
        <p className="absolute bottom-6 text-white/60 text-sm">{activeIndex + 1} / {images.length}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;