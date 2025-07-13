import React, { useState, useEffect } from 'react';
import { Building2, Users, BadgeCheck, ExternalLink, X, ChevronRight, Star, BookText, GraduationCap, Award, BookOpen, FileText, BookMarked } from 'lucide-react';

const Sponsor = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [animateStars, setAnimateStars] = useState([]);

  useEffect(() => {
    const stars = Array(20).fill().map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10
    }));
    setAnimateStars(stars);
  }, []);

  const partners = [
    {
      name: "Scopus Journals",
      type: "Journal Publications",
      logo: "/api/placeholder/200/100",
      icon: <FileText className="w-12 h-12 text-purple-600" />,
      description: "High-impact academic journals indexed in Scopus database",
      collaboration: ["Impact Factor Journals", "Citation Tracking", "Global Research Visibility"]
    },
    {
      name: "UGC Journals",
      type: "Approved Journals",
      logo: "/api/placeholder/200/100",
      icon: <Award className="w-12 h-12 text-blue-600" />,
      description: "UGC-CARE listed journals for quality research publications",
      collaboration: ["UGC Approved", "Academic Recognition", "Quality Research Standards"]
    },
    {
      name: "Book Publications",
      type: "Book Publishing",
      logo: "/api/placeholder/200/100",
      icon: <BookText className="w-12 h-12 text-pink-600" />,
      description: "Complete book publishing and distribution services",
      collaboration: ["ISBN Registration", "Global Distribution", "Editorial Support"]
    },
    {
      name: "Scopus Book Chapters",
      type: "Book Chapters",
      logo: "/api/placeholder/200/100",
      icon: <BookOpen className="w-12 h-12 text-indigo-600" />,
      description: "Scopus-indexed book chapter publications",
      collaboration: ["Peer Review", "Chapter Indexing", "Academic Recognition"]
    },
    {
      name: "IEEE Publications",
      type: "Technical Publications",
      logo: "/api/placeholder/200/100",
      icon: <BookMarked className="w-12 h-12 text-green-600" />,
      description: "IEEE conference and journal publications",
      collaboration: ["Technical Standards", "Global Recognition", "Digital Library Access"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-700 to-blue-600 text-white py-20">
        {animateStars.map(star => (
          <div
            key={star.id}
            className="absolute opacity-30"
            style={{
              left: `${star.left}%`,
              animation: `floatStar ${star.duration}s ease-in-out ${star.delay}s infinite`
            }}
          >
            <Star className="w-4 h-4" />
          </div>
        ))}

        <div className="max-w-7xl mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6 animate-glow text-center">Sponsors</h1>
            <div className="w-full animate-slide-up">
              <p className="text-lg leading-relaxed text-justify">
              Sponsors play a crucial role in advancing research and innovation by providing essential resources, funding, and opportunities. Their support ensures access to publishing platforms, helping high-quality research reach a global audience. By fostering collaboration and academic growth, they drive progress, encourage intellectual exchange, and shape the future of professional excellence.
              </p>
            </div>
          </div>

          {/* <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6 animate-glow">Publication Support</h1>
            <div className="max-w-3xl space-y-6 text-lg animate-slide-up">
              <p className="leading-relaxed">
                Enhance your research impact through our comprehensive publication support services. We collaborate with leading publishers and indexing services to provide you with diverse publishing opportunities.
              </p>
            </div>
          </div> */}


          {/* <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-20">
            <div className="w-96 h-96 rounded-full bg-white blur-3xl animate-pulse"></div>
          </div> */}
        </div>
      </div>

      {/* Publications Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
  <div className="relative z-10 mb-10 flex flex-col items-center">
    <h1 className="text-5xl font-bold mb-6 animate-glow text-center">Publication Support</h1>
    <div className="w-full space-y-6 text-lg animate-slide-up">
      <p className="leading-relaxed text-justify">
      Our Publication Support Services help researchers publish their work in reputed journals and conferences. We provide guidance in journal selection, manuscript formatting, and language editing to ensure high publication standards and research visibility.
      </p>
    </div>
  </div>


        <div className="grid md:grid-cols-3 gap-8">

          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedItem(partner)}
              style={{
                animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`
              }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-3 rounded-lg">
                    {partner.icon}
                  </div>
                  <span className="text-purple-600 text-sm font-semibold">{partner.type}</span>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{partner.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-purple-600">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Popup */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative animate-scale-in">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-4 mb-6">
              {selectedItem.icon}
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedItem.name}</h3>
                <span className="text-purple-600 text-sm font-semibold">{selectedItem.type}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6">{selectedItem.description}</p>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Features & Benefits:</h4>
              {selectedItem.collaboration.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-600 bg-gray-50 p-3 rounded-lg"
                  style={{
                    animation: `slideInRight ${0.3 + index * 0.1}s ease-out`
                  }}
                >
                  <ChevronRight className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes floatStar {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.8); }
        }
      `}</style>
    </div>
  );
};

export default Sponsor;