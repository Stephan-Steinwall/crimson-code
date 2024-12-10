import React, { useState, useEffect, useCallback } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progressWidth, setProgressWidth] = useState(0);


    const cards = [
        {
            title: "Custom Web Development",
            description: "Building scalable and modern web applications using cutting-edge technologies and frameworks"
        },
        {
            title: "Mobile App Solutions",
            description: "Creating native and cross-platform mobile applications that deliver exceptional user experiences"
        },
        {
            title: "UI/UX Design Services",
            description: "Crafting intuitive and visually appealing interfaces that engage and delight your users"
        },
        {
            title: "E-commerce Development",
            description: "Building robust online stores with secure payment gateways and seamless shopping experiences"
        },
        {
            title: "Digital Marketing Strategy",
            description: "Developing comprehensive digital marketing plans to boost your online presence and reach"
        },
        {
            title: "Cloud Solutions",
            description: "Implementing scalable cloud infrastructure and services for optimal business performance"
        },
        {
            title: "Website Maintenance",
            description: "Providing ongoing support, updates, and optimization to keep your website running smoothly"
        },
        {
            title: "CMS Development",
            description: "Creating custom content management systems that make website updates effortless"
        },
        {
            title: "API Integration",
            description: "Seamlessly connecting your systems with third-party services and applications"
        },
        {
            title: "Progressive Web Apps",
            description: "Developing fast, reliable, and engaging web applications that work like native apps"
        },
        {
            title: "SEO Optimization",
            description: "Enhancing your website's visibility and ranking in search engine results"
        },
        {
            title: "Web Security Solutions",
            description: "Implementing robust security measures to protect your web applications and data"
        }
    ];


    const duplicatedCards = [...cards, ...cards];

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
          
            if (nextIndex >= cards.length) {
                return 0;
            }
            return nextIndex;
        });
        setProgressWidth(0);
    }, [cards.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex - 1;
        
            if (nextIndex < 0) {
                return cards.length - 1;
            }
            return nextIndex;
        });
        setProgressWidth(0);
    };

    useEffect(() => {
        let interval;
        let progressInterval;

        if (isPlaying) {
            progressInterval = setInterval(() => {
                setProgressWidth(prev => {
                    if (prev >= 100) return 0;
                    return prev + 1;
                });
            }, 30);

            interval = setInterval(nextSlide, 3000);
        }

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [isPlaying, nextSlide]);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <div className="relative">
            
                <div className="h-1 bg-gray-200 mb-5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-orange-500 transition-all duration-200 ease-linear"
                        style={{ width: `${progressWidth}%` }}
                    />
                </div>

     
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ 
                            transform: `translateX(-${currentIndex * (100 / 3)}%)` 
                        }}
                    >
                        {duplicatedCards.map((card, index) => (
                            <div
                                key={index}
                                className="w-full min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2 md:px-4 py-3 md:py-5"
                            >
                                <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg h-full">
                                    {/* Card Content */}
                                    <div className="flex justify-end mb-4">
                                        <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-orange-500 transform rotate-45"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold mb-4">{card.title}</h3>
                                    <p className="text-gray-600 text-xs md:text-sm">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center mt-6 gap-6">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <svg
                            className="w-6 h-6 text-gray-800 transform rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-12 h-12 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        {isPlaying ? (
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                        )}
                    </button>

                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <svg
                            className="w-6 h-6 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;