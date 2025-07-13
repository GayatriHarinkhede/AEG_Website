import React, { useState, useEffect, useRef, useCallback } from 'react';
import './slider.css';
import { Link } from 'react-router-dom';
import slide1 from './image/Logo/Slide/Welcome.jpg';
import slide2 from './image/Logo/Slide/About.jpg';
import slide3 from './image/Logo/Slide/Conference.jpg';
import slide4 from './image/slide2.jpg';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true); // Track if the slider is auto-scrolling
  const slides = [
    { type: 'image', content: slide1, text: { heading: 'Welcome to AEG', subheading: ' AEG Consultancy Services PVT. LTD. is a leading provider of comprehensive research solutions, serving both academic and industrial sectors. The company specializes in a wide range of services, including research publications, the design and development of research setups, and the supply of critical materials and laboratory equipment'} },
    { type: 'image', content: slide2, text: { heading: 'About Us', subheading: 'AEG Consultancy Services PVT. LTD. is a leading provider of comprehensive research solutions, serving both academic and industrial sectors. The company specializes in a wide range of services, including research publications, the design and development of research setups, and the supply of critical materials and laboratory equipment.' } },
    // { type: 'image', content: slide3, text: { heading: 'Conferences', subheading: 'AEG supports the global research community by organizing international conferences, fostering collaboration, and sharing cutting-edge knowledge. Partnering with organizations like the Department of Science & Technology (DST) and the Indian Council of Medical Research (ICMR), AEG executes government-funded research initiatives, equipping researchers with essential tools and resources for scientific advancement.' } },
    { type: 'image', content: slide4, text: { heading: 'Products and Services', subheading: 'AEG Consultancy Services PVT. LTD. is a premier provider of end-to-end research solutions for academic and industrial sectors. The company offers a wide range of services, including the development of experimental setups for researchers, support for research publications, and the design and construction of advanced research facilities.' } }
  ];

  const totalSlides = slides.length;
  const slideInterval = useRef();

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isAutoScrolling) {
      slideInterval.current = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(slideInterval.current); // Cleanup on component unmount
  }, [nextSlide, isAutoScrolling]);

  const handleManualScroll = (direction) => {
    clearInterval(slideInterval.current); // Stop auto-scrolling
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
    setIsAutoScrolling(true); // Restart auto-scrolling
  };

  const handleSlideClick = () => {
    setIsAutoScrolling(prev => !prev); // Toggle auto-scrolling
  };

  return (
    <div className="slider-container" onClick={handleSlideClick}>
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.content})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              width: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-text">
              <h1>{slide.text.heading}</h1>
              <p>{slide.text.subheading}</p>
              <button className='contact'><Link to="/ContactForm">Contact Us</Link></button>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={() => handleManualScroll('prev')}>&#10094;</button>
      <button className="next" onClick={() => handleManualScroll('next')}>&#10095;</button>
      {/* <Notice /> */}
    </div>
  );
};

export default Slider;
