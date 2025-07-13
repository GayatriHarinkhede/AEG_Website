import React, { useEffect, useRef, useState } from 'react';
import { Link,useLocation  } from 'react-router-dom';
import './Home.css';
import Slider from '../Components/Slider';
import ContactForm from '../Components/Contact';
import Hero from '../Components/Hero';
import Achievements from '../Components/Achivements'; // Corrected spelling
import Clients from '../Components/Client';
import Footer from '../Components/Footer';
import About from '../Components/About';
// import AEGLogo from './image/Logo/AEG logo.jpg';
import AEGLogo from '../Components/image/Logo/AEG logo.jpg';
import NewContactForm from './NewContact';

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const prevScrollY = useRef(0);
  const HomeRef = useRef(null);
  const aboutRef = useRef(null);
  const achievementsRef = useRef(null); // Corrected spelling
  const contactRef = useRef(null);
   const location = useLocation();
    const [isHighlighted, setIsHighlighted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsSticky(currentScrollY > 40);
      setShowNav(currentScrollY <= 100 || currentScrollY <= prevScrollY.current);

      // Close the mobile menu if the user scrolls
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
  };

  const selectItem = (element) => {
    document.querySelectorAll('.selected').forEach(item => {
      item.classList.remove('selected');
    });
    element.classList.add('selected');
  };

  const selectBox = (element) => {
    document.querySelectorAll('.selected-box').forEach(item => {
      item.classList.remove('selected-box');
    });
    element.classList.add('selected-box');
  };

  return (
    <div className='hello'>
      {/* 

// Update the header section in your Home.js */}

      <header className={`header ${isSticky ? 'sticky-nav' : ''} ${showNav ? 'visible-nav' : 'hidden-nav'}`}>
        <nav className="w-full ">
          <div className="container1 mx-auto flex justify-between items-center  ">
            <Link to='' className="brand-link">
              <img src={AEGLogo} alt="AEG Logo" className="h-22" />
            </Link>

            <button className="hamburger lg:hidden" onClick={toggleMobileMenu}>
              &#9776;
            </button>

            <ul className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
              <li><button onClick={() => scrollToSection(HomeRef)}>Home</button></li>
              {/* <li><button onClick={() => scrollToSection(aboutRef)}>About Us</button></li>
        <li><button onClick={() => scrollToSection(achievementsRef)}>Achievements</button></li>
        <li><button onClick={() => scrollToSection(contactRef)}>Contact Us</button></li>  */}

              
              <li><button onClick={() => scrollToSection(aboutRef)}>About Us</button></li>
              <li><button onClick={() => scrollToSection(achievementsRef)}>Achievements</button></li>
              <li><button onClick={() => scrollToSection(contactRef)}>Contact Us</button></li>
              <li><Link to="/products"><button>Products</button></Link></li>
              <li><Link to="/services"><button>Services</button></Link></li>
               {/* Back to AEG button with highlight effect */}
                {location.pathname !== '/' && (
                  <li>
                    <Link to="/">
                      <button className={`bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg transform transition-all duration-300 ${
                        isHighlighted ? 'pulse' : ''
                      }`}>
                        Back to AEG
                      </button>
                    </Link>
                  </li>
                )}
            </ul>
          </div>
        </nav>
      </header>

      <div ref={HomeRef} id="home">
        <Slider />
      </div>

      <div ref={aboutRef} id="about">
        <About />
      </div>

      <div ref={achievementsRef} id="achievements">
        <Achievements />
      </div>
      <Clients />
      <div ref={contactRef} id="contact">
        <NewContactForm/>
      </div>

      <Hero />
      <Footer />
    </div>
  );
};

export default Home;