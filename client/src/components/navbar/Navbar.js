import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="Navbar">
            <nav className="Navbar__desktop">
                <div className="Navbar__left" role="presentation">
                    <a href="index.html">myCodefolio</a>
                </div>
                <div className="Navbar__right" role="presentation">
                    <ul role="presentation">
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
            <nav className="Navbar__tablet">
                <div className="Navbar__left" role="presentation">
                    <a href="index.html">myCodefolio</a>
                </div>
                <div className="Navbar__right collaspe" role="presentation">
                    <ul role="presentation">
                        <li><i className="fas fa-ellipsis-v fa-2x"></i></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
            <nav className="Navbar__mobile">
                <div className="Navbar__links" role="presentation">
                    <ul role="presentation">
                        <li><a href="index.html"><i className="fas fa-home fa-3x"></i></a></li>
                        <li><a href="about.html"><i className="fas fa-user fa-3x"></i></a></li>
                        <li><a href="contact.html"><i className="fas fa-phone-alt fa-3x"></i></a></li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;