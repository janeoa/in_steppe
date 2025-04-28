import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WireDecoration from './components/WireDecoration.jsx';

import HomePage from './pages/HomePage/HomePage.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import InteractiveMap from './pages/InteractiveMap/InteractiveMap.jsx';
import ArcheologyMap from './pages/ArcheologyMap/ArcheologyMap.jsx';
import BlogAndPost from './pages/BlogPost/BlogPost';
import Sources from './pages/Sources/Sources.jsx';
import Contact from './pages/Contact/Contact.jsx';
import SeeMorePage from './pages/SeeMorePage/NewsPage.jsx';
import ScrollToTop from './pages/SeeMorePage/ScrollToTop';

function App() {
  return (
    <Router basename="/in_steppe"> {/* Add the basename prop here */}
      <div className='relative'>
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/map" element={<InteractiveMap />} />
            <Route path="/archeology" element={<ArcheologyMap />} />
            <Route path="/blog" element={<BlogAndPost />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/more" element={<SeeMorePage />} />
          </Routes>
          <ScrollToTop />
          <Footer className="relative"/>
        </div>
      <WireDecoration className="hidden md:block absolute lg:bottom-[-60px] w-full h-auto z-0 pointer-events-none" />
      </div>

    </Router>
  )
};

export default App;
