import { motion } from 'motion/react';
import { Home, Building2, Palmtree, Hammer, Ruler, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Residential Construction',
    desc: 'Bespoke modern villas and luxury high-rise apartments designed for the ultimate living experience.',
    icon: Home,
    image: '/src/assets/images/modern_villa_exterior_1779209702440.png'
  },
  {
    title: 'Commercial Projects',
    desc: 'Iconic office towers and shopping malls that redefine business and leisure in futuristic cities.',
    icon: Building2,
    image: '/src/assets/images/commercial_tower_dubai_style_1779209831066.png'
  },
  {
    title: 'Interior Design',
    desc: 'Unmatched elegance in interior spaces, blending luxury materials with artistic lighting and grand scale.',
    icon: Palmtree,
    image: '/src/assets/images/luxury_interior_lobby_1779209749556.png'
  },
  {
    title: 'Architecture Planning',
    desc: 'Precision planning and innovative blueprints that serve as the foundation for tomorrow\'s masterpieces.',
    icon: Ruler,
    image: '/src/assets/images/architect_blueprint_detail_1779209854095.png'
  },
  {
    title: 'Project Management',
    desc: 'Comprehensive oversight ensuring every detail meets ArchiLux standards and on-time delivery.',
    icon: Briefcase,
    image: '/src/assets/images/construction_site_drone_1779209773803.png'
  },
  {
    title: 'Renovation & Restoration',
    desc: 'Breathing new life into prestigious historic structures with modern luxury and sustainable upgrades.',
    icon: Hammer,
    image: '/src/assets/images/lifestyle_luxury_balcony_1779209874429.png'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4"
          >
            World-Class Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-light leading-tight uppercase"
          >
            OUR ELITE <span className="text-amber font-serif italic">SERVICES</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-6 w-24 h-[1px] bg-amber/30"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden bg-white/5 border border-white/10 h-[450px] rounded-[40px]"
            >
              {/* Background Image Hover */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col p-10 justify-end z-10">
                <div className="w-12 h-12 mb-6 border border-amber/30 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-black transition-all duration-500 rounded-2xl">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 group-hover:text-amber transition-colors uppercase">
                  {service.title}
                </h3>
                <p className="text-white/50 group-hover:text-white/80 transition-colors text-sm leading-relaxed mb-6 font-light">
                  {service.desc}
                </p>
                <div className="flex justify-between items-center group-hover:translate-x-2 transition-transform duration-500 opacity-60 group-hover:opacity-100">
                  <div className="text-amber font-bold uppercase tracking-widest text-[10px]">
                    Explore Discipline
                  </div>
                  <span className="text-amber">→</span>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
