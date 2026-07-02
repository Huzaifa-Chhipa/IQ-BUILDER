import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Building2, MapPin, ShieldCheck, Zap, ParkingSquare, Users, BookOpenText, Dumbbell, Gamepad2 } from 'lucide-react';
import Footer from '@/src/components/Footer';
import SEO from '@/src/components/SEO';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownContent from "../assets/Madina Park View/madina_park_view_content.md?raw";


const projectData: Record<string, any> = {
    'madina-park-view': {
        title: 'Madina Park View Apartments',
        subtitle: 'Experience Luxury, Comfort, and Modern Living',
        description: 'Madina Park View ek premium aur luxury apartment project hai jo modern lifestyle aur aaliyan sahulyat ka ek behtareen imtizaj (blend) pesh karta hai. Yeh project Karachi ke ek behtareen aur markazi location par khubsoorat manzazir aur pur-sukoon mahool ke sath design kiya gaya hai.',
        jointVenture: ['I.B Builders & Developers', 'Jumani Builders & Developers', 'Rida Builders & Developers'],
        location: {
            address: 'Plot No. 716/2, Near Parda Park, Jamshed Road, Karachi.',
            highlights: ['Park Facing (Khubsoorat aur haryali se bharpur view)', 'West Open Flats (Taaza hawa aur behtareen roshni - cross ventilation)']
        },
        configurations: ['3 Bed Lounge Luxury Apartments', '3 Bed DD (Drawing + Dining) Luxury Apartments', '3 Grid Flat Layout'],
        amenities: [
            { name: 'Grand Reception & Lobby', icon: Building2 },
            { name: '24/7 Security & CCTV', icon: ShieldCheck },
            { name: 'High-Speed Lifts', icon: Zap },
            { name: 'Standby Generator', icon: Zap },
            { name: 'Dedicated Car Parking', icon: ParkingSquare },
            { name: 'Community Hall', icon: Users },
            { name: 'In-House Masjid', icon: BookOpenText },
            { name: 'Modern Gym', icon: Dumbbell },
            { name: 'Indoor Games & Play Area', icon: Gamepad2 }
        ],
        floorPlans: [
            { name: 'Fourth Floor Amenities Area', details: ['Community Hall (52\'-0" x 32\'-0")', 'Prayer Area (Masjid) (44\'-0" x 24\'-0")', 'Gymnasium (27\'-6" x 32\'-0")', 'Children Play Area (27\'-6" x 32\'-0")', 'Indoor Games Room (27\'-6" x 21\'-0")', 'Reception Lobby (15\'-6" x 25\'-6")'] },
            { name: 'Flat G-1 (Ground Floor)', netArea: '1378.60 Sq. Ft.', totalArea: '1707.27 Sq. Ft.', layout: '3 Bedrooms, TV Lounge (11\'-6" x 28\'-0"), Drawing Room (15\'-0" x 11\'-0"), Kitchen, Double Terraces' },
            { name: 'Flat G-2 (Ground Floor)', netArea: '1347.60 Sq. Ft.', totalArea: '1674.17 Sq. Ft.', layout: '3 Bedrooms, TV Lounge (11\'-6" x 28\'-0"), Drawing Room (11\'-0" x 15\'-0"), Kitchen, Open Terrace' },
            { name: 'Flat G-3 (Ground Floor)', netArea: '1275.00 Sq. Ft.', totalArea: '1529.10 Sq. Ft.', layout: '3 Bedrooms, TV Lounge (25\'-6" x 11\'-0"), Drawing Room (14\'-6" x 11\'-0"), Kitchen, Terrace' },
            { name: 'Flat 101 (Typical Floor Plan)', netArea: '1378.60 Sq. Ft.', totalArea: '1507.27 Sq. Ft.', layout: '3 Bedrooms, TV Lounge (11\'-6" x 28\'-0"), Drawing Room (15\'-0" x 11\'-0"), Kitchen, Balcony/Terrace' },
            { name: 'Flat 102 (Typical Floor Plan)', netArea: '1347.50 Sq. Ft.', totalArea: '1476.17 Sq. Ft.', layout: '3 Bedrooms, TV Lounge (11\'-6" x 28\'-0"), Drawing Room (11\'-0" x 15\'-0"), Kitchen, Terraces' },
            { name: 'Flat 103 & 104 (Typical)', netArea: '902.00 Sq. Ft.', totalArea: '1030.67 Sq. Ft.', layout: '3 Bedrooms, Central TV Lounge (20\'-0" x 11\'-0"), Kitchen, Front Terrace' },
            { name: 'Flat 105 (Typical)', netArea: '911.00 Sq. Ft.', totalArea: '1039.67 Sq. Ft.', layout: '3 Bedrooms, Central TV Lounge (20\'-0" x 11\'-0"), Kitchen, Front Terrace' },
            { name: 'Flat 106 & 107 (Typical)', netArea: '922.00 Sq. Ft.', totalArea: '1050.67 Sq. Ft.', layout: '3 Bedrooms, Lounge (18\'-0" x 13\'-0"), Kitchen, Wide Terrace' }
        ]
    }
};

export default function ProjectDetailsPage() {
    // Fixed project key for Madina Park View
const project = projectData['madina-park-view'];

    if (!project) return <div className="text-white p-20 text-center">Project not found</div>;

    return (
        <div className="bg-obsidian text-white">
            <SEO
                title="Madina Park View | Luxury Apartments in Karachi"
                description="Madina Park View – premium luxury apartments in Karachi near Parda Park, Jamshed Road. 3-bedroom apartments with modern amenities, community hall, gym, and prime location."
                keywords="Madina Park View, luxury apartments Karachi, 3 bedroom flats Karachi, apartments near Parda Park, Jamshed Road property"
                ogUrl="https://iqbuildersdevelopers.com/projects/madina-park-view"
                canonical="https://iqbuildersdevelopers.com/projects/madina-park-view"
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
                        <h2 className="text-2xl font-display mb-6 flex items-center gap-3"><MapPin className="text-amber" /> Prime Location</h2>
                        <p className="text-white/70 mb-4">{project.location.address}</p>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                            {project.location.highlights.map((h: string, i: number) => <li key={i}>{h}</li>)}
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-display mb-6">Joint Venture Partners</h2>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <ul className="list-none space-y-3">
                                {project.jointVenture.map((partner: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80"><Building2 size={18} className="text-amber" /> {partner}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                <section className="mt-16">
                    <h2 className="text-2xl font-display mb-8">Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {project.amenities.map((amenity: any, i: number) => (
                            <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                <amenity.icon className="text-amber shrink-0" />
                                <span className="text-sm font-medium">{amenity.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="text-2xl font-display mb-8">Detailed Floor Plans & Layouts</h2>
                    <div className="space-y-6">
                        {project.floorPlans.map((plan: any, i: number) => (
                            <div key={i} className="bg-amber/10 border-amber/20 p-6 rounded-2xl border">
                                <h3 className="text-xl font-display text-amber mb-2">{plan.name}</h3>
                                {plan.details ? (
                                    <ul className="list-disc list-inside text-white/70">
                                        {plan.details.map((d: string, j: number) => <li key={j}>{d}</li>)}
                                    </ul>
                                ) : (
                                    <div className="text-white/70">
                                        <p><strong>Net Area:</strong> {plan.netArea} | <strong>Total Area:</strong> {plan.totalArea}</p>
                                        <p><strong>Layout:</strong> {plan.layout}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div >
        <Footer />
        </div >
    );
}
