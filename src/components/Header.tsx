import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Heart, Sun, Moon } from 'lucide-react';

interface HeaderProps {
    currentPage: string;
    onNavigate: (page: string) => void;
    onSearch: (query: string) => void;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onSearch, isDarkMode, toggleTheme }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isSearchOpen) {
            // Small timeout to ensure render before focus
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 100);
        }
    }, [isSearchOpen]);

    const navItems = ['Home', 'About', 'Projects', 'Blog', 'Get Involved'];

    const handleNavClick = (item: string) => {
        onNavigate(item);
        setIsSidebarOpen(false);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearch(searchQuery);
            setIsSearchOpen(false);
            // Keep query for context or clear it? Clearing is standard.
            setSearchQuery('');
        }
    };

    return (
        <>
            <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-2' : 'bg-white dark:bg-gray-900 py-4'}`}>
                <div className="container mx-auto px-4 relative">

                    {/* Search Overlay - Absolute positioned to sit on top of everything in header */}
                    <div className={`absolute inset-0 bg-white dark:bg-gray-900 z-20 flex items-center px-4 transition-all duration-300 transform ${isSearchOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}>
                        <form onSubmit={handleSearchSubmit} className="w-full flex items-center max-w-4xl mx-auto">
                            <Search className="text-primary-500 mr-4 flex-shrink-0" size={24} />
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Type to search..."
                                className="flex-grow py-2 text-xl text-gray-800 dark:text-white placeholder-gray-300 focus:outline-none bg-transparent border-b-2 border-transparent focus:border-primary-100 transition-colors"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="flex items-center space-x-2 ml-4">
                                <button
                                    type="submit"
                                    className="bg-primary-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-primary-700 transition-colors"
                                >
                                    Search
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsSearchOpen(false)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className={`flex justify-between items-center transition-opacity duration-300 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}>
                        {/* Logo */}
                        <div
                            className="flex items-center group cursor-pointer"
                            onClick={() => onNavigate('Home')}
                        >
                            <img
                                src="logo.png"
                                alt="Twinkle Health Foundation"
                                className="h-12 w-auto object-contain transform group-hover:scale-105 transition-transform"
                            />
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => onNavigate(item)}
                                    className={`text-sm font-semibold uppercase tracking-wide transition-all hover:-translate-y-0.5 ${currentPage === item
                                        ? 'text-primary-600 dark:text-primary-400 relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary-600 dark:after:bg-primary-400'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={toggleTheme}
                                className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors rounded-full"
                                aria-label="Toggle Dark Mode"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors rounded-full"
                                aria-label="Open Search"
                            >
                                <Search size={20} />
                            </button>
                            <button
                                onClick={() => onNavigate('Get Involved')}
                                className="hidden sm:flex bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-primary-500/30 items-center space-x-2 hover:-translate-y-0.5"
                            >
                                <Heart size={16} className="fill-current" />
                                <span>Donate</span>
                            </button>
                            <button
                                className="lg:hidden p-2 text-gray-800"
                                onClick={() => setIsSidebarOpen(true)}
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-300 ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsSidebarOpen(false)}>
                <div className={`fixed top-0 right-0 h-full w-[300px] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
                    <div className="p-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
                        <span className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100">Menu</span>
                        <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors bg-gray-50 dark:bg-gray-800 rounded-full">
                            <X size={20} />
                        </button>
                    </div>
                    <nav className="flex flex-col p-6 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={`text-left px-4 py-3 rounded-xl text-lg font-medium transition-all ${currentPage === item ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 dark:bg-gray-800">
                        <button
                            onClick={() => handleNavClick('Get Involved')}
                            className="w-full bg-primary-600 text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center space-x-2"
                        >
                            <Heart size={18} className="fill-current" />
                            <span>Donate Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;