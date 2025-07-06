import React from 'react';
import './Register.css'; // External CSS for styling
import sheetal from './image/Dr. sheetal jain.jpg';
import Sandeep from './image/Sandep jain.jpg'
import Reliance from './image/Reliance jain.jpg';
import conference from './image/Conferece-menu.jpg';
import ConferenceTrack from './ConferenceTrack';
import Goyal from './image/Goyal.jpg'
import ImportDates from './ImportDates';
import Submission from './Submission';
import Down from './Downl';
import RegisterForm from './RegisterForm';
import Guidline from './Guidline';
import Container from './Container';
import KeyNotes from './Key_Notes';
import Ach from './Ach';
import { Link } from 'react-router-dom';
import Patrons from './Patrons';
import NewHome from '../pages/Home';

const Register = () => {
  return (
  <>
  <NewHome/>
    <div className="conference-container mt-10">
      
      {/* Hero Section */}
      <section className="conference-hero">
    <h1> Annual International Conference On Recent Advances in Engineering Technology, Healthcare & Management (AIC-RAETHM 2025)<br />10th & 11th Jan. 2025</h1>
    <p className='organize'>Organized By</p>
    <p className='vidhya'>VIDHYAPEETH INSTITUTE OF SCIENCE AND TECHNOLOGY<br />
       Near New SOS Balgram, Sahara By Pass,<br />
       Raisen Road Bhopal, MP, INDIA
    </p>
    {/* <p>Join us for a day of insightful talks, networking, and innovation in technology.</p> */}
   
    <Link to="/ConferenceProceding">
        <button className="register-button1">Conference Proceeding</button>
    </Link>

</section>

      {/* Conference Details */}
     
  {/* Flex container */}
  <Ach/>
  <KeyNotes/>
  {/* <div className="details-column">
    <h2>Key Notes</h2>
    <div className="images-row">
      <div className="image-container">
        <img src={Goyal} alt="Dr. S.B. Goyal" className="thumbnail" />
        <p className="image-name">Dr. S.B. Goyal</p>
        <p className='imgn'>Information Technology City University, PJ Malaysia</p>
      </div>
      <div className="image-container">
        <img src={sheetal} alt="Dr. Sheetal Kumar Dewangan" className="thumbnail" />
        <p className="image-name">Dr. Sheetal Kumar Dewangan</p>
        <p className='imgn'>Researcher Ajou University, South Korea</p>
      </div>
      <div className="image-container">
        <img src={Sandeep} alt="Dr. Sandeep Jain" className="thumbnail" />
        <p className="image-name">Dr. Sandeep Jain</p>
        <p className='imgn'>Researcher EMD Lab SKKU University, Suwon, Republic of Korea</p>
      </div>
      <div className="image-container">
        <img src={Reliance} alt="Dr. Reliance Jain" className="thumbnail" />
        <p className="image-name">Dr. Reliance Jain</p>
        <p className='imgn'>Research Professor Yeungnam University, South Korea</p>
      </div>
    </div>
  </div>
</section> */}


      {/* Agenda */}
      {/* <section className="conference-agenda">
        <h2>Conference Agenda</h2>
        <div className='Agentimg'>
          <ul className="agenda-list">
            <li>
              <h3>9:00 AM - Opening Keynote</h3>
              <p>All presenting authors will receive a Digital Online Certificate of Participation.</p>
            </li>
            <li>
              <h3>10:00 AM - AI in the Modern World</h3>
              <p>Best Paper Awards will be presented in each track and session.</p>
            </li>
            <li>
              <h3>1:00 PM - Networking Lunch</h3>
              <p>All participants will receive a group photo of each session.</p>
            </li>
          </ul>
          <div>
            <section className="conference-speakers">
              <h2>Meet the Speakers</h2>
              <div className="speakers-grid">
                <div className="speaker-card">
                  <img src={conferencemenu} alt="Speaker 1" className="speaker-image" />
                  <h3>John Doe</h3>
                  <p>AI Specialist, TechCorp</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section> */}
      <Patrons/>
      <Container/>

      <ConferenceTrack />
      <ImportDates />
      {/* <Submission/> */}
      {/* <Down/> */}
      <Guidline />
      <RegisterForm />

      {/* Registration Section */}
      {/* <section className="conference-registration">
        <h2>Register for the Conference</h2>
        <form className="registration-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Submit</button>
        </form>
      </section> */}
    </div>
  </>

  );
};

export default Register;
