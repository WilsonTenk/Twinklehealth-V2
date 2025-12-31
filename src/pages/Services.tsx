
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../types';

interface ServicesPageProps {
    services: Service[];
    onNavigate?: (page: string, id?: number) => void;
}

const Services: React.FC<ServicesPageProps> = ({ services, onNavigate }) => {
    return (
        <div className="animate-fade-in">
            <div className="bg-primary-900 py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="images/PHOTO-2025-04-14-16-34-56 (3).jpg" alt="Header BG" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Our Services</h1>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto">Comprehensive care and support designed to uplift communities from the ground up.</p>
                </div>
            </div>

            <section className="py-24 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <SectionTitle
                            subtitle="What We Do"
                            title="Holistic Community Services"
                            description="Our services range from direct medical intervention to long-term economic empowerment. Click on any service to learn more about how we make a difference."
                            alignment="center"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id}>
                                <ServiceCard service={service} onNavigate={onNavigate!} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
