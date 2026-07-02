import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Target, Eye, Building2, ShieldCheck, Clock, Award, Users } from 'lucide-react';

const values = [
  {
    title: 'Integrity First',
    desc: 'We uphold the highest standards of honesty and transparency in every project, building trust with every brick.',
    icon: ShieldCheck,
  },
  {
    title: 'Innovation Driven',
    desc: 'From smart building automation to sustainable materials, we push the boundaries of modern construction.',
    icon: Target,
  },
  {
    title: 'Quality Obsessed',
    desc: 'Every detail is crafted with surgical precision — from foundation to finishing, excellence is our benchmark.',
    icon: Award,
  },
  {
    title: 'Timely Delivery',
    desc: 'Our advanced project management ensures every milestone is met on schedule, without compromising quality.',
    icon: Clock,
  },
];

export default function AboutUs() {
  return (
    <div className="bg-navy-deep min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <SEO
        title="About Us"
        description="Learn about IQ Builders & Developers – Karachi's trusted real estate and construction company since 2000. Our mission, vision, and values drive us to build Karachi's finest spaces."
        keywords="IQ Builders about, about IQ Builders Karachi, real estate company Karachi, construction company Pakistan, IQ Builders history"
        ogUrl="https://iqbuildersdevelopers.com/about-us"
        canonical="https://iqbuildersdevelopers.com/about-us"
      />

      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pb-32 px-4 md:px-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-amber/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-5xl mx-auto relative z-10"
        >
          <span className="text-amber text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">
            Since 2000
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-light mb-6 leading-tight">
            ABOUT <span className="text-amber italic">IQ BUILDERS</span>
          </h1>
          <div className="w-20 h-[2px] bg-amber/60 mx-auto mb-8" />
          <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Welcome to <strong className="text-white">IQ Builders & Developers</strong> — where architectural
            excellence meets structural precision. With over two decades of experience, we have redefined
            luxury living and commercial infrastructure across Karachi.
          </p>
        </motion.div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="px-4 md:px-12 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-6 leading-tight">
                Crafting Karachi's <span className="text-amber">Finest</span> Spaces
              </h2>
              <div className="space-y-4 text-white/50 font-light leading-relaxed">
                <p>
                  Founded in the year 2000, <strong className="text-white">IQ Builders & Developers</strong> began
                  with a simple mission: to build spaces that inspire. What started as a small construction
                  firm has grown into one of Karachi's most trusted real estate developers.
                </p>
                <p>
                  From luxurious residential towers to state-of-the-art commercial plazas, every IQ project
                  reflects an unwavering commitment to quality, innovation, and timeless design. We don't
                  just build structures — we create communities where families thrive and businesses flourish.
                </p>
                <p>
                  Today, with a portfolio of over <strong className="text-white">50+ successful projects</strong>
                  and a team of <strong className="text-white">100+ dedicated professionals</strong>, IQ Builders
                  stands as a symbol of trust and excellence in the Pakistani real estate landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[32px] border border-white/10 bg-gradient-to-br from-amber/5 to-white/5 flex items-center justify-center p-8 md:p-12">
                <div className="text-center">
                  <Building2 size={56} strokeWidth={1} className="text-amber/40 mx-auto mb-6" />
                  <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-bold mb-2">IQ Builders</p>
                  <div className="w-12 h-[2px] bg-amber/30 mx-auto mb-4" />
                  <p className="text-white/50 text-3xl font-display font-light italic mb-3">"</p>
                  <p className="text-white/40 text-xs leading-relaxed font-light max-w-[220px] mx-auto">
                    Building Karachi's tomorrow with trust, quality, and a legacy of excellence since the dawn of the millennium.
                  </p>
                  <div className="w-12 h-[2px] bg-amber/30 mx-auto mt-4" />
                  <p className="text-white/30 text-xs mt-3 uppercase tracking-[0.2em]">Est. 2000</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber/10 rounded-[32px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="px-4 md:px-12 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-amber/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center text-amber mb-6 group-hover:scale-110 transition-transform duration-500">
                <Target size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/50 leading-relaxed font-light">
                Our mission is to craft <strong className="text-white">timeless, sustainable spaces</strong> that elevate the
                everyday experience while respecting the environment and community. We are dedicated to
                delivering architectural excellence that stands the test of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-8 md:p-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-amber/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center text-amber mb-6 group-hover:scale-110 transition-transform duration-500">
                <Eye size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/50 leading-relaxed font-light">
                To be the <strong className="text-white">leading visionary developer in South Asia</strong>, shaping skylines
                with innovative design, unparalleled quality, and a commitment to lasting impact on the
                communities we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Our Values ─── */}
      <section className="px-4 md:px-12 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block"
            >
              The IQ Ethos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-display font-light text-white"
            >
              Our Core <span className="text-amber">Values</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 rounded-[24px] bg-white/[0.02] hover:border-amber/20 hover:bg-amber/[0.02] transition-all duration-500 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center text-amber flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <val.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-medium text-white mb-2">{val.title}</h4>
                    <p className="text-white/50 font-light leading-relaxed text-sm">{val.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leadership / CTA ─── */}
      <section className="px-4 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-amber/20 bg-gradient-to-br from-amber/10 via-amber/[0.03] to-transparent p-10 md:p-16 text-center"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <Users size={40} strokeWidth={1.5} className="text-amber mx-auto mb-6" />
              <h3 className="text-3xl md:text-5xl font-display font-light text-white mb-4">
                Let's Build <span className="text-amber">Together</span>
              </h3>
              <p className="text-white/50 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Whether you're looking for your dream home, a prime commercial space, or a trusted
                construction partner — IQ Builders & Developers is here to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber text-black font-bold uppercase tracking-wider text-xs rounded-full hover:bg-amber-light transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-xs rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
