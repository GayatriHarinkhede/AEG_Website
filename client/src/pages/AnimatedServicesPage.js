import React, { useState, useEffect } from 'react';
import { Code, Mic, FlaskConical, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

const AnimatedServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 'software',
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with cutting-edge technologies and modern frameworks.',
      features: ['Web Applications', 'Mobile Apps', 'Cloud Solutions', 'API Development'],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-100',
      delay: 200
    },
    {
      id: 'conference',
      icon: Mic,
      title: 'Conference Management',
      description: 'Professional conference management and event planning services for impactful gatherings and memorable experiences.',
      features: ['Event Planning', 'Speaker Management', 'Venue Coordination', 'Live Streaming'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-100',
      delay: 400
    },
    {
      id: 'research',
      icon: FlaskConical,
      title: 'Research & Analysis',
      description: 'In-depth research and analysis services to drive innovation and informed decision-making for your organization.',
      features: ['Market Research', 'Data Analysis', 'Technical Reports', 'Strategic Insights'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-50 to-teal-100',
      delay: 600
    }
  ];

  const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), service.delay);
      return () => clearTimeout(timer);
    }, [service.delay]);

    return (
      <div
        className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div
          className={`relative bg-white rounded-3xl shadow-xl p-8 cursor-pointer transition-all duration-500 transform ${
            isHovered ? 'scale-105 rotate-1' : 'scale-100'
          } group overflow-hidden`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setActiveService(activeService === service.id ? null : service.id)}
          style={{
            background: isHovered 
              ? `linear-gradient(145deg, #ffffff, #f8fafc)` 
              : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
            boxShadow: isHovered 
              ? '25px 25px 50px #d1d5db, -25px -25px 50px #ffffff' 
              : '15px 15px 30px #d1d5db, -15px -15px 30px #ffffff'
          }}
        >
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce`}></div>
            <div className={`absolute bottom-8 left-6 w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`} style={{animationDelay: '0.2s'}}></div>
            <div className={`absolute top-1/3 left-4 w-1 h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce`} style={{animationDelay: '0.4s'}}></div>
          </div>
          
          <div className="relative z-10">
            {/* Icon with 3D effect */}
            <div className={`flex justify-center mb-6 transform transition-all duration-500 ${
              isHovered ? 'scale-110 rotate-12' : ''
            }`}>
              <div className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl shadow-2xl relative overflow-hidden`}>
                <service.icon size={48} className="text-white relative z-10" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </div>
            </div>
            
            {/* Service title */}
            <h3 className={`text-2xl font-bold text-gray-800 mb-4 text-center transition-all duration-300 ${
              isHovered ? `bg-gradient-to-r ${service.color} bg-clip-text text-transparent` : ''
            }`}>
              {service.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-center leading-relaxed mb-6">
              {service.description}
            </p>
            
            {/* Features list - shows on hover */}
            <div className={`transition-all duration-300 ${
              isHovered ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-0 max-h-0 translate-y-4'
            } overflow-hidden`}>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <Sparkles size={12} className={`mr-2 text-gradient bg-gradient-to-r ${service.color}`} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Call to action */}
            <div className={`flex justify-center transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <button className={`flex items-center px-6 py-2 bg-gradient-to-r ${service.color} text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                Explore More
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>

          {/* 3D border effect */}
          <div className="absolute inset-0 rounded-3xl border border-gray-200/50 group-hover:border-gray-300/50 transition-colors duration-300"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Header Section */}
      <header className="relative z-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Company name */}
          <div className={`transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              AEG Consultancy Services Pvt. Ltd.
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          </div>

          {/* Hero section */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses through innovative technology solutions, professional event management, and cutting-edge research
            </p>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AEG</span>?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Zap size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Innovation</h4>
                <p className="text-gray-600">Cutting-edge solutions that drive your business forward with the latest technologies</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Target size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Precision</h4>
                <p className="text-gray-600">Uncompromising quality and attention to detail in every project we deliver</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Sparkles size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Excellence</h4>
                <p className="text-gray-600">Long-term partnerships built on trust, results, and exceptional service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/95 backdrop-blur-sm text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AEG Consultancy Services Pvt. Ltd.
          </h3>
          <p className="text-gray-300 mb-4">
            Empowering businesses through technology, events, and research
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-sm">
            © 2025 AEG Consultancy Services Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AnimatedServicesPage;