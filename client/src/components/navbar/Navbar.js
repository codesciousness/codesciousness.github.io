import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Close, Email, LaptopMac, Menu, School, ViewList } from '@mui/icons-material';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [navbarColor, setNavbarColor] = useState('white');

    const links = [
        {
            name: 'Projects',
            icon: <ViewList fontSize="large" />
        },
        {
            name: 'Education',
            icon: <School fontSize="large" />
        },
        {
            name: 'Skills',
            icon: <LaptopMac fontSize="large" />
        },
        {
            name: 'Contact',
            icon: <Email fontSize="large" />
        }
    ];

    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    };

    const getClassName = () => {
        const navbar = document.querySelector('.Navbar');
        const header = document.querySelector('.Header');
        const navbarPos = navbar.getBoundingClientRect();
        const headerPos = header.getBoundingClientRect();
        const relativeBottomPos = navbarPos.bottom - headerPos.bottom;
        if (relativeBottomPos > 0) {
            navbar.classList.add('Navbar__scroll');
            setNavbarColor('black');
        }
        else {
            navbar.classList.remove('Navbar__scroll');
            setNavbarColor('white');
        }
    };

    window.addEventListener('scroll', getClassName);
    
    return (
        <section className="Navbar">
            <nav className="Navbar__nav">
                <Link to='/'>
                    <h2 className="Navbar__sitename">myCodefolio</h2>
                    <p className="Navbar__site__description">Web and Mobile Development Services</p>
                </Link>
                <div className="Navbar__container">
                    <ul className={showMenu ? "Navbar__links" : "Navbar__collapse"}>
                        {links.map((link, index) =>
                            <li>
                                <Link
                                    key={`link-${index}`}
                                    to={`#${link.name.toLowerCase()}`}
                                >
                                    <i className='Navbar__icon'>{link.icon}</i>
                                    <span className='Navbar__link__text'>{link.name}</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                    <IconButton
                        onClick={toggleMenu}
                        sx={{
                            color: navbarColor
                        }}
                    >
                        {showMenu ? <Close fontSize="large" /> : <Menu fontSize="large" />}
                    </IconButton>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;