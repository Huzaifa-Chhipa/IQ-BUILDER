import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import skyscraperImg from '../assets/images/luxury_skyscraper_hero_1779209684495.png';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Cinematic Image */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />
        <img
          src={skyscraperImg}
          alt="Luxury Skyscraper"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Floating Particles/Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              x: mousePos.x * (i + 1),
              y: mousePos.y * (i + 1),
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute bg-gold/20 blur-3xl rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-amber uppercase tracking-[0.4em] text-[10px] font-bold">Visionary Construction</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-extralight md:leading-[1.1] mb-8 tracking-tight"
        >
          Building The Future <br />
          <span className="italic font-serif text-amber">With Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm md:text-base text-white max-w-md mb-12 font-bold leading-relaxed"
        >
          Crafting luxury residential and commercial landscapes with structural precision and timeless architectural integrity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-gray-200 transition-all duration-300">
            Explore Projects
          </button>
          <button className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-white/10 transition-all duration-300">
            Our Philosophy
          </button>
        </motion.div>

        {/* Counters / Stats in Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-10 w-full opacity-60">
          {[
            { label: 'Founded', val: '2008' },
            { label: 'Projects', val: '450+' },
            { label: 'Award Wins', val: '22' },
            { label: 'Countries', val: '14' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-2xl font-display font-bold text-white">{stat.val}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
