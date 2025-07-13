import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Ach.css';
// import { Link } from 'react-router-dom';
import slide1 from './image/Logo/Slide/Welcome.jpg';
import slide2 from './image/Logo/Slide/About.jpg';
import slide3 from './image/Logo/Slide/Conference.jpg';
const AchievementsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { 
      type: 'image', 
      content: slide1, 
      text: { 
        heading: 'About AEG', 
        subheading: ' AEG Consultancy Services PVT. LTD. is a leading provider of comprehensive research solutions, serving both academic and industrial sectors. The company specializes in a wide range of services, including research publications, the design and development of research setups, and the supply of critical materials and laboratory equipment.'
      } 
    },
    { 
      type: 'image', 
      content: slide2, 
      text: { 
        heading: 'ABOUT VIDHYAPEETH INSTITUTE OF SCIENCE & TECHNOLOGY', 
        subheading: 'Vidhyapeeth Institute of Science and Technology (VIST), established in 2009, is situated in Bhopal, offering a pollution-free environment surrounded by hills. Promoted by Maa Saraswati Education Society and supported by the Suhane Group, VIST aims to fulfill the higher education needs in teaching, research, and community service. The institute is AICTE-approved, affiliated with RGPV and Barkatullah University, and provides degrees in Engineering and Management. VIST also offers value-added courses tailored to current industry trends to meet manpower demands.'
      } 
    },
    { 
      type: 'image', 
      content: slide3, 
      text: { 
        heading: 'Conferences', 
        subheading: 'AEG supports the global research community by organizing international conferences, fostering collaboration, and sharing cutting-edge knowledge. Partnering with organizations like the Department of Science & Technology (DST) and the Indian Council of Medical Research (ICMR), AEG executes government-funded research initiatives, equipping researchers with essential tools and resources for scientific advancement.' 
      } 
    },
  ];

  const totalSlides = slides.length;
  const slideInterval = useRef();

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 8000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval.current); // Cleanup on component unmount
  }, [nextSlide]);

  const handleManualScroll = (direction) => {
    clearInterval(slideInterval.current); // Stop auto-scrolling
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
    slideInterval.current = setInterval(nextSlide, 8000); // Restart auto-scrolling
  };

  return (
    <div className="achievements-slider-container">
      <div className="achievements-slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`achievement-slide-item ${index === currentSlide ? 'achievement-slide-active' : ''}`}
          >
            <div className="achievement-slide-overlay"></div>
            <div className="achievement-slide-text">
              <h1 className="achievement-slide-heading">{slide.text.heading}</h1>
              <p className="achievement-slide-subheading">{slide.text.subheading}</p>
              {/* <button className='contact'><Link to="/ContactForm">Contact Us</Link></button> */}
            </div>
          </div>
        ))}
      </div>
      <button className="achievement-slider-button prev" onClick={() => handleManualScroll('prev')}>&#10094;</button>
      <button className="achievement-slider-button next" onClick={() => handleManualScroll('next')}>&#10095;</button>
    </div>
  );
};

export default AchievementsSlider;
