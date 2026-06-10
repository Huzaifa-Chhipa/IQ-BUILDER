import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Careers() {
  return (
    <div className="bg-navy-deep min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-24 container mx-auto px-4 md:px-12 max-w-[100vw]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto w-full"
        >
          <h1 className="text-4xl md:text-7xl font-display font-light text-center mb-10 md:mb-16 px-2 break-words">
            CAREERS AT <span className="text-gold italic">IQ BUILDERS</span>
          </h1>
          
          <div className="glass-dark p-6 md:p-12 rounded-[20px] border border-white/10 space-y-10 md:space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 md:mb-6">Build Your Future With Us</h2>
              <p className="text-white/60 leading-relaxed text-sm md:text-base break-words">
                At IQ Builders & Developers, we believe that great projects are built by great people. We are always looking for talented, passionate, and driven professionals who want to make a meaningful impact in the real estate and construction industry.
              </p>
              <p className="text-white/60 leading-relaxed mt-4 text-sm md:text-base break-words">
                Whether you are an experienced professional or just starting your career, IQ Builders & Developers offers opportunities to grow, learn, and contribute to exciting projects that shape communities and create lasting value.
              </p>
            </section>

            <hr className="border-white/10" />

            <section>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 md:mb-8">Why Join IQ Builders & Developers?</h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                {[
                  { title: 'Professional Growth', desc: 'We provide a supportive environment where employees can develop their skills, gain valuable experience, and advance their careers.' },
                  { title: 'Innovative Projects', desc: 'Work on diverse real estate and construction projects that challenge your abilities and expand your expertise.' },
                  { title: 'Collaborative Culture', desc: 'Join a team that values teamwork, integrity, innovation, and mutual respect.' },
                  { title: 'Competitive Benefits', desc: 'We offer competitive compensation packages and opportunities for professional development.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-5 md:p-6 rounded-xl border border-white/5 break-words">
                    <h4 className="text-gold font-bold uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-3">{item.title}</h4>
                    <p className="text-white/60 text-xs md:text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-white/10" />

            <section>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 md:mb-6">Who We Are Looking For</h2>
              <p className="text-white/60 mb-6 text-sm md:text-base break-words">We welcome talented individuals from various backgrounds:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 text-white/60 text-sm">
                {[
                  'Civil Engineers', 'Architects', 'Project Managers', 'Site Supervisors', 
                  'Sales & Marketing Professionals', 'Real Estate Consultants', 'Customer Support Representatives', 
                  'Finance & Accounts Professionals', 'Human Resources Specialists', 'Administrative Staff'
                ].map((role, i) => (
                  <li key={i} className="flex items-center gap-2 break-words">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" /> {role}
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-white/10" />

            <section>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 md:mb-6">Apply Now</h2>
              <p className="text-white/60 mb-6 text-sm md:text-base break-words">
                Interested in joining our team? Send your resume and cover letter to:
              </p>
              <a 
                href="mailto:hasnainqadriiqbuilders@gmail.com"
                className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs md:text-sm rounded-full hover:bg-gold/90 transition-all text-center break-all"
              >
                hasnainqadriiqbuilders@gmail.com
              </a>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
