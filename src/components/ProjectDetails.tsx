import { motion } from 'motion/react';

export default function ProjectDetails() {
  return (
    <section className="bg-charcoal text-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Coming Soon Hero */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-light text-amber mb-8 tracking-tighter"
          >
            COMING SOON
          </motion.h2>
          <p className="text-xl md:text-2xl font-light text-white/70 max-w-2xl mx-auto">
            Karachi's Next Landmark Destination. Modern Living. Smart Investment. Premium Business Opportunities.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h3 className="text-3xl font-display mb-6">Building a Better Tomorrow</h3>
            <p className="text-white/60 leading-relaxed">
              IQ Builders is a modern residential and commercial development thoughtfully designed to meet the evolving needs of urban living. 
              Located in Prime Saddar, Karachi, the project combines contemporary architecture, quality construction, and premium facilities.
            </p>
          </motion.div>
          <div className="space-y-4">
            {['Prime Location', 'Modern Architecture', 'Premium Lifestyle', 'Trusted Developers', 'Strong Investment Potential'].map((item) => (
              <div key={item} className="p-6 border border-white/10 rounded-2xl bg-white/5">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Features & Units */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="md:col-span-2 p-10 border border-white/10 rounded-[40px] bg-white/5">
            <h3 className="text-3xl mb-8">Residential Units</h3>
            <div className="grid grid-cols-2 gap-4">
              {['2 Bed', '3 Bed', '4 Bed'].map(u => <div key={u} className="p-4 border border-amber/20 rounded-xl text-center">{u}</div>)}
            </div>
          </div>
          <div className="p-10 border border-amber/30 rounded-[40px] bg-amber/10">
            <h3 className="text-3xl mb-8">Commercial Shops</h3>
            <p className="text-white/70">Premium retail spaces designed for maximum business success.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-20 border border-white/10 rounded-[60px] bg-black">
          <h3 className="text-4xl mb-10">Secure Your Place</h3>
          <div className="flex gap-4 justify-center">
            <button className="px-10 py-4 bg-amber text-black font-bold rounded-full">Book Site Visit</button>
            <button className="px-10 py-4 border border-white rounded-full">Get Details</button>
          </div>
        </div>
      </div>
    </section>
  );
}
