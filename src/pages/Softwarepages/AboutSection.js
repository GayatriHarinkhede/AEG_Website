import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Briefcase, Code, Layers, Headphones, Rocket, Award, BarChart, Clock } from 'lucide-react';

const AboutSection = () => {
  const processFlow = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'Requirement Analysis',
      description: 'We start by deeply understanding your business goals and technical needs'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: 'Solution Design',
      description: 'Our experts create optimal technical solutions tailored to your needs'
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Development',
      description: 'Agile development with continuous integration and testing'
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: 'Deployment',
      description: 'Seamless deployment to production with zero downtime'
    },
    {
      icon: <Headphones className="w-8 h-8 text-white" />,
      title: 'Support & Growth',
      description: 'Ongoing support and optimization for continuous improvement'
    }
  ];

  const keyBenefits = [
    {
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      title: 'Fast Delivery',
      description: 'Projects completed 30% faster than industry average'
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing ensures bug-free applications'
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
      title: 'Proven Results',
      description: '95% of clients report significant business growth'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Why Choose AEG?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process delivers exceptional results for businesses worldwide
          </p>
        </motion.div>
        
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 mb-16 relative">
            {processFlow.map((step, index) => (
              <motion.div
                key={index}
                className="flow-step flex flex-col items-center text-center p-6 w-full md:w-1/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                
                {index < processFlow.length - 1 && (
                  <div className="flow-connector hidden md:block">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;