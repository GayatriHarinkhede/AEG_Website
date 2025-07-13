import React, { useState } from 'react';
import Navigation from './Navigation';
import HomePage from './HomePage';
import ServiceDetailPage from './ServiceDetailPage';

const NewHome = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentServiceId, setCurrentServiceId] = useState(null);

  const handleNavigate = (page, serviceId = null) => {
    setCurrentPage(page);
    if (serviceId) {
      setCurrentServiceId(serviceId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'service-detail':
        return <ServiceDetailPage serviceId={currentServiceId} onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderCurrentPage()}
    </div>
  );
};

export default NewHome;