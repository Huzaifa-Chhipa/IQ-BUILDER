import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-navy-deep relative overflow-hidden">
      {/* Decorative Blueprint Background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <img 
          src="./assets/images/architect_blueprint_detail_1779209854095.png" 
          alt="Blueprint" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-[40px]"
            >
              <img
                src="./assets/images/architects_at_work_1779209726217.png"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-amber/10 mix-blend-overlay" />
            </motion.div>
            
            {/* CEO Message / Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-10 -right-4 md:right-[-40px] bg-black p-8 md:p-12 glass-dark max-w-sm border-l-4 border-amber shadow-2xl rounded-3xl"
            >
              <Quote className="text-amber mb-4" size={32} />
              <p className="text-white/80 italic font-serif text-lg leading-relaxed mb-6">
                "We don't just build structures; we sculpt the environment where memories are created and legacies are born."
              </p>
              <div>
                <h4 className="text-white font-bold tracking-widest text-sm uppercase">Alexander Sterling</h4>
                <p className="text-amber text-[10px] uppercase tracking-widest mt-1">Founder & Lead Architect</p>
              </div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-amber font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
            >
              The IQ Builders Philosophy
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-display font-light mb-8 leading-tight"
            >
              Crafting Timeless <br />
              <span className="text-amber font-serif italic">Grandeur</span> Since 1992
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 text-lg mb-10 leading-relaxed font-light"
            >
              At IQ Builders & Developers, we believe that true luxury is found in the intersection of innovation and precision. Our journey began with a single vision: to redefine the global skyline with buildings that are as sustainable as they are breathtaking.
            </motion.p>

            {/* Values / Mission Grid */}
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { title: 'Global Vision', desc: 'Expanding horizons across 14 countries with iconic landmarks.' },
                { title: 'Sustainable Core', desc: 'Integrating green technology into every luxury blueprint.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/5 p-8 border border-white/5 rounded-[30px]"
                >
                  <h3 className="text-amber font-bold uppercase tracking-widest text-[10px] mb-3">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <button className="flex items-center gap-4 text-white hover:text-amber transition-colors font-bold uppercase tracking-[0.2em] text-[10px] px-8 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-all">
                Learn our Story
                <span className="w-8 h-[1px] bg-amber" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
