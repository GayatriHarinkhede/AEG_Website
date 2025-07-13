import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Target, BarChart3, Globe, Users, CheckCircle, ArrowRight, Star, Award, Zap } from 'lucide-react';
import NewFooter from './NewFooter';
import AEG from '../Components/image/Logo/AEG logo.jpg'
import { Link } from 'react-router-dom';


const SEOServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Technical SEO Audit",
      description: "Comprehensive analysis of your website's technical foundation to identify and fix critical issues affecting search performance.",
      features: ["Site Speed Optimization", "Mobile Responsiveness", "Schema Markup", "URL Structure Analysis"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Keyword Research & Strategy",
      description: "Data-driven keyword research to identify high-value opportunities and create a winning content strategy.",
      features: ["Competitor Analysis", "Search Volume Research", "Long-tail Keywords", "Content Gap Analysis"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "On-Page Optimization",
      description: "Optimize every element of your web pages to maximize search engine visibility and user engagement.",
      features: ["Title Tag Optimization", "Meta Descriptions", "Header Structure", "Internal Linking"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Link Building & Authority",
      description: "Build high-quality backlinks and establish domain authority through strategic outreach and content marketing.",
      features: ["Guest Posting", "Resource Link Building", "Broken Link Recovery", "Brand Mentions"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Track performance with detailed reporting and actionable insights to continuously improve your SEO results.",
      features: ["Traffic Analysis", "Ranking Monitoring", "Conversion Tracking", "ROI Reporting"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local SEO",
      description: "Dominate local search results and attract more customers from your geographic area.",
      features: ["Google My Business", "Local Citations", "Review Management", "Location-based Keywords"]
    }
  ];

  const stats = [
    { number: "500+", label: "Websites Optimized", icon: <Globe className="w-6 h-6" /> },
    { number: "250%", label: "Average Traffic Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction Rate", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Award className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "Our organic traffic increased by 300% within 6 months. The team's expertise is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      content: "Professional service with measurable results. Our sales have doubled since working with them.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Local Business Co.",
      content: "Finally ranking #1 for our main keywords. The ROI has been incredible.",
      rating: 5
    }
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
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Professional SEO Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Dominate Search
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Results</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your online presence with data-driven SEO strategies that deliver measurable results and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Start Your SEO Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive SEO Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From technical audits to content strategy, we provide end-to-end SEO services designed to boost your search rankings and drive qualified traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-slate-100 hover:border-blue-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{transitionDelay: `${index * 100}ms`}}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group-hover:translate-x-2 transform transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. See how we've helped businesses like yours achieve remarkable SEO results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-300">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get a free SEO audit and discover how we can help you dominate search results and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Get Free SEO Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <NewFooter/>
    </div>
  );
};

export default SEOServicesPage;