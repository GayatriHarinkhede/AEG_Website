import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import AEG from '../Components/image/Logo/AEG logo.jpg';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Code, 
  Palette, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Users,
  Target,
  Rocket,
  ArrowLeft,
  
} from 'lucide-react';
import NewFooter from './NewFooter';

const CustomSoftwarePage = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Add CSS animations
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
      
      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
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

    // Observe elements with animate-on-scroll class
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

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mobile App Consulting",
      description: "Our Mobile app consulting experts offer valuable insights and advice for businesses so they can use the best technology and platform for app development. Also, our team offers tailored solutions to ensure an app meets industry standards."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Mobile App UI/UX Design",
      description: "Our mobile UI/UX development team engages in thorough research to understand your business requirements, developing wireframes and prototypes that meet project demands and assist in visualizing design and functionality effectively."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "From concept to deployment, we build new-age mobile applications that perform exceptionally and have an easy-to-use UI to engage users effectively. Moreover, our comprehensive app development services ensure your app idea becomes a reality."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web App Development",
      description: "We specialize in custom and reliable web app development through advanced technology that drives results by meeting your business requirements with precision. Our solutions are designed to adapt to your evolving needs for continued growth and success."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Mobile App Integration",
      description: "Our service enables effortless mobile app integration, allowing your application to work seamlessly and effectively with other platforms and technologies. We focus on creating a cohesive user experience by bridging your app with essential tools and services."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Mobile App QA and Testing",
      description: "Security is paramount and our QA process includes rigorous security testing to protect your app and users' data. We employ advanced techniques to identify potential vulnerabilities, test for common security threats, and ensure that your app adheres to security protocols."
    }
  ];

  const techStacks = [
    { name: "iOS", icon: "🍎", color: "from-gray-800 to-gray-900" },
    { name: "Android", icon: "🤖", color: "from-green-500 to-green-600" },
    { name: "Swift", icon: "🦉", color: "from-orange-500 to-red-500" },
    { name: "Kotlin", icon: "🅺", color: "from-purple-500 to-blue-500" },
    { name: "React JS", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "Xamarin", icon: "❌", color: "from-blue-600 to-purple-600" },
    { name: "Flutter", icon: "🦋", color: "from-blue-400 to-blue-600" }
  ];

  const initiationSteps = [
  {
    title: "Discovery & Requirement Analysis",
    description: "We start with a deep dive into your business needs, workflows, and technical goals to define a clear and feasible software roadmap.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Architecture & UI/UX Design",
    description: "Our experts design robust software architecture and user-friendly interfaces that align with your brand and enhance user experience.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Agile Development & Quality Testing",
    description: "Using agile methodologies, we develop and iterate rapidly — ensuring code quality, performance, and functionality through continuous testing.",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Deployment & Post-Launch Support",
    description: "We handle seamless deployment and offer reliable maintenance, updates, and scaling solutions for long-term software success.",
    icon: <Rocket className="w-6 h-6" />
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r  text-white py- px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex items-center space-x-3">
            {/* <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-orange-600 font-bold text-xl">IT</span>
            </div> */}
           <Link to='/software'> <span className="text-xl font-bold"><img src={AEG} alt="" /></span></Link>
           {/* <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
        <Code className={`w-8 h-8 ${scrollY > 50 ? 'text-blue-500' : 'text-blue-400'}`} />
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
        <img src={AEG} alt="" />
        </span>
      </motion.div> */}
          </div>
            {/* <motion.button
          className="bg-gradient-to-r from-gray-600 to-gray-700 px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl text-white flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to AEG</span>
        </motion.button> */}
        </div>
      </header>

      {/* Hero Section */}
     <section className="py-20 px-4 overflow-hidden">
  <div className="max-w-7xl mx-auto text-center">
    <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
        Custom Software
        <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent"> Development</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        From internal business tools to client-facing platforms, AEG delivers fully customized software solutions tailored to your specific needs. Our team builds secure, scalable, and performance-driven systems that streamline operations and drive digital transformation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
          <Play className="w-5 h-5" />
          <span>Get Started</span>
        </button>
        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>



      {/* Technology Stacks */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 animate-on-scroll`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technology Stacks</h2>
            <p className="text-gray-600 text-lg">Cutting-edge technologies for modern app development</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {techStacks.map((tech, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                  {tech.icon}
                </div>
                <h3 className="text-center font-semibold text-gray-800">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Initiation Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 animate-on-scroll`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Initiation Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our systematic approach ensures your project starts on the right foot and delivers exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiationSteps.map((step, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl pl-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 animate-on-scroll`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
               
                
                <div className="mt-8">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < initiationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-orange-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 animate-on-scroll`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mobile App Development Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions for all your mobile app development needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-100 group animate-on-scroll`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`animate-on-scroll`}>
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream App?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Let's turn your innovative ideas into powerful mobile applications that engage users and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span>Start Your Project</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                Get Free Consultation
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
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IT</span>
                </div>
                <span className="text-xl font-bold">Think Zone</span>
              </div>
              <p className="text-gray-400">
                Transforming ideas into innovative mobile solutions that drive business success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mobile App Development</li>
                <li>Web App Development</li>
                <li>UI/UX Design</li>
                <li>App Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-400">
                <li>iOS & Android</li>
                <li>React Native</li>
                <li>Flutter</li>
                <li>Xamarin</li>
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

export default CustomSoftwarePage;