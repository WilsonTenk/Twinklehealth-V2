
import React from 'react';
import { Check, Heart, Award, Globe } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { TeamMember } from '../types';

const team: TeamMember[] = [
    {
        id: 1,
        name: "Mawunya Akosua Afordoanyi",
        role: "Founder & President",
        image: "images/PHOTO-2025-04-14-17-02-59.jpg",
        bio: "Mawunya founded Twinkle Health with a vision to eliminate healthcare disparities in Ghana."
    },
    {
        id: 2,
        name: "Godwin Yaw Gbedemah",
        role: "Vice President",
        image: "images/PHOTO-2025-04-14-17-03-00.jpg",
    },
    {
        id: 3,
        name: "Austin Quaye & George Djisam",
        role: "Community Outreach Leads",
        image: "images/PHOTO-2025-04-14-16-34-55 (2).jpg",
    },
    {
        id: 4,
        name: "Elinam Komla Ansawoe & Victor Kofi Norgbedzi",
        role: "Medical Coordinators",
        image: "images/PHOTO-2025-04-14-16-34-56 (2).jpg",
    }
];

const About: React.FC = () => {
    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <div className="bg-primary-900 py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="images/PHOTO-2025-04-14-17-02-56.jpg" alt="Header BG" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">About Us</h1>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto">Discover our story, our mission, and the people behind the movement.</p>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <SectionTitle 
                                subtitle="Who We Are"
                                title="Bridging the Healthcare Gap Since 2018"
                                description="Twinkle Health Foundation was born out of a simple yet powerful realization: geography should not determine one's right to live a healthy life."
                            />
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Founded in Accra, Ghana, we started as a small group of medical volunteers visiting remote communities. Today, we have grown into a full-fledged NGO affecting thousands of lives annually.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Health education can go beyond health talks; drama and arts can also be an innovative tool to educate communities on their health needs.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We focus on holistic health - treating the body, educating the mind through our drama programs, and empowering the community economically. We believe sustainability is key to lasting change.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-primary-50 rounded-xl border border-primary-100">
                                    <h3 className="text-3xl font-bold text-primary-600 mb-2">10</h3>
                                    <p className="text-gray-700 font-medium">Communities Served</p>
                                </div>
                                <div className="p-6 bg-accent-50 rounded-xl border border-accent-100">
                                    <h3 className="text-3xl font-bold text-accent-600 mb-2">3,378</h3>
                                    <p className="text-gray-700 font-medium">Lives Impacted</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="images/PHOTO-2025-04-14-17-02-57.jpg" alt="Our Work" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
                                <p className="text-white italic text-lg">"Healthcare is not just about medicine; it's about dignity and hope."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Vision Values */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 transition-transform">
                            <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600">To provide accessible healthcare, education, and sustainable livelihood opportunities to underserved communities across Ghana.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 transition-transform">
                            <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 mb-6">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600">A world where quality healthcare and economic stability are accessible to everyone, regardless of their location or status.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 transition-transform">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                <Award size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Compassion</li>
                                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Accessibility</li>
                                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Innovation</li>
                                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Integrity</li>
                                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Collaboration</li>
                                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Dignity</li>
                                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Empowerment</li>
                                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Sustainability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Message */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-primary-900 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="p-12 md:p-16">
                                <div className="inline-block bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">Founder's Message</div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Driven by Passion, Guided by Empathy</h2>
                                <p className="text-primary-100 text-lg leading-relaxed mb-8 italic opacity-90">
                                    "I started Twinkle Health because I saw too many preventable tragedies in our rural areas. We are not just treating patients; we are building a healthier, more resilient nation, one village at a time."
                                </p>
                                <div>
                                    <p className="text-white font-bold text-xl">Mawunya Akosua Afordoanyi</p>
                                    <p className="text-primary-300">Founder & President</p>
                                </div>
                            </div>
                            <div className="h-full min-h-[400px]">
                                <img src="images/PHOTO-2025-04-14-17-02-58.jpg" alt="Founder" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <SectionTitle 
                            subtitle="Our Team"
                            title="Meet The Change Makers"
                            alignment="center"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map(member => (
                            <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                                <div className="overflow-hidden h-80 relative">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-primary-600 font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
