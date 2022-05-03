import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../components/navbar/Navbar';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../components/scrollToTop/ScrollToTop';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App__main">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path='*' element={<Home />}/>
          </Routes>
          <Footer />
        </ScrollToTop>
      </main>
    </div>
  );
}