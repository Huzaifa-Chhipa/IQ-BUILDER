import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import balconyImg from '../assets/images/lifestyle_luxury_balcony_1779209874429.png';
import whatsappIcon from '../assets/whatsapp.png';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-40 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
            src={balconyImg} 
            alt="Office View" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-display font-bold text-white mb-10"
            >
              HAVE A <span className="text-gold italic">VISION?</span>
            </motion.h2>
            <p className="text-white/60 text-lg mb-12 font-light leading-relaxed max-w-lg">
              Whether it's a global headquarters or a private island retreat, we are ready to architect your future.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Our Studios</h4>
                  <p className="text-white/40 font-light mb-4">Office number 5046, Central Plaza Shopping Mall, Marstan Road, Karachi</p>
                  <p className="text-white/40 font-light">Office number 35 and 36, Alharam Center, near Ancle Seria Hospital, Karachi</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Contact Number</h4>
                  <p className="text-white/40 font-light">0332-2982846 <br /> 0314-1115203</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Projects Email</h4>
                  <p className="text-white/40 font-light">visionary@archilux.global <br /> (Encrypted Channel)</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Floating WhatsApp Menu */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col items-center gap-4">
        <AnimatePresence>
            {isMenuOpen && (
                <>
                    <motion.a 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        href="https://wa.me/923322982846" target="_blank" rel="noopener noreferrer"
                        className="bg-gold text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg"
                    >
                        03322982846
                    </motion.a>
                    <motion.a 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        href="https://wa.me/923141115203" target="_blank" rel="noopener noreferrer"
                        className="bg-gold text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg"
                    >
                        03141115203
                    </motion.a>
                </>
            )}
        </AnimatePresence>
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 group bg-black/80 backdrop-blur-sm"
        >
            <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12" />
        </motion.button>
      </div>
    </section>
  );
}
