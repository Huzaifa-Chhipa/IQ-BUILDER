import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import C1Img from '../assets/coming/c1.jpeg';

const sections = [
  {
    title: "About Project",
    subtitle: "Building a Better Tomorrow",
    content: "IQ Builders is a modern residential and commercial development thoughtfully designed to meet the evolving needs of urban living. Located in Prime Saddar, Karachi, the project combines contemporary architecture, quality construction, and premium facilities to create a destination where families can thrive, businesses can grow, and investments can prosper."
  },
  {
    title: "Why Choose IQ Builders",
    subtitle: "The Perfect Choice for Living & Investment",
    items: [
      { t: "Prime Location", d: "Situated in the heart of Saddar, Karachi." },
      { t: "Modern Architecture", d: "Contemporary design with elegance and comfort." },
      { t: "Premium Lifestyle", d: "Quality amenities for modern urban living." },
      { t: "Trusted Developers", d: "Committed to excellence." },
      { t: "Investment Potential", d: "Promising for long-term growth." },
      { t: "Excellence", d: "Combined living and business opportunities." }
    ]
  },
  {
    title: "Project Features",
    subtitle: "Designed for Modern Living",
    list: ["Contemporary Architectural Design", "Residential Apartments", "Commercial Retail Spaces", "Grand Entrance Lobby", "High-Speed Elevators", "Modern Security", "Covered Parking", "Backup Power", "Premium Finishing"]
  }
];

export default function ProjectDetails() {
  const navigate = useNavigate();
  return (
    <section className="bg-charcoal text-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6 uppercase tracking-widest">IQ SHOPPING MALL & RESIDENCIA</motion.h2>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/projects')} className="mt-4 px-8 py-3 bg-amber text-black rounded-full font-bold hover:bg-amber-light transition-colors duration-300">View Projects</motion.button>
          <motion.h2 className="text-6xl md:text-8xl font-light text-amber mb-16 tracking-tighter">COMING SOON</motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={C1Img} alt="Coming Soon" className="w-full rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-amber text-xs uppercase tracking-[0.3em] font-bold mb-4">About Project</h2>
              <h3 className="text-4xl md:text-5xl font-display font-light mb-6 leading-tight">Building a Better Tomorrow</h3>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                IQ Builders is a modern residential and commercial development thoughtfully designed to meet the evolving needs of urban living. Located in Prime Saddar, Karachi, the project combines contemporary architecture, quality construction, and premium facilities to create a destination where families can thrive, businesses can grow, and investments can prosper.
              </p>
              <p className="text-base text-white/50 border-l border-amber/30 pl-4 italic">
                Karachi's Next Landmark Destination. Modern Living. Smart Investment. Premium Business Opportunities.
              </p>
            </motion.div>
          </div>
        </div>

        {sections.slice(1).map((sec, i) => (
          <div key={i} className="mb-24">
            <h2 className="text-amber text-[10px] uppercase tracking-[0.3em] font-bold mb-4">{sec.title}</h2>
            <h3 className="text-4xl md:text-6xl mb-12">{sec.subtitle}</h3>
            {sec.content && <p className="text-xl text-white/60 leading-relaxed max-w-3xl">{sec.content}</p>}
            {sec.items && (
              <div className="grid md:grid-cols-3 gap-8">
                {sec.items.map((item, j) => (
                  <div key={j} className="p-8 border border-white/10 rounded-3xl bg-white/5">
                    <h4 className="text-xl mb-4 text-amber">{item.t}</h4>
                    <p className="text-white/60">{item.d}</p>
                  </div>
                ))}
              </div>
            )}
            {sec.list && (
              <div className="flex flex-wrap justify-center gap-4">
                {sec.list.map((item, j) => <div key={j} className="p-4 border border-white/10 rounded-xl text-center text-sm hover:bg-amber hover:text-black active:bg-amber active:text-black transition-colors duration-300 cursor-default">{item}</div>)}
              </div>
            )}
          </div>
        ))}

        <div className="p-16 border border-white/10 rounded-[40px] bg-black text-center">
          <h3 className="text-4xl mb-8">Book Your Unit Today</h3>
          <p className="text-white/60 mb-10">Limited units available. Call now to reserve your space in Karachi's next landmark.</p>
          <button onClick={() => navigate('/contact')} className="px-10 py-4 bg-amber text-black font-bold rounded-full">Contact Sales Team</button>
        </div>
      </div>
    </section>
  );
}
