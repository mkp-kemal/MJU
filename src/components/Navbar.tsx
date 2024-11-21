// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-blue-950 py-2 shadow-md' : 'bg-blue-900 py-7'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white tracking-widest italic font-serif bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-gradient-to-r after:from-blue-700 after:to-blue-300">
                    Dapur Sehat
                </Link>
                <p className="text-md font-thin text-right tracking-widest text-white ml-2">
                    PT Mulia Jaya Umat
                </p>
            </div>
        </nav>
    );
};

export default Navbar;
