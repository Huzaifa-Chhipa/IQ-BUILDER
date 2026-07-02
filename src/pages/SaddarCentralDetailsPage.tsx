import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Building2, MapPin, ShieldCheck, Zap, ParkingSquare, Coffee, Dumbbell, Users } from 'lucide-react';
import Footer from '@/src/components/Footer';
import SEO from '@/src/components/SEO';

const projectData: Record<string, any> = {
    'saddar-central': {
        title: 'Saddar Central Point',
        subtitle: 'A Masterpiece of Modern Retail & Living',
        description: 'Saddar Central Point Karachi ke markazi ilaqe mein waqe ek premium Mixed-use Commercial Shopping Mall aur Luxury Apartments ka behtareen imtiaz hai.',
        jointVenture: ['Fattani Group', 'Jumani Builders', 'I.B Builders', 'Iconic Builders'],
        location: {
            address: 'Main Saddar, Near Empress Market, Karachi.',
            highlights: ['Prime Location', 'Commercial & Residential Blend']
        },
        amenities: [
            { name: 'Grand Reception & Lobby', icon: Building2 },
            { name: '24/7 Security & CCTV', icon: ShieldCheck },
            { name: 'High-Speed Lifts', icon: Zap },
            { name: 'Standby Generator', icon: Zap },
            { name: 'Dedicated Car Parking', icon: ParkingSquare },
            { name: 'Community Hall', icon: Users },
            { name: 'In-House Masjid', icon: Coffee },
            { name: 'Modern Gym', icon: Dumbbell }
        ],
        floorPlans: [
            { name: 'Lower Ground Floor', details: ['Commercial Shops available in various sizes', 'Sizes range from 124 Sq. Ft. to 306 Sq. Ft.', 'Wide passages (8ft to 14ft) for excellent customer flow'] },
            { name: 'Upper Ground Floor', details: ['Premium Shopping Arcade', 'Sizes range from 232 Sq. Ft. to 361 Sq. Ft.', '8-0 Feet Wide Arcade for high visibility'] }
        ]
    }
};

export default function SaddarCentralDetailsPage() {
    const project = projectData['saddar-central'];

    if (!project) return <div className="text-white p-20 text-center">Project not found</div>;

    return (
        <div className="bg-charcoal text-white">
            <SEO
                title="Saddar Central Point | Commercial & Residential in Saddar Karachi"
                description="Saddar Central Point – premium mixed-use commercial shopping mall and luxury apartments in Saddar, Karachi near Empress Market. Prime location retail spaces and residences."
                keywords="Saddar Central Point, commercial property Saddar Karachi, shops in Saddar, mixed-use building Karachi, Empress Market property"
                ogUrl="https://iqbuildersdevelopers.com/projects/saddar-central"
                canonical="https://iqbuildersdevelopers.com/projects/saddar-central"
            />
            <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <Link to="/projects" className="flex items-center gap-2 text-amber mb-8 hover:underline">
                    <ArrowLeft size={20} /> Back to Projects
                </Link>
                
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-light mb-4">{project.title}</motion.h1>
                <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-amber mb-8 italic">{project.subtitle}</motion.h3>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg mb-12 max-w-3xl leading-relaxed">{project.description}</motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-2xl font-display mb-6 flex items-center gap-3"><Users className="text-amber" /> Joint Venture</h2>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                            {project.jointVenture.map((jv: string, i: number) => <li key={i}>{jv}</li>)}
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-display mb-6 flex items-center gap-3"><MapPin className="text-amber" /> Prime Location</h2>
                        <p className="text-white/70 mb-4">{project.location.address}</p>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                            {project.location.highlights.map((h: string, i: number) => <li key={i}>{h}</li>)}
                        </ul>
                    </section>
                </div>

                <section className="mt-16">
                    <h2 className="text-2xl font-display mb-8">Premium Amenities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {project.amenities.map((amenity: any, i: number) => (
                            <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                <amenity.icon className="text-amber" size={24} />
                                <span>{amenity.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="text-2xl font-display mb-8">Floor Plans & Layouts</h2>
                    <div className="space-y-6">
                        {project.floorPlans.map((plan: any, i: number) => (
                            <div key={i} className="bg-amber/10 border-amber/20 p-6 rounded-2xl border">
                                <h3 className="text-xl font-display text-amber mb-2">{plan.name}</h3>
                                <ul className="list-disc list-inside text-white/70">
                                    {plan.details.map((d: string, j: number) => <li key={j}>{d}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
