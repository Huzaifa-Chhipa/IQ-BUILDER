import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';

export default function ProjectsPage() {
  return (
    <div className="bg-charcoal min-h-screen text-white">
      <Navbar />
      <main className="pt-24">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
