// iMacPortfolioPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    id: 1,
    url: 'https://www.apple.com',
  },
  {
    id: 2,
    url: 'https://www.behance.net',
  },
  {
    id: 3,
    url: 'https://www.awwwards.com',
  },
];

const iMacFrameStyle = {
  backgroundImage: 'url(https://i.ibb.co/YDRr1d3/imac-frame.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};
const iMacFrameDimensions = {
  width: '400px',
  height: '250px',
};

const iMacScreenArea = {
  top: '35px',
  left: '28px',
  width: '345px',
  height: '185px',
};

const ProjectCard = ({ image }) => {
  const scrollRef = React.useRef(null);

  const startScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = 0;
    el.scrollInterval = setInterval(() => {
      el.scrollTop += 1;
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        clearInterval(el.scrollInterval);
      }
    }, 20);
  };

  const stopScroll = () => {
    const el = scrollRef.current;
    if (el?.scrollInterval) clearInterval(el.scrollInterval);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative m-4"
      style={{ ...iMacFrameStyle, ...iMacFrameDimensions }}
    >
      <div
        className="absolute overflow-auto rounded-md scrollbar-hide"
        ref={scrollRef}
        onMouseEnter={startScroll}
        onMouseLeave={stopScroll}
        style={{ ...iMacScreenArea, position: 'absolute' }}
      >
        <div className="w-full h-[500px]">
          <img src={image} alt="project content" className="w-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

const IMacPortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Highlights from Our Project Portfolio
      </h2>
      <div className="flex flex-wrap justify-center">
        {projectData.map((project) => (
          <ProjectCard key={project.id} image={project.image} />
        ))}
      </div>
    </div>
  );
};

export default IMacPortfolioPage;