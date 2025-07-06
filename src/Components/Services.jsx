import React from 'react';
import './Services.css'; // External CSS for styling
import { Link,useLocation } from 'react-router-dom';
import { useState } from 'react';
// Importing images
import services1 from './image/Logo/services/img6.jpg';
import services2 from './image/Logo/services/img5.jpg';
import services3 from './image/services3.jpg';
import Home from '../pages/OldHome';

const Services = () => {
   const location = useLocation();
  const [isHighlighted, setIsHighlighted] = useState(true);
  const services = [
    {
      image: services1,
      title: 'Manufacture And Supply of Products',
      description:
        'Specializing in manufacturing and supplying high-quality laboratory equipment and specialized machines, our comprehensive services cover the entire process from production to delivery, ensuring excellence and innovation for educational institutions scientific and research needs. With a focus on quality and customer satisfaction, we strive to exceed expectations in every aspect of our operations.',
    },
    {
      image: services2,
      title: 'Installation And Repairing of Products',
      description:
        'We understand the importance of reliable equipment in your work or study environment. Our team is dedicated to ensuring that your equipment is not only set up correctly but also promptly repaired if any issues arise. With our services, you can focus on your tasks with confidence, knowing that we are committed to keeping your equipment running smoothly for years to come.',
    },
    // Add more services as needed
  
  ];

  return (
<>

    <div className="services-container">
     
      {/* Hero Section */}
      <section className="hero">
        <h1>Our Services</h1>
        <p>
          AEG Consultancy Services Pvt. Ltd. is a premier provider of end-to-end research solutions for academic and industrial sectors. The company offers a wide range of services, including the development of experimental setups for researchers, support for research publications, and the design and construction of advanced research facilities.
        </p>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="image-container">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
      {/* Back to AEG button with highlight effect */}
  
    </div>
    
    </>
  );
};

export default Services;
