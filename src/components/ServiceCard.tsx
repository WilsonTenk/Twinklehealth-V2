import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
    service: Service;
    onNavigate: (page: string, id?: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onNavigate }) => {
    return (
        <div
            onClick={() => onNavigate('ServiceDetail', service.id)}
            className="group h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col cursor-pointer"
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider shadow-sm">
                    {service.tag}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                    <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-2xl w-fit text-primary-600 dark:text-primary-400 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                        <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed text-sm">
                        {service.description}
                    </p>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center text-primary-600 dark:text-primary-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Learn Impact</span>
                    <ArrowRight size={16} className="ml-2" />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
