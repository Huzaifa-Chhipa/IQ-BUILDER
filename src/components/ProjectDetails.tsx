import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowUpRight } from 'lucide-react';
import C1Img from '../assets/coming/c1.jpeg';
import madinaParkViewContent from "../assets/Madina Park View/madina_park_view_content.md";
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-light uppercase text-amber mb-4">
              The IQ Builders Philosophy
            </h2>
            <p className="text-lg text-white/70 mb-6">
              Crafting Timeless Grandeur Since 2000. At IQ Builders & Developers, we believe that true luxury is found in the intersection of innovation and precision. Our journey began with a single vision: to redefine the global skyline with buildings that are as sustainable as they are breathtaking.
            </p>
            <p className="text-lg text-white/70 mb-8">
              Sustainable Core: Integrating green technology into every luxury blueprint.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
                <h3 className="text-xl font-bold text-amber mb-3">Marketing Projects</h3>
                <p className="text-white/60 mb-4">Explore our marketing initiatives and showcase.</p>
                <button onClick={() => navigate('/projects')} className="px-4 py-2 bg-amber text-black rounded-full font-medium hover:bg-amber-light transition">
                  View Projects
                </button>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
                <h3 className="text-xl font-bold text-amber mb-3">Development Projects</h3>
                <p className="text-white/60 mb-4">Discover our latest development works.</p>
                <button onClick={() => navigate('/projects')} className="px-4 py-2 bg-amber text-black rounded-full font-medium hover:bg-amber-light transition">
                  View Projects
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Section — before Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-amber text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">
                  Get In Touch
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-light text-white mb-4">
                  Contact Our <span className="text-amber">Sales Team</span>
                </h3>
                <p className="text-white/50 text-sm font-light">
                  Reach out to us for bookings, inquiries, and more information
                </p>
              </div>

              <div className="space-y-4 text-left">
                {/* Main Contact — Husnain */}
                <div className="p-6 md:p-8 border border-amber/20 rounded-[32px] bg-gradient-to-r from-amber/10 via-amber/5 to-transparent">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-amber/20 border border-amber/30 flex items-center justify-center text-amber text-xl font-bold">
                        H
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Main Contact</span>
                        <h4 className="text-xl md:text-2xl font-display font-medium text-white">Hasnain</h4>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/923141115203"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-amber text-black rounded-full font-bold text-sm hover:bg-amber-light transition-all duration-300 group"
                    >
                      <Phone size={16} strokeWidth={2} />
                      <span>0314 1115203</span>
                      <ArrowUpRight size={14} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Further Details */}
                <div className="p-6 md:p-8 border border-white/10 rounded-[32px] bg-white/[0.02]">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1 h-5 bg-amber rounded-full" />
                    <h4 className="text-sm uppercase tracking-[0.3em] text-white/60 font-bold">
                      Further Details
                    </h4>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Owais Raza */}
                    <div className="p-5 border border-white/10 rounded-2xl bg-white/5 hover:border-amber/20 hover:bg-amber/[0.03] transition-all duration-300 group">
                      <p className="text-xs uppercase tracking-[0.15em] text-white/30 font-bold mb-2">Sales Executive</p>
                      <h5 className="text-base font-display font-medium text-white mb-3">Owais Raza</h5>
                      <a href="https://wa.me/923313088010" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber text-sm hover:underline underline-offset-4">
                        <Phone size={14} strokeWidth={1.5} />
                        0331 3088010
                      </a>
                    </div>

                    {/* Muhammad Waqas */}
                    <div className="p-5 border border-white/10 rounded-2xl bg-white/5 hover:border-amber/20 hover:bg-amber/[0.03] transition-all duration-300 group">
                      <p className="text-xs uppercase tracking-[0.15em] text-white/30 font-bold mb-2">Sales Executive</p>
                      <h5 className="text-base font-display font-medium text-white mb-3">Muhammad Waqas</h5>
                      <a href="https://wa.me/923122311562" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber text-sm hover:underline underline-offset-4">
                        <Phone size={14} strokeWidth={1.5} />
                        0312 2311562
                      </a>
                    </div>

                    {/* Ammar */}
                    <div className="p-5 border border-white/10 rounded-2xl bg-white/5 hover:border-amber/20 hover:bg-amber/[0.03] transition-all duration-300 group">
                      <p className="text-xs uppercase tracking-[0.15em] text-white/30 font-bold mb-2">Director of Sales</p>
                      <h5 className="text-base font-display font-medium text-white mb-3">Ammar</h5>
                      <a href="https://wa.me/923092071135" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber text-sm hover:underline underline-offset-4">
                        <Phone size={14} strokeWidth={1.5} />
                        0309 2071135
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h2 className="text-4xl md:text-5xl font-display font-light text-white mb-6 uppercase tracking-widest">IQ SHOPPING MALL & RESIDENCIA</motion.h2>
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
