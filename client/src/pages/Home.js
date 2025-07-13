import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';
import Slider from '../Components/Slider';
import ContactForm from '../Components/Contact';
import Hero from '../Components/Hero';
import Achievements from '../Components/Achivements';
import Clients from '../Components/Client';
import Footer from '../Components/Footer';
import About from '../Components/About';
import AEGLogo from '../Components/image/Logo/AEG logo.jpg';

const NewHome = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const HomeRef = useRef(null);
  const aboutRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();
  const [isHighlighted, setIsHighlighted] = useState(true);
  // const location = useLocation();
 // Add highlight animation class for 5 seconds when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    <div className=''>
      <header className={`header ${isSticky ? 'sticky-nav' : ''} ${showNav ? 'visible-nav' : 'hidden-nav'}`}>
        <nav className="w-full ">
          <div className="container1 mx-auto flex justify-between items-center  ">
            <Link to='/' className="brand-link">
              <img src={AEGLogo} alt="AEG Logo" className="" />
            </Link>

            <button className="hamburger lg:hidden" onClick={toggleMobileMenu}>
              &#9776;
            </button>

           <ul className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
  {/* Home button with conditional behavior */}
  <li>
    {location.pathname === '/' ? (
      <button onClick={scrollToTop}>Home</button>
    ) : (
      <Link to="/newconference">
        <button>Home</button>
      </Link>
    )}
  </li>
  
  {/* Conference dropdown */}
  <li className="relative group">
    <button className="flex items-center gap-1">
      Conference
      <sup className="bg-red-500 text-white text-xs px-1 rounded">New</sup>
    </button>
    <div className="absolute hidden group-hover:block">
      <div className="dropdown-container">
        <div className="cards-section">
          <Link to="/UpcomingConference" className="menu-card bg-slate-200 text-black">
            <i className="fas fa-calendar-alt text-3xl mb-2"></i>
            <span className="text-center">Upcoming Conferences</span>
          </Link>
          <Link to="/Webinar" className="menu-card bg-slate-300 text-black">
            <i className="fas fa-video text-3xl mb-2"></i>
            <span className="text-center">Webinars</span>
          </Link>
          <Link to="/register" className="menu-card bg-slate-200 text-black">
            <i className="fas fa-calendar-check text-3xl mb-2"></i>
            <span className="text-center">Past Conferences</span>
          </Link>
          <Link
            to="/ConferenceGallery"
            className="menu-card bg-slate-300 text-black hover:bg-blue-800 transition-colors"
          >
            <i className="fas fa-photo-video text-3xl mb-2"></i>
            <span className="text-center">Conference Videos & Galleries</span>
          </Link>
        </div>
      </div>
    </div>
  </li>
  
  <li>
    <Link to="/ContactForm">
      <button>Contact us</button>
    </Link>
  </li> 
  
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

      {/* Uncommented sections */}
      {/* <div ref={HomeRef} id="home">
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
        <ContactForm />
      </div> */}

      {/* <Hero /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default NewHome;