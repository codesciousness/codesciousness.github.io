import React from 'react';
import './Navbar.css';
import { Home, Person, ContactPage, MoreVert } from '@mui/icons-material';

const Navbar = () => {
    return (
        <section className="Navbar">
            <nav className="Navbar__desktop">
                <a href="index.html"><h1 className="Navbar__title">myCodefolio</h1></a>
                <ul className="Navbar__links">
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </nav>
            <nav className="Navbar__tablet">
                <a href="index.html"><h1 className="Navbar__title">myCodefolio</h1></a>
                <ul className="Navbar__links Navbar__collapse">
                    <li><MoreVert fontSize="large" /></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </nav>
            <nav className="Navbar__phone">
                <a href="index.html"><h1 className="Navbar__title">myCodefolio</h1></a>
                <ul className="Navbar__links">
                    <li><a href="index.html"><Home fontSize="large" /></a></li>
                    <li><a href="about.html"><Person fontSize="large" /></a></li>
                    <li><a href="contact.html"><ContactPage fontSize="large" /></a></li>
                </ul>
            </nav>
        </section>
    );
}

export default Navbar;