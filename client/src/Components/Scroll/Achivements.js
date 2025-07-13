import React, { useEffect, useRef, useState } from 'react';
import './Achivements.css';

import Ach1 from '../image/Ach1.jpg';
import Ach3 from '../image/Ach3.jpg';
import Ach4 from '../image/Ach4.jpg';
import Ach6 from '../image/Ach6.jpg';
import Ach7 from '../image/Logo/achivements/Ach7.jpg';
import Ach8 from '../image/Logo/achivements/ach8.jpg';
import Ach9 from '../image/Logo/achivements/ach9.jpg';
import Ach10 from '../image/Logo/achivements/ach10.jpg';
import Ach11 from '../image/Logo/achivements/ach11.jpg';
import Ach12 from '../image/Logo/achivements/ach12.jpg';
import Ach13 from '../image/Logo/achivements/ach13.jpg';

const achievementsData = [
  { title: "Lopifit cycle Designing", imgSrc: Ach1, link: "" },
  { imgSrc: Ach3 },
  { title: "Automatic Hand Washing Station", imgSrc: Ach4, link: "" },
  { imgSrc: Ach6 },
  { title: "Paper in Medical Forensic Science", imgSrc: Ach8, link: "https://www.sciencedirect.com/science/article/abs/pii/S0379073824002391" },
  { imgSrc: Ach7 },
  { title: "Recognized by AIIMS Bhopal", imgSrc: Ach9, link: "" },
  { title: "Recognition in NIT Council", imgSrc: Ach10, link: "" },
  { title: "Recognised By MANIT Bhopal", imgSrc: Ach11, link: "" },
  { title: "Paper in JERT on Renewable Energy", imgSrc: Ach12, link: "https://asmedigitalcollection.asme.org/energyresources/article-abstract/146/12/120801/1201804/Downdraft-Gasification-for-Biogas-Production-The?redirectedFrom=fulltext" },
  { imgSrc: Ach13 },
];

const Achievements = () => {
  const containerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true); // State for auto-scroll

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollContent = () => {
      if (!autoScroll) return; // Pause auto-scroll when user is interacting

      // Scroll the content left by a small increment
      container.scrollLeft += 1;
      // Reset scroll position if reached the end
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    };

    const scrollInterval = setInterval(scrollContent, 70); // Set the scroll interval

    // Cleanup on component unmount
    return () => clearInterval(scrollInterval);
  }, [autoScroll]);

  // Prevent default scroll behavior when clicking on the scroll container
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent default behavior to allow smooth scrolling
  };

  return (
    <div className="achievements-container">
      <h1 className="achievements-title">Our Achievements</h1>

      <div
        className="scroll-container"
        ref={containerRef}
        onMouseEnter={() => setAutoScroll(false)} // Stop scrolling on mouse enter
        onMouseLeave={() => setAutoScroll(true)} // Resume scrolling on mouse leave
        onMouseDown={handleMouseDown} // Prevent default scroll behavior
      >
        {achievementsData.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <a href={achievement.link || "#"} target="_blank" rel="noopener noreferrer">
              <img
                src={achievement.imgSrc}
                alt={achievement.title}
                className="achievement-image"
              />
              {achievement.title && <h2 className="achievement-title">{achievement.title}</h2>}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
