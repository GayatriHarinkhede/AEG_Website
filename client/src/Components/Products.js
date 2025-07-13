import React from 'react';
import { motion } from 'framer-motion';
import './Products.css'; // CSS for styling the cards
import Services from './Services';

import img1  from './image/Natural Fiber/Areca Fiber Mat.jpg';
import img2  from './image/Natural Fiber/Bamboo Fiber Mat.jpg';
import img3  from './image/Natural Fiber/Banana Fiber Mat.jpg';
import img4  from './image/Natural Fiber/Coir Fiber Mat.jpg';
import img5  from './image/Natural Fiber/Flax Fiber Mat.jpg';
import img6  from './image/Natural Fiber/Kenaf Fiber Mat.jpg';
import img7  from './image/Natural Fiber/Nano TItania.jpg';
import img8  from './image/Natural Fiber/Natural Jute Mat.jpg';
import img9  from './image/Natural Fiber/Ramie Fiber Mat.jpg';
import img10 from './image/Natural Fiber/Sisal Fiber MAt.jpg';
import img11 from './image/Natural Fiber/Sun hemp Fiber Mat.jpg';
import img12 from './image/Natural Fiber/White Fabric Pineapple Fiber Mat.jpg';

const products = [
  {
    title: "Areca Fiber Mat",
    // category: "Civil Laboratory Equipment",
     img:img1, 
  },
  {
    title: "Bamboo Fiber Mate.jpg",
    // category: "Civil Laboratory Equipment",
    img:img2 ,
  },
  {
    title: "Banana Fiber Mat",
    // category: "Civil Laboratory Equipment",
    img:img3,
  },
  {
    title: "Coir Fiber Mat",
    category: "Civil Laboratory Equipment",
    img:img4,
  },
  {
    title: "Flax Fiber Mat",
    category: "Civil Laboratory Equipment",
    img:img5,
  },
  {
    title: "Kenaf Fiber Mat",
    category: "Civil Laboratory Equipment",
    img: img6,
  },
  {
    title: "Nano TItania",
    category: "Civil Laboratory Equipment",
    img: img7,
  },
  {
    title: "Natural Jute Mat",
    category: "Civil Laboratory Equipment",
    img: img8,
  },
  {
    title: "Ramie Fiber Mat",
    category: "Civil Laboratory Equipment",
    img: img9,
  },
  {
    title: "Sisal Fiber MAt",
    category: "Civil Laboratory Equipment",
    img: img10,
  },
  {
    title: "Sun hemp Fiber Mat",
    category: "Civil Laboratory Equipment",
    img: img11,
  },
  {
    title: "White Fabric Pineapple Fiber Mat",
    category: "Civil Laboratory Equipment",
    img: img12,
  },
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger animation for each card
      duration: 0.5,
    },
  }),
};

const Products = () => {
  return (
    <div className="products-container">
      <h2 className="heading">Our Products</h2>
      <div className="grid-container">
        {products.map((product, index) => (
          <motion.div
            className="product-card"
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <img src={product.img} alt={product.title} className="product-image" />
            <div className="product-info">
              {/* <h4>{product.category}</h4> */}
              <h3>{product.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      <Services/>
    </div>
  );
};

export default Products;
