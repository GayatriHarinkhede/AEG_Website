import React from 'react';
import { motion } from 'framer-motion';

const TechnologiesSection = () => {
  const LanguageIcons = {
    javascript: '🇯🇸',
    typescript: '🆃',
    python: '🐍',
    java: '☕',
    php: '🐘',
    html: '🅷',
    css: '🅲',
    react: '⚛️',
    angular: '🅰️',
    vue: '🅿️',
    node: '🅽',
    django: '🅳',
    laravel: '🅻',
    mysql: '🐬',
    mongodb: '🍃',
  };

  const languages = [
    { name: 'JavaScript', icon: LanguageIcons.javascript },
    { name: 'TypeScript', icon: LanguageIcons.typescript },
    { name: 'Python', icon: LanguageIcons.python },
    { name: 'Java', icon: LanguageIcons.java },
    { name: 'PHP', icon: LanguageIcons.php },
    { name: 'HTML5', icon: LanguageIcons.html },
    { name: 'CSS3', icon: LanguageIcons.css },
    { name: 'React', icon: LanguageIcons.react },
    { name: 'Angular', icon: LanguageIcons.angular },
    { name: 'Vue.js', icon: LanguageIcons.vue },
    { name: 'Node.js', icon: LanguageIcons.node },
    { name: 'Django', icon: LanguageIcons.django },
    { name: 'Laravel', icon: LanguageIcons.laravel },
    { name: 'MySQL', icon: LanguageIcons.mysql },
    { name: 'MongoDB', icon: LanguageIcons.mongodb },
  ];

  return (
    <section id="technologies" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Technologies We Work With
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in a wide range of modern technologies and frameworks.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-blue-200/50 hover:border-blue-400 transition-all duration-300 flex flex-col items-center shadow-sm feature-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-4xl mb-3">{language.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900">{language.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;