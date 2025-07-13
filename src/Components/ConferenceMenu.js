import React from 'react'
import { useEffect, useRef, useState } from 'react';

import './Home.css';

const ConferenceMenu = () => {
  const { useState } = React;

  const [selectedItem, setSelectedItem] = useState('About IFERP Conference');
  const [selectedBox, setSelectedBox] = useState('Upcoming Conferences');

  const menuItems = [
    'About IFERP Conference',
    'Plan a Scientific Conference',
    'Sponsors & Exhibitors',
    'Awards & Recognition',
    'Workshops & Courses',
    'Conference FAQ',
  ];

  const boxItems = [
    { icon: 'calendar-alt', label: 'Upcoming Conferences', color: 'bg-red-800' },
    { icon: 'flask', label: 'Scientific Gallery', color: 'bg-blue-900' },
    { icon: 'video', label: 'Past Webinars', color: 'bg-red-800' },
    { icon: 'video', label: 'Upcoming Webinars', color: 'bg-blue-900' },
    { icon: 'calendar-check', label: 'Past Conferences', color: 'bg-red-800' },
    { icon: 'handshake', label: 'Conference Videos & Galleries', color: 'bg-blue-900' },
  ];

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white rounded-lg shadow-lg flex">
        <div className="p-6">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`text-gray-700 block ${selectedItem === item ? 'selected' : ''}`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-0 p-6">
          {boxItems.map((box) => (
            <a
              key={box.label}
              href="#"
              className={`${box.color} text-white p-4 flex flex-col items-center ${
                selectedBox === box.label ? 'selected-box' : ''
              }`}
              onClick={() => setSelectedBox(box.label)}
            >
              <i className={`fas fa-${box.icon} text-3xl mb-2`}></i>
              <span>{box.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ConferenceMenu
