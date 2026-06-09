import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="bg-navy-deep min-h-screen text-white">
      <Navbar />
      <main className="pt-32 pb-24 container mx-auto px-6 md:px-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-light text-center mb-16"
        >
          ABOUT <span className="text-gold italic">IQ BUILDERS</span>
        </motion.h1>
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/60 text-lg leading-relaxed mb-8">
                Welcome to IQ Builders & Developers, where architectural excellence meets structural precision.
                With over two decades of experience, we have redefined luxury living and commercial infrastructure
                across Karachi.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
                Our mission is to create spaces that inspire, endure, and harmonize with the environment.
                From high-end residential villas to iconic commercial hubs, our team of experts is dedicated
                to delivering quality beyond expectations.
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
