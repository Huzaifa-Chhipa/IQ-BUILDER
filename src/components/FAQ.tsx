import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-40 bg-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-5 gap-20">
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              Curiosity & Clarity
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
            >
              FREQUENTLY ASKED <span className="text-gold">QUESTIONS</span>
            </motion.h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-2xl">
              Everything you need to know about partnering with ArchiLux for your next landmark project.
            </p>

            <div className="p-8 border border-white/10 glass-dark inline-block">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Need more info?</h4>
                <p className="text-white/40 text-sm mb-6">Our concierge team is available 24/7 for our global project partners.</p>
                <Link to="/contact" className="relative z-50 text-gold font-bold uppercase tracking-widest text-[10px] underline underline-offset-8">
                    Contact Specialist
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
