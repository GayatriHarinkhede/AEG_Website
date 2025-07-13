// KeyNotes.js
import React from 'react';
import './Register.css'; // Optional: Separate CSS for styling
import sheetal from './image/Dr. sheetal jain.jpg';
import Sandeep from './image/Sandep jain.jpg';
import Reliance from './image/Reliance jain.jpg';
import Goyal from './image/Goyal.jpg';

const KeyNotes = () => {
  return (
    <div className="details-column">
      <h2>Key Notes Speakers</h2>
      <div className="images-row">
        <div className="image-container">
          <img src={Goyal} alt="Dr. S.B. Goyal" className="thumbnail" />
          <p className="image-name">Dr. S.B. Goyal</p>
          <p className='imgn'>Faculty of Information Technology City University, PJ Malaysia </p>
        </div>
        <div className="image-container">
          <img src={sheetal} alt="Dr. Sheetal Kumar Dewangan" className="thumbnail" />
          <p className="image-name">Dr. Sheetal Kumar Dewangan</p>
          <p className='imgn'>Post Doctoral Researcher at ASML, Ajou University, South Korea</p>
        </div>
        <div className="image-container">
          <img src={Sandeep} alt="Dr. Sandeep Jain" className="thumbnail" />
          <p className="image-name">Dr. Sandeep Jain</p>
          <p className='imgn'>Post Doctoral Researcher at EMD Lab, SKKU University, Republic of Korea</p>
        </div>
        <div className="image-container">
          <img src={Reliance} alt="Dr. Reliance Jain" className="thumbnail" />
          <p className="image-name">Dr. Reliance Jain</p>
          <p className='imgn'>Former Research Professor at Yeungnam University, South Korea</p>
        </div>
      </div>
    </div>
  );
};

export default KeyNotes;
