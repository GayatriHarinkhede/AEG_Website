import React, { useState, useEffect } from 'react';
import {
  Wrench,
  Computer,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';
import workshop1 from './image/Logo/workshop1.jpg';
import workshop2 from './image/Logo/workshop2.jpg';
import workshop3 from './image/Logo/workshop3.jpg';
import workshop4 from './image/Logo/workshop4.jpg';
import workshop5 from './image/Logo/workshop5.jpg';
import workshop6 from './image/Logo/workshop6.jpg';
import workshop7 from './image/Logo/workshop7.jpg';
import workshop8 from './image/Logo/workshop8.jpg';
import workshop9 from './image/Logo/workshop9.jpg';
import workshop11 from './image/Logo/workshop11.jpg';
import workshop20 from './image/Logo/workshop20.JPG';
import workshop21 from './image/Logo/workshop21.JPG';

// Custom Card Component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>
    {children}
  </div>
);

const WorkshopCard = ({ icon: Icon, title, overview, learningAreas, experience, iconBgColor, iconColor }) => (
  <Card className="h-full transition-all hover:shadow-lg">
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl ${iconBgColor}`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Workshop Overview</h3>
          <p className="text-gray-600 leading-relaxed">{overview}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Key Learning Areas</h3>
          <ul className="space-y-2">
            {learningAreas.map((area, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-600">{area}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Hands-on Experience</h3>
          <ul className="space-y-2">
            {experience.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <span className="text-xl">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Card>
);

const NewWorkshop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const workshopImages = [
    { src: workshop1, title: 'Vehicle Assembly Training', session: 'Basic Training' },
    { src: workshop2, title: 'Component Analysis Session', session: 'Advanced Analysis' },
    { src: workshop3, title: 'Brake System Workshop', session: 'Safety Systems' },
    { src: workshop4, title: 'Engine Diagnostics Practice', session: 'Diagnostics' },
    { src: workshop5, title: 'Suspension Testing Lab', session: 'Testing' },
    { src: workshop6, title: 'Safety Inspection Training', session: 'Safety' },
    { src: workshop7, title: 'Electric Systems Workshop', session: 'Electronics' },
    { src: workshop8, title: 'Final Assembly Practice', session: 'Assembly' },
    { src: workshop9, title: 'Advanced Vehicle Dynamics', session: 'Dynamics' },
    { src: workshop11, title: 'Hybrid Vehicle Technology', session: 'Hybrid Systems' },
    { src: workshop20, title: 'Electric Vehicle Fundamentals', session: 'EV Basics' },
    { src: workshop21, title: 'Automotive Safety Standards', session: 'Safety Standards' }
  ];

  useEffect(() => {
    let interval;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === workshopImages.length - 3 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling, workshopImages.length]);

  const moveNext = () => {
    setCurrentSlide((prev) => (prev === workshopImages.length - 3 ? 0 : prev + 1));
  };

  const movePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? workshopImages.length - 3 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              AEG Workshop Training Program
            </h1>
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2 text-white/90">
                {/* <Calendar className="w-5 h-5" /> */}
                {/* <span>6 Weeks Duration</span> */}
              </div>
              <div className="flex items-center gap-2 text-white/90">
                {/* <Users className="w-5 h-5" /> */}
                {/* <span>Limited to 20 Participants</span> */}
              </div>
              <div className="flex items-center gap-2 text-white/90">
                {/* <Clock className="w-5 h-5" /> */}
                {/* <span>40 Hours of Training</span> */}
              </div>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
            AEG Group is conducting a comprehensive hands-on training program designed to provide participants with practical knowledge, real-world problem-solving skills, and industry-relevant expertise. This workshop covers key areas of automobile engineering and simulation-based structural analysis, offering a unique blend of theoretical learning and hands-on experience to enhance technical skills and career prospects.
            </p>
          </div>
        </div>
      </div>

      {/* Workshop Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <WorkshopCard
            icon={Wrench}
            title="MechAuto Workshop"
            iconBgColor="bg-blue-100"
            iconColor="text-blue-600"
            overview="This workshop provides an in-depth hands-on experience in vehicle conceptualization, overhauling, and component analysis to enhance understanding of automobile design and mechanics."
            learningAreas={[
              "Dismantling & Assembly – Hands-on practice with vehicle components",
              "Engine & Suspension Systems – Understanding mounting, transmission, and braking",
              "Automotive Safety & Crashworthiness – Learning modern safety standards",
              "Vehicle Diagnostics & Troubleshooting – Detecting and solving mechanical issues",
              "Modern Vehicle Communication Systems – Exploring automation and connectivity"
            ]}
            experience={[
              { icon: "🔧", text: "Complete overhauling of vehicle components" },
              { icon: "🔧", text: "Live practical demonstration on braking & suspension systems" },
              { icon: "🔧", text: "Interactive Q&A sessions with automotive engineers" },
              { icon: "🔧", text: "Certificate of participation awarded" }
            ]}
          />

          <WorkshopCard
            icon={Computer}
            title="ANSYS Workshop: Simulation & Structural Analysis"
            iconBgColor="bg-purple-100"
            iconColor="text-purple-600"
            overview="This program focuses on engineering simulations using ANSYS software, providing participants with the skills to analyze, optimize, and validate mechanical designs for real-world applications."
            learningAreas={[
              "Structural Analysis – Load testing on automobile components",
              "Thermal Analysis – Heat distribution and temperature effects",
              "Stress Concentration Studies – Evaluating material strength",
              "Component Design & Optimization – Simulating real-world conditions",
              "Hands-on ANSYS Training – Practical exercises on springs, pistons, and other parts"
            ]}
            experience={[
              { icon: "💻", text: "Live simulation exercises with ANSYS software" },
              { icon: "💻", text: "Stress & thermal analysis of automotive parts" },
              { icon: "💻", text: "Industry expert guidance on structural design principles" },
              { icon: "💻", text: "Certification for successful completion" }
            ]}
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto  px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Workshop Gallery</h2>
        <div className="relative group bg-gray-100 rounded-2xl p-4">
          {/* Gallery Carousel */}
          <div className="flex overflow-hidden">
            {workshopImages.slice(currentSlide, currentSlide + 3).map((item, index) => (
              <div key={index} className="w-1/3 p-1">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2 text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.session}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
            <button
              onClick={movePrev}
              className="p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={moveNext}
              className="p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {workshopImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWorkshop;