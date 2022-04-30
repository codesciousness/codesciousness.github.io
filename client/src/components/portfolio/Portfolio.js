import React from 'react';
import './Portfolio.css';
import EcommerceAppImg from '../../resources/images/e-commerce-app-project-resized.jpg';
import RedditClientImg from '../../resources/images/reddit-client-project-resized.jpg';
import CompanyHomepageImg from '../../resources/images/company-homepage-flexbox-project-resized.jpg';
import JammingImg from '../../resources/images/jammming-project-resized.jpg';
import FindYourHatImg from '../../resources/images/find-your-hat-project.jpg';
import WebDesignSystemImg from '../../resources/images/web-design-system-resized.jpg';
import EcommerceAppGif from '../../resources/images/e-commerce-app-checkout-screen-recording.gif';
import RedditClientGif from '../../resources/images/reddit-client-screen-recording.gif';
import CompanyHomepageGif from '../../resources/images/company-homepage-flexbox-screen-recording.gif';
import JammingGif from '../../resources/images/jammming-screen-recording.gif';
import FindYourHatGif from '../../resources/images/find-your-hat-screen-recording.gif';
import WebDesignSystemGif from '../../resources/images/web-design-system-screen-recording.gif';

const Portfolio = () => {
    return (
        <section id="portfolio" className="Portfolio">
            <h2 className="Portfolio__title">Latest Work</h2>
            <div className="Portfolio__projects__container">
                <ul className="Portfolio__selection">
                    <li className="selection__one li" tabindex="1"><img className="Portfolio__image" src={EcommerceAppImg} alt="E-commerce App Project Screenshot" /></li>
                    <li className="selection__two li" tabindex="2"><img className="Portfolio__image" src={RedditClientImg} alt="Reddit Client Project Screenshot" /></li>
                    <li className="selection__three li" tabindex="3"><img className="Portfolio__image" src={CompanyHomepageImg} alt="Company Home Page with Flexbox Project Screenshot" /></li>
                    <li className="selection__four li" tabindex="4"><img className="Portfolio__image" src={JammingImg} alt="Jammming Project Screenshot" /></li>
                    <li className="selection__five li" tabindex="5"><img className="Portfolio__image" src={FindYourHatImg} alt="Find Your Hat Project Screenshot" /></li>
                    <li className="selection__six li" tabindex="6"><img className="Portfolio__image" src={WebDesignSystemImg} alt="Web Design System Project Screenshot" /></li>
                    <li className="Portfolio__cube__container">
                        <div className="Portfolio__cube">
                            <div className="front">
                                <div className="Portfolio__projects one" role="presentation">
                                    <div className="Portfolio__image__container" role="presentation">
                                        <a href="https://plus-ultra-store.herokuapp.com" target="_blank" rel="noreferrer">
                                            <img className="Portfolio__image" src={EcommerceAppGif} alt="E-commerce App Project Screenshot" />
                                        </a>
                                    </div>
                                    <div className="Portfolio__info" role="presentation">
                                        <a href="https://plus-ultra-store.herokuapp.com" target="_blank" rel="noreferrer">
                                            <h3 className="Portfolio__project__title">E-commerce App</h3>
                                        </a>
                                        <a href="https://github.com/codesciousness/e-commerce-app" target="_blank" rel="noreferrer">
                                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                                        </a>
                                        <p>Postgres/Express/React-Redux/Node.js Project</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="Portfolio__projects two" role="presentation">
                                    <div className="Portfolio__image__container" role="presentation">
                                        <a href="https://reddit-science.netlify.app" target="_blank" rel="noreferrer">
                                            <img className="Portfolio__image" src={RedditClientGif} alt="Reddit Client Project Screenshot" />
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
                            </div>
                            <div className="top">
                                <div className="Portfolio__projects three" role="presentation">
                                    <div className="Portfolio__image__container" role="presentation">
                                        <a href="https://mycodefolio.com/company-homepage-flexbox" target="_blank" rel="noreferrer">
                                            <img className="Portfolio__image" src={CompanyHomepageGif} alt="Company Home Page with Flexbox Project Screenshot" />
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
                            </div>
                            <div className="left">
                                <div className="Portfolio__projects four" role="presentation">
                                    <div className="Portfolio__image__container" role="presentation">
                                        <a href="https://mycodefolio.com/jammming" target="_blank" rel="noreferrer">
                                            <img className="Portfolio__image" src={JammingGif} alt="Jammming Project Screenshot" />
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
                            </div>
                            <div className="bottom">
                                <div className="Portfolio__projects five" role="presentation">
                                    <div className="Portfolio__image__container" role="presentation">
                                        <a href="https://github.com/codesciousness/find-your-hat" target="_blank" rel="noreferrer">
                                            <img className="Portfolio__image" src={FindYourHatGif} alt="Find Your Hat Project Screenshot" />
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
                            </div>
                            <div className="back">
                                <div className="Portfolio__projects six" role="presentation">
                                    <div className="Portfolio__image__container" role="presentation">
                                        <a href="https://mycodefolio.com/web-design-system" target="_blank" rel="noreferrer">
                                            <img className="Portfolio__image" src={WebDesignSystemGif} alt="Web Design System Project Screenshot" />
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
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="Portfolio__projects__flex__container">
                <div className="Portfolio__projects one" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://plus-ultra-store.herokuapp.com" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src={EcommerceAppGif} alt="E-commerce App Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://plus-ultra-store.herokuapp.com" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">E-commerce App</h3>
                        </a>
                        <a href="https://github.com/codesciousness/e-commerce-app" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>Postgres/Express/<br />React-Redux/Node.js<br />Project</p>
                    </div>
                </div>
                <div className="Portfolio__projects two" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://reddit-science.netlify.app" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src={RedditClientGif} alt="Reddit Client Project Screenshot" />
                        </a>
                    </div>
                    <div className="Portfolio__info" role="presentation">
                        <a href="https://reddit-science.netlify.app" target="_blank" rel="noreferrer">
                            <h3 className="Portfolio__project__title">Reddit Client</h3>
                        </a>
                        <a href="https://github.com/codesciousness/reddit-client" target="_blank" rel="noreferrer">
                            <i className="fas fa-code"></i><span>GitHub Repo</span>
                        </a>
                        <p>JS/React-Redux/<br />Node.js Project</p>
                    </div>
                </div>
                <div className="Portfolio__projects three" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://mycodefolio.com/company-homepage-flexbox" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src={CompanyHomepageGif} alt="Company Home Page with Flexbox Project Screenshot" />
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
                            <img className="Portfolio__image" src={JammingGif} alt="Jammming Project Screenshot" />
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
                        <a href="https://github.com/codesciousness/find-your-hat" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src={FindYourHatGif} alt="Find Your Hat Project Screenshot" />
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
                <div className="Portfolio__projects six" role="presentation">
                    <div className="Portfolio__image__container" role="presentation">
                        <a href="https://mycodefolio.com/web-design-system" target="_blank" rel="noreferrer">
                            <img className="Portfolio__image" src={WebDesignSystemGif} alt="Web Design System Project Screenshot" />
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
            </div>
        </section>
    );
}

export default Portfolio;