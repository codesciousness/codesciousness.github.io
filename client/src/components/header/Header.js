import React from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';

const Header = () => {
    return (
        <section className="Header">
            <video src="resources/videos/difting-orbs.mp4" playsinline autoplay muted loop poster="resources/images/difting-orbs.jpg" id="bg-vid">
                This Video Is Not Supported By Your Browser
            </video>
            <Navbar />
        </section>
    );
}

export default Header;