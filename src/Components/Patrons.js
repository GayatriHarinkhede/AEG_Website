import React, { useRef } from 'react';
import Khushilal from './image/ca.jpg';
import SRK from './image/cp.jpg';
import AIMS from './image/p.jpg';
import CRIST from './image/pa.jpg';
import './Patorns.css';

const universities = [
  { name: '', logo: AIMS },
  { name: '', logo: SRK },
  { name: '', logo: Khushilal },
  { name: '', logo: CRIST },
];

const Patrons = () => {
  const containerRef = useRef(null);
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const container = containerRef.current;
    const touchCurrentX = e.changedTouches[0].clientX;
    const touchDiffX = touchCurrentX - touchStartX;
    container.scrollLeft -= touchDiffX;
    touchStartX = touchCurrentX;
  };

  return (
    <div className="patrons-container">
      <h1 className="patrons-title">Our Patrons</h1>
      <div
        className="patrons-scroll-wrapper"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {universities.map((university, index) => (
          <div className="patrons-item" key={index}>
            <img
              src={university.logo}
              alt={`${university.name} Logo`}
              className="patrons-logo"
            />
            <p className="patrons-name">{university.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patrons;
