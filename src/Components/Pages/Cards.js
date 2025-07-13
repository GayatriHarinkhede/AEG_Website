import React, { useState, useEffect } from 'react';
import { Code, Users, BookOpen, Calendar, FileText, ExternalLink, Cpu, Zap, Globe, ArrowLeft, Home, Star, Eye, Clock } from 'lucide-react';

const AnimatedCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const journalCategories = [
    {
      id: 'development',
      title: 'Software Development',
      icon: Code,
      color: 'from-blue-600 via-indigo-600 to-purple-700',
      shadowColor: 'shadow-blue-600/30',
      bgColor: 'bg-blue-50/80',
      textColor: 'text-blue-900',
      description: 'Explore cutting-edge programming trends',
      featured: 'Clean Code Principles',
      publishedTime: '2 days ago',
      articles: 45,
      views: '12.5K',
      number: '#19',
      rating: 4.8,
    },
    {
      id: 'conference',
      title: 'Conference',
      icon: Users,
      color: 'from-purple-600 via-pink-600 to-rose-700',
      shadowColor: 'shadow-purple-600/30',
      bgColor: 'bg-purple-50/80',
      textColor: 'text-purple-900',
      description: 'Discover global tech events',
      featured: 'TechCrunch Disrupt 2024',
      publishedTime: '2 days ago',
      articles: 28,
      views: '8.2K',
      number: '#20',
      rating: 4.6,
    },
    {
      id: 'research',
      title: 'Research',
      icon: BookOpen,
      color: 'from-emerald-600 via-teal-600 to-cyan-700',
      shadowColor: 'shadow-emerald-600/30',
      bgColor: 'bg-green-50/80',
      textColor: 'text-green-900',
      description: 'Dive into academic & industry insights',
      featured: 'Cybersecurity Analysis',
      publishedTime: '2 days ago',
      articles: 33,
      views: '15.8K',
      number: '#21',
      rating: 4.9,
    }
  ];

  const handleCardClick = (categoryId) => {
    setCurrentPage(categoryId);
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 200);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 200);
  };

  const getCurrentCategory = () => {
    return journalCategories.find(cat => cat.id === currentPage);
  };

  const tabCategories = [
    { id: 'development', label: 'Development', icon: Code },
    { id: 'conference', label: 'Events', icon: Calendar },
    { id: 'research', label: 'Research', icon: FileText }
  ];

  // Individual Category Page
  if (currentPage !== 'home') {
    const category = getCurrentCategory();
    if (!category) return null;

    const Icon = category.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMjBIMjBtMjAgMHYyME0yMCA0MFYyMG0wLTIwVjBtNDAgMjBIMjBtMCAyMFYxTTIwIDB2MjBtMCA0MFYyMCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className={`text-center pt-20 pb-16 relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-4 rounded-2xl shadow-lg ${category.shadowColor}`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 relative">
                {category.title}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></span>
              </h1>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
                {category.description}
              </p>
              <div className="flex items-center justify-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{category.articles}</div>
                  <div className="text-sm text-white/60">Articles</div>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{category.views}</div>
                  <div className="text-sm text-white/60">Views</div>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="text-center flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <div className="text-2xl font-bold text-white">{category.rating}</div>
                  <div className="text-sm text-white/60 ml-1">Rating</div>
                </div>
              </div>
              <button
                onClick={handleBackToHome}
                className="group bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 backdrop-blur-lg border border-white/20 rounded-xl py-3 px-8 text-white font-semibold transition-all duration-300 flex items-center space-x-3 mx-auto shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Back to Home</span>
                <Home className="w-5 h-5 opacity-60 group-hover:opacity-100" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Home Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMjBIMjBtMjAgMHYyME0yMCA0MFYyMG0wLTIwVjBtNDAgMjBIMjBtMCAyMFYxTTIwIDB2MjBtMCA0MFYyMCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] bg-repeat"></div>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="text-center pt-20 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 rounded-2xl shadow-lg animate-pulse">
                <Cpu className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 relative">
              Tech Journal
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              🚀 Discover the latest in Technology, Conferences & Research
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-3 border border-white/10 shadow-lg">
                <div className="flex space-x-3">
                  {tabCategories.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleCardClick(tab.id)}
                      className={`group flex items-center space-x-3 px-6 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${
                        currentPage === tab.id ? 'bg-white/15 shadow-inner' : ''
                      }`}
                    >
                      <tab.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-semibold">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">106 Total Articles</span>
              </div>
              <div className="w-px h-4 bg-white/10"></div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">36.5K+ Views</span>
              </div>
              <div className="w-px h-4 bg-white/10"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">4.8 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-8xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
          <div className="lg:col-span-1 flex justify-center">
            <div
              className={`relative group cursor-pointer transition-all duration-700 w-full max-w-sm ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: '0ms' }}
              onMouseEnter={() => setHoveredCard('conference')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick('conference')}
            >
              {renderCard(journalCategories[1], hoveredCard === 'conference')}
            </div>
          </div>

          <div className="lg:col-span-1 flex justify-center">
            <div
              className={`relative group cursor-pointer transition-all duration-700 w-full max-w-sm ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
              onMouseEnter={() => setHoveredCard('development')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick('development')}
            >
              {renderCard(journalCategories[0], hoveredCard === 'development', true)}
            </div>
          </div>

          <div className="lg:col-span-1 flex justify-center">
            <div
              className={`relative group cursor-pointer transition-all duration-700 w-full max-w-sm ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
              onMouseEnter={() => setHoveredCard('research')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick('research')}
            >
              {renderCard(journalCategories[2], hoveredCard === 'research')}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/10 shadow-lg">
          <div className="flex items-center space-x-8 text-white/60">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Active Categories: 3</span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Next: Software Development</span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
            <span className="text-sm font-medium">Click cards to explore 🚀</span>
          </div>
        </div>
      </div>
    </div>
  );

  function renderCard(category, isHovered, isCenter = false) {
    const Icon = category.icon;
    const cardHeight = 'h-[30rem]';
    const cardWidth = 'w-full';
    
    return (
      <>
        <div className={`${cardWidth} ${cardHeight} rounded-3xl bg-gradient-to-br ${category.color} shadow-2xl ${category.shadowColor} border border-white/20 backdrop-blur-2xl overflow-hidden transition-all duration-500 ease-out transform-gpu perspective-1000 ${
          isHovered 
            ? 'shadow-3xl scale-105 -translate-y-4 rotate-y-4' 
            : 'hover:shadow-3xl hover:scale-102'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered 
            ? `0 20px 60px -10px ${category.color.includes('blue') ? 'rgba(59, 130, 246, 0.4)' : category.color.includes('purple') ? 'rgba(147, 51, 234, 0.4)' : 'rgba(16, 185, 129, 0.4)'}` 
            : undefined
        }}>
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>
          </div>

          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent">
            <div className={`h-full bg-gradient-to-r from-white/0 via-white/60 to-white/0 transition-all duration-700 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>
          </div>
          
          <div className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-3 shadow-md border border-white/10 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
                <Icon className={`${isCenter ? 'w-5.5 h-5.5' : 'w-5 h-5'} text-white`} />
              </div>
              <div className="text-right">
                <div className={`text-2xl font-extrabold text-white transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
                  {category.number}
                </div>
                <div className="text-xs text-white/60 font-medium bg-white/5 px-2 py-1 rounded-full mt-1">
                  Explore Now
                </div>
              </div>
            </div>
            
            <h3 className={`font-extrabold text-white ${isCenter ? 'text-[1.5rem]' : 'text-xl'} mb-3 leading-tight tracking-tight transition-all duration-500 ${isHovered ? 'text-shadow-md' : ''}`}>
              {category.title}
            </h3>
            <p className={`text-white/80 ${isCenter ? 'text-[0.875rem]' : 'text-xs'} mb-4 leading-relaxed font-medium`}>
              {category.description}
            </p>
            
            <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 mb-4 border border-white/10 shadow-md transition-all duration-500 ${isHovered ? 'bg-white/15 scale-102' : ''}`}>
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1.5 rounded-lg shadow-sm">
                  <Star className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs text-white/80 font-bold bg-white/10 px-2 py-0.5 rounded-full">
                  Featured Article
                </span>
                <ExternalLink className="w-3 h-3 text-white/60 hover:text-white transition-colors" />
              </div>
              <h4 className="text-white font-bold text-sm mb-2 leading-snug">{category.featured}</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-white/60 text-xs">
                  <div className="flex items-center bg-white/10 px-2 py-0.5 rounded-full">
                    <Clock className="w-2 h-2 mr-1" />
                    <span>{category.publishedTime}</span>
                  </div>
                  <div className="flex items-center bg-white/10 px-2 py-0.5 rounded-full">
                    <Star className="w-2 h-2 mr-1 text-yellow-400" />
                    <span>{category.rating}</span>
                  </div>
                </div>
                <div className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full text-xs font-bold">
                  TRENDING
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 mb-6">
            <div className="grid grid-cols-2 gap-3">
              <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-3 text-center border border-white/10 shadow-md transition-all duration-500 ${isHovered ? 'scale-102 bg-white/15' : ''}`}>
                <div className="text-2xl font-extrabold text-white mb-1">{category.articles}</div>
                <div className="text-xs text-white/60 font-semibold uppercase tracking-wide">Articles</div>
                <div className="w-6 h-0.5 bg-white/30 rounded-full mx-auto mt-1"></div>
              </div>
              <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-3 text-center border border-white/10 shadow-md transition-all duration-500 ${isHovered ? 'scale-102 bg-white/15' : ''}`}>
                <div className="text-2xl font-extrabold text-white mb-1">{category.views}</div>
                <div className="text-xs text-white/60 font-semibold uppercase tracking-wide">Views</div>
                <div className="w-6 h-0.5 bg-white/30 rounded-full mx-auto mt-1"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <button className={`w-full bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-lg border border-white/20 rounded-xl py-3 px-4 text-white font-semibold transition-all duration-500 flex items-center justify-center space-x-3 group shadow-md hover:shadow-lg transform hover:scale-105 ${isHovered ? 'border-white/30 bg-white/15' : ''}`}>
              <Globe className="w-4 h-4 group-hover:scale-110 transition-all duration-300" />
              <span className="text-sm">Explore Category</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1.5 h-1.5 bg-white/20 rounded-full transition-all duration-700 ${
                  isHovered ? 'animate-ping' : 'opacity-0'
                }`}
                style={{
                  left: `${25 + i * 15}%`,
                  top: `${35 + (i % 2) * 30}%`,
                  animationDelay: `${i * 150}ms`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className={`absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl px-3 py-2 text-xs font-extrabold text-white shadow-md transform transition-all duration-500 border border-white/20 ${
          isHovered ? 'scale-125 rotate-6 -translate-y-1' : 'scale-100 rotate-0'
        }`}>
          <div className="flex items-center space-x-1">
            <Zap className="w-3 h-3 animate-pulse" />
            <span>HOT</span>
          </div>
        </div>

        <div className={`absolute inset-0 rounded-3xl transition-all duration-500 -z-10 ${
          isHovered ? 'opacity-100' : 'opacity-50'
        }`}>
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.color} opacity-20 blur-xl scale-105`}></div>
        </div>
      </>
    );
  }
};

export default AnimatedCards;