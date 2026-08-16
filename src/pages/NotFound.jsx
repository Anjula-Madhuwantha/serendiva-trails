import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => (
  <section className="container pt-40 pb-32 text-center">
    <p className="text-sunset font-serif text-6xl mb-4">404</p>
    <h1 className="font-serif text-3xl text-jungle mb-4">This trail doesn't exist.</h1>
    <p className="text-charcoal/70 mb-8 max-w-md mx-auto">
      The page you're looking for may have been moved. Let's get you back on the right path.
    </p>
    <Button as={Link} to="/">Back to Home</Button>
  </section>
);

export default NotFound;