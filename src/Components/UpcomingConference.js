import React from 'react';
import { Sparkles, Stars, Zap } from 'lucide-react';
import 'tailwindcss/tailwind.css';
import NewHome from '../pages/Home';

const UpcomingConference = () => {
  return (
   <>
   <NewHome/>
    <div className="min-h-screen bg-gradient-to-br mt-14 from-orange-500 to-black p-8 relative overflow-hidden">
      
      {/* Enhanced animated background elements 
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500  to-black animate-gradient-x" />
      
      {/* Aurora Effect */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute w-full h-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 animate-aurora" />
        <div className="absolute w-full h-full bg-gradient-to-r from-blue-500/30 via-green-500/30 to-purple-500/30 animate-aurora-reverse" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-float"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content Card */}
      <div className="relative z-10 max-w-2xl mx-auto rounded-xl p-5 shadow-2xl transition-transform duration-300 backdrop-blur-md bg-gradient-to-br from-black/70 via-gray-900/70 to-black/70 border border-gray-700/50 hover:scale-[1.02]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500/10 to-pink-500/10 rounded-xl animate-pulse-slow" />
        
        <div className="flex items-center gap-2 animate-bounce-slow">
          <Stars className="w-6 h-6 text-yellow-300" />
          <h1 className="text-4xl font-bold text-white mb-6">
            Upcoming Conference
          </h1>
          <Stars className="w-6 h-6 text-yellow-300" />
        </div>
        
        <div className="bg-gradient-to-r from-black to-gray-900/80 rounded-lg p-6 mb-8 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-600/30">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-300 animate-spin-slow" />
            <h2 className="text-2xl font-semibold text-white mb-4">
              Join Us for an Inspiring Experience!
            </h2>
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-100 text-lg hover:text-white transition-colors duration-300">
            Stay tuned for more details about our exciting upcoming conference!
          </p>
          
          <p className="text-gray-200 hover:text-white transition-colors duration-300">
            Don't miss out on the opportunity to learn and network!
          </p>
          
          <button className="group w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden">
            <div className="flex items-center justify-center gap-2">
              <span>Contact Us </span>
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-20" />
          </button>
        </div>
      </div>
    </div>
   </>
  );
};

export default UpcomingConference;