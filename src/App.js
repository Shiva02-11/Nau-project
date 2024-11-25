import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './anamtk/ScrollToTop';
import Navbar from './anamtk/navbar';
import Footer from './anamtk/footer';
import FooterTwo from './wieteke/footer'; // New footer for NavbarTwo
import Hero from './anamtk/hero';
import Research from './anamtk/Research';
import Publications from './anamtk/publications';
import SharingScience from './anamtk/sharingScience';
import NavbarTwo from './wieteke/navbar';
import Home from './wieteke/home';
import Curriculum from './wieteke/curriculum';
import Work from './wieteke/work';
import Extracurricular from './wieteke/extracurricular';
import Blog from './wieteke/blog';
import Contact from './wieteke/contact';
import Graduate from './wieteke/graduate.js';
import Photography from './wieteke/photography.js';
import Published from './wieteke/published.js';
import Field from './wieteke/field.js';
import Volunteer from './wieteke/volunteer.js';
import Graphic from './wieteke/graphic.js';
import Sustainability from './wieteke/sustainability.js';
import Undergraduate from './wieteke/undergraduate.js';
import Mouse from './wieteke/mouse.js';

const Layout = () => {
  const location = useLocation();

  // Determine which Navbar and Footer to render based on the path
  const isWietekePage = ['/home', '/curriculum', '/work', '/extracurricular', '/blog',
    '/contact', '/graduate', '/photography', '/published', '/field', '/volunteer', '/graphic', '/sustainability','/undergraduate','/mouse'].includes(location.pathname);

  return (
    <>
      {isWietekePage ? <NavbarTwo /> : <Navbar />}
      <Routes>
        {/* Routes for Navbar 1 */}
        <Route path="/" element={<Hero />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/sharingscience" element={<SharingScience />} />

        {/* Routes for Navbar 2 */}
        <Route path="/home" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/work" element={<Work />} />
        <Route path="/extracurricular" element={<Extracurricular />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/graduate" element={<Graduate />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/published" element={<Published />} />
        <Route path="/field" element={<Field />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/undergraduate" element={<Undergraduate />} />
        <Route path="/mouse" element={<Mouse />} />
      </Routes>
      {isWietekePage ? <FooterTwo /> : <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
