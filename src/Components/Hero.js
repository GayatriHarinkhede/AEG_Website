import React from 'react';

const Hero = () => {
  return (
    <div className="hidden md:block"> {/* ye line small screens pr component ko hide karegi */}
      <div className='flex flex-col md:flex-row w-full max-h-28 bg-black text-center md:text-left justify-center md:justify-between text-white p-4'>
        {/* Left Side - Address and Email */}
        <div className='flex justify-center md:justify-start gap-10 items-center'>
          <div className='flex gap-2 items-center'>
            <div><i className="fa-solid fa-location-dot"></i></div>
            <div>329 Kalpana Nagar, Bhopal</div>
          </div>
          <div className='flex gap-2 items-center'>
            <div><i className="fa-solid fa-envelope"></i></div>
            <div>assuranceeducationalgrp@gmail.com</div>
          </div>
        </div>

        {/* Right Side - Phone and Social Links */}
        <div className='flex justify-center md:justify-end gap-10 items-center mt-4 md:mt-0'>
          <div className='flex gap-2 items-center'>
            <div><i className="fa-solid fa-phone"></i></div>
            <div>+91 92292 85100</div>
          </div>
          <div className='flex gap-5'>
            <div><i className="fa-brands fa-facebook"></i></div>
            <div><i className="fa-brands fa-instagram"></i></div>
            <div><i className="fa-brands fa-twitter"></i></div>
            <div><i className="fa-brands fa-linkedin"></i></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
