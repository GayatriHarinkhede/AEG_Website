import React from 'react';
import Ach1 from './image/Ach1.jpg';
import Ach3 from './image/Ach3.jpg';
import Ach4 from './image/Ach4.jpg';
import Ach6 from './image/Ach6.jpg';
import Ach8 from './image/Logo/achivements/ach8.jpg';
import Ach7 from './image/Logo/achivements/Ach7.jpg';
import Ach9 from './image/Logo/achivements/ach9.jpg';
import Ach10 from './image/Logo/achivements/ach10.jpg';
import Ach11 from './image/Logo/achivements/ach11.jpg';
import Ach12 from './image/Logo/achivements/ach12.jpg';
import Ach13 from './image/Logo/achivements/ach13.jpg';

// Achievements data
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

// Achievement Card component
const AchievementCard = ({ title, imgSrc, link }) => {
  return (
    <div className="rounded-lg p-2 mx-2 transition-transform transform hover:scale-105 flex flex-col items-center w-[220px]"> 
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center">
          <img
            src={imgSrc}
            alt={title}
            className="w-72 h-80 rounded-md object-cover" // Consistent width and height for all images
          />
          {title && <h2 className="text-black font-bold text-sm text-center mt-2">{title}</h2>}
        </a>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            src={imgSrc}
            alt={title}
            className="w-72 h-80 rounded-md object-cover" // Consistent width and height for all images
          />
          {title && <h2 className="text-black font-bold text-sm text-center mt-2">{title}</h2>}
        </div>
      )}
    </div>
  );
}; 

const Achievements = () => {
  return (
    <div className="py-8">
      {/* Centered Heading */}
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Our Achievements</h1>

      {/* Achievements Scroll Menu */}
      <div className="flex justify-start items-center overflow-x-auto snap-x snap-mandatory space-x-4 pb-4">
        {achievementsData.map((achievement, index) => (
          <div className="snap-start flex-shrink-0" key={index}>
            <AchievementCard
              title={achievement.title}
              imgSrc={achievement.imgSrc}
              link={achievement.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
