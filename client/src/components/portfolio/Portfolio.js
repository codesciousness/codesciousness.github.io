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
    const projects = [
        {
            title: 'E-commerce App',
            number: 'one',
            position: 'front',
            deploy_link: 'https://plus-ultra-store.herokuapp.com',
            repo_link: 'https://github.com/codesciousness/e-commerce-app',
            gif: EcommerceAppGif,
            screenshot: EcommerceAppImg,
            description: 'Postgres/Express/React-Redux/Node.js Project'
        },
        {
            title: 'Reddit Client',
            number: 'two',
            position: 'right',
            deploy_link: 'https://reddit-science.netlify.app',
            repo_link: 'https://github.com/codesciousness/reddit-client',
            gif: RedditClientGif,
            screenshot: RedditClientImg,
            description: 'React-Redux/Node.js Project'
        },
        {
            title: 'Company Home Page with Flexbox',
            number: 'three',
            position: 'top',
            deploy_link: 'https://mycodefolio.com/company-homepage-flexbox',
            repo_link: 'https://github.com/codesciousness/company-homepage-flexbox',
            gif: CompanyHomepageGif,
            screenshot: CompanyHomepageImg,
            description: 'HTML/SCSS/JS Project'
        },
        {
            title: 'Jammming',
            number: 'four',
            position: 'left',
            deploy_link: 'https://mycodefolio.com/jammming',
            repo_link: 'https://github.com/codesciousness/jammming',
            gif: JammingGif,
            screenshot: JammingImg,
            description: 'React/Node.js Project'
        },
        {
            title: 'Find Your Hat',
            number: 'five',
            position: 'bottom',
            deploy_link: 'https://github.com/codesciousness/find-your-hat',
            repo_link: 'https://github.com/codesciousness/find-your-hat',
            gif: FindYourHatGif,
            screenshot: FindYourHatImg,
            description: 'Node.js Project'
        },
        {
            title: 'Web Design System',
            number: 'six',
            position: 'back',
            deploy_link: 'https://mycodefolio.com/web-design-system',
            repo_link: 'https://github.com/codesciousness/web-design-system',
            gif: WebDesignSystemGif,
            screenshot: WebDesignSystemImg,
            description: 'HTML/CSS/JS Project'
        }
    ];

    return (
        <section id="projects" className="Portfolio">
            <h2 className="Portfolio__title">Latest Projects</h2>
            <div className="Portfolio__projects__container">
                <ul className="Portfolio__selection">
                    {projects.map((project, index) =>
                        <li className={`selection__${project.number} li`} tabindex={index++}>
                            <img className="Portfolio__image" src={project.screenshot} alt={`${project.title} Project Screenshot`} />
                        </li>
                    )}
                    <li className="Portfolio__cube__container">
                        <div className="Portfolio__cube">
                            {projects.map((project, index) =>
                                <div className={project.position} key={`project-${index}`}>
                                    <div className={`Portfolio__projects ${project.number}`} role="presentation">
                                        <div className="Portfolio__image__container" role="presentation">
                                            <a href={project.deploy_link} target="_blank" rel="noreferrer">
                                                <img className="Portfolio__image" src={project.gif} alt={`${project.title} Project Screenshot`} />
                                            </a>
                                        </div>
                                        <div className="Portfolio__info" role="presentation">
                                            <a href={project.deploy_link} target="_blank" rel="noreferrer">
                                                <h3 className="Portfolio__project__title">{project.title}</h3>
                                            </a>
                                            <a href={project.repo_link} target="_blank" rel="noreferrer">
                                                <i className="fas fa-code"></i><span>GitHub Repo</span>
                                            </a>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="Portfolio__projects__flex__container">
                {projects.map((project, index) =>
                    <div className={project.position} key={`project-${index}`}>
                        <div className={`Portfolio__projects ${project.number}`} role="presentation">
                            <div className="Portfolio__image__container" role="presentation">
                                <a href={project.deploy_link} target="_blank" rel="noreferrer">
                                    <img className="Portfolio__image" src={project.gif} alt={`${project.title} Project Screenshot`} />
                                </a>
                            </div>
                            <div className="Portfolio__info" role="presentation">
                                <a href={project.deploy_link} target="_blank" rel="noreferrer">
                                    <h3 className="Portfolio__project__title">{project.title}</h3>
                                </a>
                                <a href={project.repo_link} target="_blank" rel="noreferrer">
                                    <i className="fas fa-code"></i><span>GitHub Repo</span>
                                </a>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Portfolio;