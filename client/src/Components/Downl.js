import React from 'react';
import styles from './Down.css';

const Down = () => {
  return (
    <div className="container">
      {/* Button Container */}
      <div className="buttonContainer">
        {/* Paper Template Button */}
        <button className="authorButton">
         <div>
         <a href="https://docs.google.com/document/d/1I-fttnmKFvip7C8hFkySouMVT-9Ufk98/export?format=pdf" download="PaperTemplate.pdf">
            Paper Template
          </a>
         </div>
        </button>
      </div>

      <div className="buttonContainer">
        {/* Brochure Button */}
        <button className="authorButton1">
          <a href="https://drive.google.com/uc?export=download&id=1tGENN3TnKpgMSJi0MB8QtntzGwE3d6Bj" download="Brochure.pdf">
            Brochure
          </a>
        </button>
      </div>

      {/* Add more buttons or links as needed */}
    </div>
  );
};

export default Down;
