import React from 'react';
import { motion } from 'framer-motion';

const AwardPage = () => {
    const awardsData = [
        {
          title: 'Best Research Paper',
          description: 'Awarded for the best research paper in the conference.',
          image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
        },
        {
          title: 'Outstanding Contribution',
          description: 'Recognized for outstanding contribution to the field.',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          title: 'Innovative Project',
          description: 'Awarded for the most innovative project presented.',
          image: 'https://via.placeholder.com/300x200',
        },
        {
            title: 'Best Research Paper',
            description: 'Awarded for the best research paper in the conference.',
            image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
          },
          {
            title: 'Outstanding Contribution',
            description: 'Recognized for outstanding contribution to the field.',
            image: 'https://via.placeholder.com/300x200',
          },
          {
            title: 'Innovative Project',
            description: 'Awarded for the most innovative project presented.',
            image: 'https://via.placeholder.com/300x200',
          },
        // Add more awards as needed
      ];
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-8 animate-bounce">Awards & Recognition</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={award.image} alt={award.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{award.title}</h2>
              <p className="text-gray-600">{award.description}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AwardPage;