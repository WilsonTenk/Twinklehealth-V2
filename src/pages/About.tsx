
import React from 'react';
import { Check, Heart, Award, Globe } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CountUp from '../components/CountUp';
import { TeamMember } from '../types';

const team: TeamMember[] = [
    {
        id: 1,
        name: "Mawunya Akosua Afordoanyi",
        role: "Founder & President",
        image: "images/team/Mawunya Akosua Afordoanyi.jpeg",
        bio: "Mawunya founded Twinkle Health with a vision to eliminate healthcare disparities in Ghana."
    },
    {
        id: 2,
        name: "Godwin Yaw Gbedemah",
        role: "Vice President",
        image: "images/team/Godwin Yaw Gbedemah.jpeg",
    },
    {
        id: 3,
        name: "Austin Quaye",
        role: "Community Outreach Lead",
        image: "images/team/Austin Quaye.jpeg",
    },
    {
        id: 4,
        name: "George Djisam",
        role: "Community Outreach Lead",
        image: "images/team/George Djisam.jpeg",
    },
    {
        id: 5,
        name: "Elinam Komla Ansawoe",
        role: "Medical Coordinator",
        image: "images/team/Ekene.jpeg",
    },
    {
        id: 6,
        name: "Victor Kofi Norgbedzi",
        role: "Medical Coordinator",
        image: "images/team/Victor Kofi Norgbedzi.jpeg",
    },
    {
        id: 7,
        name: "Rudolf K Akutu",
        role: "Accountant",
        image: "images/team/Rudolf K Akutu.jpeg",
    },
    {
        id: 8,
        name: "Lovina Delali Honu",
        role: "Secretary",
        image: "images/team/Lovina Delali Honu.jpeg",
    },
    {
        id: 9,
        name: "Tamakloe Jonas Worlanyo D",
        role: "Welfare Lead",
        image: "images/team/Tamakloe Jonas Worlanyo D.jpeg",
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
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto">Discover our story, our mission and the people behind building smiles and equipping lives</p>
                </div>
            </div>

            {/* Main Content - Bento Grid Layout */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <SectionTitle
                            subtitle="Who We Are"
                            title="Bridging the Healthcare Gap"
                            alignment="center"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
                        {/* 1. Main Text Card - Large */}
                        <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">Since 2022</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                                Twinkle Health Foundation was born out of a simple yet powerful realization: geography should not determine one's right to live a healthy life.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                Founded in Accra, Ghana, we started as a small group of medical volunteers visiting remote communities. Today, we have grown into a full-fledged NGO affecting thousands of lives annually.
                            </p>
                        </div>

                        {/* 2. Stats Block - Vertical Stack/Grid */}
                        <div className="lg:col-span-5 grid grid-rows-2 gap-6">
                            <div className="bg-primary-600 p-8 rounded-3xl shadow-sm text-white flex flex-col justify-center relative overflow-hidden group">
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                <h4 className="text-5xl font-bold mb-2 relative z-10">
                                    <CountUp end={10} suffix="+" />
                                </h4>
                                <p className="text-primary-100 font-medium relative z-10">Communities Served</p>
                            </div>
                            <div className="bg-accent-500 p-8 rounded-3xl shadow-sm text-white flex flex-col justify-center relative overflow-hidden group">
                                <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                <h4 className="text-5xl font-bold mb-2 relative z-10">
                                    <CountUp end={3378} suffix="+" />
                                </h4>
                                <p className="text-accent-100 font-medium relative z-10">Lives Impacted</p>
                            </div>
                        </div>

                        {/* 3. Image Card */}
                        <div className="lg:col-span-5 relative min-h-[300px] rounded-3xl overflow-hidden shadow-sm group">
                            <img src="images/PHOTO-2025-04-14-17-02-57.jpg" alt="Our Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white font-bold text-xl italic leading-relaxed">"Healthcare is not just about medicine; it's about dignity and hope."</p>
                            </div>
                        </div>

                        {/* 4. Secondary Text Card ("Arts & Drama") */}
                        <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-center hover:shadow-md transition-shadow">
                            <div className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-sm mb-4">
                                <span className="w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"></span>
                                <span>Innovation</span>
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Healing Through Arts</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                healing can come in the form of arts and drama. Health education can go beyond talks; we use drama and arts as innovative tools to educate communities on their health needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Vision Values - Interactive Cards */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 hover:bg-primary-600 hover:border-primary-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-white transition-colors">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-primary-100 transition-colors">
                                To provide accessible healthcare, education, and sustainable livelihood opportunities to underserved communities across Ghana.
                            </p>
                        </div>

                        <div className="group bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 hover:bg-accent-600 hover:border-accent-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center text-accent-600 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-white transition-colors">Our Vision</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-accent-100 transition-colors">
                                A world where quality healthcare and economic stability are accessible to everyone, regardless of their location or status.
                            </p>
                        </div>

                        <div className="group bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 hover:bg-green-600 hover:border-green-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center text-green-600 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Award size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-white transition-colors">Our Values</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300 group-hover:text-green-100 transition-colors">
                                {['Compassion', 'Accessibility', 'Innovation', 'Integrity', 'Collaboration', 'Dignity', 'Empowerment', 'Sustainability'].map((val) => (
                                    <li key={val} className="flex items-center">
                                        <Check size={16} className="mr-2 opacity-70" /> {val}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Message */}
            <section className="py-24 bg-white dark:bg-gray-900">
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
                                <img src="images/team/Mawunya Akosua Afordoanyi.jpeg" alt="Founder" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (Clean Grid) */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <SectionTitle
                            subtitle="Our Team"
                            title="Meet The Change Makers"
                            alignment="center"
                        />
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Passionate individuals dedicated to making a difference.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member) => (
                            <div key={member.id} className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2">
                                <div className="h-80 overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <p className="text-white text-sm italic opacity-90">
                                            {member.bio || "Dedicated to serving the community."}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 text-center relative">
                                    <div className="absolute -top-6 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100">
                                        <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                                            Connect
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                                    <p className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider">{member.role}</p>
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
