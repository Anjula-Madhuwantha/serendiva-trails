import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { navLinks } from '../data/nav';

const MobileMenu = ({ open, onClose }) => {
  const mainLinks = navLinks.filter((l) => l.label !== 'Plan Your Trip');

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[100] bg-charcoal/70 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 z-[110] flex h-full w-[85%] max-w-sm flex-col bg-offwhite p-6 shadow-2xl lg:hidden"
            style={{ backgroundColor: 'var(--color-offwhite, #F8F5F0)' }} // force solid
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-10 flex items-center justify-between">
              <Logo variant="dark" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full p-2 text-jungle transition-colors hover:bg-jungle/10 hover:text-sunset"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block text-xl font-serif text-jungle transition-colors hover:text-sunset"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Button
                as="a"
                href="#plan-trip"
                onClick={onClose}
                className="w-full"
              >
                Plan Your Trip
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenu;