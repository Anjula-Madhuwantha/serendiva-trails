import { useState } from 'react';
import { MapPin, Compass, CalendarRange, Search } from 'lucide-react';
import Modal from './Modal';
import Button from './Button';

const styles = ['Adventure', 'Wildlife', 'Beach', 'Culture', 'Luxury', 'Family'];
const durations = ['3–5 Days', '6–8 Days', '9–12 Days', '13+ Days'];

const Field = ({ label, id, icon, error, children }) => (
  <div className="px-4 md:px-3 py-2 md:border-r md:border-charcoal/10 last:border-none">
    <label htmlFor={id} className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-charcoal/50 mb-1">
      {icon} {label}
    </label>
    {children}
    {error && <p className="text-xs text-sunset-dark mt-1" role="alert">{error}</p>}
  </div>
);

const TourSearch = () => {
  const [form, setForm] = useState({ destination: '', style: '', duration: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.destination.trim()) errs.destination = 'Tell us where you dream of going';
    if (!form.style) errs.style = 'Choose a travel style';
    if (!form.duration) errs.duration = 'Select a trip length';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSuccess(true);
  };

  return (
    <div id="plan-trip" className="relative z-20 -mt-16 md:-mt-20 px-4 md:px-0">
      <form onSubmit={handleSubmit} className="container">
        <div className="bg-white rounded-2xl md:rounded-full shadow-xl shadow-charcoal/10 p-4 md:p-3 md:pl-6 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_auto] gap-4 md:gap-2 items-center">
          <Field label="Where do you want to go?" id="destination" error={errors.destination} icon={<MapPin size={16} className="text-sunset" />}>
            <input
              id="destination" type="text" placeholder="Sigiriya, Ella, Yala..."
              value={form.destination} onChange={handleChange('destination')}
              className="w-full bg-transparent outline-none text-sm placeholder:text-charcoal/40"
              aria-invalid={!!errors.destination}
            />
          </Field>
          <Field label="Travel style" id="style" error={errors.style} icon={<Compass size={16} className="text-sunset" />}>
            <select id="style" value={form.style} onChange={handleChange('style')} className="w-full bg-transparent outline-none text-sm" aria-invalid={!!errors.style}>
              <option value="">Select style</option>
              {styles.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Duration" id="duration" error={errors.duration} icon={<CalendarRange size={16} className="text-sunset" />}>
            <select id="duration" value={form.duration} onChange={handleChange('duration')} className="w-full bg-transparent outline-none text-sm" aria-invalid={!!errors.duration}>
              <option value="">Select length</option>
              {durations.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </Field>
          <Button type="submit" size="md" className="w-full md:w-auto whitespace-nowrap">
            <Search size={16} /> Find My Journey
          </Button>
        </div>
      </form>

      <Modal open={success} onClose={() => setSuccess(false)} title="Your journey is taking shape!">
        <p className="text-charcoal/70 text-sm leading-relaxed">
          We've noted you're dreaming of <strong>{form.destination}</strong> — a {form.style.toLowerCase()} experience over {form.duration}.
          One of our local travel designers will reach out with a tailored itinerary within 24 hours.
        </p>
        <Button type="button" onClick={() => setSuccess(false)} className="mt-6 w-full" size="md">Close</Button>
      </Modal>
    </div>
  );
};

export default TourSearch;