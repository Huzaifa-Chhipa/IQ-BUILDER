import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import skyscraperImg from '../assets/images/luxury_skyscraper_hero_1779209684495.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { title: 'Company', items: ['History', 'Awards', 'Careers', 'Team', 'Sustainability'] },
    { title: 'Services', items: ['Architecture', 'Construction', 'Interior Design', 'Master Planning', 'Restoration'] },
    { title: 'Explore', items: ['Projects', 'Insights', 'Events', 'Press Release', 'Investors'] },
    { title: 'Legal', items: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Client Portal'] }
  ];

  return (
    <footer className="bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
          {/* Logo Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo height={42} variant="icon" />
              <span className="text-lg font-display font-medium tracking-[0.2em] uppercase text-white">
                IQ <span className="text-amber">BUILDERS & DEVELOPERS</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-10">
              Architecting the silhouettes of tomorrow's skyline with unparalleled precision and timeless luxury. A legacy built across 14 nations.
            </p>
            <div className="flex items-center gap-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {links.map((group, i) => (
            <div key={i} className="flex flex-col">
              <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-8">{group.title}</h4>
              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li key={j}>
                    <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm font-light flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © {currentYear} IQ BUILDERS AND DEVELOPERS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <p className="text-white/20 text-[10px] uppercase tracking-widest">
              CRAFTED BY <span className="text-gold">DIGITAL ELLOY</span>
            </p>
            <div className="w-[1px] h-4 bg-white/10" />
            <p className="text-white/20 text-[10px] uppercase tracking-widest">
              PAKISTAN, KARACHI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
