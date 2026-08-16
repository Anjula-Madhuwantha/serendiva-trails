import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import MobileMenu from './MobileMenu';
import { navLinks } from '../data/nav';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const mainLinks = navLinks.filter((l) => l.label !== 'Plan Your Trip');

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) {
      const onScroll = () => setScrolled(window.scrollY > 40);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: '-70px 0px 0px 0px',
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-offwhite/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav
        className="container flex items-center justify-between"
        aria-label="Primary navigation"
      >
        <a href="#home" aria-label="Serendiva Trails — Home" className="relative z-10">
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {mainLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? 'text-charcoal hover:text-sunset'
                    : 'text-white hover:text-sand'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button as="a" href="#plan-trip" size="sm">
            Plan Your Trip
          </Button>
        </div>

        <button
          type="button"
          className={`lg:hidden relative z-10 p-2 rounded-full transition-colors ${
            scrolled ? 'text-jungle' : 'text-white'
          }`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={26} />
        </button>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Navbar;