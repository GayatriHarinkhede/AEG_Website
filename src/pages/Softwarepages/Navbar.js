import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
// import AEG from '../image/Logo/AEG logo.jpg';
import AEG from '../../Components/image/Logo/AEG logo.jpg';

const Navbar = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuItemClick = (action) => {
    setIsMenuOpen(false);
    if (typeof action === 'function') action();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200/50' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              <img src={AEG} alt="AEG Logo" className="h-12" />
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home','Services', 'Technologies', 'About', 'Testimonials',].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-200 ${
                  scrollY > 50 ? 'text-gray-700 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
              >
                {item}
              </motion.a>
            ))}
            
            <motion.button
              className="bg-gradient-to-r from-gray-600 to-gray-700 px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl text-white flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to AEG</span>
            </motion.button>
          </div>
          
          <motion.button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.9 }}>
            {isMenuOpen ? <X className="w-6 h-6 text-blue-500" /> : <Menu className="w-6 h-6 text-blue-500" />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 py-6 space-y-4 bg-white/95 backdrop-blur-md border-t border-blue-200/50">
          <motion.button
            className="w-full bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-3 rounded-lg font-medium text-white flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleMenuItemClick(() => navigate('/'))}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to AEG</span>
          </motion.button>
          
          {['Home','Services', 'Technologies', 'About', 'Testimonials'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-600 hover:text-blue-500 font-medium py-2"
              whileHover={{ x: 10 }}
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick(() => scrollToSection(item.toLowerCase()));
              }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;