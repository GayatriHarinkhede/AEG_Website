import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Globe, Server, Cloud, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-blue-500" />,
      title: 'Custom Software Development',
      description: 'Scalable software built from the ground up to meet your exact business requirements with precision and performance.',
      route: '/services/custom-software-development',
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android, designed to deliver smooth, intuitive user experiences.',
      route: '/services/mobile-app-development',
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: 'Web Development',
      description: 'Responsive, fast, and secure websites using the latest technologies — built to scale with your business.',
      route: '/services/web-development',
    },
    {
      icon: <Server className="w-10 h-10 text-green-500" />,
      title: 'Web Hosting',
      description: 'Reliable, high-speed hosting with 99.9% uptime, CDN integration, and automated daily backups for uninterrupted service',
      route: '/services/WebHostingPage',
    },
    {
      icon: <Cloud className="w-10 h-10 text-green-500" />,
      title: 'API Development',
      description: 'Secure and scalable API solutions — from development to cloud deployment and seamless third-party integration.',
      route: '/services/api-development',
    },
    {
      icon: <Search className="w-10 h-10 text-purple-500" />,
      title: 'SEO Services',
      description: 'Boost your website’s visibility and traffic with technical SEO, on-page optimization, and keyword-driven strategies.',
      route: '/services/SEOServicesPage',
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Our Services 
          </h2> 
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to your business needs.
          </p> 
        </motion.div> 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.route} key={index}>
              <motion.div
                className="bg-white p-8 rounded-2xl border border-blue-200/50 hover:border-blue-400 transition-all duration-300 relative overflow-hidden shadow-md cursor-pointer feature-card"
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
  );
};

export default ServicesSection;