import { useState } from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import PolicyModal from './PolicyModal';
import skyscraperImg from '../assets/images/luxury_skyscraper_hero_1779209684495.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalData, setModalData] = useState<{ isOpen: boolean; title: string; content: React.ReactNode } | null>(null);

  const historyContent = (
    <div className="space-y-4">
      <p>IQ Builders & Developers began with a singular vision: to redefine the skyline with architectural masterpieces that blend structural integrity with timeless aesthetic luxury.</p>
      <p>Over the past decade, we have grown from a boutique architectural firm in Karachi to an international powerhouse, successfully delivering landmark residential and commercial projects across 10+ nations.</p>
      <p>Our journey is defined by a relentless pursuit of perfection, a commitment to sustainable innovation, and a passion for turning our clients' most complex structural dreams into enduring architectural realities.</p>
    </div>
  );

  const sustainabilityContent = (
    <div className="space-y-4">
      <p>At IQ Builders & Developers, we are committed to building a greener future. We integrate sustainable practices into every project, from site selection to material sourcing.</p>
      <p>Our commitment includes reducing waste, optimizing energy efficiency in our designs, and utilizing eco-friendly materials whenever possible to minimize our environmental footprint.</p>
    </div>
  );

  const footerModals = {
    'Terms & Conditions': (
      <p>By accessing our website, you agree to abide by these terms. We reserve the right to modify these terms at any time. All intellectual property on this site belongs to IQ Builders & Developers.</p>
    ),
    'Privacy Policy': (
      <p>We respect your privacy. We collect only necessary information to improve your experience and process your inquiries. We do not sell your data to third parties.</p>
    ),
    'Cookie Policy': (
      <p>We use cookies to analyze site traffic and improve functionality. By continuing to browse, you agree to our use of cookies.</p>
    ),
    'History': historyContent,
    'Sustainability': sustainabilityContent,
  };

  const links = [
    { title: 'Company', items: ['History', 'Careers', 'Sustainability'] },
    { title: 'Services', items: ['Architecture', 'Construction', 'Interior Design', 'Master Planning', 'Restoration'] },
    { title: 'Legal', items: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy'] }
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
              Architecting the silhouettes of tomorrow's skyline with unparalleled precision and timeless luxury. A legacy built across 10+ nations.
            </p>
            
            {/* Contact Details */}
            <div className="text-white/40 text-xs space-y-6 mb-10">
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Our Studios</h4>
                <p>Office number 5046, Central Plaza Shopping Mall, Marstan Road, Karachi</p>
                <p className="mt-2">Office number 35 and 36, Alharam Center, near Ancle Seria Hospital, Karachi</p>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Contact Num</h4>
                <p>0332-2982846 <br/> 0314-1115203</p>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Projects Email</h4>
                <p>hasnainqadriiqbuilders@gmail.com <br/> (Encrypted Channel)</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {[Facebook, Instagram].map((Icon, i) => (
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
                    {group.title === 'Legal' || (group.title === 'Company' && (item === 'History' || item === 'Sustainability')) ? (
                      <button 
                        onClick={() => setModalData({ isOpen: true, title: item, content: footerModals[item as keyof typeof footerModals] })}
                        className="text-white/40 hover:text-gold transition-colors text-sm font-light flex items-center gap-2 group"
                      >
                        {item}
                      </button>
                    ) : (
                      <span className="text-white/40 text-sm font-light flex items-center gap-2">
                        {item}
                      </span>
                    )}
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
      
      {modalData && (
        <PolicyModal 
          isOpen={modalData.isOpen} 
          onClose={() => setModalData(null)} 
          title={modalData.title} 
          content={modalData.content} 
        />
      )}
    </footer>
  );
}
