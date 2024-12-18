import React, { useState, useEffect } from "react";
import {
    ChevronDownIcon,
    ChartBarIcon,
    CurrencyDollarIcon,
    BriefcaseIcon,
    CogIcon,
    TruckIcon,
} from "@heroicons/react/outline";

const Specializations = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const cards = [
        { id: 1, icon: ChartBarIcon, title: "Marketing" },
        { id: 2, icon: CurrencyDollarIcon, title: "Finance" },
        { id: 3, icon: BriefcaseIcon, title: "HR" },
        { id: 4, icon: CogIcon, title: "Systems" },
        { id: 5, icon: TruckIcon, title: "Supply Chain Management" },
    ];

    const visibleCards = isSmallScreen ? 2 : 4; // Number of visible cards
    const totalCards = cards.length;
    const maxIndex = totalCards - visibleCards; // Calculate max index to avoid out-of-bounds

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener("resize", updateScreenSize);
        updateScreenSize();

        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return (
        <div className="relative pt-6 lg:pt-11 px-6 lg:px-0 w-full max-w-screen-lg mx-auto">
            {/* Description Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-[#85132c]">
                    This Course Includes
                </h2>
                <ul className="list-disc pl-6 text-black leading-8">
                    <li>
                        <b>20 hours of on-demand video content </b>tailored to cover foundational and advanced topics in psychology.
                    </li>
                    <li>
                        <b>9 downloadable resources</b> (one for each section) for offline learning and reference.
                    </li>
                    <li>
                        <b>Interactive articles</b> summarizing key concepts and supplementary information.
                    </li>
                    <li>
                        <b>Access on mobile and TV</b>, ensuring learning on-the-go.
                    </li>
                    <li>
                        <b>Closed captions</b> for better understanding and accessibility.
                    </li>
                    <li>
                        <b>Audio descriptions</b> integrated into the course for enhanced inclusivity.
                    </li>
                    <li>
                        <b>Certificate of completion,</b> adding credibility to your academic and professional portfolio.
                    </li>
                </ul>
            </div>

            {/* Header */}
            <h2 className="text-2xl font-bold my-6 text-[#85132c]">
                Specializations Available
            </h2>

            {/* Slider Container */}
            <div className="relative overflow-hidden">
                {/* Conditional Previous Button */}
                {currentIndex > 0 && (
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-80 z-20 transition-all"
                        aria-label="Previous Slide"
                    >
                        <ChevronDownIcon className="h-6 w-6 rotate-90" />
                    </button>
                )}

                <div
                    className="flex transition-transform duration-500 space-x-6"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                        width: `${(totalCards / visibleCards) * 100}%`,
                    }}
                >
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={card.id}
                               className="min-w-[10rem] sm:min-w-[12rem] w-32 h-32 p-4 bg-white border shadow-lg flex flex-col items-center justify-center "

                            >
                                <Icon className="h-6 w-12 text-[#85132c]" />
                                <div className="mt-2 text-center">
                                    <h3 className="text-sm font-bold text-black">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Conditional Next Button */}
                {currentIndex < maxIndex && (
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-80 z-20 transition-all"
                        aria-label="Next Slide"
                    >
                        <ChevronDownIcon className="h-6 w-6 -rotate-90" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Specializations;
