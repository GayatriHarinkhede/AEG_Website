import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Users, BookOpen, Calendar, FileText, ExternalLink, 
  Cpu, Zap, Globe, ArrowLeft, Home, Star, Eye, Clock, 
  ChevronRight, Award, Shield, Layers, TrendingUp, MessageCircle, 
  Database, Smartphone, Network, Brain, BarChart, Presentation, 
  ChevronDown, MapPin, Phone, Mail, Rocket, Lightbulb, BarChart2 ,Cloud
} from 'lucide-react';

const styles = `
  @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
    70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
  }
  
  .pulse-animation {
    animation: pulse 2s infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  .float-animation {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
    50% { text-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6); }
  }
  
  .glow-text {
    animation: glow 3s ease-in-out infinite;
  }
  
  .flip-card {
    perspective: 1000px;
  }
  
  .flip-card-inner {
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  .flip-card:hover .flip-card-inner,
  .flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  
  .flip-card-back {
    transform: rotateY(180deg);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .gradient-bg-animate {
    background-size: 200% 200%;
    animation: gradientBG 15s ease infinite;
  }
  
  .service-card {
    transition: all 0.4s ease;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  }
`;

const AEGServicesPage = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardsRef = useRef([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  const toggleFlipCard = (cardId) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const aegServices = [
    {
      letter: 'A',
      title: 'Software Solutions',
      subtitle: 'Innovative Technology Development',
      services: ['AI/ML Applications', 'Cloud Infrastructure', 'Mobile Apps', 'Web Platforms'],
      description: 'Custom software solutions that drive digital transformation and business growth.',
      stats: { projects: '200+', clients: '50+', satisfaction: '98%' },
      features: [
        { text: 'AI-Powered Applications' },
        { text: 'Cross-Platform Development' },
        { text: 'Scalable Architecture' }
      ],
      color: 'from-blue-600 to-purple-600',
      serviceType: 'Software'
    },
    {
      letter: 'E',
      title: 'Conferences',
      subtitle: 'Global Knowledge Exchange',
      services: ['TechSummit Pro', 'Industry Workshops', 'Leadership Forums', 'Developer Conclave'],
      description: 'Premier events connecting industry leaders, innovators, and practitioners worldwide.',
      stats: { events: '100+', attendees: '10K+', speakers: '500+' },
      features: [
        { text: 'Keynote Thought Leaders' },
        { text: 'Global Networking' },
        { text: 'Innovation Awards' }
      ],
      color: 'from-purple-600 to-pink-600',
      serviceType: 'Conferences'
    },
    {
      letter: 'G',
      title: 'Research',
      subtitle: 'Strategic Insights & Analytics',
      services: ['Market Intelligence Suite', 'Growth Analytics Platform', 'Industry Trend Reports', 'Competitive Analysis'],
      description: 'Cutting-edge research providing actionable insights for strategic decision-making.',
      stats: { research: '300+', insights: '1000+', growth: '150%' },
      features: [
        { text: 'Predictive Analytics' },
        { text: 'Market Forecasting' },
        { text: 'Risk Intelligence' }
      ],
      color: 'from-emerald-600 to-teal-600',
      serviceType: 'Research'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <style>{styles}</style>
      
      {/* Navigation Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-lg py-3 border-b border-white/10' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">AEG</span>
            </div>
            <div className="text-xl font-bold">AEG Consultancy</div>
          </div>
          
          {/* <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a>
            <a href="#tech" className="text-blue-200 hover:text-white transition-colors">Technologies</a>
            <a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a>
          </nav> */}
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            {/* Company Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3 mb-8 shadow-2xl fade-in">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-white/90 font-medium tracking-wide">Leading Innovation Since 2020</span>
            </div> */}

            {/* Main Title */}
            <h1 className="relative mb-8 fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight">
                <span className="inline-block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent drop-shadow-2xl glow-text">
                  AEG
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-purple-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent text-3xl md:text-5xl xl:text-6xl font-bold tracking-wider mt-4">
                  Consultancy Services
                </span>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-blue-400/30 rounded-full animate-spin"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-purple-400/30 rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
            </h1>

            {/* Subtitle */}
            <div className="max-w-4xl mx-auto mb-12 fade-in" style={{animationDelay: '0.4s'}}>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light mb-6">
                Transforming businesses through cutting-edge solutions
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-bold">Software Development</span>
                <span className="text-white/60">•</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">Global Conferences</span>
                <span className="text-white/60">•</span>
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold">Strategic Research</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in" style={{animationDelay: '0.6s'}}>
              {/* <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  Explore Our Services
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button> */} {/* <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </span>
              </button>
              
              */}
            </div>
          </div>

          {/* Stats Preview */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto fade-in" style={{animationDelay: '0.8s'}}>
            {[
              { number: "500+", label: "Projects", icon: <Rocket className="w-8 h-8 mx-auto mb-3 text-blue-400" /> },
              { number: "98%", label: "Success Rate", icon: <Lightbulb className="w-8 h-8 mx-auto mb-3 text-purple-400" /> },
              { number: "50+", label: "Partners", icon: <Network className="w-8 h-8 mx-auto mb-3 text-green-400" /> },
              { number: "24/7", label: "Support", icon: <Shield className="w-8 h-8 mx-auto mb-3 text-yellow-400" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                  {stat.icon}
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-blue-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-5 -left-0 transform -translate-x-1/2 flex flex-col items-center fade-in" style={{animationDelay: '1s'}}>
          <span className="text-blue-300 mb-2">Scroll to explore</span>
          <ChevronDown className="w-8 h-8 text-blue-400 animate-bounce" />
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent fade-in">
            Our Core Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aegServices.map((service, index) => (
              <div
                key={`flip-${service.letter}`}
                ref={el => cardsRef.current[index] = el}
                className={`flip-card h-96 ${flippedCards.has(service.letter) ? 'flipped' : ''} fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => toggleFlipCard(service.letter)}
              >
                <div className="flip-card-inner relative w-full h-full cursor-pointer">
                  {/* Front Face */}
                  <div className={`flip-card-front absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${service.color} p-6 shadow-2xl border border-white/20 backdrop-blur-lg`}>
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center justify-center mb-6">
                          <div className="text-6xl font-black text-white/20">
                            {service.letter}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 text-center">
                          {service.title}
                        </h3>
                        
                        <p className="text-white/90 mb-6 leading-relaxed text-center">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="flex items-center space-x-2 text-white/80 text-sm">
                          <Eye className="w-4 h-4" />
                          <span>Click to explore</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className={`flip-card-back absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-2xl border border-white/20 backdrop-blur-lg`}>
                    <div className="flex flex-col h-full">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-blue-300">{service.subtitle}</p>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 justify-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-white">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-auto">
                        {Object.entries(service.stats).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-white">
                              {value}
                            </div>
                            <div className="text-xs text-gray-400 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <button className="mt-4 w-full bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-xl py-2 px-4 text-white font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                        <Globe className="w-4 h-4" />
                        <span>Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-20 px-6 relative z-10 bg-gradient-to-br from-gray-900/50 to-blue-900/30 rounded-3xl my-20 backdrop-blur-lg border border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
              Our Technology Expertise
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Cutting-edge technologies powering our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { title: "AI & Machine Learning", description: "Intelligent solutions for data-driven insights", icon: <Brain className="w-10 h-10 mx-auto mb-4 text-blue-400" /> },
              { title: "Cloud Infrastructure", description: "Scalable and secure cloud deployments", icon: <Cloud className="w-10 h-10 mx-auto mb-4 text-purple-400" /> },
              { title: "Web & Mobile", description: "Cross-platform applications with modern frameworks", icon: <Smartphone className="w-10 h-10 mx-auto mb-4 text-green-400" /> },
              { title: "Data Analytics", description: "Actionable insights from complex datasets", icon: <BarChart2 className="w-10 h-10 mx-auto mb-4 text-yellow-400" /> }
            ].map((tech, index) => (
              <div 
                key={index}
                className="service-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-5">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-blue-200 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Hear what industry leaders say about our services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "John Smith", 
              position: "CEO, TechCorp Solutions",
              content: "AEG's software solutions transformed our operations. Their team's expertise is unmatched in the industry.",
              delay: 0
            },
            { 
              name: "Sarah Johnson", 
              position: "Director, Global Innovations",
              content: "The research insights provided by AEG helped us enter two new markets successfully.",
              delay: 0.2
            },
            { 
              name: "Michael Roberts", 
              position: "Events Manager, Industry Connect",
              content: "AEG's TechSummit Pro conference was the most well-organized event we've attended.",
              delay: 0.4
            }
          ].map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl fade-in"
              style={{ animationDelay: `${testimonial.delay}s` }}
            >
              <div className="text-5xl text-yellow-400 mb-4">★★★★★</div>
              <blockquote className="text-lg text-white/90 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-blue-300 text-sm">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Connect with our experts to discuss how AEG Consultancy can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
              Schedule a Consultation
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-6 bg-black/20 backdrop-blur-lg border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">AEG</span>
                </div>
                <div className="text-xl font-bold">AEG Consultancy</div>
              </div>
              <p className="text-blue-200 text-sm mb-6">
                Empowering businesses with specialized software, premier conferences, and actionable research.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3 text-blue-200 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research & Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Conferences & Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Implementation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-blue-200 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-blue-200 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                  <span>123 Business Avenue, New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@aegconsultancy.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-blue-300 text-sm">
              © 2024 AEG Consultancy Services Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919990507737"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 pulse-animation flex items-center justify-center"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default AEGServicesPage;