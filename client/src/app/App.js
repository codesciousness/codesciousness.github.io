import React from 'react';
import './App.css';
import Header from '../components/header/Header';
import Portfolio from '../components/portfolio/Portfolio';
import Education from '../components/education/Education';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollHandler from '../components/scrollHandler/ScrollHandler';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <ScrollHandler>
          <Portfolio />
          <Education />
          <Skills />
          <Contact />
          <Footer />
        </ScrollHandler>
      </main>
    </div>
  );
}