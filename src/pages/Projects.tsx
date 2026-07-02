import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import SEO from '../components/SEO';

export default function ProjectsPage() {
  return (
    <div className="bg-charcoal min-h-screen text-white">
      <Navbar />
      <SEO
        title="Projects"
        description="Explore premium real estate projects by IQ Builders & Developers in Karachi. Madina Park View luxury apartments and Saddar Central Point commercial plaza."
        keywords="IQ Builders projects, real estate projects Karachi, luxury apartments Karachi, commercial plaza Saddar, Madina Park View, Saddar Central Point"
        ogUrl="https://iqbuildersdevelopers.com/projects"
        canonical="https://iqbuildersdevelopers.com/projects"
      />
      <main className="pt-24">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
