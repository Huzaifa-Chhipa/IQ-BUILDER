import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Careers() {
  return (
    <div className="bg-navy-deep min-h-screen text-white">
      <Navbar />
      <main className="pt-32 pb-24 container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-display font-light text-center mb-16">
            CAREERS AT <span className="text-gold italic">IQ BUILDERS</span>
          </h1>
          
          <div className="glass-dark p-8 md:p-12 rounded-[20px] border border-white/10 space-y-12">
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Build Your Future With Us</h2>
              <p className="text-white/60 leading-relaxed">
                At IQ Builders & Developers, we believe that great projects are built by great people. We are always looking for talented, passionate, and driven professionals who want to make a meaningful impact in the real estate and construction industry.
              </p>
              <p className="text-white/60 leading-relaxed mt-4">
                Whether you are an experienced professional or just starting your career, IQ Builders & Developers offers opportunities to grow, learn, and contribute to exciting projects that shape communities and create lasting value.
              </p>
            </section>

            <hr className="border-white/10" />

            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-8">Why Join IQ Builders & Developers?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Professional Growth', desc: 'We provide a supportive environment where employees can develop their skills, gain valuable experience, and advance their careers.' },
                  { title: 'Innovative Projects', desc: 'Work on diverse real estate and construction projects that challenge your abilities and expand your expertise.' },
                  { title: 'Collaborative Culture', desc: 'Join a team that values teamwork, integrity, innovation, and mutual respect.' },
                  { title: 'Competitive Benefits', desc: 'We offer competitive compensation packages and opportunities for professional development.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-3">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-white/10" />

            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Who We Are Looking For</h2>
              <p className="text-white/60 mb-6">We welcome talented individuals from various backgrounds:</p>
              <ul className="grid md:grid-cols-3 gap-4 text-white/60">
                {[
                  'Civil Engineers', 'Architects', 'Project Managers', 'Site Supervisors', 
                  'Sales & Marketing Professionals', 'Real Estate Consultants', 'Customer Support Representatives', 
                  'Finance & Accounts Professionals', 'Human Resources Specialists', 'Administrative Staff'
                ].map((role, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" /> {role}
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-white/10" />

            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Apply Now</h2>
              <p className="text-white/60 mb-6">
                Interested in joining our team? Send your resume and cover letter to:
              </p>
              <a 
                href="mailto:hasnainqadriiqbuilders@gmail.com"
                className="inline-block px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gold/90 transition-all"
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
