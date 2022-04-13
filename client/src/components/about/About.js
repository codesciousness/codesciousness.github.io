import React from 'react';
import './About.css';
import AboutImg from '../../resources/images/alexander-sinn-KgLtFCgfC28-unsplash-square.jpg';

const About = () => {
    return (
        <section id="about" className="About">
            <h2 className="About__title">Why I chose software developing</h2>
            <div className="About__container">
                <img className="About__image" src={AboutImg} alt="Software developer" />
                <div>
                    <p className="About__content"><span>Hello!</span> My name is Mia. I am currently striving to become an outstanding 
                        full-stack web developer and programmer to contribute to making the web a 
                        better place. I have always had a passion for logic and creative thinking, 
                        and with web development I found a beautiful unification of both. I enjoy 
                        tackling complex problems, have an eye for detail and a desire for perfection.
                    </p>
                    <p className="About__content">My design and development skillset includes JavaScript, HTML, CSS, Sass, Git, GitHub, 
                        React, Redux, Node.js, Express, SQL, PostgreSQL, database and responsive design. When I’m not coding, 
                        you’ll typically find me watching anime, listening to ancient epic storytelling or finding balance in 
                        my life through meditation. I am currently living in Lubbock, Texas. If you are interested in 
                        working on a project together, don’t hesitate to <a href="contact.html">get in touch</a>!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;