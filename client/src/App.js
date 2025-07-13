import React from 'react';
import './App.css'
import Hero from './Components/Hero'
import Slider from './Components/Slider';
import Notice from './Components/Notice';
import About from './Components/About';
import ContactForm from './Components/Contact';
import Services from "./Components/Services";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Conference from './Components/Conference';
// import Home from './Components/Home';
import Products from './Components/Products';
import Workshop from './Components/Workshop';
import Register from './Components/Register';
import Achievements from './Components/Scroll/Achivements';
import RegisterConference from './Components/RegisterConference';
import Footer from './Components/Footer';
import ConferenceMenu from './Components/ConferenceMenu';
import AwardPage from './Components/Award';
import Faq from './Components/Faq';
import UpcomingConference from './Components/UpcomingConference';
import PlanScientificPage from './Components/PlanScientificPage';
import Timeline from './Components/Timeline';
import Webinar from './Components/Webinar';
import Gallery from './Components/ConferenceGallery';
import ConferenceAward from './Components/ConferenceAward';
import Sponsor from './Components/Sponsor';
import SubmitProposelForm from './Components/SubmitProposelForm';
import ConferenceProceding from './Components/ConferenceProceding';
import ConferenceGallery from './Components/ConferenceGallery';
import NewWorkShop from './Components/NewWorkShop';
import VideoCarouselPage from './pages/VideoCarouselPage';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import NewHome from './pages/Home';
import NewConference from './pages/Conference';
import AnimatedServicesPage from './pages/AnimatedServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import MobileAppPage from './pages/MobileAppPage';
// import DatabaseSolutionsPage from './pages/DatabaseSolutionsPage';
import ApiDevelopmentPage from './pages/ApiDevelopmentPage';
import CustomSoftwarePage from './pages/CustomSoftwarePage';
// import PerformanceOptimizationPage from './pages/PerformanceOptimizationPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
// import Desktopportfolio from './pages/Desktopportfolio';
import IMacPortfolioPage from './IMacPortfolioPage';
import PortfolioSection from './pages/PortfolioSection';
import SEOServicesPage from './pages/SEOServicesPage';
import WebHostingPage from './pages/WebHostingPage';
import Home from './pages/OldHome';

import ScrollToTop from './pages/ScrollToTop';
import NewContactForm from './pages/NewContact';
import TechnologiesSection from './pages/Softwarepages/TechnologiesSection';
import ServicesSection from './pages/Softwarepages/ServicesSection';
import AboutSection from './pages/Softwarepages/AboutSection';
import WhatsAppButton from './pages/Softwarepages/WhatsAppButton';
import ContactWidget from './pages/ContactWidget';
// import Home from './Components/Home';
// import Portfolio from './pages/POrtfolio';
// import PortfolioPgae from './pages/PortfolioPgae';
// import Portfolio from './pages/Portfolio';
// import Portfolio from './pages/Portfolio';

const App = () => {
  return (
   <>

    <Router>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/Hom" element={<Home />} /> */}
            <Route path="/OLdHome" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Achivements" element={<Achievements/>} /> 
        <Route path="/faq" element={<Faq/>} />
        <Route path="/UpcomingConference" element={<UpcomingConference/>} />
        <Route path="/Timeline" element={<Timeline/>} />
        <Route path="/ConferenceAward" element={<ConferenceAward/>} />
        <Route path="/ConferenceMenu" element={<ConferenceMenu/>} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/Conference" element={<Conference />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Webinar" element={<Webinar/>} />
        <Route path="/ConferenceGallery" element={<ConferenceGallery/>} />
        <Route path="/Sponsor" element={<Sponsor/>} />
        <Route path="/ConferenceProceding" element={<ConferenceProceding/>} />
        <Route path="/registerConference" element={<RegisterConference />} /> 
        <Route path="/PlanScientificPage" element={<PlanScientificPage/>} /> 
        <Route path="/NewWorkshop" element={<NewWorkShop/>} /> 
        <Route path="/" element={<VideoCarouselPage/>} /> 
         <Route path="/NewContactForm" element={<NewContactForm/>} /> 
        <Route path="/nehome" element={<NewHome/>} />
 <Route path="/newconference" element={<NewConference/>} />
        <Route path="/software" element={<SoftwareDevelopmentPage/>} />
        <Route path="/WhatsAppButton" element={<WhatsAppButton/>} />
        <Route path="/services/mobile-app-development" element={<MobileAppPage/>} />
        <Route path="/services/WebHostingPage" element={<WebHostingPage/>} />
        <Route path="/services/api-development" element={<ApiDevelopmentPage/>} />
        <Route path="/services/custom-software-development" element={<CustomSoftwarePage/>} />
        <Route path="/services/SEOServicesPage" element={<SEOServicesPage/>} />
        <Route path="/services/web-development" element={<WebDevelopmentPage/>} />
         <Route path="/services/technologies" element={<TechnologiesSection/>} />
           <Route path="/services/service" element={<ServicesSection/>} />
  <Route path="/services/AboutUs" element={<AboutSection/>} />
        <Route path="/services/Portfoliosec" element={<PortfolioSection/>} />
        <Route path="/ContactWidget" element={<ContactWidget/>} />
        
        <Route path="/services/Portfolio" element={<IMacPortfolioPage/>} />
      </Routes>
    </Router>
   </>
  )
}

export default App;