import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Services from '@/src/components/Services';
import Portfolio from '@/src/components/Portfolio';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import Testimonials from '@/src/components/Testimonials';
import FAQ from '@/src/components/FAQ';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';
import Logo from '@/src/components/Logo';
import { useSmoothScroll } from '@/src/hooks/useSmoothScroll';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Initialize smooth scroll
  useSmoothScroll();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        const diff = Math.random() * 20;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-charcoal min-h-screen selection:bg-gold selection:text-black">
      <AnimatePresence>
        {loading && (
          /* ... existing loading code ... */
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-6 mb-12"
            >
              <Logo height={120} variant="icon" />
              <h1 className="text-3xl md:text-5xl font-display font-light tracking-widest text-white uppercase text-center">
                IQ BUILDERS & <span className="text-amber">DEVELOPERS</span>
              </h1>
            </motion.div>
            
            <div className="w-full max-w-md h-[1px] bg-white/10 relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-amber shadow-[0_0_15px_rgba(245,158,11,0.8)]"
              />
              <div className="absolute top-4 left-0 w-full flex justify-between text-[10px] uppercase font-bold tracking-[0.5em] text-white/30">
                <span>Initializing Legacy</span>
                <span className="text-amber">{Math.round(progress)}%</span>
              </div>
            </div>
            
            <motion.p
               animate={{ opacity: [0.3, 0.6, 0.3] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="mt-16 text-[10px] uppercase tracking-[0.8em] font-bold text-white/20"
            >
              Crafting Excellence
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
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

          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}

      {/* Global Grainy Effect */}
      <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

       {/* Cursor Follower (Subtle) */}
       <CursorFollower />
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
