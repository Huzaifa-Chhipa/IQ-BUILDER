import { motion } from 'motion/react';
import { ShieldCheck, HardHat, Clock, Award, Users, Zap } from 'lucide-react';
import c3Img from '../coming/c3.jpeg';

const features = [
  {
    title: 'Certified Safety',
    desc: 'Uncompromising safety standards across every construction phase, guaranteed by global compliance.',
    icon: ShieldCheck,
  },
  {
    title: 'Elite Craftsmanship',
    desc: 'Our teams consist of award-winning architects and master builders with decades of experience.',
    icon: HardHat,
  },
  {
    title: 'Timely Execution',
    desc: 'Using advanced project management AI to ensure our projects are delivered precisely on schedule.',
    icon: Clock,
  },
  {
    title: 'Award Winning',
    desc: 'Recognized globally for excellence in design, innovation, and sustainable architecture.',
    icon: Award,
  },
  {
    title: 'Trusted Partners',
    desc: 'Collaborating with the world\'s most prestigious brands to bring luxury to life.',
    icon: Users,
  },
  {
    title: 'Future Tech',
    desc: 'Incorporating the latest in BIM modeling and smart building automation from the ground up.',
    icon: Zap,
  }
];

export default function WhyChooseUs() {
  return (
    <section id="expertise" className="py-24 md:py-40 bg-navy-deep relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -left-20 top-1/4 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block"
          >
            The ArchiLux Edge
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight"
          >
            WHY THE ELITE <span className="text-gold">CHOOSE US</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-lg mt-6 max-w-2xl mx-auto font-light"
          >
            A legacy of excellence built on the pillars of innovation, transparency, and master-level execution.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col items-start p-10 bg-white/5 border border-white/10 hover:border-amber/30 hover:bg-amber/5 transition-all duration-500 rounded-[40px]">
                <div className="w-14 h-14 bg-black border border-white/10 flex items-center justify-center text-amber mb-8 group-hover:scale-110 transition-transform duration-500 rounded-2xl">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-4 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-white/40 group-hover:text-white/60 transition-colors text-sm leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Image/Interaction Section */}
        <div className="mt-32 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-sm"
            >
                <img 
                    src={c3Img} 
                    alt="Attention to Detail"
                    className="w-full h-full object-cover aspect-[4/3] transition-all duration-1000 cursor-pointer"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-gold/20 m-4 pointer-events-none" />
                <div className="absolute bottom-10 left-10 text-white">
                    <span className="text-gold text-4xl font-display font-bold">10+</span>
                    <p className="uppercase tracking-widest text-[10px] font-bold">Years of Perfection</p>
                </div>
            </motion.div>

            <div className="space-y-12">
                <h3 className="text-3xl font-display font-bold">UNPARALLELED <span className="text-gold">ATTENTION</span> TO DETAIL</h3>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                    Every bolt, every marble slab, and every wire is placed with surgical precision. We don't just meet industry standards; we set the ArchiLux standard.
                </p>
                
                <div className="space-y-8">
                    {[
                        { label: 'Quality Assurance', val: 100 },
                        { label: 'Energy Efficiency', val: 94 },
                        { label: 'Client Satisfaction', val: 100 },
                    ].map((bar, i) => (
                        <div key={i} className="space-y-3">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">{bar.label}</span>
                                <span className="text-gold font-display font-bold">{bar.val}%</span>
                            </div>
                            <div className="h-1 bg-white/5 w-full relative">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${bar.val}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: 'easeOut', delay: i * 0.2 }}
                                    className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
