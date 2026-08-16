import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../data/nav';

const socials = [
  { icon: Instagram, href: 'https://instagram.com/serendivatrails', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/serendivatrails', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com/@serendivatrails', label: 'YouTube' },
];

const Footer = () => (
  <footer className="bg-jungle-dark text-white pt-20 pb-8">
    <div className="container grid md:grid-cols-[1.3fr_1fr_1fr] gap-12 pb-14 border-b border-white/10">
      <div>
        <Logo variant="light" />
        <p className="text-white/60 text-sm mt-5 max-w-xs">Discover the Island. Feel the Journey.</p>
        <div className="flex gap-3 mt-6">
          {socials.map((s) => (
            <a
              key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-sunset hover:border-sunset transition-colors"
            >
              <s.icon size={17} />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-serif text-lg mb-5">Explore</h3>
        <ul className="space-y-3">
          {navLinks.filter((l) => l.label !== 'Plan Your Trip').map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-white/70 hover:text-sand transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-serif text-lg mb-5">Contact</h3>
        <ul className="space-y-3 text-sm text-white/70">
          <li className="flex items-center gap-2"><Mail size={16} /> hello@serendivatrails.com</li>
          <li className="flex items-center gap-2"><Phone size={16} /> +94 77 123 4567</li>
          <li className="flex items-center gap-2"><MapPin size={16} /> Colombo, Sri Lanka</li>
        </ul>
      </div>
    </div>
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/50">
      <p>© 2026 Serendiva Trails. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
      </div>
    </div>
  </footer>
);

export default Footer;