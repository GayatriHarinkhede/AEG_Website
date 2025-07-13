import React from 'react';

const YearCard = ({ year, details, color }) => {
    return (
        <div className="text-center mb-8 relative">
            <div className={`${color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto`}>
                <span className="text-xl font-bold">{year}</span>
            </div>
            {details.map((detail, index) => (
                <p key={index} className="mt-2 text-gray-700">{detail}</p>
            ))}
        </div>
    );
};

export default YearCard; // Export the YearCard component