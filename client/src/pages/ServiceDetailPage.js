import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import NewFooter from './NewFooter';

// Language icons
const LanguageIcons = {
  javascript: '🇯🇸',
  typescript: '🆃',
  python: '🐍',
  java: '☕',
  php: '🐘',
  html: '🅷',
  css: '🅲',
  react: '⚛️',
  angular: '🅰️',
  vue: '🅿️',
  node: '🅽',
  django: '🅳',
  laravel: '🅻',
  mysql: '🐬',
  mongodb: '🍃',
};

// CSS styles
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .float-animation {
    animation: float 3s ease-in-out infinite;
  }
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .gradient-bg {
    background: linear-gradient(45deg, #f0f9ff, #e0f2fe, #bae6fd, #e5e7eb);
    background-size: 400%;
    animation: gradientShift 15s ease infinite;
  }
`;

const SoftwareDevelopmentPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-10 h-10 text-blue-500" />,
      title: 'Custom Software Development',
      description: 'Tailored solutions built from scratch to meet your specific business requirements.',
      route: '/services/custom-software',
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      route: '/services/mobile-app',
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications using cutting-edge technologies.',
      route: '/services/web-development',
    },
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: 'Database Solutions',
      description: 'Robust database design and management for scalable data architecture.',
      route: '/services/database-solutions',
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      title: 'API Development',
      description: 'Secure and scalable APIs to enhance application connectivity.',
      route: '/services/api-development',
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: 'Performance Optimization',
      description: 'Speed up your applications with advanced optimization techniques.',
      route: '/services/performance-optimization',
    },
  ];

  const languages = [
    { name: 'JavaScript', icon: LanguageIcons.javascript },
    { name: 'TypeScript', icon: LanguageIcons.typescript },
    { name: 'Python', icon: LanguageIcons.python },
    { name: 'Java', icon: LanguageIcons.java },
    { name: 'PHP', icon: LanguageIcons.php },
    { name: 'HTML5', icon: LanguageIcons.html },
    { name: 'CSS3', icon: LanguageIcons.css },
    { name: 'React', icon: LanguageIcons.react },
    { name: 'Angular', icon: LanguageIcons.angular },
    { name: 'Vue.js', icon: LanguageIcons.vue },
    { name: 'Node.js', icon: LanguageIcons.node },
    { name: 'Django', icon: LanguageIcons.django },
    { name: 'Laravel', icon: LanguageIcons.laravel },
    { name: 'MySQL', icon: LanguageIcons.mysql },
    { name: 'MongoDB', icon: LanguageIcons.mongodb },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      rating: 5,
      text: 'Outstanding work! They delivered our project on time and exceeded our expectations.',
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      rating: 5,
      text: 'Professional, reliable, and innovative. They transformed our idea into a successful product.',
    },
    {
      name: 'Emily Rodriguez',
      company: 'Enterprise Solutions',
      rating: 5,
      text: 'Excellent communication throughout the project. The final product was exactly what we needed.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      <style>{styles}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200/50' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
              <Code className={`w-8 h-8 ${scrollY > 50 ? 'text-blue-500' : 'text-blue-400'}`} />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                AEG
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Technologies', 'About', 'Testimonials', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors duration-200 ${
                    scrollY > 50 ? 'text-gray-700 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-teal-400 px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
            <motion.button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.9 }}>
              {isMenuOpen ? <X className="w-6 h-6 text-blue-500" /> : <Menu className="w-6 h-6 text-blue-500" />}
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-200/50"
            >
              <div className="px-4 py-6 space-y-4">
                {['Home', 'Services', 'Technologies', 'About', 'Testimonials', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-600 hover:text-blue-500 font-medium py-2"
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-400 px-6 py-3 rounded-lg font-medium text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[70vh] flex items-center justify-center gradient-bg">
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl float-animation"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl float-animation"
            style={{ animationDelay: '1s' }}
          ></div>
        </motion.div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-black via-teal-950 to-red-950 bg-clip-text text-transparent"
          >
            AEG Consultancy Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-gray-800 max-w-3xl mx-auto"
          >
            Transforming your ideas into powerful software solutions that drive innovation and growth.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 text-white"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="border-2 border-blue-500 px-8 py-4 rounded-full text-lg font-semibold text-blue-600 hover:bg-blue-500 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12"
          ></motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions tailored to your business needs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to={service.route} key={index}>
                <motion.div
                  className="bg-white p-8 rounded-2xl border border-blue-200/50 hover:border-blue-400 transition-all duration-300 relative overflow-hidden shadow-md cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 to-teal-100/10"></div>
                  <div className="relative z-10">
                    {service.icon}
                    <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proficient in a wide range of modern technologies and frameworks.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-blue-200/50 hover:border-blue-400 transition-all duration-300 flex flex-col items-center shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-4xl mb-3">{language.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900">{language.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Why Choose AEG?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Over a decade of delivering cutting-edge solutions for business success.
              </p>
              {[
                {
                  title: 'Expert Team',
                  text: 'Top-tier professionals with extensive industry experience.',
                  icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
                },
                {
                  title: 'Agile Methodology',
                  text: 'Flexible and timely delivery with agile practices.',
                  icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
                },
                {
                  title: 'Quality Assurance',
                  text: 'Rigorous testing for bug-free, high-performance applications.',
                  icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.icon}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-teal-100/20 rounded-3xl blur-2xl"></div>
              <img
                src="/images/team-placeholder.jpg"
                alt="AEG Team"
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our satisfied clients about their experiences.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl border border-blue-200/50 hover:border-blue-400 transition-all duration-300 shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your ideas into reality? Get in touch today.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100/50 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">hello@aegconsultancy.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-teal-100/50 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-sky-100/50 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Address</div>
                  <div className="text-gray-600">123 Tech Street, Silicon Valley, CA 94105</div>
                </div>
              </div>
              <motion.div
                className="relative mt-8 rounded-2xl overflow-hidden h-64"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/map-placeholder.jpg"
                  alt="AEG Location"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-2xl border border-blue-200/50 shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-100 border border-blue-200/50 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-900"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-100 border border-blue-200/50 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-900"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-gray-100 border border-blue-200/50 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-900"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-gray-100 border border-blue-200/50 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 text-gray-900 resize-none"
                ></textarea>
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-400 py-3 rounded-lg font-semibold text-white"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <NewFooter/>
    </div>
  );
};

export default SoftwareDevelopmentPage;