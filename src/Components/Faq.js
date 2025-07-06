// FaqPage.js
import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    
      {
        "question": "What is the AIC-RAETHM 2025 Conference?",
        "answer": "The AIC-RAETHM 2025 Conference is an annual event that brings together researchers, scholars, and industry professionals to discuss advancements in engineering technology, healthcare, and management."
      },
      // {
      //   "question": "How can I register for the AIC-RAETHM 2025 Conference?",
      //   "answer": "You can register for the conference by visiting our registration page and filling out the required information."
      // },
      {
        "question": "What are the conference dates?",
        "answer": "The conference will be held on January 10th and 11th, 2025."
      },
      {
        "question": "Where will the conference be held?",
        "answer": "The AIC-RAETHM 2025 Conference will be organized by Vidhyapeeth Institute of Science and Technology, located near New SOS Balgram, Sahara By Pass, Raisen Road, Bhopal, MP, India."
      },
      {
        "question": "Is there a fee to attend the conference?",
        "answer": "Yes, there is a registration fee. Please check our website for detailed pricing information."
      },
      {
        "question": "Will there be any workshops?",
        "answer": "Yes, we will have several workshops covering various topics related to engineering technology, healthcare, and management. You can find more information on our workshops page."
      },
      {
        "question": "How can I contact the organizers?",
        "answer": "You can contact the organizers through the contact form on our website or by emailing us at assuranceeducationalgrp@gmail.com."
      }
    ]
    
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md mb-4">
            <button
              className="w-full text-left p-4 focus:outline-none bg-gray-200 hover:bg-gray-300 transition duration-200"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t border-gray-300">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;