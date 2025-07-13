import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <motion.div
    className="fixed bottom-6 right-6 z-50"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <motion.a
      href="https://wa.me/919990507737"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors pulse-animation flex items-center justify-center"
      whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(34, 197, 94, 0.7)' }}
      whileTap={{ scale: 0.9 }}
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  </motion.div>
);

export default WhatsAppButton;