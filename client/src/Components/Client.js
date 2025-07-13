import React, { useEffect, useRef } from 'react';
import './Client.css'; // External CSS for styling
import RNTU from './image/Logo/RNTU.j.jpg';
import Khushilal from './image/Khushilal.jpg';
import SRK from './image/SRK.jpg';
import AIMS from "./image/Logo/Aims.jpg";
import Manit from "./image/Manit.jpg";
import CRIST from "./image/Logo/Crist.jpg";
import CIPAT from './image/Logo/Slide/CIPAT.jpg';

const universities = [
  { name: 'AIIMS Bhopal', logo: AIMS },
  { name: 'SRK University', logo: SRK },
  { name: 'Khushilal Hospital', logo: Khushilal },
  { name: 'CHRIST University', logo: CRIST },
  { name: 'MANIT University', logo: Manit },
  { name: 'CIPET INSTITUTE', logo:CIPAT },
  { name: 'RNTU University', logo: RNTU },
];

const Clients = () => {
  const containerRef = useRef(null);
  let touchStartX = 0;

  // Touch event handlers
  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const container = containerRef.current;
    const touchCurrentX = e.changedTouches[0].clientX;
    const touchDiffX = touchCurrentX - touchStartX; // Calculate the difference

    // Scroll the container by the touch difference
    container.scrollLeft -= touchDiffX; // Move the scroll position
    touchStartX = touchCurrentX; // Update the touchStartX for the next move
  };

  return (
    <div className="university-container">
      <h1 className="Client">Our Clients</h1>
      <div
        className="university-scroll-wrapper"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {universities.map((university, index) => (
          <div className="university-item" key={index}>
            {university.logo && (
              <img
                src={university.logo}
                alt={`${university.name} Logo`}
                className="university-logo"
              />
            )}
            <p className="university-name">{university.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
