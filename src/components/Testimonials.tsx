import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jonathan Vanderbilt',
    role: 'CEO of Vanderbilt Capital',
    text: 'ArchiLux transformed our vision into a breathtaking reality. Their attention to detail in the Silver Skyline project was nothing short of extraordinary.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=jonathan',
  },
  {
    id: 2,
    name: 'Elina Sokolov',
    role: 'Chief Architect, Metropolis Inc',
    text: 'Working with ArchiLux is a masterclass in collaboration. They understand the nuances of high-end design better than any builder we\'ve encountered.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=elina',
  },
  {
    id: 3,
    name: 'Marco Ricci',
    role: 'Luxury Property Investor',
    text: 'The ROI on my ArchiLux properties is consistently 20% higher than market average. Their brand itself is a sign of ultimate quality and prestige.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=marco',
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)] blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 text-white">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            VOICES OF <span className="text-white/20">PRESTIGE</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="glass p-12 md:p-20 relative border-l-4 border-gold"
            >
              <div className="flex gap-2 mb-8 text-gold">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-4xl font-serif italic text-white/90 leading-relaxed mb-12">
                "{testimonials[index].text}"
              </blockquote>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border-2 border-gold/30 p-1">
                  <img 
                    src={testimonials[index].avatar} 
                    alt={testimonials[index].name} 
                    className="w-full h-full rounded-full grayscale"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white uppercase tracking-wider">{testimonials[index].name}</h4>
                  <p className="text-gold text-xs uppercase tracking-widest mt-1">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10 lg:-left-20">
            <button
              onClick={prev}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 lg:-right-20">
            <button
              onClick={next}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[2px] transition-all duration-500 ${
                index === i ? 'w-12 bg-gold' : 'w-6 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
