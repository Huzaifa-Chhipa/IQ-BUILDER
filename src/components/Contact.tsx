import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import balconyImg from '../assets/images/lifestyle_luxury_balcony_1779209874429.png';

export default function Contact() {
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
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
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
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Primary Studio</h4>
                  <p className="text-white/40 font-light">12/F ArchiLux Terminal, Financial District <br />Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Global Concierge</h4>
                  <p className="text-white/40 font-light">+971 (04) 555-ARCHI <br /> (24/7 International Desk)</p>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-dark p-10 md:p-16 border border-white/10 shadow-2xl"
          >
            <h3 className="text-3xl font-display font-bold text-white mb-10 uppercase tracking-tighter">PROJECT INQUIRY</h3>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="FULL NAME"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/20 outline-none focus:border-gold transition-colors text-xs tracking-widest uppercase font-bold"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/20 outline-none focus:border-gold transition-colors text-xs tracking-widest uppercase font-bold"
                  />
                </div>
              </div>

              <div className="relative">
                <select 
                  defaultValue=""
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white/50 outline-none focus:border-gold transition-colors text-xs tracking-widest uppercase font-bold appearance-none cursor-pointer"
                >
                  <option value="" disabled>PROJECT CATEGORY</option>
                  <option className="bg-charcoal">RESIDENTIAL</option>
                  <option className="bg-charcoal">COMMERCIAL</option>
                  <option className="bg-charcoal">HOSPITALITY</option>
                  <option className="bg-charcoal">OTHER</option>
                </select>
              </div>

              <div className="relative">
                <textarea 
                  rows={4}
                  placeholder="TELL US ABOUT YOUR VISION"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/20 outline-none focus:border-gold transition-colors text-xs tracking-widest uppercase font-bold resize-none"
                />
              </div>

              <button className="w-full py-6 bg-gold text-black font-bold uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 hover:bg-gold-light transition-all duration-300">
                SEND MESSAGE <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp/Chat Button Placeholder */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-40 w-16 h-16 bg-gold text-black rounded-full flex items-center justify-center shadow-2xl border-4 border-black group"
      >
        <MessageSquare size={24} />
        <span className="absolute right-full mr-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with concierge
        </span>
      </motion.button>
    </section>
  );
}
