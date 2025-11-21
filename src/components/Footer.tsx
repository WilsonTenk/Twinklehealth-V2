
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, Mail, Phone } from 'lucide-react';

interface FooterProps {
    onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                         <div className="inline-block cursor-pointer bg-white p-2 rounded-lg" onClick={() => onNavigate('Home')}>
                            <img 
                                src="logo.png" 
                                alt="Twinkle Health Foundation" 
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed">
                            Transforming lives through accessible healthcare and community empowerment. We believe quality healthcare is a fundamental right.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="bg-gray-800 p-2 rounded hover:bg-primary-600 text-white transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Blog', 'Get Involved'].map((item) => (
                                <li key={item}>
                                    <button onClick={() => onNavigate(item)} className="hover:text-primary-400 transition-colors text-sm flex items-center">
                                        <ArrowRight size={12} className="mr-2" /> {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-4">
                            {['Health Education', 'Medical Services', 'Community Support', 'Livelihood'].map((item) => (
                                <li key={item}>
                                    <button onClick={() => onNavigate('Services')} className="hover:text-primary-400 transition-colors text-sm flex items-center">
                                        <ArrowRight size={12} className="mr-2" /> {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-primary-500" />
                                <span>info@twinklehealth.org</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={16} className="text-primary-500" />
                                <span>054 348 3159</span>
                            </div>
                        </div>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your Email Address" className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary-500" />
                            <button className="absolute right-2 top-2 bg-primary-600 p-1.5 rounded text-white hover:bg-primary-500 transition-colors">
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2025 Twinkle Health Foundation. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
