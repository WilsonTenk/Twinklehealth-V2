import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, Mail, Phone, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { Service } from '../types';

interface FooterProps {
    onNavigate: (page: string) => void;
    services: Service[];
}

const Footer: React.FC<FooterProps> = ({ onNavigate, services }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // Accordion state for mobile
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/twinklehealthfoundation@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    _subject: "New Newsletter Subscriber",
                    _template: "table"
                })
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const truncate = (str: string, n: number) => {
        return str.length > n ? str.slice(0, n) + "..." : str;
    };

    return (
        <footer className="bg-gray-950 text-gray-300 pt-16 pb-10 border-t border-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand & Socials */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="inline-block cursor-pointer bg-white p-3 rounded-xl shadow-lg hover:scale-105 transition-transform" onClick={() => onNavigate('Home')}>
                            <img
                                src="logo.png"
                                alt="Twinkle Health Foundation"
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Transforming lives through accessible healthcare and community empowerment. We believe quality healthcare is a fundamental right. Building smiles, equipping lives.
                        </p>

                        {/* Social Icons - Modern & Touch Friendly */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/share/1A5aJvWC52/?mibextid=wwXIfr" },
                                { Icon: Twitter, href: "https://x.com/twinklehealthf?s=21" },
                                { Icon: Instagram, href: "https://www.instagram.com/twinklehealthfoundation?igsh=MTF0NHE0Nmhib24zMQ==" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/twinkle-health-foundation/" },
                                { Icon: Youtube, href: "https://youtube.com/@twinklehealthfoundation?si=T2jV4gdnc5UhMiHZ" },
                                {
                                    iconElement: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                        </svg>
                                    ),
                                    href: "https://www.tiktok.com/@twinkle.health.fo?_r=1&_t=ZM-92UJHl963eF"
                                }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-primary-600 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md border border-gray-800 hover:border-primary-500"
                                >
                                    {social.Icon ? <social.Icon size={18} /> : social.iconElement}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links - Accordion on Mobile */}
                    <div className="lg:col-span-1 border-b border-gray-900 lg:border-none pb-6 lg:pb-0">
                        <button
                            className="w-full flex justify-between items-center lg:cursor-default"
                            onClick={() => toggleSection('quickLinks')}
                        >
                            <h3 className="text-white font-bold text-lg">Quick Links</h3>
                            <div className="lg:hidden text-gray-500">
                                {openSection === 'quickLinks' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                        </button>
                        <div className={`mt-4 lg:mt-6 space-y-3 overflow-hidden transition-all duration-300 ${openSection === 'quickLinks' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'}`}>
                            {['Home', 'About', 'Services', 'Blog', 'Get Involved'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => onNavigate(item)}
                                    className="block w-full text-left hover:text-primary-400 text-gray-400 transition-colors text-sm py-1"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Services - Accordion on Mobile */}
                    <div className="lg:col-span-1 border-b border-gray-900 lg:border-none pb-6 lg:pb-0">
                        <button
                            className="w-full flex justify-between items-center lg:cursor-default"
                            onClick={() => toggleSection('services')}
                        >
                            <h3 className="text-white font-bold text-lg">Our Services</h3>
                            <div className="lg:hidden text-gray-500">
                                {openSection === 'services' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                        </button>
                        <div className={`mt-4 lg:mt-6 space-y-3 overflow-hidden transition-all duration-300 ${openSection === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'}`}>
                            {services.slice(0, 4).map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => onNavigate('Services')}
                                    className="block w-full text-left hover:text-primary-400 text-gray-400 transition-colors text-sm py-1"
                                    title={service.title}
                                >
                                    {truncate(service.title, 25)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter & Contact */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Stay Connected</h3>
                            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for updates and impact stories.</p>

                            {status === 'success' ? (
                                <div className="bg-green-500/10 text-green-400 p-4 rounded-xl text-sm border border-green-500/20 animate-fade-in">
                                    <p className="font-bold mb-1">Subscribed!</p>
                                    <p>Thank you for joining our community.</p>
                                </div>
                            ) : (
                                <form className="relative group" onSubmit={handleSubscribe}>
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                                    <div className="relative flex">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-l-xl focus:outline-none focus:bg-gray-800 transition-colors text-sm placeholder-gray-500"
                                            required
                                            disabled={status === 'submitting'}
                                        />
                                        <button
                                            type="submit"
                                            className={`bg-primary-600 hover:bg-primary-500 text-white px-4 rounded-r-xl transition-colors flex items-center justify-center ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                                            disabled={status === 'submitting'}
                                        >
                                            {status === 'submitting' ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <ArrowRight size={20} />
                                            )}
                                        </button>
                                    </div>
                                    {status === 'error' && (
                                        <p className="text-red-400 text-xs mt-2 absolute">Failed to subscribe. Try again.</p>
                                    )}
                                </form>
                            )}
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors group">
                                <Mail size={18} className="text-primary-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm break-all">twinklehealthfoundation@gmail.com</span>
                            </div>
                            <div className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors group">
                                <Phone size={18} className="text-primary-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">054 348 3159</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>&copy; {new Date().getFullYear()} Twinkle Health Foundation. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
