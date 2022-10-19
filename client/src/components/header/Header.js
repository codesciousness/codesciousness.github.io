import React, { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Navbar from '../navbar/Navbar';
import BackgroundImg from '../../resources/images/artem-sapegin-b18TRXc8UPQ-unsplash.jpg';

const Header = () => {
    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat'
    };

    const words = ['Web Designer & Developer', 'Mobile Application Developer', 'Full-Stack Software Engineer'];
    const len = words.length;
    const speed = 70;
    let i = 0;
    let offset = 0;
    let forwards = true;
    let skipCount = 0;
    let skipDelay = 15;
    let part;

    const animateTitle = () => {
        if (forwards) {
            if (offset >= words[i].length) {
                skipCount++;
                if (skipCount === skipDelay) {
                    forwards = false;
                    skipCount = 0;
                }
            }
        }
        else {
            if (offset === 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substring(0, offset);
        if (skipCount === 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        const title = document.querySelector('.Header__title');
        title.innerText = part;
    };

    useEffect(() => {
        const interval = setInterval(animateTitle, speed);
        return () => clearInterval(interval);
    });

    return (
        <section className="Header" style={style}>
            <Navbar />
            <div className="Header__container">
                <span>I'm a </span>
                <h1 className="Header__title">Web Designer & Developer</h1>
                <p className="Header__content">
                    I enjoy the process of turning an idea into reality, and have a background in utilizing front-end 
                    frameworks, database design, building APIs and working with servers and cloud functions. I have a 
                    passion for problem solving, creative thinking and delivering exceptional quality.
                </p>
                <Link to='#contact'>
                    <Button
                        className="Header__button"
                        variant="contained"
                        disableElevation
                        endIcon={<ArrowForwardIosIcon />}
                        sx={{
                            backgroundColor: 'lightseagreen',
                            padding: '1rem 2rem',
                            marginTop: '1rem',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            fontFamily: 'Rajdhani, sans-serif',
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.1)'
                            }
                        }}
                    >
                        Looking to hire
                    </Button>
                </Link>
            </div>
        </section>
    );
}

export default Header;