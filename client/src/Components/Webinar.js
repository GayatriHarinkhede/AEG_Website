import React, { useState, useEffect } from 'react';
import NewHome from '../pages/Home';

const Webinar = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
   <>
<NewHome/>
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className={`text-center transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Main Content */}
        <div className="space-y-8">
          {/* Pulsing Circle Background */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-ping" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-ping animation-delay-300" />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 relative animate-fade-in">
            Coming Soon
          </h1>

          {/* Subtitle */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-blue-200 animate-slide-up">
              Expert Webinar Series
            </p>
            <p className="text-lg text-blue-100 max-w-xl mx-auto animate-slide-up animation-delay-300">
              Join us for an incredible series of interactive sessions with industry leaders
            </p>
          </div>

          {/* Countdown Timer
          <div className="flex justify-center space-x-4 md:space-x-8 mt-8">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div 
                key={unit}
                className={`transform transition-all duration-500 hover:scale-110 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 md:w-24 h-16 md:h-24 bg-white bg-opacity-10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl md:text-4xl font-bold text-white">{value}</span>
                </div>
                <p className="text-blue-200 mt-2 capitalize">{unit}</p>
              </div>
            ))}
          </div> */}

          {/* Newsletter Signup
          <div className="mt-12 space-y-4 animate-fade-in animation-delay-500">
            <p className="text-blue-200">Get notified when we launch</p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-blue-200 backdrop-blur-sm border border-white border-opacity-20 focus:outline-none focus:border-opacity-50 w-full md:w-64 transition-all"
              />
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 w-full md:w-auto">
                Notify Me
              </button>
            </div>
          </div> */}

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
            {[
              'Interactive Sessions',
              'Expert Speakers',
              'Live Q&A'
            ].map((feature, index) => (
              <div
                key={feature}
                className={`transform transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all">
                  <p className="text-white font-semibold">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Webinar;