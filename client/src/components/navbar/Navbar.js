import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Close, Email, Home, LaptopMac, Menu, School, ViewList } from '@mui/icons-material';
import { useWindowSize } from '../../hooks/use-window-size';
import { calcOffsetTop } from '../../util/calc-offsetTop-navbar';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [navbarColor, setNavbarColor] = useState('white');
    const size = useWindowSize();
    const width = size.width;

    const links = [
        {
            name: 'Home',
            icon: <Home fontSize="large" />
        },
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

    const changeNavbarStyle = () => {
        const navbar = document.querySelector('.Navbar');
        const header = document.querySelector('.Header');
        const navbarPos = navbar.getBoundingClientRect();
        const headerPos = header.getBoundingClientRect();
        const relativeTopPos = navbarPos.top - headerPos.top;
        if (relativeTopPos > 0) {
            navbar.classList.add('Navbar__scroll');
            setNavbarColor('black');
        }
        else {
            navbar.classList.remove('Navbar__scroll');
            setNavbarColor('white');
        }
    };

    const activateLinks = () => {
        const sections = document.querySelectorAll('section');
        const links = document.querySelectorAll('header nav a');
        const projectsSection = document.getElementById('projects');
        sections.forEach(section => {
            const scrollPosition = window.scrollY;
            const id = section.getAttribute('id');
            let top = section.offsetTop - calcOffsetTop(width);
            let height = section.offsetHeight;
            if (id === 'home') {
                top = section.offsetTop;
                height = projectsSection.offsetTop - calcOffsetTop(width);
            }
            if (scrollPosition >= top && scrollPosition < top + height) {
                links.forEach(link => {
                    link.parentElement.classList.remove('active');
                    document.querySelector(`header nav a[href*=${id}]`)
                        .parentElement.classList.add('active');
                });
            }
        });
    };

    window.addEventListener('scroll', changeNavbarStyle);
    window.addEventListener('scroll', activateLinks);
    
    return (
        <section className="Navbar">
            <nav className="Navbar__nav">
                <Link to='/'>
                    <h2 className="Navbar__sitename">myCodefolio</h2>
                    <p className="Navbar__site__description">Web and Mobile Development</p>
                </Link>
                <div className="Navbar__container">
                    <ul className={showMenu ? "Navbar__links" : "Navbar__collapse"}>
                        {links.map((link, index) =>
                            <li className={link.name === 'Home' ? 'active' : null}>
                                <Link
                                    key={`link-${index}`}
                                    to={`#${link.name.toLowerCase()}`}
                                >
                                    <i className="Navbar__icon">{link.icon}</i>
                                    <span className="Navbar__link__text">{link.name}</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div className="Navbar__iconButton">
                        <IconButton
                            onClick={toggleMenu}
                            sx={{
                                color: navbarColor
                            }}
                        >
                            {showMenu ? <Close fontSize="large" /> : <Menu fontSize="large" />}
                        </IconButton>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;