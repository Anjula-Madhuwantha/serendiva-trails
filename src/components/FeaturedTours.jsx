import SectionHeading from './SectionHeading';
import TourCard from './TourCard';
import { tours } from '../data/tours';

const FeaturedTours = () => (
  <section id="tours" className="py-24 md:py-32 bg-white">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <SectionHeading eyebrow="Curated Itineraries" title="Journeys Worth Remembering" />
        <p className="max-w-sm text-sm text-charcoal/60">
          Every itinerary below is a starting point — we tailor pacing, stays and experiences around you.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}
      </div>
    </div>
  </section>
);

export default FeaturedTours;