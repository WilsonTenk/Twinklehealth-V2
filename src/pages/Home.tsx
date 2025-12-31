import React, { useState } from 'react';
import { Heart, Check, Phone, ArrowRight, Quote, HelpCircle, ChevronDown } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import ScrollReveal from '../components/ScrollReveal';
import { Service, BlogPost, Testimonial, FaqItem } from '../types';
import DonationButton from '../components/DonationButton';
import CountUp from '../components/CountUp';

interface HomeProps {
    services: Service[];
    blogPosts: BlogPost[];
    onNavigate: (page: string, id?: number) => void;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "I admire how they control the crowd to make things move smoothly. They promise and never fail.",
        name: "Nana Yaw",
        role: "Community Member",
        image: "images/PHOTO-2025-04-14-16-34-59 (2).jpg"
    },
    {
        id: 2,
        text: "I've seen many NGOs come and go, but Twinkle Health stays. They listen to what we actually need before acting. Their impact is real.",
        name: "Kwame Osei",
        role: "Headmaster, Local School",
        image: "images/PHOTO-2025-04-14-16-34-59 (3).jpg"
    },
    {
        id: 3,
        text: "Providing reading glasses to us has given us a new vision. We are forever grateful for the medical team's dedication.",
        name: "Grace Antwi",
        role: "Mother",
        image: "images/PHOTO-2025-04-14-16-35-00 (2).jpg"
    }
];

