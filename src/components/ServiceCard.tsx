
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
    service: Service;
    onNavigate?: (page: string, id?: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onNavigate }) => {
    return (
        <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
            <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => onNavigate && onNavigate('ServiceDetail', service.id)}>
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm uppercase tracking-wide">
                    {service.tag}
                </div>
                <div className="absolute -bottom-6 left-6 bg-primary-600 p-4 rounded-xl shadow-lg group-hover:bg-accent-500 transition-colors duration-300 text-white">
                    <service.icon size={24} />
                </div>
            </div>
            <div className="pt-10 pb-8 px-6 flex-grow flex flex-col">
                <h3 
                    className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors cursor-pointer"
                    onClick={() => onNavigate && onNavigate('ServiceDetail', service.id)}
                >
                    {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                    {service.description}
                </p>
                <button 
                    onClick={() => onNavigate && onNavigate('ServiceDetail', service.id)}
                    className="inline-flex items-center text-primary-600 font-bold text-sm uppercase tracking-wider group-hover:text-accent-600 transition-colors mt-auto"
                >
                    Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
