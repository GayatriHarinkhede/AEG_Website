import React from 'react';
import { Award, Globe, Star } from 'lucide-react';
import VideoCarousel from './VideoCarousel';
import ServicesSection from './ServicesSection';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Carousel */}
      <section className="bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome to Our Platform
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover innovative solutions, cutting-edge research, and world-class conferences that drive the future of technology
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Award className="mr-2 text-yellow-500" size={20} />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center">
                <Globe className="mr-2 text-blue-500" size={20} />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-2 text-purple-500" size={20} />
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
          
          {/* Video Carousel */}
          <VideoCarousel />
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection onNavigate={onNavigate} />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied clients who trust us with their most important projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Quote
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


export default HomePage;