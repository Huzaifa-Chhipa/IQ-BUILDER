import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactUs() {
  return (
    <div className="bg-navy-deep min-h-screen text-white">
      <Navbar />
      <main className="pt-32 pb-24 container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-display font-light text-center mb-16">
            CONTACT <span className="text-gold italic">US</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 glass-dark p-12 rounded-[40px] border border-white/10">
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Our Studios</h4>
                  <p className="text-white/60 font-light mb-4">Office number 5046, Central Plaza Shopping Mall, Marstan Road, Karachi</p>
                  <p className="text-white/60 font-light">Office number 35 and 36, Alharam Center, near Ancle Seria Hospital, Karachi</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Contact Num</h4>
                  <p className="text-white/60 font-light">0332-2982846 <br /> 0314-1115203</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Projects Email</h4>
                  <p className="text-white/60 font-light">visionary@archilux.global <br /> (Encrypted Channel)</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-white/10 rounded-[30px] border border-white/10 p-10 text-center">
                <p className="text-gold font-serif italic text-2xl mb-4 leading-relaxed">
                  "Turning complex structural dreams into timeless architectural realities."
                </p>
                <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Your Vision, Our Blueprint.</span>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
