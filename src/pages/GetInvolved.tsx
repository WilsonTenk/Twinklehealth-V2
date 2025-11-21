
import React, { useState } from 'react';
import { Heart, HandHeart, UserPlus, CheckCircle, CreditCard } from 'lucide-react';

const GetInvolved: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'volunteer' | 'partner' | 'donate'>('volunteer');
    const [donationAmount, setDonationAmount] = useState<string>('100');
    const [customAmount, setCustomAmount] = useState<string>('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleDonation = (e: React.FormEvent) => {
        e.preventDefault();
        const finalAmount = customAmount || donationAmount;
        
        // PAYSTACK INTEGRATION NOTE:
        // Replace 'pk_test_xxxxxxxxxxxxxxxxxxxx' with your actual public key.
        // Use the Paystack Pop library or inline script.
        alert(`Initiating Paystack payment for GHS ${finalAmount}. (Integration Point)`);
        
        // Example Paystack call:
        // const handler = PaystackPop.setup({
        //   key: 'YOUR_PUBLIC_KEY',
        //   email: document.getElementById('email-address').value,
        //   amount: finalAmount * 100, // in kobo
        //   currency: 'GHS',
        //   callback: function(response){
        //     alert('Transaction successful. Ref: ' + response.reference);
        //   },
        //   onClose: function(){
        //     alert('Window closed');
        //   }
        // });
        // handler.openIframe();
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000); // Reset after 5s
    };

    return (
        <div className="animate-fade-in">
            <div className="bg-primary-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="/images/PHOTO-2025-04-14-16-34-57 (3).jpg" alt="Header BG" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Get Involved</h1>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto">Your support makes our work possible. Join us in making a difference.</p>
                </div>
            </div>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button 
                            onClick={() => setActiveTab('volunteer')}
                            className={`px-8 py-4 rounded-full font-bold flex items-center space-x-2 transition-all shadow-sm ${activeTab === 'volunteer' ? 'bg-primary-600 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                        >
                            <UserPlus size={20} />
                            <span>Volunteer</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab('partner')}
                            className={`px-8 py-4 rounded-full font-bold flex items-center space-x-2 transition-all shadow-sm ${activeTab === 'partner' ? 'bg-primary-600 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                        >
                            <HandHeart size={20} />
                            <span>Partner</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab('donate')}
                            className={`px-8 py-4 rounded-full font-bold flex items-center space-x-2 transition-all shadow-sm ${activeTab === 'donate' ? 'bg-accent-500 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                        >
                            <Heart size={20} />
                            <span>Donate</span>
                        </button>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                        {activeTab === 'volunteer' && (
                            <div className="p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">Become a Volunteer</h2>
                                    <p className="text-gray-600">Join our team on the ground. We need medical professionals, educators, and general support.</p>
                                </div>
                                {formSubmitted ? (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center text-green-800">
                                        <CheckCircle size={48} className="mx-auto mb-4 text-green-600" />
                                        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                                        <p>Your application has been received. We will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Full Name</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Email Address</label>
                                                <input required type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="john@example.com" />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Phone Number</label>
                                                <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="+233 XX XXX XXXX" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Area of Interest</label>
                                                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                                                    <option>Medical Team</option>
                                                    <option>Health Education / Drama</option>
                                                    <option>Logistics & Support</option>
                                                    <option>Fundraising</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Why do you want to join us?</label>
                                            <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"></textarea>
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
                                    <h2 className="text-2xl font-bold text-gray-900">Partner With Us</h2>
                                    <p className="text-gray-600">Collaborate with us to expand our impact. Corporations, NGOs, and institutions welcome.</p>
                                </div>
                                {formSubmitted ? (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center text-green-800">
                                        <CheckCircle size={48} className="mx-auto mb-4 text-green-600" />
                                        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                        <p>Our partnerships team will review your proposal and get back to you.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Organization Name</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Contact Person</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Email Address</label>
                                                <input required type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Partnership Proposal / Message</label>
                                            <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"></textarea>
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
                                    <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
                                    <p className="text-gray-600">Secure payments via Paystack. Your contribution saves lives.</p>
                                </div>
                                
                                <form onSubmit={handleDonation} className="max-w-md mx-auto space-y-8">
                                    <div className="grid grid-cols-3 gap-4">
                                        {['50', '100', '200', '500', '1000'].map((amt) => (
                                            <button 
                                                key={amt}
                                                type="button"
                                                onClick={() => { setDonationAmount(amt); setCustomAmount(''); }}
                                                className={`py-3 rounded-xl border font-bold transition-all ${donationAmount === amt && !customAmount ? 'bg-accent-500 text-white border-accent-500' : 'bg-white text-gray-600 border-gray-200 hover:border-accent-500'}`}
                                            >
                                                GHS {amt}
                                            </button>
                                        ))}
                                        <div className="relative col-span-1">
                                             <input 
                                                type="number" 
                                                placeholder="Custom"
                                                value={customAmount}
                                                onChange={(e) => setCustomAmount(e.target.value)}
                                                className={`w-full h-full px-2 text-center rounded-xl border font-bold outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 ${customAmount ? 'border-accent-500 bg-accent-50' : 'border-gray-200'}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Email Address (for receipt)</label>
                                            <input required type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all" placeholder="you@example.com" />
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg flex items-center justify-center space-x-2 text-lg">
                                        <CreditCard size={20} />
                                        <span>Donate GHS {customAmount || donationAmount}</span>
                                    </button>
                                    
                                    <p className="text-xs text-center text-gray-400">
                                        Secured by Paystack. You will be redirected to complete payment.
                                    </p>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolved;
