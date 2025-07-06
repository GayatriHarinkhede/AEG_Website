import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Highlights</span> from Our Project Portfolio
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our featured projects with interactive previews. Hover over any iMac and move your cursor to scroll through the content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ProjectCard 
            title="TechStore Pro" 
            description="Modern e-commerce platform with advanced product management"
            delay={0.1}
            color="from-blue-500 to-purple-600"
            websiteType="ecommerce"
          />
          <ProjectCard 
            title="TaskFlow Dashboard" 
            description="Professional task management system for enterprise teams"
            delay={0.2}
            color="from-green-500 to-cyan-600"
            websiteType="dashboard"
          />
          <ProjectCard 
            title="TravelWise Platform" 
            description="Comprehensive travel booking and planning solution"
            delay={0.3}
            color="from-orange-500 to-red-600"
            websiteType="travel"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, delay, color, websiteType }) => {
  const screenRef = useRef(null);
  const contentRef = useRef(null);
  const statusIndicatorRef = useRef(null);
  const statusTextRef = useRef(null);

  useEffect(() => {
    if (!screenRef.current || !contentRef.current) return;
    
    const screen = screenRef.current;
    const content = contentRef.current;
    const statusIndicator = statusIndicatorRef.current;
    const statusText = statusTextRef.current;

    // Calculate scroll parameters
    const screenHeight = screen.clientHeight;
    const contentHeight = content.scrollHeight;
    const maxScroll = contentHeight - screenHeight;
    
    const handleMouseMove = (e) => {
      if (maxScroll <= 0) return;
      
      // Calculate relative position
      const rect = screen.getBoundingClientRect();
      const relativeY = e.clientY - rect.top;
      const percentage = Math.min(1, Math.max(0, relativeY / screenHeight));
      
      // Calculate new scroll position
      const newScroll = percentage * maxScroll;
      
      // Apply scroll
      content.style.transform = `translateY(-${newScroll}px)`;
      
      // Update status indicator
      statusIndicator.classList.remove('bg-gray-300');
      statusIndicator.classList.add('bg-green-500');
      statusText.textContent = "Interactive preview active";
    };
    
    const handleMouseLeave = () => {
      content.style.transform = 'translateY(0)';
      statusIndicator.classList.remove('bg-green-500');
      statusIndicator.classList.add('bg-gray-300');
      statusText.textContent = "Hover to interact";
    };

    screen.addEventListener('mousemove', handleMouseMove);
    screen.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      screen.removeEventListener('mousemove', handleMouseMove);
      screen.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const renderWebsiteContent = () => {
    switch (websiteType) {
      case 'ecommerce':
        return (
          <div className="bg-white min-h-[600px]">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-xl font-bold">TechStore</div>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <span>Home</span>
                    <span>Products</span>
                    <span>Categories</span>
                    <span>Deals</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 text-center">
              <h1 className="text-3xl font-bold mb-4">Summer Sale - Up to 50% Off</h1>
              <p className="mb-4">Latest tech gadgets at unbeatable prices</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">Shop Now</button>
            </div>
            
            {/* Product Grid */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="bg-gray-200 h-32 rounded mb-3"></div>
                    <h3 className="font-semibold text-sm mb-1">Product {i}</h3>
                    <p className="text-gray-600 text-xs mb-2">High-quality tech device</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600">${99 + i * 50}</span>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-gray-50 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Shop by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Laptops', 'Smartphones', 'Tablets', 'Accessories'].map(category => (
                  <div key={category} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold">{category}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-gray-800 text-white p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Company</h3>
                  <div className="text-sm space-y-1">
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Support</h3>
                  <div className="text-sm space-y-1">
                    <p>Help Center</p>
                    <p>Returns</p>
                    <p>Shipping</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Legal</h3>
                  <div className="text-sm space-y-1">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Connect</h3>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    <div className="w-8 h-8 bg-blue-400 rounded"></div>
                    <div className="w-8 h-8 bg-pink-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'dashboard':
        return (
          <div className="bg-gray-100 min-h-[600px]">
            {/* Header */}
            <div className="bg-white shadow-sm p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-xl font-bold text-gray-800">TaskFlow</div>
                  <div className="hidden md:flex space-x-6 text-sm text-gray-600">
                    <span className="text-blue-600 font-medium">Dashboard</span>
                    <span>Projects</span>
                    <span>Team</span>
                    <span>Reports</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium">John Doe</span>
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {[
                  { title: 'Total Tasks', value: '124', color: 'bg-blue-500' },
                  { title: 'In Progress', value: '23', color: 'bg-yellow-500' },
                  { title: 'Completed', value: '89', color: 'bg-green-500' },
                  { title: 'Overdue', value: '7', color: 'bg-red-500' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                        {stat.value}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Task Board */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Project Board</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['To Do', 'In Progress', 'Done'].map(status => (
                        <div key={status} className="bg-gray-50 rounded-lg p-4">
                          <h3 className="font-semibold text-gray-700 mb-3">{status}</h3>
                          <div className="space-y-3">
                            {[1,2,3].map(i => (
                              <div key={i} className="bg-white p-3 rounded shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-medium text-sm">Task {i}</h4>
                                <p className="text-xs text-gray-600 mt-1">Due: Tomorrow</p>
                                <div className="flex items-center mt-2">
                                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                  <span className="ml-2 text-xs text-gray-500">Assigned</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Recent Activity */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      {[
                        'Task completed by Sarah',
                        'New project created',
                        'Team meeting scheduled',
                        'Deadline updated'
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Team Members */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Team Members</h3>
                    <div className="space-y-3">
                      {['Sarah Johnson', 'Mike Chen', 'Emily Davis', 'Alex Wilson'].map((name, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                          <div>
                            <p className="text-sm font-medium">{name}</p>
                            <p className="text-xs text-gray-500">Active now</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'travel':
        return (
          <div className="bg-white min-h-[600px]">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-xl font-bold">TravelWise</div>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <span>Flights</span>
                    <span>Hotels</span>
                    <span>Cars</span>
                    <span>Packages</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">Sign In</button>
                </div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-orange-400 to-red-500 text-white p-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Discover Your Next Adventure</h1>
              <p className="text-xl mb-8">Book flights, hotels, and experiences worldwide</p>
              
              {/* Search Form */}
              <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                    <div className="bg-gray-100 p-3 rounded border">
                      <span className="text-gray-800 font-semibold">New York</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                    <div className="bg-gray-100 p-3 rounded border">
                      <span className="text-gray-800 font-semibold">Paris</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                    <div className="bg-gray-100 p-3 rounded border">
                      <span className="text-gray-800">Jun 15, 2024</span>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-orange-600 text-white p-3 rounded font-semibold hover:bg-orange-700">
                      Search Flights
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Popular Destinations */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Popular Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { city: 'Paris', country: 'France', price: '$599' },
                  { city: 'Tokyo', country: 'Japan', price: '$899' },
                  { city: 'London', country: 'UK', price: '$499' },
                  { city: 'Dubai', country: 'UAE', price: '$799' },
                  { city: 'Sydney', country: 'Australia', price: '$1299' },
                  { city: 'Rome', country: 'Italy', price: '$649' }
                ].map((dest, i) => (
                  <div key={i} className="relative overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-br from-orange-400 to-red-500 h-48"></div>
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute bottom-0 left-0 right-0 text-white p-6">
                      <h3 className="text-xl font-bold">{dest.city}</h3>
                      <p className="text-sm opacity-90">{dest.country}</p>
                      <p className="text-lg font-semibold mt-2">From {dest.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div className="bg-gray-50 p-8">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Choose TravelWise?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Best Prices', desc: 'Compare millions of flights and hotels' },
                  { title: '24/7 Support', desc: 'Get help whenever you need it' },
                  { title: 'Flexible Booking', desc: 'Free cancellation on most bookings' }
                ].map((feature, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange-600 rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -10,
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      {/* Enhanced iMac Container */}
      <div className="imac-container relative w-full max-w-md">
        {/* Realistic iMac Body */}
        <motion.div 
          className="imac-body bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-[25px] p-5 relative shadow-xl border border-gray-300"
          style={{ 
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
            perspective: '1000px'
          }}
          whileHover={{ 
            rotateX: -3,
            rotateY: 3,
            transition: { duration: 0.5 }
          }}
        >
          {/* iMac Screen with Proper Proportions */}
          <div 
            ref={screenRef}
            className="imac-screen bg-gray-900 rounded-xl overflow-hidden relative h-[340px] border-[6px] border-gray-800"
            style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.3)' }}
          >
            <div 
              ref={contentRef}
              className="imac-content absolute top-0 left-0 w-full transition-transform duration-300 ease-in-out"
            >
              {renderWebsiteContent()}
            </div>
            
            {/* Subtle Screen Glare Effect */}
            <div className="screen-glare absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(
                  125deg,
                  rgba(255, 255, 255, 0) 0%,
                  rgba(255, 255, 255, 0.1) 40%,
                  rgba(255, 255, 255, 0) 60%,
                  rgba(173, 216, 230, 0.05) 100%)`
              }}
            ></div>
            
            {/* Camera Notch */}
            <div className="imac-notch absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-lg"></div>
          </div>
          
          {/* Chin with Apple Logo */}
          <div className="imac-chin absolute bottom-0 left-0 right-0 h-3 flex justify-center">
            <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Realistic iMac Stand */}
        <div className="imac-stand relative w-full h-28 flex justify-center">
          <div className="stand-neck w-12 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-md"></div>
          <div className="stand-base absolute top-16 w-48 h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl shadow-md"></div>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="mt-10 text-center w-full px-4">
        <h3 className="project-title text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
        
        <div className="mt-5 flex items-center justify-center">
          <span 
            ref={statusIndicatorRef}
            className="inline-block w-3 h-3 rounded-full mr-3 bg-gray-300 transition-colors duration-300"
          ></span>
          <span 
            ref={statusTextRef}
            className="text-sm text-gray-500"
          >
            Hover to interact
          </span>
        </div>
        
        <motion.a
          href="#"
          className={`mt-6 inline-block px-7 py-2.5 text-white rounded-full text-base font-medium shadow-lg transition-all duration-300 ${
            websiteType === "ecommerce"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" 
              : websiteType === "dashboard"
              ? "bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700"
              : "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Live Website →
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;