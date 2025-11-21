import React from 'react';

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    image: string;
    tag: string;
    fullDescription?: string;
    features?: string[];
    impactStats?: { value: string; label: string }[];
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image: string;
    category: string;
    content?: React.ReactNode; // Rich text content
    tags?: string[];
    readTime?: string;
}

export interface FaqItem {
    id: number;
    question: string;
    answer: React.ReactNode;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio?: string;
}

export interface Testimonial {
    id: number;
    text: string;
    name: string;
    role: string;
    image: string;
}