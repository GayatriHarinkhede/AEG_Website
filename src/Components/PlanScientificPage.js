import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Browser from './image/Pdf/Browser(2025) .pdf';

import {
  FileText,
  Users,
  Calendar,
  Database,
  BookOpen,
  Globe,
  MessagesSquare
} from 'lucide-react';

const PlanScientificPage = () => {
  const [activeSystem, setActiveSystem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // useNavigate ko initialize karein

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const systems = [
    {
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 pt-10 " />,
      title: "Article Management System",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Scientific Content Management",
      color: "from-teal-400 to-teal-500",
    },
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Registration Management System",
      color: "from-pink-400 to-pink-500",
    },
    {
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5 px-24" />,
      title: "Scientific schedules & Agendas",
      color: "from-cyan-400 to-cyan-500",
    },
    {
      icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Accelerated Citation & Content Access",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: <MessagesSquare className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Submission Management System",
      color: "from-purple-400 to-purple-500",
    }
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        {isMobile ? (
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-4">
                Plan <span className="text-red-600">International</span><br />
                <span className="text-red-800">Scientific Conference</span>
              </h1>
              <p className="text-sm text-gray-600 px-4">
                Transform your institution into a hub of scientific excellence. Connect brilliant minds, share
                groundbreaking research, and foster global collaboration.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button className="px-6 py-2 bg-red-600 text-white text-sm rounded-lg">
                Submit Proposal
              </button>
              <button className="px-6 py-2 bg-white text-sm text-black rounded-lg shadow">
                Download Brochure
              </button>
            </div>

            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 text-center">
                <h3 className="text-lg font-semibold">
                  Scientific Conference Management Systems
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {systems.map((system, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow p-3 flex flex-col items-center"
                  >
                    <div className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center bg-gradient-to-r ${system.color} text-white`}>
                      {system.icon}
                    </div>
                    <h4 className="text-xs font-semibold text-center">
                      {system.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-20">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl font-bold leading-tight">
                Plan <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                  International Scientific Conferences
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your institution into a hub of scientific excellence. Connect brilliant minds, share
                groundbreaking research, and foster global collaboration.
              </p>
              <div className="flex gap-4 pt-4">
                {/* Submit Proposal Button */}
                <button
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                  onClick={() => navigate('/SubmitProposelForm')} // yeh page ko navigate karega
                >
                  Submit Proposal
                </button>

                {/* Download Brochure Button */}
                <a
  href={Browser}   // File should be in the 'public' folder
  download="Browser(2025) .pdf"
  className="px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
>
  Download Brochure
</a>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-square">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-xl flex items-center justify-center text-center p-4">
                  <h3 className="font-bold text-lg">Scientific Conference Management Systems</h3>
                </div>

                {systems.map((system, index) => {
                  const angle = (index * (360 / systems.length)) * (Math.PI / 180);
                  const radius = 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      <div className="w-32 bg-white rounded-xl shadow-lg p-4">
                        <div className={`w-12 h-12 rounded-full mb-2 flex items-center justify-center bg-gradient-to-r ${system.color} text-white`}>
                          {system.icon}
                        </div>
                        <h4 className="text-sm font-semibold">{system.title}</h4>
                      </div>
                      <div
                        className="absolute top-1/2 left-1/2 -z-10 bg-gray-200"
                        style={{
                          width: '2px',
                          height: '80px',
                          transform: `rotate(${(angle * 180 / Math.PI) + 180}deg)`,
                          transformOrigin: 'top',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanScientificPage;