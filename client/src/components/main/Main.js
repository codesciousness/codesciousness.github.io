import React from 'react';
import './Main.css';
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';

const Main = () => {
    return (
        <main className="Main">
            <Home />
            <About />
            <Contact />
        </main>
    );
}

export default Main;