
import React, { useState } from 'react';
import { 
  Theater, Stethoscope, HandHeart, Sprout, 
  Shirt, Users
} from 'lucide-react';
import { Service, BlogPost } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import GetInvolved from './pages/GetInvolved';
import SearchResults from './pages/SearchResults';

// --- Data Definitions (Shared) ---

const services: Service[] = [
    {
        id: 1,
        title: "Health Education Through Drama",
        description: "Engaging communities through creative drama programs to promote health awareness and education.",
        fullDescription: "Our innovative Health Education Through Drama program uses theatrical performances and interactive drama workshops to make health education engaging and memorable. We create culturally relevant scripts that address local health challenges such as maternal health, child nutrition, disease prevention, and hygiene practices. The program combines entertainment with education, making complex health information accessible to communities with varying literacy levels.",
        icon: Theater,
        image: "/images/PHOTO-2025-04-14-16-34-54.jpg",
        tag: "Education",
        features: [
            "Interactive Street Plays",
            "Local Language Scripts",
            "Post-Performance Q&A Sessions",
            "Community Actor Training"
        ],
        impactStats: [
            { value: "50+", label: "Communities Reached" },
            { value: "15k+", label: "Audience Members" },
            { value: "40%", label: "Increase in Health Literacy" }
        ]
    },
    {
        id: 2,
        title: "Free Medical Services",
        description: "Providing accessible primary healthcare services to underserved communities with limited medical access.",
        fullDescription: "We organize regular medical outreach camps in remote and underserved areas where healthcare infrastructure is lacking. Our team of volunteer doctors, nurses, and pharmacists provide general consultations, screenings for chronic conditions like hypertension and diabetes, maternal health checks, and pediatric care. We also provide free essential medications and refer complex cases to partner hospitals.",
        icon: Stethoscope,
        image: "/images/PHOTO-2025-04-14-16-34-55.jpg",
        tag: "Healthcare",
        features: [
            "General Consultations",
            "Free Medication Dispensing",
            "Chronic Disease Screening",
            "Maternal & Child Health Checks"
        ],
        impactStats: [
            { value: "10k+", label: "Patients Treated" },
            { value: "500+", label: "Surgeries Facilitated" },
            { value: "100%", label: "Free Care Provided" }
        ]
    },
    {
        id: 3,
        title: "Community Needs Support",
        description: "Addressing specific local community needs through targeted support programs and initiatives.",
        fullDescription: "We believe in listening to the community. Our Community Needs Support initiative is a flexible fund that allows us to respond to specific, urgent requests from community leaders. This has included repairing boreholes for clean water, renovating dilapidated classrooms, and providing emergency relief during floods. By addressing these foundational needs, we create an environment where health can thrive.",
        icon: HandHeart,
        image: "/images/PHOTO-2025-04-14-16-34-56.jpg",
        tag: "Support",
        features: [
            "Clean Water Projects",
            "School Renovations",
            "Emergency Relief",
            "Sanitation Infrastructure"
        ],
        impactStats: [
            { value: "20", label: "Boreholes Repaired" },
            { value: "5", label: "Schools Renovated" },
            { value: "3000+", label: "Beneficiaries" }
        ]
    },
    {
        id: 4,
        title: "Livelihood Empowerment",
        description: "Economic development programs to help community members build sustainable livelihoods.",
        fullDescription: "Poverty is a major determinant of health. Our Livelihood Empowerment program focuses on equipping women and youth with vocational skills such as soap making, bead work, and sustainable farming techniques. We also provide micro-grants and financial literacy training to help them start small businesses, ensuring they can afford nutritious food and healthcare for their families.",
        icon: Sprout,
        image: "/images/PHOTO-2025-04-14-16-34-57.jpg",
        tag: "Empowerment",
        features: [
            "Vocational Skills Training",
            "Micro-Business Grants",
            "Financial Literacy Workshops",
            "Market Access Support"
        ],
        impactStats: [
            { value: "200+", label: "Women Trained" },
            { value: "50", label: "Businesses Started" },
            { value: "85%", label: "Income Increase" }
        ]
    },
    {
        id: 5,
        title: "Clean Clothing Drive",
        description: "Distributing essential clothing items to those in need within our target communities.",
        fullDescription: "Dignity is a key part of mental well-being. Our Clean Clothing Drive collects new and gently used clothing, shoes, and bedding to distribute to vulnerable families, particularly in rural areas and orphanages. We ensure that every item is clean and in good condition, helping to protect against the elements and boost self-esteem.",
        icon: Shirt,
        image: "/images/PHOTO-2025-04-14-16-34-58.jpg",
        tag: "Support",
        features: [
            "Door-to-Door Distribution",
            "School Uniform Donations",
            "Winter/Rainy Season Gear",
            "Hygiene Kit Bundles"
        ],
        impactStats: [
            { value: "5000+", label: "Items Distributed" },
            { value: "800", label: "Families Supported" },
            { value: "12", label: "Orphanages Reached" }
        ]
    },
    {
        id: 6,
        title: "Focus Group Discussions",
        description: "Community engagement sessions to understand needs and gather feedback for program improvement.",
        fullDescription: "We don't guess what communities need; we ask them. Our Focus Group Discussions bring together diverse groups—men, women, youth, elders—to discuss their health challenges and propose solutions. These insights directly shape our program design, ensuring our interventions are culturally appropriate and truly desired by the people we serve.",
        icon: Users,
        image: "/images/PHOTO-2025-04-14-16-34-59.jpg",
        tag: "Engagement",
        features: [
            "Participatory Research",
            "Feedback Loops",
            "Program Co-Design",
            "Cultural Sensitivity Training"
        ],
        impactStats: [
            { value: "100+", label: "Sessions Held" },
            { value: "1500+", label: "Participants" },
            { value: "100%", label: "Community Driven" }
        ]
    }
];

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Drama Programs Transform Health Awareness",
        excerpt: "Discover how our creative drama programs are revolutionizing health education and reaching thousands of community members.",
        author: "Dr. Sarah Mensah",
        date: "Sept 15, 2025",
        image: "/images/PHOTO-2025-04-14-16-35-00.jpg",
        category: "Health Education",
        readTime: "5 min",
        tags: ["Education", "Drama", "Community"],
        content: (
            <>
                <p>In the dusty courtyards of rural Ghana, a crowd gathers. They aren't there for a political rally or a food distribution, but for a play. Laughter erupts as a character dramatically refuses to wash his hands before eating, only to be scolded by a witty grandmother figure.</p>
                <p>This is the essence of our <strong>Health Education Through Drama</strong> program. By weaving life-saving health information into entertaining narratives, we bypass the skepticism and boredom often associated with traditional lectures.</p>
                <h3>Why Drama Works</h3>
                <p>Storytelling is an ancient African tradition. It is how history, values, and lessons have been passed down for generations. By utilizing this medium, Twinkle Health Foundation taps into a communication channel that is already trusted and understood.</p>
                <p>Recent surveys in the communities we visited show a <strong>40% increase</strong> in knowledge regarding hygiene practices and malaria prevention compared to communities receiving standard pamphlet distribution.</p>
                <h3>Looking Ahead</h3>
                <p>We plan to expand this program to 10 more districts by the end of the year, training local youth to become actors and health ambassadors in their own villages.</p>
            </>
        )
    },
    {
        id: 2,
        title: "Free Medical Camp Serves Over 500 Patients",
        excerpt: "Our recent medical outreach program provided essential healthcare services to underserved communities.",
        author: "John Asante",
        date: "Sept 10, 2025",
        image: "/images/PHOTO-2025-04-14-16-35-01.jpg",
        category: "Success Story",
        readTime: "4 min",
        tags: ["Medical", "Outreach", "Volunteering"],
        content: (
            <>
                <p>The sun had barely risen when the line started forming. Mothers with babies on their backs, elderly men leaning on canes, and children running around—all waiting for the Twinkle Health Medical Team.</p>
                <p>Last weekend, our team of 15 volunteer doctors and 20 nurses set up a temporary clinic in the heart of the Volta Region. For many residents, this was the first time seeing a doctor in over two years.</p>
                <h3>Services Provided</h3>
                <ul>
                    <li><strong>General Consultation:</strong> 320 patients</li>
                    <li><strong>Eye Screenings:</strong> 150 patients</li>
                    <li><strong>Dental Checks:</strong> 80 patients</li>
                    <li><strong>Pharmacy:</strong> over 600 prescriptions filled for free</li>
                </ul>
                <p>"I didn't know my blood pressure was high until today," said Madam Abena, a local market woman. "Now I have medicine and advice on how to eat better. You have saved me."</p>
                <p>It is stories like Abena's that fuel our passion. We are grateful to our donors and partners who made this logistics-heavy operation possible.</p>
            </>
        )
    },
    {
        id: 3,
        title: "Livelihood Empowerment Program Launches",
        excerpt: "Expanding our reach to empower more families with sustainable income opportunities and economic development skills.",
        author: "Mary Osei",
        date: "Sept 05, 2025",
        image: "/images/PHOTO-2025-04-14-17-02-55.jpg",
        category: "Community Update",
        readTime: "6 min",
        tags: ["Empowerment", "Economy", "Women"],
        content: (
            <>
                <p>Health is not just biology; it is economics. A family that cannot afford nutritious food cannot stay healthy. That is why we are thrilled to announce the expansion of our Livelihood Empowerment Program.</p>
                <p>This new phase focuses specifically on women in agricultural communities. By providing them with initial capital and training in modern farming techniques, we aim to boost crop yields and household income.</p>
                <h3>The Pilot Success</h3>
                <p>Our pilot program in the Ashanti region saw 50 women start small poultry farms. Within six months, 85% of them were generating a profit, and school attendance for their children increased significantly as school fees were no longer a burden.</p>
                <p>We are now accepting applications for the next cohort. If you are interested in mentoring or sponsoring a woman entrepreneur, please visit our Get Involved page.</p>
            </>
        )
    }
];

