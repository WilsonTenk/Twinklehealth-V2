import React from 'react';

interface SectionTitleProps {
    subtitle: string;
    title: string;
    description?: string;
    alignment?: 'left' | 'center';
    light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
    subtitle, 
    title, 
    description, 
    alignment = 'left',
    light = false 
}) => {
    return (
        <div className={`mb-12 ${alignment === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left'}`}>
            <span className={`inline-block py-1 px-3 rounded-full text-sm font-bold uppercase tracking-wider mb-4 ${
                light ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-700'
            }`}>
                {subtitle}
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 ${
                light ? 'text-white' : 'text-gray-900'
            }`}>
                {title}
            </h2>
            {description && (
                <p className={`text-lg leading-relaxed ${
                    light ? 'text-gray-100' : 'text-gray-600'
                }`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;