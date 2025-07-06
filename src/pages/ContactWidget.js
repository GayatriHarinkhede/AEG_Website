import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const ContactWidget = () => {
  const [clicked, setClicked] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <div className="relative">
        <a
          href="https://wa.me/8319848891?text=Hello! I would like to get in touch."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            setClicked('whatsapp');
            setTimeout(() => setClicked(''), 200);
            console.log('WhatsApp clicked!');
          }}
          className={`bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer inline-block ${
            clicked === 'whatsapp' ? 'scale-95' : ''
          }`}
          style={{
            boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)'
          }}
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        
        {/* Pulse animation for WhatsApp */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
      </div>

      {/* Phone Button */}
      <div className="relative">
        <a
          href="tel:+918319848891"
          onClick={() => {
            setClicked('phone');
            setTimeout(() => setClicked(''), 200);
            console.log('Phone clicked!');
          }}
          className={`bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer inline-block ${
            clicked === 'phone' ? 'scale-95' : ''
          }`}
          style={{
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
          }}
          title="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
        
        {/* Pulse animation for Phone */}
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ContactWidget;