import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import Logo from './Logo';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [salesDropdownOpen, setSalesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
    { name: 'Services', href: '/#services' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Philosophy', href: '/#about' },
    { name: 'Expertise', href: '/#expertise' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-7xl z-50 transition-all duration-500 px-8 h-16',
        'bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full flex items-center justify-between',
        isScrolled ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : ''
      )}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group cursor-pointer flex-shrink-0">
          <Logo height={32} variant="icon" />
          <span className="text-[8px] sm:text-xs md:text-sm font-display font-medium tracking-[0.05em] md:tracking-[0.2em] uppercase text-white leading-tight">
            IQ <br className="sm:hidden" /> BUILDERS & DEVELOPERS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-70 hover:opacity-100 transition-opacity relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative hidden md:inline-block"
        >
          <button onClick={() => setSalesDropdownOpen(!salesDropdownOpen)} className="bg-amber text-black px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-amber-light transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center gap-2">
            Contact Sales Team
            <ChevronDown className={`w-4 h-4 transition-transform ${salesDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {salesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur-xl rounded-md border border-white/20 shadow-lg z-20 flex flex-col"
            >
              <a href="https://wa.me/02132776004" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm text-white hover:bg-white/10 flex items-center justify-between">
                Office IQ Builders
                <span className="text-gold">02132776004</span>
              </a>
              <a href="https://wa.me/03141115203" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm text-white hover:bg-white/10 flex items-center justify-between">
                                Hasnain - Director - <span className="text-gold">0314-1115203</span>
              </a>
              <a href="https://wa.me/03141115203" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm text-white hover:bg-white/10 flex items-center justify-between">
                Ammar - Director of Sales
                <span className="text-gold">0314-1115203</span>
              </a>
            </motion.div>
          )}
        </motion.div>


        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-medium border-b border-white/5 pb-2 hover:text-gold"
            >
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/923322982846" target="_blank" rel="noopener noreferrer" className="bg-gold text-black p-4 font-bold uppercase tracking-widest text-center">
            Book Consultation
          </a>
        </motion.div>
      )}
    </nav>
  );
}
