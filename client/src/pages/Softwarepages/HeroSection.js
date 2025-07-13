import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center gradient-bg">
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: '1s' }}
        ></div>
      </motion.div>
      <div className="relative max-w-7xl mx-auto px-4 pt-8 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 p-3 bg-gradient-to-r from-black via-teal-950 to-red-950 bg-clip-text text-transparent"
        >
          AEG Consultancy Services
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl mb-12 text-gray-800 max-w-3xl mx-auto"
        >
          Transforming concepts into high-performing apps, websites, and systems tailored to your business goals.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center justify-center gap-2 text-white w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
          
          <motion.button
            className="border-2 border-blue-500 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-blue-600 hover:bg-blue-500 hover:text-white w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/portfolio')}
          >
            View Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;