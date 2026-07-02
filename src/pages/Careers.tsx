import { motion } from 'motion/react';
import { ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Careers() {
  return (
    <div className="bg-navy-deep min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <SEO
        title="Careers"
        description="Join IQ Builders & Developers – we are hiring Sales Executives in Karachi. Build your career with Pakistan's premier real estate and construction company."
        keywords="IQ Builders careers, jobs in Karachi, real estate jobs Pakistan, sales executive Karachi, construction company careers"
        ogUrl="https://iqbuildersdevelopers.com/careers"
        canonical="https://iqbuildersdevelopers.com/careers"
      />
      <main className="pt-24 pb-24 px-4 md:px-12 max-w-[100vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <h1 className="text-4xl md:text-7xl font-display font-light text-center mb-10 md:mb-16 px-2 break-words">
            CAREERS AT <span className="text-gold italic">IQ BUILDERS</span>
          </h1>
          
          <div className="glass-dark p-6 md:p-12 rounded-[20px] border border-white/10 space-y-10 md:space-y-12 w-full">
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

            {/* Sales Executive — Featured Job */}
            <section>
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[32px] border border-amber/20 bg-gradient-to-br from-amber/10 via-amber/[0.03] to-transparent p-8 md:p-12"
              >
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-amber/20 border border-amber/30 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-amber">
                      Now Hiring
                    </span>
                    <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
                      Full Time
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                    Sales Executive
                  </h3>
                  <p className="text-amber font-light text-base md:text-lg mb-6">
                    IQ Builders & Developers — Karachi
                  </p>

                  <p className="text-white/60 leading-relaxed mb-6 text-sm md:text-base">
                    We are looking for a dynamic and results-driven <strong className="text-white">Sales Executive</strong> to join our growing team. If you have a passion for real estate, strong communication skills, and the drive to close deals, this is the perfect opportunity for you.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                      'Proven experience in real estate sales',
                      'Excellent communication & negotiation skills',
                      'Customer-focused approach',
                      'Target-driven & self-motivated',
                      'Knowledge of Karachi real estate market',
                      'Fluency in Urdu & English',
                    ].map((req, i) => (
                      <div key={i} className="flex items-start gap-3 text-white/70 text-sm">
                        <span className="w-5 h-5 rounded-full bg-amber/20 border border-amber/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-amber text-[10px] font-bold">✓</span>
                        </span>
                        {req}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:hasnainqadriiqbuilders@gmail.com?subject=Application%20for%20Sales%20Executive"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber text-black font-bold uppercase tracking-wider text-xs rounded-full hover:bg-amber-light transition-all duration-300"
                    >
                      <Mail size={16} strokeWidth={2} />
                      hasnainqadriiqbuilders@gmail.com
                    </a>
                    <a
                      href="https://wa.me/923141115203?text=I'm%20interested%20in%20the%20Sales%20Executive%20position"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-xs rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                      <MessageCircle size={16} strokeWidth={1.5} />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </motion.div>
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
                className="inline-block px-4 md:px-8 py-3 md:py-4 bg-gold text-black font-bold uppercase tracking-widest text-[10px] md:text-sm rounded-full hover:bg-gold/90 transition-all text-center break-words"
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
