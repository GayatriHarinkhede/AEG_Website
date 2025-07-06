
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Search, Users, ArrowRight, Menu, Play, Star, Award, Globe } from 'lucide-react';

// Video Carousel Component
const VideoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const videos = [
    {
      id: 1,
      title: "Innovation in Technology",
      description: "Discover cutting-edge solutions that transform businesses",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Research Excellence",
      description: "Advancing knowledge through groundbreaking research",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      duration: "4:20"
    },
    {
      id: 3,
      title: "Global Conferences",
      description: "Connecting minds and sharing insights worldwide",
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop",
      duration: "2:15"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [videos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl">
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {videos.map((video, index) => (
          <div key={video.id} className="w-full flex-shrink-0 relative group">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all transform hover:scale-110">
                <Play className="text-white ml-1" size={32} fill="white" />
              </button>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{video.title}</h3>
                  <p className="text-lg opacity-90 mb-2">{video.description}</p>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Services Section Component
const ServicesSection = ({ onNavigate }) => {
  const services = [
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with cutting-edge technologies',
      icon: <Code size={48} />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Web Applications', 'Mobile Apps', 'Cloud Solutions', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      stats: { projects: '200+', clients: '50+', rating: '4.9' }
    },
    {
      id: 'research',
      title: 'Research',
      description: 'Advanced research and development in emerging technologies that shape the future',
      icon: <Search size={48} />,
      color: 'from-green-500 to-teal-500',
      features: ['AI & ML Research', 'Blockchain Studies', 'Quantum Computing', 'Publications'],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop',
      stats: { papers: '150+', patents: '25+', rating: '4.8' }
    },
    {
      id: 'conference',
      title: 'Conference',
      description: 'World-class conferences and networking events connecting global industry leaders',
      icon: <Users size={48} />,
      color: 'from-purple-500 to-pink-500',
      features: ['Tech Conferences', 'Workshops', 'Networking Events', 'Virtual Events'],
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
      stats: { events: '100+', attendees: '10K+', rating: '4.9' }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive solutions across three key areas of expertise, delivering excellence through innovation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
              onClick={() => onNavigate('service-detail', service.id)}
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                  <div className="absolute top-6 left-6 text-white">
                    {service.icon}
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="text-yellow-400 mr-1" size={16} fill="currentColor" />
                      <span className="text-white font-semibold">{service.stats.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-100">
                    {Object.entries(service.stats).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-lg text-gray-800">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="text-blue-600 transform group-hover:translate-x-2 group-hover:text-blue-800 transition-all" size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Combined Home Page Component
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

// Individual Service Pages (keeping the existing detailed pages)
const ServiceDetailPage = ({ serviceId, onNavigate }) => {
  const services = {
    'software-development': {
      title: 'Software Development',
      hero: 'Building Tomorrow\'s Software Today',
      description: 'Our software development team specializes in creating custom applications that drive business growth and innovation.',
      features: [
        'Full-stack web development',
        'Mobile app development (iOS & Android)',
        'Cloud-native solutions',
        'API development and integration',
        'DevOps and deployment automation',
        'Quality assurance and testing',
        'Maintenance and support'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      color: 'from-blue-500 to-cyan-500'
    },
    'research': {
      title: 'Research',
      hero: 'Pioneering Research for Future Innovation',
      description: 'Our research division focuses on breakthrough technologies and methodologies that shape the future of various industries.',
      features: [
        'AI and Machine Learning research',
        'Blockchain technology studies',
        'Quantum computing exploration',
        'Sustainable technology development',
        'Published papers and patents',
        'Industry collaboration',
        'Research grants and funding'
      ],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop',
      color: 'from-green-500 to-teal-500'
    },
    'conference': {
      title: 'Conference',
      hero: 'Connecting Minds, Sharing Knowledge',
      description: 'We organize world-class conferences that bring together industry leaders, researchers, and innovators from around the globe.',
      features: [
        'International tech conferences',
        'Research symposiums',
        'Networking events',
        'Workshop and training sessions',
        'Virtual and hybrid events',
        'Keynote speakers',
        'Exhibition opportunities'
      ],
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop',
      color: 'from-purple-500 to-pink-500'
    }
  };

  const service = services[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <button 
            onClick={() => onNavigate('home')}
            className="text-blue-600 hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${service.color} text-white py-24`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">{service.hero}</h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What We Offer</h2>
            <div className="grid gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center text-lg text-gray-700 bg-white p-4 rounded-xl shadow-sm">
                  <div className={`w-4 h-4 bg-gradient-to-r ${service.color} rounded-full mr-4 flex-shrink-0`}></div>
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-12 flex gap-4">
              <button 
                onClick={() => onNavigate('home')}
                className="inline-flex items-center px-8 py-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors shadow-lg"
              >
                <ChevronLeft className="mr-2" size={18} />
                Back to Home
              </button>
              <button className={`px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all`}>
                Get Started
              </button>
            </div>
          </div>
          <div>
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => onNavigate('home')}
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            TechPlatform
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`transition-colors font-semibold text-lg ${
                currentPage === 'home' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <button 
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-3 transition-colors font-medium ${
                currentPage === 'home' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default {ServiceDetailPage ,HomePage,Navigation};