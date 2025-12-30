
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, Mail, Phone, Linkedin } from 'lucide-react';

interface FooterProps {
    onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
                        <div className="flex space-x-2">
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/share/1A5aJvWC52/?mibextid=wwXIfr" },
                                { Icon: Twitter, href: "https://x.com/twinklehealthf?s=21" },
                                { Icon: Instagram, href: "https://www.instagram.com/twinklehealthfoundation?igsh=MTF0NHE0Nmhib24zMQ==" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/twinkle-health-foundation/" },
                                { Icon: Youtube, href: "https://youtube.com/@twinklehealthfoundation?si=T2jV4gdnc5UhMiHZ" },
                                // Custom SVG for TikTok since Lucide doesn't have it
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
                                    className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 text-white transition-all hover:scale-110"
                                >
                                    {social.Icon ? <social.Icon size={18} /> : social.iconElement}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['About', 'Projects', 'Blog', 'Get Involved'].map((item) => (
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
                                    <button onClick={() => onNavigate('Projects')} className="hover:text-primary-400 transition-colors text-sm flex items-center">
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

                        {status === 'success' ? (
                            <div className="bg-green-500/10 text-green-400 p-4 rounded-lg text-sm border border-green-500/20">
                                <p className="font-bold">Subscribed!</p>
                                <p>Thank you for joining our newsletter.</p>
                            </div>
                        ) : (
                            <form className="relative" onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors text-white placeholder-gray-500"
                                    required
                                    disabled={status === 'submitting'}
                                />
                                <button
                                    type="submit"
                                    className={`absolute right-2 top-2 p-1.5 rounded text-white transition-colors ${status === 'submitting' ? 'bg-gray-600 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-500'}`}
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ? (
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <ArrowRight size={16} />
                                    )}
                                </button>
                                {status === 'error' && (
                                    <p className="text-red-400 text-xs mt-2">Failed to subscribe. Please try again.</p>
                                )}
                            </form>
                        )}
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
