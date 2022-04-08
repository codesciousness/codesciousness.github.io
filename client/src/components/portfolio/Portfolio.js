import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className="Portfolio">
            <h2 className="Portfolio__title">Latest Work</h2>
            <div className="Portfolio__container" role="presentation">
                <div className="Portfolio__projects one" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://plus-ultra-store.herokuapp.com" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src="resources/images/e-commerce-app-project-resized.jpg" alt="E-commerce App Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://plus-ultra-store.herokuapp.com" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">E-commerce App</h3>
                        </a>
                        <a href="https://github.com/codesciousness/e-commerce-app" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>Postgres/Express/React-Redux/Node Project</p>
                    </div>
                </div>
                <div className="Portfolio__projects two" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://reddit-science.netlify.app" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src="resources/images/reddit-client-project.jpg" alt="Reddit Client Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://reddit-science.netlify.app" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">Reddit Client</h3>
                        </a>
                        <a href="https://github.com/codesciousness/reddit-client" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>JS/React-Redux/Node.js Project</p>
                    </div>
                </div>
                <div className="Portfolio__projects three" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://mycodefolio.com/company-homepage-flexbox" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src="resources/images/company-homepage-flexbox-project-resized.jpg" alt="Company Home Page with Flexbox Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://mycodefolio.com/company-homepage-flexbox" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">Company Home Page with Flexbox</h3>
                        </a>
                        <a href="https://github.com/codesciousness/company-homepage-flexbox" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>HTML/SCSS/JS Project</p>
                    </div>
                </div>
                <div className="Portfolio__projects four" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://mycodefolio.com/jammming" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src="resources/images/jammming-project-resized.jpg" alt="Jammming Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://mycodefolio.com/jammming" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">Jammming</h3>
                        </a>
                        <a href="https://github.com/codesciousness/jammming" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>JS/React/Node.js Project</p>
                    </div>
                </div>
                <div className="Portfolio__projects five" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://mycodefolio.com/responsive-club-site" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src="resources/images/responsive-club-site-project-resized.jpg" alt="Responsive Club Site Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://mycodefolio.com/responsive-club-site" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">Responsive Club Site</h3>
                        </a>
                        <a href="https://github.com/codesciousness/responsive-club-site" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>HTML/SCSS Project</p>
                    </div>
                </div>
                <div className="Portfolio__projects six" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://github.com/codesciousness/find-your-hat" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src="resources/images/find-your-hat-project.jpg" alt="Find Your Hat Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://github.com/codesciousness/find-your-hat" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">Find Your Hat</h3>
                        </a>
                        <a href="https://github.com/codesciousness/find-your-hat" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>JS/Node.js Project</p>
                    </div>
                </div>
                <div className="Portfolio__projects seven" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://mycodefolio.com/web-design-system" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src="resources/images/web-design-system-resized.jpg" alt="Web Design System Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://mycodefolio.com/web-design-system" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">Web Design System</h3>
                        </a>
                        <a href="https://github.com/codesciousness/web-design-system" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>HTML/CSS/JS Project</p>
                    </div>
                </div>
                <div className="Portfolio__projects eight" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://mycodefolio.com/cheatsheets" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src="resources/images/cheatsheets-project-resized.jpg" alt="Cheatsheets Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://mycodefolio.com/cheatsheets" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">Cheatsheets</h3>
                        </a>
                        <a href="https://github.com/codesciousness/cheatsheets" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>HTML/CSS/JS Project</p>
                    </div>
                </div>
                <div className="Portfolio__projects nine" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://mycodefolio.com/colmar-academy" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src="resources/images/colmar-academy-project.jpg" alt="Colmar Academy Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://mycodefolio.com/colmar-academy" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">Colmar Academy</h3>
                        </a>
                        <a href="https://github.com/codesciousness/colmar-academy" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>HTML/CSS Project</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;