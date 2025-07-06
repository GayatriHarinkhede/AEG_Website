<div className="relative">
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            Technologies We Master
          </h3>
          
          <div className="relative h-64 overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900/50 to-blue-900/50 backdrop-blur-lg border border-white/10">
            {/* Scrolling Technology Icons */}
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-marquee whitespace-nowrap">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Python", icon: "🐍" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Docker", icon: "🐳" },
                  { name: "AI/ML", icon: "🤖" },
                  { name: "Blockchain", icon: "⛓️" },
                  { name: "GraphQL", icon: "📊" },
                  { name: "Kubernetes", icon: "⚙️" },
                  { name: "TypeScript", icon: "📘" }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="mx-8 flex flex-col items-center justify-center min-w-[120px] group"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless scroll */}
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Python", icon: "🐍" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Docker", icon: "🐳" },
                  { name: "AI/ML", icon: "🤖" },
                  { name: "Blockchain", icon: "⛓️" },
                  { name: "GraphQL", icon: "📊" },
                  { name: "Kubernetes", icon: "⚙️" },
                  { name: "TypeScript", icon: "📘" }
                ].map((tech, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="mx-8 flex flex-col items-center justify-center min-w-[120px] group"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <!-- ////////////////////////////////// -->
         import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, BookOpen, Calendar, FileText, ExternalLink, Cpu, Zap, Globe, ArrowLeft, Home, Star, Eye, Clock, ChevronRight, Award, Shield, Layers, TrendingUp, MessageCircle, Database, Smartphone, Network, Brain, BarChart, Presentation } from 'lucide-react';

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
  
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes ping {
    0% { transform: scale(1); opacity: 1; }
    75%, 100% { transform: scale(2); opacity: 0; }
  }
`;

const AEGServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardsRef = useRef([]);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

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
      window.removeEventListener('mousemove', handleMouseMove);
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
      title: 'AEG Software Solutions',
      subtitle: 'Innovative Technology Development',
      icon: Code,
      color: 'from-blue-600 to-purple-600',
      services: ['AI/ML Applications', 'Cloud Infrastructure', 'Mobile Apps', 'Web Platforms'],
      description: 'Custom software solutions that drive digital transformation and business growth.',
      stats: { projects: '200+', clients: '50+', satisfaction: '98%' },
      features: [
        { icon: Brain, text: 'AI-Powered Applications' },
        { icon: Smartphone, text: 'Cross-Platform Development' },
        { icon: Database, text: 'Scalable Architecture' }
      ],
      badge: 'Tech Innovation',
      badgeColor: 'bg-blue-500',
      patterns: ['< />', '{ }', ';', '() =>', 'import'],
      animation: 'animate-pulse',
      serviceType: 'Software'
    },
    {
      letter: 'E',
      title: 'AEG Conferences',
      subtitle: 'Global Knowledge Exchange',
      icon: Users,
      color: 'from-purple-600 to-pink-600',
      services: ['TechSummit Pro', 'Industry Workshops', 'Leadership Forums', 'Developer Conclave'],
      description: 'Premier events connecting industry leaders, innovators, and practitioners worldwide.',
      stats: { events: '100+', attendees: '10K+', speakers: '500+' },
      features: [
        { icon: Presentation, text: 'Keynote Thought Leaders' },
        { icon: Network, text: 'Global Networking' },
        { icon: Award, text: 'Innovation Awards' }
      ],
      badge: 'Event Leaders',
      badgeColor: 'bg-purple-500',
      patterns: ['🎤', '👥', '🎓', '💡', '🌐'],
      animation: 'animate-bounce',
      serviceType: 'Conferences'
    },
    {
      letter: 'G',
      title: 'AEG Research',
      subtitle: 'Strategic Insights & Analytics',
      icon: BookOpen,
      color: 'from-emerald-600 to-teal-600',
      services: ['Market Intelligence Suite', 'Growth Analytics Platform', 'Industry Trend Reports', 'Competitive Analysis'],
      description: 'Cutting-edge research providing actionable insights for strategic decision-making.',
      stats: { research: '300+', insights: '1000+', growth: '150%' },
      features: [
        { icon: BarChart, text: 'Predictive Analytics' },
        { icon: TrendingUp, text: 'Market Forecasting' },
        { icon: Shield, text: 'Risk Intelligence' }
      ],
      badge: 'Data Pioneers',
      badgeColor: 'bg-emerald-500',
      patterns: ['📊', '📈', '🔍', '📚', '🔬'],
      animation: 'animate-ping',
      serviceType: 'Research'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <style>{styles}</style>
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMjBIMjBtMjAgMHYyME0yMCA0MFYyMG0wLTIwVjBtNDAgMjBIMjBtMCAyMFYxTTIwIDB2MjBtMCA0MFYyMCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] bg-repeat"></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="text-center pt-20 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl bg-white/5">
            <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 relative overflow-hidden">
              <span className="inline-block">
                AEG Consultancy Services Pvt Ltd
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              🚀 Discover our specialized Software, Conferences & Research solutions
            </p>
          </div>
        </div>
      </div>

      {/* Hero AEG Letters Section - Enhanced Design */}
     <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Dynamic Geometric Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Hero Content Container */}
          <div className="text-center mb-20">
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3 mb-8 shadow-2xl">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-white/90 font-medium tracking-wide">Leading Innovation Since 2020</span>
            </div>

            {/* Main Title with Enhanced Typography */}
            <h1 className="relative mb-8">
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

            {/* Enhanced Subtitle */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light mb-6">
                Transforming businesses through cutting-edge
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-bold">Software Solutions</span>
                <span className="text-white/60">•</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">Premier Conferences</span>
                <span className="text-white/60">•</span>
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold">Strategic Research</span>
              </div>
            </div>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  Explore Our Services
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </span>
              </button>
            </div>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Projects", icon: "🚀" },
              { number: "98%", label: "Success Rate", icon: "⭐" },
              { number: "50+", label: "Partners", icon: "🤝" },
              { number: "24/7", label: "Support", icon: "🛡️" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-blue-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flip Cards Section */}
      <div className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Explore Our Specialized Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aegServices.map((service, index) => (
              <div
                key={`flip-${service.letter}`}
                ref={el => cardsRef.current[index] = el}
                className={`flip-card h-96 ${flippedCards.has(service.letter) ? 'flipped' : ''}`}
                onClick={() => toggleFlipCard(service.letter)}
              >
                <div className="flip-card-inner relative w-full h-full cursor-pointer">
                  {/* Front Face */}
                  <div className={`flip-card-front absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${service.color} p-6 shadow-2xl border border-white/20 backdrop-blur-lg`}>
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <service.icon className="w-12 h-12 text-white" />
                          <div className="text-6xl font-black text-white/20">
                            {service.letter}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {service.title}
                        </h3>
                        
                        <p className="text-white/90 mb-6 leading-relaxed">
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
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-blue-300">{service.subtitle}</p>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <feature.icon className="w-5 h-5 text-blue-400" />
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
      </div>

      {/* Interactive Stats & Achievements Section */}
      <div className="py-20 px-6 max-w-7xl mx-auto relative z-10">
       

        {/* Technology Stack Showcase */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            Technologies We Master
          </h3>
          
          <div className="relative h-64 overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900/50 to-blue-900/50 backdrop-blur-lg border border-white/10">
            {/* Scrolling Technology Icons */}
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-marquee whitespace-nowrap">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Python", icon: "🐍" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Docker", icon: "🐳" },
                  { name: "AI/ML", icon: "🤖" },
                  { name: "Blockchain", icon: "⛓️" },
                  { name: "GraphQL", icon: "📊" },
                  { name: "Kubernetes", icon: "⚙️" },
                  { name: "TypeScript", icon: "📘" }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="mx-8 flex flex-col items-center justify-center min-w-[120px] group"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless scroll */}
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Python", icon: "🐍" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Docker", icon: "🐳" },
                  { name: "AI/ML", icon: "🤖" },
                  { name: "Blockchain", icon: "⛓️" },
                  { name: "GraphQL", icon: "📊" },
                  { name: "Kubernetes", icon: "⚙️" },
                  { name: "TypeScript", icon: "📘" }
                ].map((tech, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="mx-8 flex flex-col items-center justify-center min-w-[120px] group"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonial Slider */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            What Our Clients Say
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl text-yellow-400 mb-4">★★★★★</div>
                <blockquote className="text-xl text-white/90 mb-6 italic leading-relaxed">
                  "AEG's software solutions transformed our operations. Their research insights helped us enter new markets, and their conferences connected us with industry leaders."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">John Smith</div>
                    <div className="text-blue-300 text-sm">CEO, TechCorp Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/20 backdrop-blur-lg border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">AEG Consultancy Services</h3>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Empowering businesses with specialized software, premier conferences, and actionable research.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-3">Software Solutions</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>AI/ML Applications</li>
                <li>Cloud Infrastructure</li>
                <li>Mobile & Web Platforms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Conferences</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>TechSummit Pro</li>
                <li>Industry Workshops</li>
                <li>Leadership Forums</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Research</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>Market Intelligence</li>
                <li>Growth Analytics</li>
                <li>Industry Reports</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
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