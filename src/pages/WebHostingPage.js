import React, { useState, useEffect } from 'react';
import { Server, Shield, Zap, Globe, Clock, Headphones, CheckCircle, ArrowRight, Star, Award, Users, TrendingUp, Cpu, HardDrive, Wifi, Lock } from 'lucide-react';
import NewFooter from './NewFooter';
import AEG from '../Components/image/Logo/AEG logo.jpg'
import { Link } from 'react-router-dom';


const WebHostingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePlan, setActivePlan] = useState(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Blazing Fast Performance",
    description: "Powered by SSD storage and a global CDN network to deliver sub-2-second load times anywhere in the world.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise-Grade Security",
    description: "Includes free SSL, daily malware scans, DDoS protection, and real-time threat monitoring to keep your site safe 24/7.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Reliable 99.9% Uptime",
    description: "Built on redundant infrastructure with auto-failover to ensure your website stays online—always.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "24/7 Technical Support",
    description: "Our expert support team is available around the clock to assist with any issues, big or small.",
    color: "from-purple-500 to-pink-500"
  }
];

  const plans = [
    {
      name: "Starter",
      // price: "$4.99",
      // period: "/month",
      description: "Perfect for personal websites and small projects",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Email Support",
        "Website Builder"
      ],
      popular: false,
      color: "from-slate-600 to-slate-700"
    },
    {
      name: "Professional",
      // price: "$9.99",
      // period: "/month",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "5 Websites",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Priority Support",
        "Advanced Security",
        "Daily Backups",
        "Free Domain"
      ],
      popular: true,
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Enterprise",
      // price: "$19.99",
      // period: "/month",
      description: "For high-traffic sites and mission-critical applications",
      features: [
        "Unlimited Websites",
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "24/7 Phone Support",
        "Advanced Security Suite",
        "Real-time Backups",
        "Free Domain",
        "Dedicated IP",
        "Performance Monitoring"
      ],
      popular: false,
      color: "from-emerald-600 to-teal-600"
    }
  ];

//   const stats = [
//     { number: "50K+", label: "Websites Hosted", icon: <Globe className="w-6 h-6" /> },
//     { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" /> },
//     { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> },
//     { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> }
//   ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Digital Agency Pro",
      content: "Switched to this hosting and saw immediate improvements in site speed. Our client satisfaction has never been higher.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Maria Rodriguez",
      company: "E-commerce Solutions",
      content: "The uptime is incredible and support team is always ready to help. Perfect for our online store operations.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "David Chen",
      company: "Tech Startup Inc.",
      content: "Reliable, fast, and affordable. Everything we need to focus on growing our business instead of worrying about hosting.",
      rating: 5,
      avatar: "DC"
    }
  ];

  const techSpecs = [
    { icon: <Cpu className="w-6 h-6" />, label: "Latest Intel Xeon", value: "E5-2690 v4" },
    { icon: <HardDrive className="w-6 h-6" />, label: "NVMe SSD Storage", value: "Up to 1TB" },
    { icon: <Wifi className="w-6 h-6" />, label: "Network Speed", value: "10 Gbps" },
    { icon: <Lock className="w-6 h-6" />, label: "Security Level", value: "Enterprise Grade" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <header className="  text-white bg-white px-4 shadow-lg">
              <div className="max-w-7xl mx-auto flex items-center">
                <div className="flex items-center space-x-3">
                  
                   <Link to='/software'> <span className="text-xl font-bold"><img src={AEG} alt="" /></span></Link>
                </div>
              </div>
            </header>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-emerald-500/10 rounded-full animate-pulse" style={{animationDuration: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Server className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Premium Web Hosting</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Host Your Website
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> With Confidence</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience blazing-fast performance, rock-solid security, and 24/7 expert support. Your website deserves the best hosting foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Start Hosting Today
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                View Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-700 delay-${index * 150} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mb-4 text-white transform hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Our Hosting?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide enterprise-grade hosting solutions with features designed to keep your website fast, secure, and always online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-blue-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Flexible hosting plans designed to grow with your business. All plans include our core features and 30-day money-back guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 transform transition-all duration-700 hover:scale-105 ${plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{transitionDelay: `${index * 200}ms`}}
                onMouseEnter={() => setActivePlan(index)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built on cutting-edge technology and powered by industry-leading hardware for maximum performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techSpecs.map((spec, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl mb-4 text-white">
                  {spec.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{spec.label}</h3>
                <p className="text-slate-600 text-sm">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of satisfied customers who trust us with their web hosting needs.
            </p>
          </div>

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 ${index === currentTestimonial ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4 absolute top-0 left-0 w-full'}`}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-blue-200">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-white' : 'bg-white/40'}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Launch Your Website?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Join thousands of successful websites powered by our reliable hosting. Get started today with our 30-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Server className="w-8 h-8 text-blue-400 mr-3" />
              <span className="text-2xl font-bold">HostPro</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Reliable, fast, and secure web hosting solutions for businesses of all sizes. Your success is our mission.
            </p>
            <div className="flex justify-center space-x-8 text-slate-400 text-sm">
              <span>© 2025 HostPro. All rights reserved.</span>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer> */}
      <NewFooter/>
    </div>
  );
};

export default WebHostingPage;