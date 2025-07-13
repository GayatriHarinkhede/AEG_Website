import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight, Menu, X, Star, Check, Plus, Minus } from 'lucide-react';
import NewFooter from './NewFooter';
import AEG from '../Components/image/Logo/AEG logo.jpg'
import { Link } from 'react-router-dom';

const WebDevelopmentPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Responsive and Custom WordPress Web Design",
      description: "Crafting adaptive and custom websites that deliver a consistent user experience across all devices, tailored to meet specific business or individual needs.",
      color: "bg-green-100"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Ecommerce Website Development",
      description: "Designing online stores and membership platforms with features like secure payment gateways, product catalogs, subscription models, and user account management.",
      color: "bg-blue-100"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Corporate, Portfolio, and Personal Websites",
      description: "Developing professional websites for businesses, creative portfolios for artists and designers, and personal sites for branding, resumes, or blogs.",
      color: "bg-pink-100"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Landing Pages and One-Page Websites",
      description: "Creating targeted landing pages optimized for conversions and single-page websites that present all content in a streamlined format.",
      color: "bg-purple-100"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Content and Non-Profit Websites",
      description: "Building sites for blogs, news outlets, and non-profits, focusing on content management systems and community engagement features.",
      color: "bg-yellow-100"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "UI/UX Website Development",
      description: "Designing and developing custom web applications that meet specific business needs, such as CRM systems, booking platforms, and interactive tools.",
      color: "bg-green-100"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "FREE",
      features: [
        "FREE Domain",
        "1 Page",
        "SEO friendly URL",
        "Animated Banner (Jquery)",
        "Client Testimonials",
        "Product List Page",
        "Service List Page",
        "Contact Form",
        "SSL Integration"
      ]
    },
    {
      name: "Essential",
      price: "Price will be as per requirement",
      features: [
        "FREE Domain",
        "8 Pages",
        "SEO friendly URL",
        "Animated Banner (Jquery)",
        "Client Testimonials",
        "Product List Page",
        "Service List Page",
        "Contact Form",
        "SSL Integration"
      ]
    },
    {
      name: "Economy",
      price: "Price will be as per requirement",
      features: [
        "FREE Domain",
        "15 Custom Pages",
        "SEO friendly URL",
        "Animated Banner (Jquery)",
        "Client Testimonials",
        "Product List Page",
        "Service List Page",
        "Contact Form",
        "SSL Integration"
      ]
    },
    {
      name: "Deluxe",
      price: "Price will be as per requirement",
      features: [
        "FREE Domain",
        "Unlimited Custom Pages",
        "SEO friendly URL",
        "Animated Banner (Jquery)",
        "Client Testimonials",
        "Product List Page",
        "Service List Page",
        "Contact Form",
        "SSL Integration"
      ]
    }
  ];

  const faqs = [
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies including React, Next.js, Node.js, WordPress, and various other frameworks based on project requirements."
    },
    {
      question: "How long does it take to complete a website?",
      answer: "Project timelines vary based on complexity. A simple website takes 1-2 weeks, while complex applications can take 6-12 weeks or more."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to keep your website updated, secure, and running smoothly."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Absolutely! We provide SEO optimization, digital marketing strategies, and can help improve your online visibility."
    },
    {
      question: "Do you work with existing websites or only new projects?",
      answer: "We work with both new projects and existing websites. We can redesign, optimize, or add new features to your current site."
    },
    {
      question: "What is included in the domain and hosting?",
      answer: "We provide free domain registration for the first year and can recommend reliable hosting solutions based on your needs."
    }
  ];

  const teamMembers = [
    { name: "Alex Chen", role: "Lead Developer", expertise: "React, Node.js" },
    { name: "Sarah Kim", role: "UI/UX Designer", expertise: "Figma, Design Systems" },
    { name: "Mike Rodriguez", role: "Full Stack Developer", expertise: "Python, JavaScript" },
    { name: "Emily Zhang", role: "Mobile Developer", expertise: "React Native, Flutter" }
  ];

  const projects = [

  
  {
    name: "Healthcare QR & Patient App",
    tech: "React Native, Express.js, Firebase",
    completion: "2024"
  },
  {
    name: "IJTSE Journal Portal",
    tech: "Next.js, Tailwind CSS, MongoDB",
    completion: "2024"
  },
  {
    name: "Conference Registration & Certificate Website",
    tech: "Vue.js, Firebase, Google Drive API",
    completion: "2023"
  },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
             
              <Link to='/software'> <span className="text-xl font-bold"><img src={AEG} alt="" /></span></Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Team</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 p-4 shadow-lg border border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
                <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Team</a>
                <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
             Web Development  
            </h1>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
  We craft high-performance, scalable websites tailored to your business needs. From strategy and design to development and deployment, our team transforms your ideas into impactful digital solutions.
</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-600/25">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`group ${service.color} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2`}>
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Website Design Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flexible <strong>website design plans</strong> fit every need and budget, making them a smart investment for businesses. As the <strong>best website design company</strong>, we create stunning and highly functional websites to elevate your online presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300">
                    Get FREE Consultation
                  </button>
                </div>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Web Development </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented developers and designers passionate about creating amazing digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                {/* <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3> */}
                <p className="text-blue-600 mb-2 font-medium">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Some of our latest work showcasing our expertise across different technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group hover:transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-500">{project.completion}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                <p className="text-blue-600 text-sm mb-4 font-medium">{project.tech}</p>
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center font-medium">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our web development services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and turn your ideas into reality. Our crew is ready to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              hello@crewdev.com
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">CrewDev</span>
            </div>
            
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CrewDev Studio. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      <NewFooter/>
    </div>
  );
};

export default WebDevelopmentPage;