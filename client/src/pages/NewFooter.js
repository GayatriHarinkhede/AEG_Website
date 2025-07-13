import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import AEG from '../Components/image/Logo/AEG logo.jpg';

// CSS for particle animations and glowing effects
const styles = `
  @keyframes floatParticle {
    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
    50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
  }
  .particle {
    animation: floatParticle 6s ease-in-out infinite;
  }
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.8); }
  }
  .glow-pulse {
    animation: glowPulse 2s ease-in-out infinite;
  }
  .footer-link {
    position: relative;
    overflow: hidden;
  }
  .footer-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width 0.3s ease;
  }
  .footer-link:hover::after {
    width: 100%;
  }
`;

const NewFooter = () => {
  const navigate = useNavigate();
  
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        type: "spring", 
        stiffness: 120 
      } 
    },
  };

  // Social media links
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ];

  // Navigation links with routes
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/service' },
    { name: 'Technologies', path: '/services/technologies' },
    { name: 'About', path: '/services/AboutUs' },
    { name: 'Contact', path: '/NewContactForm' },
  ];

  // Service links with routes
  const serviceLinks = [
    { name: 'Software Development', path: '/software' },
    { name: 'Conference', path: '/newconference' },
    { name: 'Research', path: '/OLDHome' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 relative overflow-hidden border-t border-gray-800">
      <style>{styles}</style>
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Branding Section */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => navigate('/')}
            >
              <img 
                src={AEG} 
                alt="AEG Consultancy" 
                className="w-12 h-12 rounded-full object-contain glow-pulse"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AEG Consultancy
              </span>
            </motion.div>
            <p className="text-sm text-gray-400 max-w-xs">
              Pioneering digital innovation with cutting-edge solutions for a connected world.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <motion.div
                  key={item.name}
                  className="footer-link"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="flex flex-col space-y-2">
              {serviceLinks.map((service) => (
                <motion.div
                  key={service.name}
                  className="footer-link"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="flex flex-col space-y-3">
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer"
                whileHover={{ color: '#60A5FA' }}
                onClick={() => window.location = 'mailto:aegconsultancyservices@gmail.com'}
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>aegconsultancyservices@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer"
                whileHover={{ color: '#60A5FA' }}
                onClick={() => window.location = 'tel:+916268558700'}
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>6268558700</span>
              </motion.div>
              <motion.div
                className="flex items-start gap-2 text-sm text-gray-400"
                whileHover={{ color: '#60A5FA' }}
              >
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <div>
                  <p>329 Kalpana Nagar, BHEL</p>
                  <p>Bhopal, Madhya Pradesh</p>
                  <p>Pin No.:462022</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright Notice */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} AEG Consultancy Services Pvt Ltd. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default NewFooter;