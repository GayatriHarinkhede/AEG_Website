import React, { useEffect, useRef } from 'react';
import './ConferenceTrack.css';

const ConferenceTracks = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     let scrollAmount = 0;
//     const scrollWidth = container.scrollWidth;  // Total scrollable width
//     const visibleWidth = container.clientWidth;  // Visible width of the container

//     const scrollContent = () => {
//       scrollAmount += visibleWidth / 3;  // Scroll by one-third of the visible width each time

//       if (scrollAmount >= scrollWidth - visibleWidth) {
//         // Reset to the beginning once the scroll reaches the end
//         scrollAmount = 0;
//       }

//       container.scrollTo({
//         left: scrollAmount,
//         behavior: 'smooth',
//       });
//     };

//     const scrollInterval = setInterval(scrollContent, 3000); // Auto-scroll every 3 seconds

//     return () => clearInterval(scrollInterval);  // Clean up on unmount
//   }, []);

  return (
    <>
      <div className="conference-header">
        <h1>Conference Tracks</h1>
        <p>
          Original & Unpublished Research Papers are Invited for Presentation in The
          Following Areas, But Not Restricted to:
        </p>
      </div>
      <div className="scroll-container" >
        {/* Track 1 Card */}
        <div className="track-card scroll-ml-6 snap-start">
          <h2>Track 1: Technological Innovation & Strategic Management</h2>
          <ul>
            <li>✔ Digital Transformation and Emerging Technologies in Business</li>
            <li>✔ Risk Management and Technology Foresight</li>
            <li>✔ Open Innovation and Strategic Collaboration</li>
            <li>✔ Globalization and Technological Strategy</li>
            <li>✔ Technology-Driven Business Models & Innovation Management</li>
          </ul>
        </div>
  
        {/* Track 2 Card */}
        <div className="track-card scroll-ml-6 snap-start">
          <h2>Track 2: AI-Driven Computational Intelligence</h2>
          <ul>
            <li>✔ Neural Networks and Deep Learning Applications</li>
            <li>✔ Fuzzy Logic and Expert Systems in Decision Making</li>
            <li>✔ Evolutionary Algorithms and Optimization Techniques</li>
            <li>✔ Image Recognition and Computer Vision Technologies</li>
            <li>✔ AI in Natural Language Processing and Autonomous Robotics</li>
          </ul>
        </div>
  
        {/* Track 3 Card */}
        <div className="track-card scroll-ml-6 snap-start">
          <h2>Track 3: Innovations in Renewable Energy</h2>
          <ul>
            <li>✔ Advancements in Solar and Wind Energy Technologies</li>
            <li>✔ Energy Storage and Smart Grid Systems</li>
            <li>✔ Sustainable Bio Energy and Waste Conversion Technologies</li>
            <li>✔ Energy Efficiency in Industrial and Agricultural Sectors</li>
            <li>✔ Green Hydrogen Technologies & Ecosystem</li>
          </ul>
        </div>
  
        {/* Track 4 Card */}
        <div className="track-card scroll-ml-6 snap-start">
          <h2>Track 4: Advanced Modeling & Innovative System Design</h2>
          <ul>
            <li>✔ Structure Design and Green Buildings Simulations</li>
            <li>✔ E-Vehicles and Automobile System Modelling</li>
            <li>✔ Innovations in Additive Manufacturing and Smart Materials</li>
            <li>✔ Micro- and Nano-Scale Mechanics for Precision Device Design</li>
          </ul>
        </div>
  
        {/* Track 5 Card */}
        <div className="track-card scroll-ml-6 snap-start">
          <h2>Track 5: Emerging Trends in AI</h2>
          <ul>
            <li>✔ AI Ethics and Policy</li>
            <li>✔ Advanced Robotics and Automation</li>
            <li>✔ AI in Healthcare</li>
            <li>✔ AI in Finance and Risk Management</li>
            <li>✔ AI in Marketing and Customer Experience</li>
          </ul>
        </div>
      </div>
    </>
  );
  
};

export default ConferenceTracks;
