import React from 'react';
import YearCard from './YearCard'; // Import YearCard from a separate file

const Timeline = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">IFERP Conference Timeline</h1>
            <div className="relative">
                {/* Vertical line for the timeline */}
                <div className="absolute left-1/2 w-1 bg-gray-300 h-full top-0"></div>
                <div className="flex flex-col items-center">
                    <YearCard year="2018" details={["18+ International Conferences in India", "15+ International Conferences Globally"]} color="bg-purple-600" />
                    <YearCard year="2019" details={["11+ International Conferences in India", "16+ International Conferences in Asia"]} color="bg-purple-600" />
                    <YearCard year="2020" details={["43+ International Conferences Globally"]} color="bg-pink-600" />
                    <YearCard year="2021" details={["18+ International Conferences in India", "15+ International Conferences Globally"]} color="bg-orange-600" />
                    <YearCard year="2022" details={["51+ International Conferences Globally"]} color="bg-blue-600" />
                </div>
            </div>
        </div>
    );
};

export default Timeline; // Export the Timeline component