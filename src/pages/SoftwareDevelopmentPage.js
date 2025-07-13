import React, { useState, useEffect } from 'react';
import Navbar from '../pages/Softwarepages/Navbar';
import HeroSection from '../pages/Softwarepages/HeroSection';
import ServicesSection from '../pages/Softwarepages/ServicesSection';
import TechnologiesSection from '../pages/Softwarepages/TechnologiesSection';
import AboutSection from '../pages/Softwarepages/AboutSection';
import TestimonialsSection from '../pages/Softwarepages/TestimonialsSection';
import WhatsAppButton from '../pages/Softwarepages/WhatsAppButton';
import NewFooter from '../pages/NewFooter';

// CSS styles
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .float-animation {
    animation: float 3s ease-in-out infinite;
  }
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .gradient-bg {
    background: linear-gradient(45deg, #f0f9ff, #e0f2fe, #bae6fd, #e5e7eb);
    background-size: 400%;
    animation: gradientShift 15s ease infinite;
  }
  @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
    70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
  }
  .pulse-animation {
    animation: pulse 2s infinite;
  }
  .feature-card {
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  .stat-card {
    background: linear-gradient(135deg, #3b82f6, #10b981);
    color: white;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }
  .stat-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
    transform: rotate(30deg);
  }
  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .stat-label {
    font-size: 0.9rem;
    opacity: 0.9;
  }
  .flow-step {
    position: relative;
    z-index: 1;
  }
  .flow-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -30px;
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, #3b82f6, #10b981);
  }
  .flow-connector {
    position: absolute;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background: #3b82f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .testimonial-carousel {
    position: relative;
    min-height: 300px;
    overflow: hidden;
    padding: 0 rem;
  }
  .carousel-indicators {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }
  .carousel-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #cbd5e1;
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .carousel-indicator.active {
    background: #3b82f6;
    transform: scale(1.2);
  }
  .testimonial-content {
    padding: 1.5rem;
  }
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
  }
  .carousel-button:hover {
    background: #f1f5f9;
    transform: translateY(-50%) scale(1.1);
  }
  .carousel-button.prev {
    left: 1rem;
  }
  .carousel-button.next {
    right: 1rem;
  }
  @media (max-width: 768px) {
    .flow-step:not(:last-child)::after {
      display: none;
    }
    .flow-connector {
      display: none;
    }
    .mobile-menu-closed {
      height: 0;
      overflow: hidden;
    }
    .mobile-menu-open {
      height: auto;
    }
    .testimonial-carousel {
      min-height: 380px;
      padding: 0 2rem;
    }
    .testimonial-content {
      padding: 1.25rem;
    }
    .testimonial-text {
      font-size: 1rem;
      line-height: 1.5;
    }
    .carousel-button {
      width: 36px;
      height: 36px;
      top: 45%;
    }
    .carousel-button.prev {
      left: 0.5rem;
    }
    .carousel-button.next {
      right: 0.5rem;
    }
  }
  @media (max-width: 640px) {
    .testimonial-carousel {
      min-height: 420px;
      padding: 0 1.5rem;
    }
  }
  @media (max-width: 480px) {
    .testimonial-carousel {
      min-height: 460px;
      padding: 0 1rem;
    }
    .testimonial-content {
      padding: 1rem;
    }
    .testimonial-text {
      font-size: 0.95rem;
    }
    .carousel-button {
      width: 32px;
      height: 32px;
      top: 40%;
    }
    .carousel-button.prev {
      left: 0.25rem;
    }
    .carousel-button.next {
      right: 0.25rem;
    }
  }
  @media (max-width: 360px) {
    .testimonial-carousel {
      min-height: 500px;
    }
  }
`;

const SoftwareDevelopmentPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      <style>{styles}</style>
      
      <Navbar scrollY={scrollY} />
      <HeroSection />
      <ServicesSection />
      <TechnologiesSection />
      <AboutSection />
      <TestimonialsSection />
      <WhatsAppButton />
      <NewFooter />
    </div>
  );
};

export default SoftwareDevelopmentPage;