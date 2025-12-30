import React from 'react';
import { Heart } from 'lucide-react';

interface DonationButtonProps {
    className?: string;
}

const DonationButton: React.FC<DonationButtonProps> = ({ className }) => {
    return (
        <a
            href="https://paystack.shop/pay/cc8m08ql-f"
            target="_blank"
            rel="noopener noreferrer"
            className={className || "bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center space-x-2"}
        >
            <Heart size={20} className="fill-current" />
            <span>Make Donation</span>
        </a>
    );
};

export default DonationButton;
