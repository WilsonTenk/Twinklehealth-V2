
import React from 'react';
import BlogCard from '../components/BlogCard';
import { BlogPost } from '../types';

interface BlogPageProps {
    blogPosts: BlogPost[];
    onNavigate?: (page: string, id?: number) => void;
}

const Blog: React.FC<BlogPageProps> = ({ blogPosts, onNavigate }) => {
    // Simulating more posts for the full page by concatenating existing posts
    // In a real app, this would be a larger list from an API
    const allPosts = [...blogPosts, ...blogPosts]; 

    return (
        <div className="animate-fade-in">
             <div className="bg-primary-900 py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="/images/PHOTO-2025-04-14-16-34-57 (2).jpg" alt="Header BG" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">News & Stories</h1>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto">Updates from the field, success stories, and health insights.</p>
                </div>
            </div>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPosts.map((post, index) => (
                            <div key={`${post.id}-${index}`} className="h-full">
                                <BlogCard post={post} onNavigate={onNavigate} />
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="border-2 border-gray-200 text-gray-600 hover:border-primary-600 hover:text-primary-600 px-8 py-3 rounded-full font-bold transition-all">
                            Load More Stories
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