// --- Main Component ---

const App: React.FC = () => {
    // State now handles 'page' name, an optional 'id' for detail views, and 'query' for search
    const [viewState, setViewState] = useState<{ page: string; id?: number; query?: string }>({ page: 'Home' });

    const navigate = (page: string, id?: number, query?: string) => {
        setViewState({ page, id, query });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Helper to determine which Nav Item should be highlighted
    const getActiveNav = () => {
        if (viewState.page === 'ServiceDetail') return 'Services';
        if (viewState.page === 'BlogDetail') return 'Blog';
        if (viewState.page === 'SearchResults') return '';
        return viewState.page;
    };

    // Render logic
    const renderContent = () => {
        switch (viewState.page) {
            case 'Home':
                return <Home services={services} blogPosts={blogPosts} onNavigate={navigate} />;
            case 'About':
                return <About />;
            case 'Services':
                return <Services services={services} onNavigate={navigate} />;
            case 'ServiceDetail':
                const service = services.find(s => s.id === viewState.id);
                return service ? (
                    <ServiceDetail 
                        service={service} 
                        onBack={() => navigate('Services')} 
                        onDonate={() => navigate('Get Involved')}
                    />
                ) : <Services services={services} onNavigate={navigate} />;
            case 'Blog':
                return <Blog blogPosts={blogPosts} onNavigate={navigate} />;
            case 'BlogDetail':
                const post = blogPosts.find(p => p.id === viewState.id);
                return post ? (
                    <BlogDetail 
                        post={post} 
                        onBack={() => navigate('Blog')} 
                    />
                ) : <Blog blogPosts={blogPosts} onNavigate={navigate} />;
            case 'Get Involved':
                return <GetInvolved />;
            case 'SearchResults':
                return <SearchResults 
                    query={viewState.query || ''} 
                    services={services} 
                    blogPosts={blogPosts} 
                    onNavigate={navigate} 
                />;
            default:
                return <Home services={services} blogPosts={blogPosts} onNavigate={navigate} />;
        }
    };

    return (
        <div className="font-sans text-gray-800 overflow-x-hidden flex flex-col min-h-screen">
            <Header 
                currentPage={getActiveNav()} 
                onNavigate={(page) => navigate(page)} 
                onSearch={(query) => navigate('SearchResults', undefined, query)}
            />
            
            <main className="flex-grow">
                {renderContent()}
            </main>

            <Footer onNavigate={(page) => navigate(page)} />
        </div>
    );
};

export default App;
