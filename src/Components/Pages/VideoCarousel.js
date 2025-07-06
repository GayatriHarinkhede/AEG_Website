import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const VideoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Video Carousel Component
  const VideoCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const videos = [
      {
        id: 1,
        title: "Innovation in Technology",
        description: "Discover cutting-edge solutions that transform businesses",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
        duration: "3:45"
      },
      {
        id: 2,
        title: "Research Excellence",
        description: "Advancing knowledge through groundbreaking research",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
        duration: "4:20"
      },
      {
        id: 3,
        title: "Global Conferences",
        description: "Connecting minds and sharing insights worldwide",
        thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop",
        duration: "2:15"
      }
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % videos.length);
      }, 6000);
      return () => clearInterval(timer);
    }, [videos.length]);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
    };
  

 return (
     <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl">
       <div 
         className="flex transition-transform duration-700 ease-in-out h-full"
         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
       >
         {videos.map((video, index) => (
           <div key={video.id} className="w-full flex-shrink-0 relative group">
             <img 
               src={video.thumbnail} 
               alt={video.title}
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
             
             {/* Play Button */}
             <div className="absolute inset-0 flex items-center justify-center">
               <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all transform hover:scale-110">
                 <Play className="text-white ml-1" size={32} fill="white" />
               </button>
             </div>
 
             {/* Video Info */}
             <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
               <div className="flex justify-between items-end">
                 <div>
                   <h3 className="text-3xl font-bold mb-2">{video.title}</h3>
                   <p className="text-lg opacity-90 mb-2">{video.description}</p>
                   <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                     {video.duration}
                   </span>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
       
       {/* Navigation buttons */}
       <button 
         onClick={prevSlide}
         className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all hover:scale-110"
       >
         <ChevronLeft size={24} />
       </button>
       <button 
         onClick={nextSlide}
         className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all hover:scale-110"
       >
         <ChevronRight size={24} />
       </button>
       
       {/* Dots indicator */}
       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
         {videos.map((_, index) => (
           <button
             key={index}
             onClick={() => setCurrentSlide(index)}
             className={`w-3 h-3 rounded-full transition-all duration-300 ${
               currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
             }`}
           />
         ))}
       </div>
     </div>
   );
 };
 
};

export default VideoCarousel;