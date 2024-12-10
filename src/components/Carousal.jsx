import React, { useState, useEffect, useCallback } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progressWidth, setProgressWidth] = useState(0);

    const cards = [
        {
            title: "Thrive in a digital first world",
            description: "From marketing strategies and brand development to business consulting and digital"
        },
        {
            title: "Let's turn your vision into reality",
            description: "From marketing strategies and brand development to business consulting and digital"
        },
        {
            title: "Where innovation meets strategy.",
            description: "From marketing strategies and brand development to business consulting and digital"
        },
        {
            title: "Transform your digital presence",
            description: "From marketing strategies and brand development to business consulting and digital"
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 3 ? 0 : prevIndex + 1
        );
        setProgressWidth(0);
    }, [cards.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 3 : prevIndex - 1
        );
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

            interval = setInterval(nextSlide, 5000);
        }

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [isPlaying, nextSlide]);

    return (
        <div className="max-w-7xl mx-auto p-8">
            <div className="relative">
                {/* Progress Bar */}
                <div className="h-1 bg-gray-200 mb-5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-orange-500 transition-all duration-200 ease-linear"
                        style={{ width: `${progressWidth}%` }}
                    />
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="min-w-[33.333%] px-4 py-5"
                            >
                                <div className="bg-white rounded-2xl p-10 shadow-lg h-full">
                                    {/* Arrow Icon */}
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

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                                    <p className="text-gray-600 text-sm">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center mt-6 gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
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
                        className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
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
                        className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
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