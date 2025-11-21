import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const style = delay ? { transitionDelay: `${delay}ms` } : {};

    return (
        <div 
            ref={ref} 
            className={`reveal ${isVisible ? 'active' : ''} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;