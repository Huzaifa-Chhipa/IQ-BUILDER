import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does construction take?',
    a: 'Timelines vary by scope. A luxury custom villa typically takes 12-18 months, while major commercial towers can range from 3-5 years. We provide precise scheduling using advanced BIM modeling.'
  },
  {
    q: 'Do you provide architectural services?',
    a: 'Yes, we offer full-spectrum services including master planning, architectural design, interior design, and structural engineering to ensure a cohesive luxury vision.'
  },
  {
    q: 'What types of projects do you handle?',
    a: 'We specialize in ultra-luxury residential (villas, penthouses), high-end commercial towers, boutique hospitality, and prestigious public infrastructure.'
  },
  {
    q: 'Do you offer consultations?',
    a: 'Absolutely. We offer comprehensive initial feasibility studies and design consultations for prestigious clients globally.'
  },
  {
    q: 'How can clients contact your team?',
    a: 'You can reach us through our digital portal, contact form below, or visit our headquarters in the ArchiLux Financial Terminal.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-40 bg-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-5 gap-20">
          <div className="lg:col-span-2">
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
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
              Everything you need to know about partnering with ArchiLux for your next landmark project.
            </p>
            
            <div className="p-8 border border-white/10 glass-dark">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Need more info?</h4>
                <p className="text-white/40 text-sm mb-6">Our concierge team is available 24/7 for our global project partners.</p>
                <button className="text-gold font-bold uppercase tracking-widest text-[10px] underline underline-offset-8">
                    Contact Specialist
                </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-4">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex items-center justify-between w-full py-6 text-left group"
                  >
                    <span className={`text-xl font-display font-bold transition-colors ${openIndex === i ? 'text-gold' : 'text-white/80 group-hover:text-white'}`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${openIndex === i ? 'bg-gold border-gold text-black rotate-180' : 'text-white'}`}>
                      {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-white/50 leading-relaxed font-light pr-12">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
