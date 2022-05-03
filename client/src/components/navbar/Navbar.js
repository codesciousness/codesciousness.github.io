import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Home, Person, ContactPage, MoreVert } from '@mui/icons-material';

const Navbar = () => {
    return (
        <section className="Navbar">
            <nav className="Navbar__desktop">
                <a href="index.html"><h1 className="Navbar__title">myCodefolio</h1></a>
                <ul className="Navbar__links">
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/contact'>CONTACT</Link></li>
                </ul>
            </nav>
            <nav className="Navbar__tablet">
                <a href="index.html"><h1 className="Navbar__title">myCodefolio</h1></a>
                <ul className="Navbar__links Navbar__collapse">
                    <li><MoreVert fontSize="large" /></li>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/contact'>CONTACT</Link></li>
                </ul>
            </nav>
            <nav className="Navbar__phone">
                <a href="index.html"><h1 className="Navbar__title">myCodefolio</h1></a>
                <ul className="Navbar__links">
                    <li><Link to='/'><Home fontSize="large" /></Link></li>
                    <li><Link to='/about'><Person fontSize="large" /></Link></li>
                    <li><Link to='/contact'><ContactPage fontSize="large" /></Link></li>
                </ul>
            </nav>
        </section>
    );
}

export default Navbar;