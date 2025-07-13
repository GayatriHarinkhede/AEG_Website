import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, ArrowRight, Code, Users, FlaskConical, Mail, Phone, MapPin,
  LayoutDashboard, Sparkles, Globe, BarChart, Database, Cloud, Server, Shield, Cpu
} from 'lucide-react';
import NewFooter from './NewFooter';
import { useLocation } from 'react-router-dom';
import WhatsAppButton from './Softwarepages/WhatsAppButton';
import ContactWidget from './ContactWidget';

const VideoCarouselPage = () => {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [slidingDirection, setSlidingDirection] = useState('right');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const progressRef = useRef(null);
  const featureTimerRef = useRef(null);

  // Typography system
  const typography = {
    heading1: "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight",
    heading2: "text-xl md:text-2xl lg:text-3xl font-bold tracking-tight",
    heading3: "text-lg md:text-xl lg:text-2xl font-bold tracking-tight",
    heading4: "text-base md:text-lg lg:text-xl font-bold tracking-tight",
    subtitle: "text-sm md:text-base font-medium tracking-normal",
    body: "text-sm md:text-base font-normal tracking-normal leading-relaxed",
    small: "text-xs md:text-sm font-normal tracking-normal",
    caption: "text-xs font-medium tracking-wide uppercase",
    button: "text-sm md:text-base font-medium tracking-wide"
  };

  const videos = [
    {
      id: 1,
      title: "Software Development",
      videoUrl: './software.mp4',
      thumbnail: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&crop=center",
      description: "Smart, scalable software solutions powered by AI — built by AEG experts. We deliver intelligent applications tailored to your business goals.",
      path: '/software',
      color: "bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50",
      accent: "from-blue-400 to-cyan-400",
      glowColor: "shadow-blue-200/50",
      tags: ["📱 App Development", "🔗 API Integration", "💻 Web Design", "🌐 Hosting", "🔒 Security"],
      stats: [
        { value: "98%", label: "Client Satisfaction" },
        { value: "200+", label: "Projects Completed" },
        { value: "5M+", label: "Users Served" }
      ]
    },
    {
      id: 2,
      title: "Knowledge & Events",
      videoUrl: "./Audience.mp4",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&crop=center",
      description: "AEG organizes impactful conferences and tech-driven events worldwide. From planning to execution, we ensure seamless and engaging experiences.",
      path: '/newconference',
      color: "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50",
      accent: "from-amber-400 to-rose-400",
      glowColor: "shadow-amber-200/50",
      tags: ["🌐 Global Reach", "🎯 Interactive", "✨ End-to-End", "🤝 Networking", "🎤 Expert Speakers"],
      stats: [
        { value: "50+", label: "Countries Reached" },
        { value: "100k+", label: "Participants" },
        { value: "500+", label: "Events Hosted" }
      ]
    },
   {
  id: 3,
  title: "Research & Development",
  videoUrl: "./Robot.mp4",
  thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&crop=center",
  description: "At AEG Consultancy Services Pvt. Ltd., we focus on building innovative software through research, testing, and continuous improvement. Our aim is to create smart, efficient, and secure digital solutions.",
  path: '/OLDHome',
  color: "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50",
  accent: "from-emerald-400 to-teal-400",
  glowColor: "shadow-emerald-200/50",
  tags: [
    "🤖 Smart AI Tools",
    "🔍 Easy-to-Use Software",
    "💡 Innovation-Driven Projects",
    "🔐 Secure Applications"
  ],
  // stats: [
  //   { value: "15+", label: "Patents Filed" },
  //   { value: "20+", label: "Research Papers" },
  //   { value: "10+", label: "Industry Partnerships" }
  // ]
}

  ];

  const services = [
    {
      id: 1,
      title: "Software Development",
      description: "Robust app development, seamless API integration, and modern web solutions tailored for every business need.",
      icon: Code,
      rating: 4.9,
      features: [
        "App & Web Development",
        "API Integration",
        "Hosting & Deployment",
        "SEO Optimization"
      ],
      path: '/software',
      gradient: "from-blue-400 to-cyan-500",
      hoverGradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 2,
      title: "Conference & Events",
      description: "End-to-end management of technical events, seminars, and conferences with global coordination and digital integration.",
      icon: Users,
      rating: 4.8,
      features: [
        "Smart Event Planning",
        "Virtual & Physical Conferences",
        "Global Participation",
        "Live Streaming"
      ],
      path: '/newconference',
      gradient: "from-amber-400 to-rose-500",
      hoverGradient: "from-amber-500 to-rose-600",
    },
   {
  id: 3,
  title: "Research & Development",
  description: "At AEG Consultancy Services Pvt. Ltd., we focus on exploring new ideas and improving software technologies to create smarter and more reliable solutions for everyday use.",
  icon: FlaskConical,
  rating: 4.7,
  features: [
    "Innovative Software Projects",
    "Improving App Performance",
    "User-Friendly Designs",
    "Continuous Testing & Feedback"
  ],
  path: '/OLDHome',
  gradient: "from-emerald-400 to-teal-500",
  hoverGradient: "from-emerald-500 to-teal-600",
}

  ];

  const techStack = [
    { icon: Cloud, title: "Cloud Services", description: "AWS, Azure, Google Cloud" },
    { icon: Database, title: "Databases", description: "MongoDB, PostgreSQL, Redis" },
    { icon: Server, title: "Backend", description: "Node.js, Python, Java, .NET" },
    { icon: Cpu, title: "Frontend", description: "React, Angular, Vue.js" },
    { icon: Shield, title: "Security", description: "OAuth, JWT, SSL/TLS" },
    { icon: Globe, title: "Deployment", description: "Docker, Kubernetes, CI/CD" }
  ];

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Our AI algorithms analyze data patterns to deliver predictive insights and automation capabilities.",
      icon: Sparkles
    },
    {
      title: "Real-Time Analytics",
      description: "Monitor performance metrics and user behavior with our comprehensive dashboard.",
      icon: BarChart
    },
    {
      title: "End-to-End Encryption",
      description: "Military-grade security protocols to protect your sensitive business data.",
      icon: Shield
    }
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(prev => ({ ...prev, [entry.target.id]: entry.isIntersecting }))),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const CountUp = ({ end, duration = 2, suffix = '', className = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <div ref={countRef} className={className}>
      {Math.floor(count).toLocaleString()}
      {suffix}
    </div>
  );
};

  useEffect(() => {
    const startAutoPlay = () => {
      if (autoPlay) {
        autoPlayRef.current = setInterval(() => {
          setSlidingDirection('right');
          setCurrentVideo(prev => (prev + 1) % videos.length);
          setProgress(0);
        }, 8000);

        // Start progress bar
        progressRef.current = setInterval(() => {
          setProgress(prev => Math.min(prev + 100 / 80, 100)); // 80 intervals in 8 seconds
        }, 100);
      }
    };

    const pauseAutoPlay = () => {
      clearInterval(autoPlayRef.current);
      clearInterval(progressRef.current);
    };

    startAutoPlay();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mouseenter', pauseAutoPlay);
      carousel.addEventListener('mouseleave', startAutoPlay);
    }
    return () => {
      pauseAutoPlay();
      if (carousel) {
        carousel.removeEventListener('mouseenter', pauseAutoPlay);
        carousel.removeEventListener('mouseleave', startAutoPlay);
      }
    };
  }, [autoPlay, videos.length]);

  useEffect(() => {
    // Feature rotation effect
    featureTimerRef.current = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(featureTimerRef.current);
  }, []);

  const nextVideo = () => {
    setSlidingDirection('right');
    setCurrentVideo(prev => (prev + 1) % videos.length);
    setProgress(0);
    resetAutoPlay();
  };

  const prevVideo = () => {
    setSlidingDirection('left');
    setCurrentVideo(prev => (prev - 1 + videos.length) % videos.length);
    setProgress(0);
    resetAutoPlay();
  };

  const goToVideo = (index) => {
    setSlidingDirection(index > currentVideo ? 'right' : 'left');
    setCurrentVideo(index);
    setProgress(0);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    clearInterval(autoPlayRef.current);
    clearInterval(progressRef.current);
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setSlidingDirection('right');
        setCurrentVideo(prev => (prev + 1) % videos.length);
        setProgress(0);
      }, 8000);

      progressRef.current = setInterval(() => {
        setProgress(prev => Math.min(prev + 100 / 80, 100));
      }, 100);
    }
  };

  const handleServiceClick = (path) => navigate(path);
  const handleSlideClick = (e, path) => !e.target.closest('button, a, .no-navigate') && navigate(path);

  // Calculate dynamic height for carousel based on device
  const getCarouselHeight = () => {
    if (isMobile) return 'min-h-[70vh]';
    if (isTablet) return 'min-h-[55vh]';
    return 'min-h-[65vh]';
  };

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100 font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `linear-gradient(45deg, ${['#3B82F6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)]}40, transparent)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`
            }}
          ></div>
        ))}
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`, backgroundSize: '60px 60px', transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section
        id="carousel"
        data-animate
        className={`relative py-4 md:py-6 px-4 sm:px-6 z-10 transition-all duration-1000 delay-300 ${isVisible.carousel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 md:mb-6">
            <motion.h1
              className={`${typography.heading1} text-slate-800 mb-2`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1> AEG Consultancy Services</h1>
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Engineering Excellence, Digital Innovation
              </span>
            </motion.h1>
            <p className={`${typography.subtitle} text-slate-600 max-w-2xl mx-auto`}>
              AEG Consultancy Services provides end-to-end solutions for diverse engineering fields, including software development, system integration, mechanical design, electrical solutions, academic R&D, and technical event organization.
            </p>
          </div>

          <div className="relative">
            <div
              ref={carouselRef}
              className={`relative overflow-hidden rounded-lg md:rounded-xl shadow-2xl ${getCarouselHeight()} border border-white/30`}
            >
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 z-20 bg-white/20">
                <div
                  className="h-full bg-white transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out cursor-pointer ${index === currentVideo
                    ? 'opacity-100 z-10'
                    : slidingDirection === 'right'
                      ? 'opacity-0 translate-x-full'
                      : 'opacity-0 -translate-x-full'
                    }`}
                  onClick={(e) => handleSlideClick(e, video.path)}
                >
                  <div className={`absolute inset-0 ${video.color} opacity-95`}></div>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer"></div>
                  </div>
                  <div className="relative h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
                    <div className="w-full md:w-1/2 p-4 md:p-6 lg:p-8">
                      <div className="max-w-lg mx-auto">
                        <motion.h2
                          className={`${typography.heading3} text-slate-800 mb-3`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {video.title}
                        </motion.h2>
                        <motion.p
                          className={`${typography.body} text-slate-700 mb-4`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {video.description}
                        </motion.p>
                        <motion.div
                          className="flex flex-wrap gap-2 mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {video.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`${typography.small} bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium border border-white/30`}
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>

                        {/* Stats Section */}
                        {/* <motion.div
                          className="grid grid-cols-3 gap-3 mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, staggerChildren: 0.1 }}
                        >
                          {video.stats.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="relative bg-white/80 backdrop-blur-sm p-3 rounded-xl text-center border border-white/30 overflow-hidden"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                              whileHover={{
                                y: -5,
                                boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                              }}
                            >
                              {/* Animated counter */}
                              {/* <CountUp
                                end={parseInt(stat.value) || 0}
                                suffix={stat.value.includes('%') ? '%' : stat.value.includes('+') ? '+' : ''}
                                duration={2}
                                className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                              />

                              <div className="text-xs md:text-sm text-slate-600 mt-1 font-medium">
                                {stat.label}
                              </div>  */}

                              {/* Animated progress bar background */}
                              {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
                                  initial={{ width: 0 }}
                                  animate={{ width: '100%' }}
                                  transition={{
                                    delay: 1 + idx * 0.2,
                                    duration: 1.5,
                                    ease: "easeOut"
                                  }}
                                />
                              </div> */}

                              {/* Decorative elements */}
                              {/* <div className="absolute top-1 right-1 opacity-20">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                              </div>
                            </motion.div>
                          ))}
                          </motion.div> */}

                          <motion.button
                            onClick={(e) => { e.stopPropagation(); navigate(video.path); }}
                            className={`bg-gradient-to-r ${video.accent} text-white px-4 py-2.5 md:px-5 md:py-3 rounded-lg font-medium hover:shadow-lg transition-all ${video.glowColor} flex items-center group`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className={typography.button}>Explore Solution</span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                          </motion.button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 h-full flex items-center justify-center p-2 md:p-4">
                      <motion.div
                        className="relative w-full max-w-[500px] mx-auto h-0 pb-[56.25%]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-20 blur-lg"></div>
                        <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg border border-white/20 backdrop-blur-sm">
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={video.thumbnail}
                          >
                            <source src={video.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                          <div className="absolute bottom-2 left-2 text-white">
                            <h3 className="text-xs md:text-sm font-bold">{video.title}</h3>
                          </div>
                          <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-1 rounded-full">
                            <Sparkles className="w-3 h-3 text-white animate-spin-slow" />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="absolute inset-0 transition-all duration-500 ease-in-out hover:scale-105 opacity-0 hover:opacity-100 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-3 md:mt-4 space-x-2">
              <button
                onClick={(e) => { e.stopPropagation(); prevVideo(); }}
                className="bg-white/80 backdrop-blur-sm shadow-md p-1.5 rounded-lg hover:bg-white transition-all hover:shadow-lg border border-white/30"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700 hover:text-blue-600" />
              </button>
              <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/30">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); goToVideo(index); }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentVideo
                      ? 'bg-blue-500 scale-125 shadow'
                      : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); nextVideo(); }}
                className="bg-white/80 backdrop-blur-sm shadow-md p-1.5 rounded-lg hover:bg-white transition-all hover:shadow-lg border border-white/30"
              >
                <ChevronRight className="w-5 h-5 text-slate-700 hover:text-blue-600" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setAutoPlay(!autoPlay); }}
                className="bg-white/80 backdrop-blur-sm shadow-md p-1.5 rounded-lg hover:bg-white transition-all hover:shadow-lg border border-white/30"
              >
                {autoPlay ? (
                  <div className="w-5 h-5 flex items-center justify-center text-slate-700 hover:text-red-500">
                    <div className="w-2 h-3 border-l border-r border-current"></div>
                  </div>
                ) : (
                  <div className="w-5 h-5 flex items-center justify-center text-slate-700 hover:text-green-500">
                    <div className="w-0 h-0 border-t-3 border-b-3 border-l-4 border-r-0 border-transparent border-l-current translate-x-0.5"></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        data-animate
        className={`relative py-6 md:py-8 px-4 sm:px-6 bg-gradient-to-b from-white to-indigo-50 z-10 transition-all duration-1000 delay-500 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5 md:mb-7">
            <h2 className={`${typography.heading3} text-indigo-900 mb-2`}>
              Our Service Offerings
            </h2>
            <p className={`${typography.subtitle} text-indigo-700 max-w-xl mx-auto`}>
              Professional solutions designed to meet your business requirements
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="relative group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleServiceClick(service.path)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-indigo-50 to-white opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-lg md:rounded-xl blur-xl -z-10"></div>
                <div className="bg-white rounded-lg md:rounded-xl overflow-hidden transition-all duration-500 group-hover:shadow-xl border border-indigo-100 relative z-10 cursor-pointer h-full flex flex-col">
                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    <h3 className={`${typography.heading4} text-indigo-900 mb-2 group-hover:text-indigo-700`}>
                      {service.title}
                    </h3>
                    <p className={`${typography.body} text-indigo-700 mb-3 leading-relaxed flex-grow`}>
                      {service.description}
                    </p>
                    <div className="mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start mb-2">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 mr-2"></div>
                          <span className={`${typography.body} text-indigo-800`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white py-2 px-4 rounded-lg font-medium hover:shadow flex items-center justify-center ${typography.button}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 md:py-10 lg:py-12 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-6 md:mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className={`${typography.heading3} mb-3 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent`}>
              Let's Build Something Amazing
            </h2>
            <p className={`${typography.subtitle} text-gray-600`}>
              Ready to transform your ideas into reality? Get in touch today.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-5 md:gap-7">
            <motion.div className="space-y-4" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100/50 p-2 rounded-full"><Mail className="w-4 h-4 text-blue-500" /></div>
                <div>
                  <div className={`${typography.caption} text-gray-900`}>Email</div>
                  <div className={`${typography.body} text-gray-600`}>aegconsultancyservices@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-teal-100/50 p-2 rounded-full"><Phone className="w-4 h-4 text-teal-500" /></div>
                <div>
                  <div className={`${typography.caption} text-gray-900`}>Phone</div>
                  <div className={`${typography.body} text-gray-600`}>6268558700</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-sky-100/50 p-2 rounded-full"><MapPin className="w-4 h-4 text-sky-500" /></div>
                <div>
                  <div className={`${typography.caption} text-gray-900`}>Address</div>
                  <div className={`${typography.body} text-gray-600`}>329 Kalpana Nagar, BHEL, Bhopal, Madhya Pradesh, Pin No.:462022</div>
                </div>
              </div>

              {/* Location Container */}
              <div className="mt-6">
                <h2 className={`${typography.heading4} text-gray-900 mb-3`}>Our Location</h2>

                {/* Map with an exact location */}
                <div className="map-container rounded-lg overflow-hidden shadow-lg border border-gray-300">
                  <iframe
                    className="w-full h-48 md:h-64"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11770.46082762983!2d77.4185331882464!3d23.277311130827758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c66997de617cf%3A0x93005d0fa7cfa9cf!2s329%20Kalpana%20Nagar%2C%20BHEL%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!5e0!3m2!1sen!2sin!4v1695123456789!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Clickable Map */}
                <motion.div
                  className="mt-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg font-medium cursor-pointer flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=329+Kalpana+Nagar,+BHEL,+Bhopal,+Madhya+Pradesh+462022')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Open in Google Maps</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="bg-white p-5 rounded-lg border border-blue-200/50 shadow-sm" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-3">
                  <input type="text" placeholder="Your Name" className={`${typography.body} bg-gray-100 border border-blue-200/50 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 text-gray-900`} />
                  <input type="email" placeholder="Your Email" className={`${typography.body} bg-gray-100 border border-blue-200/50 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 text-gray-900`} />
                </div>
                <input type="text" placeholder="Subject" className={`${typography.body} w-full bg-gray-100 border border-blue-200/50 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 text-gray-900`} />
                <textarea placeholder="Your Message" rows="4" className={`${typography.body} w-full bg-gray-100 border border-blue-200/50 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-400 text-gray-900 resize-none`}></textarea>
                <motion.button className={`w-full bg-gradient-to-r from-blue-500 to-teal-400 py-3 rounded-lg font-medium text-white ${typography.button}`} whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)' }} whileTap={{ scale: 0.98 }}>
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="py-10 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className={`${typography.heading4} text-slate-700 mb-3`}>Trusted By Industry Leaders</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {[
              "TechCorp",
              "InnovateX",
              "GlobalSoft",
              "FutureSystems",
              "DataDyne",
              "CloudNine"
            ].map((company, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-center h-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <span className="font-bold text-slate-700">{company}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
<WhatsAppButton/>
<ContactWidget/>
      <NewFooter />

      <style jsx global>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(180deg); } }
        @keyframes shimmer { 0% { transform: translateX(-100%) skewX(-12deg); } 100% { transform: translateX(200%) skewX(-12deg); } }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 8px; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(45deg, #3B82F6, #06B6D4); border-radius: 8px; transition: background 0.3s; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(45deg, #2563EB, #0891B2); }
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 300ms; }
        
        /* Improved Typography */
        body, html {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
                      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        
        /* Responsive font size adjustments */
        @media (max-width: 768px) {
          #carousel .text-2xl { font-size: 1.5rem; line-height: 2rem; }
          #carousel .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
          #services .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        }
        
        @media (max-width: 480px) {
          #carousel .text-2xl { font-size: 1.375rem; }
          #carousel .text-lg { font-size: 1rem; }
          #services .text-xl { font-size: 1.125rem; }
          .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        }
        
        /* Better spacing for text elements */
        h1, h2, h3, h4 {
          margin-bottom: 0.75rem;
        }
        
        p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        /* Improved readability for body text */
        .text-slate-700, .text-indigo-700, .text-gray-600 {
          line-height: 1.6;
        }
        
        /* Better contrast for small text */
        .text-xs {
          font-size: 0.75rem;
          line-height: 1.25rem;
        }
        
        /* Button text improvements */
        .font-medium {
          letter-spacing: 0.025em;
        }
        
        @media (max-width: 1023px) {
          #carousel .min-h-\[55vh\] { min-height: 55vh !important; }
        }
        
        @media (max-width: 767px) {
          #carousel .min-h-\[70vh\] { min-height: 70vh !important; }
          #carousel .flex-col { padding: 0.5rem 0; }
          #carousel .pb-\[56\.25\%\] { padding-bottom: 56.25%; }
          #carousel .text-base { font-size: 0.875rem; }
          #carousel .text-xs { font-size: 0.75rem; }
          #carousel .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
          #carousel .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
          #carousel .mb-1 { margin-bottom: 0.25rem; }
          #carousel .gap-1 { gap: 0.25rem; }
        }
        
        @media (max-width: 480px) {
          #carousel .min-h-\[70vh\] { min-height: 70vh !important; }
          #carousel .pb-\[56\.25\%\] { padding-bottom: 56.25%; }
          #carousel .text-sm { font-size: 0.75rem; }
          #carousel .px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }
          #carousel .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          #carousel .mb-0 { margin-bottom: 0; }
          #carousel .text-xl { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default VideoCarouselPage;