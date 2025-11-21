
import React from 'react';
import { Calendar, User } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
    post: BlogPost;
    onNavigate?: (page: string, id?: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onNavigate }) => {
    return (
        <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 h-full flex flex-col">
            <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => onNavigate && onNavigate('BlogDetail', post.id)}>
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-12">
                    <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {post.category}
                    </span>
                </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                        <User size={14} className="mr-1 text-primary-500" />
                        {post.author}
                    </div>
                    <div className="flex items-center">
                        <Calendar size={14} className="mr-1 text-primary-500" />
                        {post.date}
                    </div>
                </div>
                <h3 
                    className="text-xl font-heading font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors cursor-pointer"
                    onClick={() => onNavigate && onNavigate('BlogDetail', post.id)}
                >
                    {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                </p>
                <button 
                    onClick={() => onNavigate && onNavigate('BlogDetail', post.id)}
                    className="text-primary-600 font-bold text-sm hover:underline mt-auto text-left"
                >
                    Read Full Story &rarr;
                </button>
            </div>
        </article>
    );
};

export default BlogCard;
