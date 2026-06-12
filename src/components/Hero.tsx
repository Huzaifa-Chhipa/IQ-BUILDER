import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import skyscraperImg from '../assets/images/luxury_skyscraper_hero_1779209684495.png';
import iqVideo from '../assets/video/iq.mp4';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const videoOpacity = useTransform(scrollY, [0, 500], [1, 0]);

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
      {/* Video Overlay */}
      <motion.div 
        style={{ opacity: videoOpacity }} 
        className="absolute inset-0 z-50 bg-black flex items-center justify-center"
      >
        <video 
          src={iqVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover md:object-contain" 
        />
      </motion.div>

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
      <motion.div 
        style={{ opacity }}
        className="relative z-20 mt-32 container mx-auto px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left"
      >
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[8px] uppercase tracking-[0.5em] text-white">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
