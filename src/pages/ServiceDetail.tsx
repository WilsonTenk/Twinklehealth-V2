
import React from 'react';
import { ArrowLeft, CheckCircle, Heart, BarChart3 } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailProps {
    service: Service;
    onBack: () => void;
    onDonate: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onDonate }) => {
    return (
        <div className="animate-fade-in bg-white">
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[400px]">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-900/60"></div>
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                        <button 
                            onClick={onBack}
                            className="text-white/80 hover:text-white flex items-center space-x-2 mb-6 transition-colors"
                        >
                            <ArrowLeft size={20} />
                            <span className="uppercase font-bold tracking-wider text-sm">Back to Services</span>
                        </button>
                        <div className="inline-block bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wide">
                            {service.tag}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl leading-tight">
                            {service.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="prose prose-lg text-gray-600 max-w-none">
                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Overview</h3>
                            <p className="leading-relaxed mb-8 text-lg">
                                {service.fullDescription || service.description}
                            </p>

                            {service.features && (
                                <div className="my-12 bg-primary-50 p-8 rounded-2xl border border-primary-100">
                                    <h4 className="text-xl font-bold text-primary-800 mb-6 flex items-center">
                                        <CheckCircle className="mr-3" /> Key Features
                                    </h4>
                                    <ul className="grid md:grid-cols-2 gap-4">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2.5"></div>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Approach</h3>
                            <p className="mb-6">
                                At Twinkle Health Foundation, we don't just apply a band-aid solution. We work closely with local leaders to ensure that this program is sustainable. By integrating local knowledge with modern expertise, {service.title} continues to grow and adapt to the changing needs of the community.
                            </p>
                            <p>
                                Through this initiative, we have seen a measurable decrease in related health issues and an increase in overall community well-being.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Impact Card */}
                        {service.impactStats && (
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
                                    <BarChart3 className="text-primary-600" />
                                    <h4 className="font-bold text-gray-900 text-lg">Program Impact</h4>
                                </div>
                                <div className="space-y-6">
                                    {service.impactStats.map((stat, idx) => (
                                        <div key={idx}>
                                            <div className="text-3xl font-heading font-bold text-gray-900">{stat.value}</div>
                                            <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA Card */}
                        <div className="bg-primary-900 p-8 rounded-2xl text-center text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <Heart size={48} className="mx-auto mb-4 text-accent-500 fill-current" />
                                <h3 className="text-xl font-bold mb-2">Support This Cause</h3>
                                <p className="text-primary-100 mb-6 text-sm">
                                    Your donation helps us keep the {service.title} running for those who need it most.
                                </p>
                                <button 
                                    onClick={onDonate}
                                    className="w-full bg-white text-primary-900 font-bold py-3 rounded-full hover:bg-primary-50 transition-colors"
                                >
                                    Donate Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
