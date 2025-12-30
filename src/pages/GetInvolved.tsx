import React, { useState } from 'react';
import { Heart, HandHeart, UserPlus, CheckCircle } from 'lucide-react';

const GetInvolved: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'volunteer' | 'partner' | 'donate'>('volunteer');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://formsubmit.co/ajax/twinklehealthfoundation@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            if (response.ok) {
                setFormSubmitted(true);
                setTimeout(() => setFormSubmitted(false), 5000); // Reset after 5s
                (e.target as HTMLFormElement).reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form error:", error);
            alert("There was an error sending your message.");
        }
    };

    return (
        <div className="animate-fade-in">
            <div className="bg-primary-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="images/PHOTO-2025-04-14-16-34-57 (3).jpg" alt="Header BG" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Get Involved</h1>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto">Your support makes our work possible. Join us in making a difference.</p>
                </div>
            </div>

            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveTab('volunteer')}
                            className={`px-8 py-4 rounded-full font-bold flex items-center space-x-2 transition-all shadow-sm ${activeTab === 'volunteer' ? 'bg-primary-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            <UserPlus size={20} />
                            <span>Volunteer</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('partner')}
                            className={`px-8 py-4 rounded-full font-bold flex items-center space-x-2 transition-all shadow-sm ${activeTab === 'partner' ? 'bg-primary-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            <HandHeart size={20} />
                            <span>Partner</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('donate')}
                            className={`px-8 py-4 rounded-full font-bold flex items-center space-x-2 transition-all shadow-sm ${activeTab === 'donate' ? 'bg-accent-500 text-white shadow-lg scale-105' : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            <Heart size={20} />
                            <span>Donate</span>
                        </button>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                        {activeTab === 'volunteer' && (
                            <div className="p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Become a Volunteer</h2>
                                    <p className="text-gray-600 dark:text-gray-300">Join our team on the ground. We need medical professionals, educators, and general support.</p>
                                </div>
                                {formSubmitted ? (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center text-green-800">
                                        <CheckCircle size={48} className="mx-auto mb-4 text-green-600" />
                                        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                                        <p>Your application has been received. We will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-6">
                                        <input type="hidden" name="_subject" value="New Volunteer Application" />
                                        <input type="hidden" name="_template" value="table" />

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Full Name</label>
                                                <input required name="name" type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
                                                <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" placeholder="john@example.com" />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Phone Number</label>
                                                <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" placeholder="+233 XX XXX XXXX" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Area of Interest</label>
                                                <select name="interest" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all text-gray-900 dark:text-white">
                                                    <option>Medical Team</option>
                                                    <option>Health Education / Drama</option>
                                                    <option>Logistics & Support</option>
                                                    <option>Fundraising</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Why do you want to join us?</label>
                                            <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"></textarea>
                                        </div>
                                        <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg">
                                            Submit Application
                                        </button>
                                    </form>
                                )}
                            </div>
                        )}

                        {activeTab === 'partner' && (
                            <div className="p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Partner With Us</h2>
                                    <p className="text-gray-600 dark:text-gray-300">Collaborate with us to expand our impact. Corporations, NGOs, and institutions welcome.</p>
                                </div>
                                {formSubmitted ? (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center text-green-800">
                                        <CheckCircle size={48} className="mx-auto mb-4 text-green-600" />
                                        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                        <p>Our partnerships team will review your proposal and get back to you.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-6">
                                        <input type="hidden" name="_subject" value="New Partnership Proposal" />
                                        <input type="hidden" name="_template" value="table" />

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Organization Name</label>
                                            <input required name="organization" type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Contact Person</label>
                                                <input required name="contact_person" type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
                                                <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Partnership Proposal / Message</label>
                                            <textarea name="proposal" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"></textarea>
                                        </div>
                                        <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg">
                                            Send Proposal
                                        </button>
                                    </form>
                                )}
                            </div>
                        )}

                        {activeTab === 'donate' && (
                            <div className="p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Make a Donation</h2>
                                    <p className="text-gray-600 dark:text-gray-300">Secure payments via Paystack. Your contribution saves lives.</p>
                                </div>

                                <div className="max-w-md mx-auto space-y-8 text-center">
                                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                                        Your contribution helps us provide essential medical services and education to those in need. Click the button below to donate securely via Paystack.
                                    </p>

                                    <a
                                        href="https://paystack.shop/pay/cc8m08ql-f"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg flex items-center justify-center text-lg"
                                    >
                                        <Heart className="mr-2" size={24} />
                                        Make a Donation
                                    </a>

                                    <p className="text-xs text-center text-gray-400">
                                        Secured by Paystack. You will be redirected to complete payment.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolved;
