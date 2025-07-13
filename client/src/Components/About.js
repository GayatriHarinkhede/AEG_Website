import React from 'react';
import { Link } from 'react-router-dom';
import aboutBg from './image/AB5.jpg';
import { Briefcase, Users, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className='relative w-full min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>
      <div className='relative z-10 flex flex-col items-center text-center text-white p-6 md:p-12'>
        <h1 className='text-4xl font-bold mb-6'>About Us</h1>

        <div className='flex flex-col md:flex-row items-center justify-between max-w-5xl w-full bg-white bg-opacity-10 p-6 rounded-lg shadow-lg'>
          {/* Left Section */}
          <div className='md:w-1/2 text-left text-lg text-gray-200 space-y-4 p-4'>
            <p>
              At AEG Consultancy Services PVT. LTD., we believe that research is the cornerstone of innovation and progress. Our mission is to empower researchers by offering an all-in-one platform that integrates consultancy, equipment supply, proposal writing, and international collaboration opportunities.
            </p>
            <p>
              In a world where research drives change, we understand the challenges that researchers face in accessing the right resources, tools, and support. That’s why we are committed to providing solutions that simplify the research process.
            </p>
            <p><strong>Thank you for trusting us to be a part of your research journey.</strong></p>
            <p className='font-semibold'>AEG Consultancy Services PVT. LTD.</p>
            <Link to='/ContactForm'>
              <button className='mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full shadow-lg transition duration-300'>Contact Us</button>
            </Link>
          </div>

          {/* Right Section with Tailwind Cards */}
          <div className='md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
            <div className='bg-gray-100 bg-opacity-30 text-white p-4 rounded-lg shadow-lg flex flex-col items-center'>
              <Briefcase size={40} className='text-orange-400' />
              <div className='text-center mt-2'>
                <h2 className='font-bold text-lg'>Consultancy</h2>
                <p>Expert guidance for your research & innovation.</p>
              </div>
            </div>
            <div className='bg-gray-100 bg-opacity-30 text-white p-4 rounded-lg shadow-lg flex flex-col items-center'>
              <Users size={40} className='text-blue-400' />
              <div className='text-center mt-2'>
                <h2 className='font-bold text-lg'>Collaboration</h2>
                <p>Global networking opportunities for researchers.</p>
              </div>
            </div>
            <div className='bg-gray-100 bg-opacity-30 text-white p-4 rounded-lg shadow-lg flex flex-col items-center'>
              <Globe size={40} className='text-green-400' />
              <div className='text-center mt-2'>
                <h2 className='font-bold text-lg'>International Reach</h2>
                <p>Expand your research beyond borders.</p>
              </div>
            </div>
            <div className='bg-gray-100 bg-opacity-30 text-white p-4 rounded-lg shadow-lg flex flex-col items-center'>
              <Lightbulb size={40} className='text-yellow-400' />
              <div className='text-center mt-2'>
                <h2 className='font-bold text-lg'>Our Vision</h2>
                {/* <svg
                  // width="50"
                  // height="50"
                  // viewBox="0 0 24 24"
                  fill="none"
                  // xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                > */}
                  {/* <path d="M12 2C8.13 2 5 5.13 5 9c0 2.54 1.29 4.78 3.24 6.11.16.11.26.29.26.49v1.4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1.4c0-.2.1-.38.26-.49C17.71 13.78 19 11.54 19 9c0-3.87-3.13-7-7-7zm1 18h-2v2h2v-2zm-2 0h-2v2h2v-2zm4 0h-2v2h2v-2z" fill="currentColor"/>
                </svg> */}
                <p>Empowering researchers through innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
