import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/src/components/ScrollToTop';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import ProjectDetails from '@/src/components/ProjectDetails';
import About from '@/src/components/About';
import Services from '@/src/components/Services';
import Portfolio from '@/src/components/Portfolio';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import FAQ from '@/src/components/FAQ';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';
import Logo from '@/src/components/Logo';
import WhatsAppFloat from '@/src/components/WhatsAppFloat';
import { useSmoothScroll } from '@/src/hooks/useSmoothScroll';
import AboutUs from './pages/AboutUs';
import ProjectsPage from './pages/Projects';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SaddarCentralDetailsPage from './pages/SaddarCentralDetailsPage';
function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProjectDetails />
        <About />
        <Services />
        <WhyChooseUs />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  // Initialize smooth scroll
  useSmoothScroll();

  return (
    <div className="relative bg-charcoal min-h-screen selection:bg-gold selection:text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative"
      >
        {/* Background Atmosphere */}
        <div className="fixed inset-0 pointer-events-none opacity-40 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
        </div>

        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/madina-park-view" element={<ProjectDetailsPage />} />
            <Route path="/projects/saddar-central" element={<SaddarCentralDetailsPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </motion.div>

      {/* Global Grainy Effect */}
      <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

       {/* Cursor Follower (Subtle) */}
       <CursorFollower />
        <WhatsAppFloat />
    </div>
  );
}


function CursorFollower() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            animate={{
                x: position.x - 20,
                y: position.y - 20,
                scale: isHovering ? 2 : 1,
                opacity: isHovering ? 0.4 : 0.2
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 150, mass: 0.5 }}
            className="fixed top-0 left-0 w-10 h-10 border border-gold rounded-full pointer-events-none z-[100] hidden md:block"
        />
    );
}
