import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: 'Dr. Sharad Sharma',
      company: 'ASSURANCE EDUCATIONAL GROUP',
      rating: 5,
      text: 'AEG provided end-to-end support for our thesis and research projects with exceptional professionalism. Their clear guidance, timely delivery, and technical accuracy made the entire academic process seamless and effective.'
    },
    {
      name: 'Editorial Team',
      company: 'IJTSE JOURNAL',
      rating: 5,
      text: 'Highly dependable and forward-thinking. AEG turned our journal publishing platform into a streamlined, professional product that our authors and editors love.'
    },
    {
      name: 'Dr. Raghuvendra',
      company: 'AIIMS',
      rating: 5,
      text: 'AEG’s team demonstrated outstanding technical expertise by developing a custom patient detail and QR generator application for our institute. The solution streamlined data access, improved accuracy, and greatly enhanced our operational workflow.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Hear from our satisfied clients about their experiences.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="testimonial-carousel relative">
            <button 
              onClick={prevTestimonial}
              className="carousel-button prev"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="carousel-button next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-blue-200/50 shadow-lg absolute w-full"
              >
                <div className="testimonial-content">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-xl italic testimonial-text">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="mt-auto">
                    <div className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-blue-500 text-sm sm:text-base md:text-lg">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`carousel-indicator ${currentTestimonial === index ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;