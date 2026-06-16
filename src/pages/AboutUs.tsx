import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Eye } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-[#08080a] to-[#050506] min-h-screen text-white">
      <Navbar />
      <main className="pt-32 pb-24 container mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-light text-center mb-4"
        >
          ABOUT <span className="text-gold italic">IQ BUILDERS</span>
        </motion.h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-8 opacity-80 rounded"></div>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Welcome to IQ Builders & Developers, where architectural excellence meets structural precision.
            With over two decades of experience, we have redefined luxury living and commercial infrastructure across Karachi.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-dark p-6 rounded-xl border border-white/10 flex-1"
          >
            <div className="flex items-center mb-4">
              <Target className="text-gold w-6 h-6 mr-2" />
              <h2 className="text-2xl md:text-4xl font-display font-bold text-gold">Mission</h2>
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              Our mission is to craft timeless, sustainable spaces that elevate the everyday experience while respecting the environment and community.
            </p>
          </motion.div>
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-dark p-6 rounded-xl border border-white/10 flex-1"
          >
            <div className="flex items-center mb-4">
              <Eye className="text-gold w-6 h-6 mr-2" />
              <h2 className="text-2xl md:text-4xl font-display font-bold text-gold">Vision</h2>
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              To be the leading visionary developer in South Asia, shaping skylines with innovative design, unparalleled quality, and a commitment to lasting impact.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
