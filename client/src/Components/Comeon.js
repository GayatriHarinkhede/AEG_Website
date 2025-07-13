import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import ContactForm from './Contact';
import Hero from './Hero';
import Achievements from './Achivements';
import Clients from './Client';
import Footer from './Footer';
import About from './About';
import AEGLogo from './image/Logo/AEG logo.jpg';
import './Home.css';
import ConferenceMenu from './ConferenceMenu';

// Conference Menu Component


// Main Home Component
const Comeon= () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const HomeRef = useRef(null);
  const aboutRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsSticky(currentScrollY > 40);
      setShowNav(currentScrollY <= 100 || currentScrollY <= prevScrollY.current);

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
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="hello">
      <header className={`header ${isSticky ? 'sticky-nav' : ''} ${showNav ? 'visible-nav' : 'hidden-nav'}`}>
        <nav className="w-full">
          <div className="container1 mx-auto flex justify-between items-center px-4 py-2">
            <Link to="" className="brand-link text-lg font-bold text-white">
              <img src={AEGLogo} alt="Logo" />
            </Link>
            <button className="hamburger" onClick={toggleMobileMenu}>
              &#9776;
            </button>
            <ul className={`nav-links flex ${isMobileMenuOpen ? 'show' : ''}`}>
              <li>
                <Link to="/">
                  <button onClick={() => scrollToSection(HomeRef)}>Home</button>
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection(aboutRef)}>About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection(achievementsRef)}>Achievements</button>
              </li>
              <li>
                <button onClick={() => scrollToSection(contactRef)}>Contact Us</button>
              </li>
              <li>
                <button>
                  <Link to="/Conference">Conference<sup className="new-badge">New</sup></Link>
                </button>
              </li>
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

      <div id="conference-menu">
      <ConferenceMenu/>
      </div>

      <Clients />
      <div ref={contactRef} id="contact">
        <ContactForm />
      </div>
      <Hero />
      <Footer />
    </div>
  );
};

export default Comeon;
