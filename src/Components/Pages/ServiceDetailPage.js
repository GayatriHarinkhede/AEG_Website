import React from 'react';
import { ChevronLeft } from 'lucide-react';

const ServiceDetailPage = ({ serviceId, onNavigate }) => {
  const services = {
    'software-development': {
      title: 'Software Development',
      hero: 'Building Tomorrow\'s Software Today',
      description: 'Our software development team specializes in creating custom applications that drive business growth and innovation.',
      features: [
        'Full-stack web development',
        'Mobile app development (iOS & Android)',
        'Cloud-native solutions',
        'API development and integration',
        'DevOps and deployment automation',
        'Quality assurance and testing',
        'Maintenance and support'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      color: 'from-blue-500 to-cyan-500'
    },
    'research': {
      title: 'Research',
      hero: 'Pioneering Research for Future Innovation',
      description: 'Our research division focuses on breakthrough technologies and methodologies that shape the future of various industries.',
      features: [
        'AI and Machine Learning research',
        'Blockchain technology studies',
        'Quantum computing exploration',
        'Sustainable technology development',
        'Published papers and patents',
        'Industry collaboration',
        'Research grants and funding'
      ],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop',
      color: 'from-green-500 to-teal-500'
    },
    'conference': {
      title: 'Conference',
      hero: 'Connecting Minds, Sharing Knowledge',
      description: 'We organize world-class conferences that bring together industry leaders, researchers, and innovators from around the globe.',
      features: [
        'International tech conferences',
        'Research symposiums',
        'Networking events',
        'Workshop and training sessions',
        'Virtual and hybrid events',
        'Keynote speakers',
        'Exhibition opportunities'
      ],
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop',
      color: 'from-purple-500 to-pink-500'
    }
  };

  const service = services[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <button 
            onClick={() => onNavigate('home')}
            className="text-blue-600 hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${service.color} text-white py-24`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">{service.hero}</h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What We Offer</h2>
            <div className="grid gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center text-lg text-gray-700 bg-white p-4 rounded-xl shadow-sm">
                  <div className={`w-4 h-4 bg-gradient-to-r ${service.color} rounded-full mr-4 flex-shrink-0`}></div>
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-12 flex gap-4">
              <button 
                onClick={() => onNavigate('home')}
                className="inline-flex items-center px-8 py-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors shadow-lg"
              >
                <ChevronLeft className="mr-2" size={18} />
                Back to Home
              </button>
              <button className={`px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all`}>
                Get Started
              </button>
            </div>
          </div>
          <div>
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;