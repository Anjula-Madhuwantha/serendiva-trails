import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const travelStyles = ['Adventure', 'Wildlife', 'Beach', 'Culture', 'Luxury', 'Family'];
const initialForm = { name: '', email: '', phone: '', date: '', travellers: '2', style: '', message: '' };

const TextField = ({ label, id, error, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-charcoal/80 mb-1.5">{label}</label>
    <input
      id={id}
      {...props}
      className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-jungle ${error ? 'border-sunset' : 'border-charcoal/15'}`}
      aria-invalid={!!error}
    />
    {error && <p className="text-xs text-sunset-dark mt-1" role="alert">{error}</p>}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your full name';
    if (!form.email.trim()) errs.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address';
    if (!form.phone.trim()) errs.phone = 'Please enter a phone or WhatsApp number';
    if (!form.message.trim()) errs.message = 'Tell us a little about your dream trip';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-offwhite">
        <div className="container max-w-xl text-center">
          <CheckCircle2 className="mx-auto text-jungle mb-6" size={56} aria-hidden="true" />
          <h2 className="font-serif text-3xl text-jungle mb-3">Thank you! Your journey request has been received.</h2>
          <p className="text-charcoal/70">
            One of our travel designers will be in touch within 24 hours to start crafting your Sri Lankan story.
          </p>
          <Button type="button" className="mt-8" onClick={() => { setForm(initialForm); setSubmitted(false); }}>
            Send Another Request
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-offwhite">
      <div className="container grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <SectionHeading
            eyebrow="Plan Your Trip"
            title="Let's Design Your Journey"
            description="Share a few details and we'll get back to you with a tailored itinerary — no obligation, no spam."
          />
          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-3 text-charcoal/70">
              <Mail size={18} className="text-sunset" /> hello@serendivatrails.com
            </li>
            <li className="flex items-center gap-3 text-charcoal/70">
              <Phone size={18} className="text-sunset" /> +94 77 123 4567
            </li>
            <li className="flex items-center gap-3 text-charcoal/70">
              <MapPin size={18} className="text-sunset" /> Colombo, Sri Lanka
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm grid sm:grid-cols-2 gap-5">
          <TextField label="Full Name" id="name" value={form.name} onChange={update('name')} error={errors.name} required />
          <TextField label="Email" id="email" type="email" value={form.email} onChange={update('email')} error={errors.email} required />
          <TextField label="Phone / WhatsApp" id="phone" value={form.phone} onChange={update('phone')} error={errors.phone} required />
          <TextField label="Travel Date" id="date" type="date" value={form.date} onChange={update('date')} />
          <TextField label="Number of Travellers" id="travellers" type="number" min="1" value={form.travellers} onChange={update('travellers')} />
          <div>
            <label htmlFor="style" className="block text-sm font-medium text-charcoal/80 mb-1.5">Preferred Travel Style</label>
            <select
              id="style" value={form.style} onChange={update('style')}
              className="w-full rounded-lg border border-charcoal/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-jungle"
            >
              <option value="">Select a style</option>
              {travelStyles.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-charcoal/80 mb-1.5">Message</label>
            <textarea
              id="message" rows="4" value={form.message} onChange={update('message')}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-jungle ${errors.message ? 'border-sunset' : 'border-charcoal/15'}`}
              placeholder="Tell us about the experiences you're dreaming of..."
            />
            {errors.message && <p className="text-xs text-sunset-dark mt-1" role="alert">{errors.message}</p>}
          </div>
          <div className="sm:col-span-2">
            <Button type="submit" className="w-full" size="lg">Send My Travel Request</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;