import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Person, ContactPage, MoreVert } from '@mui/icons-material';

const Navbar = () => {
    const getClassName = () => {
        const navbar = document.querySelector('.Navbar');
        const header = document.querySelector('.Header');
        const navbarPos = navbar.getBoundingClientRect();
        const headerPos = header.getBoundingClientRect();
        const relativeBottomPos = navbarPos.bottom - headerPos.bottom;
        if (relativeBottomPos > 0) {
            navbar.classList.add('Navbar__scroll');
        }
        else {
            navbar.classList.remove('Navbar__scroll');
        }
    };

    window.addEventListener('scroll', getClassName);
    
    return (
        <section className="Navbar">
            <nav className="Navbar__desktop">
                <Link to='/'>
                    <h2 className="Navbar__sitename">myCodefolio</h2>
                    <p className="Navbar__site__description">Web and Mobile Development Services</p>
                </Link>
                <ul className="Navbar__links">
                    <li><Link to='#projects'>Projects</Link></li>
                    <li><Link to='#education'>Education</Link></li>
                    <li><Link to='#skills'>Skills</Link></li>
                    <li><Link to='#contact'>Contact</Link></li>
                </ul>
            </nav>
            <nav className="Navbar__tablet">
                <Link to='/'>
                    <h2 className="Navbar__sitename">myCodefolio</h2>
                    <p className="Navbar__site__description">Web and Mobile Development Services</p>
                </Link>
                <ul className="Navbar__links Navbar__collapse">
                    <li><MoreVert fontSize="large" /></li>
                    <li><Link to='#projects'>Projects</Link></li>
                    <li><Link to='#education'>Education</Link></li>
                    <li><Link to='#skills'>Skills</Link></li>
                    <li><Link to='#contact'>Contact</Link></li>
                </ul>
            </nav>
            <nav className="Navbar__phone">
                <Link to='/'>
                    <h2 className="Navbar__sitename">myCodefolio</h2>
                    <p className="Navbar__site__description">Web and Mobile Development Services</p>
                </Link>
                <ul className="Navbar__links">
                    <li><Link to='#projects'><Person fontSize="large" /></Link></li>
                    <li><Link to='#education'>Education</Link></li>
                    <li><Link to='#skills'>Skills</Link></li>
                    <li><Link to='#contact'><ContactPage fontSize="large" /></Link></li>
                </ul>
            </nav>
        </section>
    );
}

export default Navbar;