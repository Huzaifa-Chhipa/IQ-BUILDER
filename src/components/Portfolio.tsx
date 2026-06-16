import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import img1 from '../assets/saddar central/Saddar Central-2.png';
import img2 from '../assets/Madina Park View/park view.png';

const projects = [
  {
    id: 1,
    title: 'Saddar Central',
    image: img1,
    slug: 'saddar-central',
    gridArea: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    title: 'Madina Park View',
    image: img2,
    slug: 'madina-park-view',
    gridArea: 'md:col-span-2 md:row-span-2'
  }
];

const categories = ['All'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects;

  return (
    <section id="projects" className="py-24 md:py-24 bg-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
            >
              Curated Masterpieces
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-display font-light"
            >
              PROJECT <span className="italic font-serif text-amber">ARCHIVE</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2 text-[10px] uppercase tracking-widest font-bold border rounded-full transition-all duration-300 ${
                activeCategory === 'All' 
                  ? 'bg-amber border-amber text-black' 
                  : 'bg-transparent border-white/10 text-white/50 hover:border-white/30 hover:text-white backdrop-blur-md'
              }`}
            >
              All
            </button>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="flex flex-wrap justify-center gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden rounded-[40px] border border-white/10 w-full md:w-[45%] flex items-center justify-center bg-black"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setHoveredProject(hoveredProject === project.id ? null : project.id)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 peer-active:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12"
                     style={{ opacity: hoveredProject === project.id ? 1 : undefined }}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredProject === project.id ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-display font-light text-white mb-6 leading-tight uppercase">{project.title}</h3>
                    
                    <div className="flex items-center gap-4">
                      {project.slug ? (
                        <Link 
                            to={`/projects/${project.slug}`}
                            className="flex items-center gap-2 bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-amber transition-colors duration-300"
                        >
                            View Details <ArrowUpRight size={14} />
                        </Link>
                      ) : (
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.pdf, '_blank');
                            }}
                            className="flex items-center gap-2 bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-amber transition-colors duration-300"
                        >
                            View Details <ArrowUpRight size={14} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
