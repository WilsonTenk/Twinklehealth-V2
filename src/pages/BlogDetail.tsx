
import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogDetailProps {
    post: BlogPost;
    onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post, onBack }) => {
    return (
        <div className="animate-fade-in bg-white dark:bg-gray-900 pb-24">
            {/* Header Section */}
            <div className="bg-gray-50 dark:bg-gray-800 pt-12 pb-16 border-b border-gray-100 dark:border-gray-700">
                <div className="container mx-auto px-4 max-w-4xl">
                    <button
                        onClick={onBack}
                        className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center space-x-2 mb-8 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="font-medium text-sm">Back to Blog</span>
                    </button>

                    <div className="flex items-center space-x-4 mb-6">
                        <span className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            {post.category}
                        </span>
                        {post.readTime && (
                            <span className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                <Clock size={14} className="mr-1" /> {post.readTime} read
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                                <User size={24} className="text-gray-400 dark:text-gray-500" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 dark:text-white">{post.author}</div>
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                    <Calendar size={14} className="mr-1" /> {post.date}
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <button className="p-2 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all text-gray-500 dark:text-gray-400">
                                <Facebook size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all text-gray-500 dark:text-gray-400">
                                <Twitter size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all text-gray-500 dark:text-gray-400">
                                <Linkedin size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="container mx-auto px-4 max-w-5xl -mt-8 mb-16">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 max-w-3xl">
                <article className="prose prose-lg prose-primary max-w-none">
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium border-l-4 border-accent-500 pl-6 italic">
                        {post.excerpt}
                    </p>

                    {post.content ? (
                        <div className="space-y-6 text-gray-700 dark:text-gray-300">
                            {post.content}
                        </div>
                    ) : (
                        <div className="space-y-6 text-gray-700 dark:text-gray-300">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h2>A Community Effort</h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <blockquote>
                                "The greatest wealth is health." - Virgil
                            </blockquote>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    )}
                </article>

                {/* Tags */}
                {post.tags && (
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, i) => (
                                <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogDetail;