const faqs: FaqItem[] = [
    {
        id: 1,
        question: "How is my donation used?",
        answer: "We ensure 100% transparency. 85% of all donations go directly to our programs (medical supplies, education materials, community support), while 15% goes to transportation. Nothing comes to the administrative and running of the NGO."
    },
    {
        id: 2,
        question: "Can I volunteer if I'm not a medical professional?",
        answer: "Absolutely! We need skills of all kinds - from teaching and drama to logistics, photography, and fundraising. We provide training for all our volunteers before deployment."
    },
    {
        id: 3,
        question: "Where does Twinkle Health Foundation operate?",
        answer: "We currently focus on rural and peri-urban communities in Ghana, specifically in the Eastern, Western and Central regions, with plans to expand to the Ashanti and Northern regions."
    },
    {
        id: 4,
        question: "Are donations tax-deductible?",
        answer: "Yes, we are a registered non-profit organization. All donations above GHS 50 are eligible for tax deductions. We provide annual tax receipts to all our donors."
    }
];

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => {
    return (
        <div className={`mb-4 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white dark:bg-gray-900 shadow-lg border-primary-100 dark:border-primary-800' : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
            <button
                onClick={onToggle}
                className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary-700 dark:text-primary-400' : 'text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400'}`}>
                    {item.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rotate-180' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-500 dark:group-hover:text-primary-400'}`}>
                    <ChevronDown size={20} />
                </div>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-dashed border-gray-100 dark:border-gray-700 mt-2 pt-4">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Home: React.FC<HomeProps> = ({ services, blogPosts, onNavigate }) => {
    const [openFaqId, setOpenFaqId] = useState<number | null>(1);
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-play for testimonials carousel
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const toggleFaq = (id: number) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-50 dark:from-primary-900/50 to-white dark:to-gray-900 py-20 lg:py-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-100/50 -skew-x-12 translate-x-20 z-0"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-50 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-8 animate-fade-in">
                            <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-primary-100 dark:border-primary-800 text-primary-700 dark:text-primary-400 font-medium text-sm">
                                <Heart size={14} className="fill-current text-accent-500" />
                                <span>Healthcare is an Act of A Soft Heart!</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                                Together We <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Create Change</span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                                We believe that every small act of healthcare can create a ripple of change. Join our mission to transform communities.
                            </p>

                            <div className="flex flex-wrap gap-6 items-center">
                                <button className="hidden"></button>
                                <DonationButton />

                                <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div className="flex -space-x-3">
                                        {[
                                            "images/PHOTO-2025-04-14-16-35-00 (3).jpg",
                                            "images/PHOTO-2025-04-14-16-35-01 (2).jpg",
                                            "images/PHOTO-2025-04-14-17-02-55 (2).jpg"
                                        ].map((imgSrc, i) => (
                                            <img key={i} src={imgSrc} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                                        ))}
                                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-[10px] font-bold border-2 border-white overflow-hidden">
                                            <CountUp end={3000} suffix="+" />
                                        </div>
                                    </div>
                                    <div className="text-xs font-bold text-gray-500 dark:text-gray-400 leading-tight">
                                        Community Members <br /> Served
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800 z-10 transform hover:rotate-1 transition-transform duration-500">
                                <img src="images/PHOTO-2025-04-14-16-34-57 (3).jpg" alt="Healthcare worker" className="w-full h-auto" />
                                <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-5 rounded-xl shadow-lg max-w-xs border-l-4 border-accent-500">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full text-green-600 dark:text-green-400">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="font-bold text-gray-900 dark:text-white">Mission Success</span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Recent service helped 300+ community members with malaria and sugar test.</p>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 z-0 opacity-40">
                                <div className="grid grid-cols-5 gap-2">
                                    {[...Array(25)].map((_, i) => (
                                        <div key={i} className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section Summary */}
            <ScrollReveal>
                <section className="py-24 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative order-2 lg:order-1">
                                <img
                                    src="images/PHOTO-2025-04-14-16-34-58 (3).jpg"
                                    alt="About Us"
                                    className="rounded-tr-[100px] rounded-bl-[100px] rounded-tl-3xl rounded-br-3xl shadow-2xl w-full object-cover h-[600px]"
                                />
                                <div className="absolute -bottom-10 -right-10 bg-accent-500 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                                    <p className="text-4xl font-bold font-heading mb-1">
                                        <CountUp end={10} suffix="+" />
                                    </p>
                                    <p className="text-sm opacity-90 uppercase tracking-wide">Years of <br />Experience</p>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <SectionTitle
                                    subtitle="About Us"
                                    title="We are committed to your health goals!"
                                    description="Twinkle Health Foundation is dedicated to equipping lives and building smiles by transforming healthcare accessibility in underserved communities. We believe that quality healthcare is a fundamental right, not a privilege."
                                />

                                <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-2xl border border-primary-100 dark:border-primary-800 mb-8 flex flex-col md:flex-row gap-6 items-center">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-sm text-primary-600 dark:text-primary-400">
                                                <Heart size={20} />
                                            </div>
                                            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Our Core Missions</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {[
                                                "Health Education Through Drama",
                                                "Free Medical Services",
                                                "Community Needs Support",
                                                "Livelihood Initiatives",
                                                "Prison therapy"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300 text-sm">
                                                    <Check size={16} className="text-accent-500 mt-0.5 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6">
                                    <button
                                        onClick={() => onNavigate('About')}
                                        className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <span>Explore More</span>
                                        <ArrowRight size={16} />
                                    </button>
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Call Any Time</span>
                                            <a href="tel:0543483159" className="text-lg font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">054 348 3159</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Services (formerly Services) Section Summary */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="max-w-2xl">
                                <SectionTitle
                                    subtitle="Our Services"
                                    title="Services We Implement!"
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <button onClick={() => onNavigate('Services')} className="text-primary-600 font-bold flex items-center hover:underline">
                                    View All Services <ArrowRight size={16} className="ml-2" />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.slice(0, 3).map((service, i) => (
                                <div key={service.id} className="h-full">
                                    <ScrollReveal delay={i * 100}>
                                        <ServiceCard service={service} onNavigate={onNavigate} />
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Testimonials Section */}
            {/* Testimonials Section */}
            <ScrollReveal>
                <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <SectionTitle
                                subtitle="Testimonials"
                                title="What People Say About Us"
                                description="Real stories from the communities we serve and the volunteers who make it happen."
                                alignment="center"
                                light={true}
                            />
                        </div>

                        {/* Testimonials Carousel */}
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                                >
                                    {/* Mobile/Tablet View - 1 item per slide */}
                                    <div className="md:hidden flex w-full flex-shrink-0">
                                        {testimonials.map((testimonial) => (
                                            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                                <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative hover:bg-white/15 transition-colors flex flex-col h-full min-h-[350px]">
                                                    <Quote className="text-accent-500 mb-6 opacity-80 flex-shrink-0" size={40} />
                                                    <p className="text-lg text-gray-100 mb-8 leading-relaxed italic flex-grow">
                                                        "{testimonial.text}"
                                                    </p>
                                                    <div className="flex items-center mt-auto">
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="w-12 h-12 rounded-full object-cover border-2 border-accent-500 mr-4"
                                                        />
                                                        <div>
                                                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                                                            <p className="text-primary-200 text-sm">{testimonial.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Desktop Grid View - Keeps existing grid layout for larger screens */}
                                <div className="hidden md:grid md:grid-cols-3 gap-8">
                                    {testimonials.map((testimonial, i) => (
                                        <ScrollReveal key={testimonial.id} delay={i * 150}>
                                            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative hover:bg-white/15 transition-colors flex flex-col h-full">
                                                <Quote className="text-accent-500 mb-6 opacity-80 flex-shrink-0" size={40} />
                                                <p className="text-lg text-gray-100 mb-8 leading-relaxed italic flex-grow">
                                                    "{testimonial.text}"
                                                </p>
                                                <div className="flex items-center mt-auto">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-12 h-12 rounded-full object-cover border-2 border-accent-500 mr-4"
                                                    />
                                                    <div>
                                                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                                                        <p className="text-primary-200 text-sm">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Navigation Dots */}
                            <div className="md:hidden flex justify-center mt-8 space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-accent-500 w-8" : "bg-white/30 hover:bg-white/50"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Blog Section Summary */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <SectionTitle
                                subtitle="Blog & Stories"
                                title="Latest News & Stories"
                                description="Stay updated with our community impact and healthcare initiatives through our latest articles."
                                alignment="center"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, i) => (
                                <div key={post.id} className="h-full">
                                    <ScrollReveal delay={i * 100}>
                                        <BlogCard post={post} onNavigate={onNavigate} />
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
                <div className="absolute top-0 left-10 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-100 rounded-full blur-3xl opacity-60"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-gray-900 rounded-full shadow-sm mb-6 text-primary-600 dark:text-primary-400">
                                <HelpCircle size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Have questions? We have answers. If you don't see what you're looking for, feel free to contact us.
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            {faqs.map((faq, i) => (
                                <ScrollReveal key={faq.id} delay={i * 100}>
                                    <AccordionItem
                                        item={faq}
                                        isOpen={openFaqId === faq.id}
                                        onToggle={() => toggleFaq(faq.id)}
                                    />
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Home;