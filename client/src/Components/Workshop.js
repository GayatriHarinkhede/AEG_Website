import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact } from 'react-icons/fa';
import workshop1 from './image/Logo/workshop1.jpg';
import workshop2 from './image/Logo/workshop2.jpg';
import workshop3 from './image/Logo/workshop3.jpg';
import workshop4 from './image/Logo/workshop4.jpg';
import workshop5 from './image/Logo/workshop5.jpg';
import workshop6 from './image/Logo/workshop6.jpg';
import workshop7 from './image/Logo/workshop7.jpg';
import workshop8 from './image/Logo/workshop8.jpg';
import workshop9 from './image/Logo/workshop9.jpg';
import workshop11 from './image/Logo/workshop11.jpg';
import workshop20 from './image/Logo/workshop20.JPG';
import workshop21 from './image/Logo/workshop21.JPG';
import RegisterConference from './RegisterConference';


// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const parallax = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

// Page wrapper with a glassmorphism effect
// const PageWrapper = styled.div`
//   font-family: 'Poppins', sans-serif;
//   padding: 50px 20px;
//   background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
//   backdrop-filter: blur(10px);
//   color: #333;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   animation: ${fadeIn} 1s ease-out;
//   background-image: url('https://www.transparenttextures.com/patterns/cubes.png');
//   background-size: cover;
//   animation: ${parallax} 10s ease infinite;
//  background-color:#2c3e50;
//   @media (max-width: 768px) {
//     padding: 20px;
//   }
// `;

const Header = styled.header`
  text-align: center;
  margin-bottom: 50px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: black;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  z-index: 1;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Icon = styled(FaReact)`
  color: #61dafb;
  font-size: 3rem;
  margin-top: 10px;
  animation: ${fadeIn} 2s ease-in-out infinite alternate;
`;

const RegisterButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 20px 0;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 0;
  }
`;

const FormWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 80%;
  max-width: 600px;
  animation: ${fadeIn} 1.5s ease-out;
`;

const Input = styled.input`
  padding: 15px;
  margin: 10px 0;
  border: 2px solid #61dafb;
  border-radius: 15px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2);
  color: #fff;

  &:focus {
    outline: none;
    border-color: #fff;
  }
`;

const WorkshopImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  padding-right:20px;

  border-radius: 15px 15px 0 0; /* Rounded corners for the top of the image */
 
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Topic = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  margin: 10px 0;
`;

const Date = styled.span`
  background-color: #61dafb;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: bold;
  margin-top: 10px;
`;

const FormButton = styled(RegisterButton)`
  background-color: #333;
  &:hover {
    background-color: #444;
  }
`;
const PageWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 50px 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Add this to center the content vertically */
  animation: ${fadeIn} 1s ease-out;
  background-image: url('https://www.transparenttextures.com/patterns/cubes.png');
  background-size: cover;
  animation: ${parallax} 10s ease infinite;
  background-color:;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const WorkshopList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%; /* Set full width */
  max-width: 1200px; /* Max-width to control layout */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the workshop items horizontally */
  align-items: center; /* Center the items vertically within the row */
  gap: 20px; /* Adds space between the cards */
`;

const WorkshopItem = styled.li`
  background: rgba(173, 216, 230, 0.6);
  border-radius: 20px;
 margin:20px;
 
  width: 350px; /* Fixed width for each card */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1.3s ease-out;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
/* Ensure the individual item is centered in its container */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1024px) {
    width: 45%; /* 2 cards per row on medium screens */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
  }
`;




const Workshop = () => {
  return (
    <PageWrapper>
      <Header>
        <Title>Workshop</Title>
        <Subtitle></Subtitle>
        {/* <Icon /> */}
      </Header>
      {/* ====================================================== */}


      <section>
        {/* <h2>Topics Covered:</h2> */}
        <WorkshopList>
          <WorkshopItem>
            <WorkshopImage src={workshop1} alt="React Basics" />
            <CardContent>
              {/* <Topic>Introduction to React</Topic>
              <Date>July 1, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop2} alt="State and Props" />
            <CardContent>
              {/* <Topic>State & Props in Depth</Topic>
              <Date>July 2, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop3} alt="React Hooks" />
            <CardContent>
              {/* <Topic>React Hooks & Custom Hooks</Topic>
              <Date>July 3, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop4} alt="React Router" />
            <CardContent>
              {/* <Topic>React Router & Navigation</Topic>
              <Date>July 4, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop5} alt="Project Building" />
            <CardContent>
              {/* <Topic>Building Real Projects</Topic>
              <Date>July 5, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop6} alt="React Hooks" />
            <CardContent>
              {/* <Topic>React Hooks & Custom Hooks</Topic>
              <Date>July 3, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop7} alt="React Hooks" />
            <CardContent>
              {/* <Topic>React Hooks & Custom Hooks</Topic>
              <Date>July 3, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop8} alt="React Hooks" />
            <CardContent>
              {/* <Topic>React Hooks & Custom Hooks</Topic>
              <Date>July 3, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop9} alt="React Hooks" />
            <CardContent>
              {/* <Topic>React Hooks & Custom Hooks</Topic>
              <Date>July 3, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop11} alt="React Hooks" />
            <CardContent>
              {/* <Topic>React Hooks & Custom Hooks</Topic>
              <Date>July 3, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop20} alt="React Hooks" />
            <CardContent>
              {/* <Topic>React Hooks & Custom Hooks</Topic>
              <Date>July 3, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          <WorkshopItem>
            <WorkshopImage src={workshop21} alt="React Hooks" />
            <CardContent>
              {/* <Topic>React Hooks & Custom Hooks</Topic>
              <Date>July 3, 2024</Date> */}
            </CardContent>
          </WorkshopItem>
          
          
         
        </WorkshopList>
      </section>

      {/* ========================================================= */}
                 {/* <RegisterConference/> */}
    </PageWrapper>
  );
};

export default Workshop;
