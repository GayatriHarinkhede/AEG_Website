import React from 'react';
import Vidhya from './image/v.jpg'; // Ensure correct image path
import './Guidline.css';
import paper from './image/Pdf/Paper template .pdf';
import Browse from './image/Pdf/International Conference 10th-11th jan.pdf';
 // Importing the CSS for styling
 // Assuming Down is a component for download button or similar action

const Guidline = () => {
  const tracksList1 = [
    'Limit paper to 8-9 pages length',
    'Papers should reflect novel ideas & research work',
    'Papers have not been published or presented anywhere',
  ];

  const tracksList2 = [
    'Research Journal of Engineering Technology & Medical (RJETM)',
    'A Journal of Medical Science & Technology (STM)',
  ];

  return (
    <section className="conference-tracks">
      <h2>SUBMISSION GUIDELINES</h2>
      <div className="tracks-list">
        <ul>
          <h1 className='track-head'>Instructions For Paper Writing</h1>
          <p className='Paper-writing'>
            Full length paper in Double Column IEEE Format must be submitted in soft copy in MS-Word format. 
            Paper must be sent via online submission at our <a href="http://www.aegservices.in/" className='a'>http://www.aegservices.in</a>
          </p>
          {tracksList1.map((track, index) => (
            <li key={index} className="track-item">
              <span className="icon"><i className="fas fa-check-circle"></i></span> {track}
            </li>
          ))}
          <p className='Further1'>For Further Guideline</p>
          <div className="buttonContainer">
        {/* Paper Template Button */}
        <button className="authorButton">
         <div>
         <a href={paper} download="PaperTemplate.pdf">
            Paper Submission Template
          </a>
         </div>
        </button>
      </div>
        </ul>
        
        <ul>
          <h1 className='track-head'>CALL FOR PAPERS</h1>
          <p className='paper'>
            Call for Paper is open for Technologists, Scientists, Professionals, Research scholars & Students to present their 
            original & unpublished work & experience as a Full Length paper in the AIC RAETHM conference.
          </p>
          <p className='All'>All accepted papers will be published with ISSN Journals :</p>
          {tracksList2.map((track, index) => (
            <li key={index} className="track-item">
              <span className="icon"><i className="fas fa-check-circle"></i></span> {track}
            </li>
          ))}
        </ul>

        <ul>
          <h1 className='track-head'>Venue</h1>
          <p className='venue-name'>VIDHYAPEETH INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
          <img src={Vidhya} alt="Vidhya Institute" className='venue-image'/>
          <p className='address'>Near New SOS Balgram, Sahara Bypass, Raisen Road Bhopal, MP, INDIA</p>
          <p className='Further'>For Further Details</p>
          <div className="buttonContainer">
        {/* Brochure Button */}
        <button className="authorButton1">
          <a href={Browse} download="Brochure.pdf">
            Brochure
          </a>
        </button>
        
      </div>
        </ul>
      </div>
      <div className='flex justify-center gap-9'>
     
      </div>
    </section>
  );
};

export default Guidline;
