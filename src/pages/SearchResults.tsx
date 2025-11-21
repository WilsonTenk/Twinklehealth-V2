
import React from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import { Service, BlogPost } from '../types';
import ScrollReveal from '../components/ScrollReveal';

interface SearchResultsProps {
    query: string;
    services: Service[];
    blogPosts: BlogPost[];
    onNavigate: (page: string, id?: number) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, services, blogPosts, onNavigate }) => {
    const lowercaseQuery = query.toLowerCase();

    const filteredServices = services.filter(service => 
        service.title.toLowerCase().includes(lowercaseQuery) || 
        service.description.toLowerCase().includes(lowercaseQuery) ||
        service.tag.toLowerCase().includes(lowercaseQuery)
    );

    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(lowercaseQuery) || 
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.category.toLowerCase().includes(lowercaseQuery)
    );

    const hasResults = filteredServices.length > 0 || filteredPosts.length > 0;

    return (
        <div className="animate-fade-in min-h-[60vh]">
            <div className="bg-gray-50 py-16 border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <button 
                        onClick={() => onNavigate('Home')}
                        className="text-gray-500 hover:text-primary-600 flex items-center space-x-2 mb-8 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="font-medium text-sm">Back to Home</span>
                    </button>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                        Search Results for <span className="text-primary-600">"{query}"</span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                {!hasResults ? (
                    <div className="text-center py-16">
                        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                            <Search size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">No results found</h2>
                        <p className="text-gray-600">Try adjusting your search terms or browse our services.</p>
                    </div>
                ) : (
                    <div className="space-y-16">
                        {filteredServices.length > 0 && (
                            <ScrollReveal>
                                <SectionTitle title="Services" subtitle="Matched Services" />
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredServices.map(service => (
                                        <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
                                    ))}
                                </div>
                            </ScrollReveal>
                        )}

                        {filteredPosts.length > 0 && (
                            <ScrollReveal>
                                <SectionTitle title="Blog Posts" subtitle="Matched Stories" />
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredPosts.map(post => (
                                        <div key={post.id} className="h-full">
                                            <BlogCard post={post} onNavigate={onNavigate} />
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
