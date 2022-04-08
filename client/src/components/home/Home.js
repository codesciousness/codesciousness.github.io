import React from 'react';
import './Home.css';
import Portfolio from '../portfolio/Portfolio';
import Skills from '../skills/Skills';

const Home = () => {
    return (
        <section className="Home">
            <Portfolio />
            <Skills />
        </section>
    );
}

export default Home;