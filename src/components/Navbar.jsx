import React, { useState, useEffect } from 'react';
import ContactModal from './ContactModal';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white/80 backdrop-blur-lg shadow-lg'
                        : 'bg-transparent mb-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo Placeholder */}
                        <div className="h-10 w-20 rounded-lg flex items-center justify-center font-bold">
                            <img src="/logo/clogo.svg" alt="Logo" className='rounded-full flex items-center justify-center' />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'Services', 'About', 'FAQ'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-gray-800 hover:text-orange-500 font-medium transition-colors relative group"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                                </button>
                            ))}
                            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                                onClick={() => setIsContactOpen(true)}>
                                Contact us
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden w-10 h-10 flex items-center justify-center"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-lg transition-all duration-300 ${isMenuOpen ? 'max-h-96 shadow-lg' : 'max-h-0'
                            } overflow-hidden`}
                    >
                        <div className="px-4 py-2 space-y-4">
                            {['Home', 'Services', 'About', 'FAQ', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:text-orange-500 hover:bg-gray-100/50 rounded-lg transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                               <button className= "w-full bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                                onClick={() => setIsContactOpen(true)}>
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

        </>



    );
};

export default Navbar;