import React from 'react';
import './Conference.css'; // Custom styles
import ConferenceList from '../Components/ConferenceList';
import Workshop from '../Components/Workshop';
import {Link}  from 'react-router-dom'
import Register from '../Components/Register';
import Notice from '../Components/Notice';
import NewHome from './Home';
// import Home from '../pages/Home';

const NewConference = () => {
  return (
    <div>
      
      <NewHome/>
      <div className='hero1'>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="conference-title">Conferences</h1>
          <p className="conference-subtitle">Providing World Class content and an excellent delegate experience
          Our conferences bring together leading experts from academia and industry to discuss the latest research, innovations, and trends, fostering collaboration and knowledge exchange. Join us for insightful discussions and valuable networking opportunities.
          </p>
         <div className='btns'> 
           {/* <a href="#register" className="cta-btn1">Find a conference</a> */}
           <Link to="/UpcomingConference">
  <button className="cta-btn1 register-button">Find a conference</button>
</Link>

         </div>
        </div>
      </section>
      {/* <Notice/> */}
      <ConferenceList />
      {/* <Workshop/> */}
      
      {/* <Register/> */}
    </div>
    </div>
  );
};

export default NewConference;
 