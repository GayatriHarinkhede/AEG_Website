import React, { useState, useEffect } from 'react';
import AEG from '../Components/image/Logo/AEG logo.jpg'
import { Link } from 'react-router-dom';

import { 
  Smartphone, 
  Code, 
  Palette, 
  Monitor,
  Shield, 
  Zap,
  Star,
  ListChecks,
  ArrowRight,
  Play,
  Users,
  Target,
  Rocket,
  Apple,
  CheckCircle,
  Clock,
  Award,
  TrendingUp,
  Settings,
  Bell,
  MapPin,
  Camera,
  CreditCard,
  Share2,
  Fingerprint,
  ShoppingCart,
  Heart,
  GraduationCap,
  Plane,
  Music
} from 'lucide-react';
import NewFooter from './NewFooter';

const MobileAppPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .animate-slide-in-right {
        animation: slideInRight 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
      }
      
      .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px 0px' }
    );

    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  const mobileServices = [
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Native iOS Development",
      description: "Build powerful iOS applications using Swift and Objective-C with native performance, seamless integration with iOS ecosystem, and optimal user experience."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Native Android Development",
      description: "Create robust Android apps using Kotlin and Java, leveraging Android's full potential with material design principles and Google services integration."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Cross-Platform Development",
      description: "Develop apps that work on both iOS and Android using React Native, Flutter, or Xamarin, reducing development time and cost while maintaining quality."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Mobile UI/UX Design",
      description: "Design intuitive and engaging mobile interfaces that provide exceptional user experiences, following platform-specific design guidelines and best practices."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "App Store Optimization",
      description: "Optimize your app's visibility in app stores with strategic keyword research, compelling descriptions, and engaging screenshots to increase downloads."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Mobile App Testing & QA",
      description: "Comprehensive testing across devices, operating systems, and scenarios to ensure your app performs flawlessly and provides a bug-free experience."
    }
  ];

  const mobileTechStack = [
    { name: "iOS", icon: "🍎", color: "from-gray-800 to-gray-900", tech: "Swift, Objective-C" },
    { name: "Android", icon: "🤖", color: "from-green-500 to-green-600", tech: "Kotlin, Java" },
    { name: "React Native", icon: "⚛️", color: "from-blue-400 to-cyan-400", tech: "JavaScript, TypeScript" },
    { name: "Flutter", icon: "🦋", color: "from-blue-400 to-blue-600", tech: "Dart" },
    { name: "Xamarin", icon: "❌", color: "from-blue-600 to-purple-600", tech: "C#, .NET" },
    { name: "Ionic", icon: "⚡", color: "from-blue-500 to-indigo-500", tech: "HTML, CSS, JS" },
    { name: "PWA", icon: "🌐", color: "from-purple-500 to-pink-500", tech: "Progressive Web" }
  ];

 const developmentProcess = [
  {
    step: "01",
    title: "Market Research & Strategy",
    description: "We begin by analyzing your target audience, industry trends, and competitor apps to create a results-driven app strategy aligned with your business goals.",
    icon: <Target className="w-6 h-6" />
  },
 {
  step: "02",
  title: "Product Definition & Scoping",
  description: "We define the app’s core functionality, features, and user roles to ensure a well-aligned development plan and avoid scope creep.",
  icon: <ListChecks className="w-6 h-6" />
}
,
  {
    step: "03",
    title: "UI/UX Design",
    description: "We design intuitive, visually engaging interfaces that align with platform guidelines and deliver a seamless user experience across all devices.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    step: "04",
    title: "App Development",
    description: "Our developers write clean, scalable code using modern frameworks and follow best practices to ensure high performance and maintainability.",
    icon: <Code className="w-6 h-6" />
  },
  {
    step: "05",
    title: "Quality Assurance",
    description: "We rigorously test the app across platforms, devices, and real-world scenarios to ensure stability, security, and a flawless user experience.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    step: "06",
    title: "Deployment & Launch",
    description: "We handle app store submissions, performance optimization, and final deployment, ensuring your app is live and ready for users.",
    icon: <Rocket className="w-6 h-6" />
  }
];


 const mobileFeatures = [
  { icon: <Bell className="w-6 h-6" />, title: "Push Notifications", desc: "Instant user alerts and engagement" },
  { icon: <MapPin className="w-6 h-6" />, title: "GPS & Location", desc: "Enable real-time tracking and location-aware services" },
  { icon: <Camera className="w-6 h-6" />, title: "Camera Integration", desc: "Capture images and videos directly from the app" },
  { icon: <Zap className="w-6 h-6" />, title: "Offline Functionality", desc: "Access key features even without internet" },
  { icon: <Fingerprint className="w-6 h-6" />, title: "Biometric Authentication", desc: "Secure login using face or fingerprint recognition" },
  { icon: <CreditCard className="w-6 h-6" />, title: "Payment Gateway", desc: "Accept payments securely within the app" },
  { icon: <Share2 className="w-6 h-6" />, title: "Social Media Integration", desc: "Allow sharing and login via social platforms" },
{
  icon: <Smartphone className="w-6 h-6" />,
  title: "Device Features",
  desc: "Access built-in phone tools like camera, GPS, and sensors"
}

  ];

  const appCategories = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce Apps",
    description: "Feature-rich shopping apps with secure payment integration, inventory management, and real-time notifications.",
    examples: "Amazon, Flipkart, Shopify"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Social Media Apps",
    description: "Connect communities with chat, stories, feeds, and user interaction tools built for scale.",
    examples: "Instagram, WhatsApp, Facebook"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Healthcare Apps",
    description: "Telemedicine, appointment booking, health tracking, and patient record access — all in one app.",
    examples: "Practo, Apollo, HealthTap"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Education Apps",
    description: "Interactive learning experiences with video lectures, assessments, and progress tracking.",
    examples: "Coursera, Duolingo, Khan Academy"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Banking & Finance Apps",
    description: "Build secure apps for digital banking, payments, trading, and expense management.",
    examples: "PayTM, PhonePe, Zerodha"
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Entertainment Apps",
    description: "Deliver media, gaming, and streaming experiences with high user engagement.",
    examples: "Netflix, Spotify, PUBG"
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="  text-white bg-white px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex items-center space-x-3">
            
             <Link to='/software'> <span className="text-xl font-bold"><img src={AEG} alt="" /></span></Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Mobile App
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Development</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with powerful mobile applications. We create innovative iOS and Android apps 
                that engage users, drive growth, and deliver exceptional mobile experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Smartphone className="w-5 h-5" />
                  <span>Start Your App</span>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform -rotate hover:rotate-2 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <Apple className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <span className="text-sm font-semibold">iOS Apps</span>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 text-center">
                      <Smartphone className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <span className="text-sm font-semibold">Android Apps</span>
                    </div>
                  </div>
                  {/* <div className="text-center">
                    <h3 className="font-bold text-gray-800 mb-2">200+ Apps Delivered</h3>
                    <p className="text-gray-600 text-sm">Trusted by startups to enterprises</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Technology Stack */}
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mobile Technology Stack</h2>
            <p className="text-gray-600 text-lg">Advanced technologies for next-generation mobile apps</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {mobileTechStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <h3 className="text-center font-semibold text-gray-800 mb-2">{tech.name}</h3>
                <p className="text-center text-xs text-gray-500">{tech.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Services */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mobile App Development Services</h2>
            <p className="text-gray-600 text-lg">End-to-end mobile solutions for your business success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100 group animate-on-scroll"
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mobile App Development Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful mobile app delivery from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 animate-on-scroll border border-gray-100"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div> */}
                
                <div className="mt-8">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Features */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mobile-Specific Features</h2>
            <p className="text-gray-600 text-lg">Leverage native mobile capabilities for enhanced user experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer animate-on-scroll group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">App Categories We Build</h2>
            <p className="text-gray-600 text-lg">Specialized mobile solutions across diverse industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100 group animate-on-scroll"
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveCategory(index)}
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
                <div className="text-sm text-blue-600 font-semibold">
                  Examples: {category.examples}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-on-scroll">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Apps Delivered</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-blue-100">App Downloads</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's transform your idea into a powerful mobile application that users love and businesses rely on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span>Start Your Mobile App</span>
              </button>
              <button className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IT</span>
                </div>
                <span className="text-xl font-bold">Think Zone</span>
              </div>
              <p className="text-gray-400">
                Leading mobile app development company creating innovative solutions for businesses worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Mobile Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>iOS App Development</li>
                <li>Android App Development</li>
                <li>React Native Apps</li>
                <li>Flutter Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">App Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>E-commerce Apps</li>
                <li>Social Media Apps</li>
                <li>Healthcare Apps</li>
                <li>Education Apps</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@itthinkzone.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 IT Think Zone. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      <NewFooter/>
    </div>
  );
};

export default MobileAppPage;