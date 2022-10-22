import React from 'react';
import './Portfolio.css';
import MortgageCalculatorAppImg from '../../resources/images/mortgage-calculator-app-resized.jpg';
import MortgagePaymentCalculatorImg from '../../resources/images/mortgage-payment-calculator-resized.jpg';
import EcommerceAppImg from '../../resources/images/e-commerce-app-project-resized.jpg';
import RedditClientImg from '../../resources/images/reddit-client-project-resized.jpg';
import InsuranceTechToolsImg from '../../resources/images/insurance-tech-tools-resized.jpg';
import CompanyHomepageImg from '../../resources/images/company-homepage-flexbox-project-resized.jpg';
import MortgageCalculatorAppGif from '../../resources/images/mortgage-calculator-app-screen-recording.gif';
import MortgagePaymentCalculatorGif from '../../resources/images/mortgage-payment-calculator-screen-recording.gif';
import EcommerceAppGif from '../../resources/images/e-commerce-app-checkout-screen-recording.gif';
import RedditClientGif from '../../resources/images/reddit-client-screen-recording.gif';
import InsuranceTechToolsGif from '../../resources/images/insurance-tech-tools-screen-recording.gif';
import CompanyHomepageGif from '../../resources/images/company-homepage-flexbox-screen-recording.gif';

const Portfolio = () => {
    const projects = [
        {
            title: 'Mortgage Calculator App',
            number: 'one',
            position: 'front',
            deploy_link: 'https://play.google.com/store/apps/details?id=com.codesciousness.mortgagepaymentcalculatorapp',
            repo_link: 'https://github.com/codesciousness/mortgage-payment-calculator-app',
            gif: MortgageCalculatorAppGif,
            screenshot: MortgageCalculatorAppImg,
            description: 'Firebase Express TypeScript React-Native Redux Expo'
        },
        {
            title: 'Mortgage Payment Calculator',
            number: 'two',
            position: 'right',
            deploy_link: 'https://mortgage-payment-calculator.herokuapp.com',
            repo_link: 'https://github.com/codesciousness/mortgage-payment-calculator',
            gif: MortgagePaymentCalculatorGif,
            screenshot: MortgagePaymentCalculatorImg,
            description: 'MongoDB Express TypeScript React Redux Node.js'
        },
        {
            title: 'E-commerce App',
            number: 'three',
            position: 'top',
            deploy_link: 'https://plus-ultra-store.herokuapp.com',
            repo_link: 'https://github.com/codesciousness/e-commerce-app',
            gif: EcommerceAppGif,
            screenshot: EcommerceAppImg,
            description: 'Postgres Express React Redux Node.js'
        },
        {
            title: 'Reddit Client',
            number: 'four',
            position: 'left',
            deploy_link: 'https://reddit-science.netlify.app',
            repo_link: 'https://github.com/codesciousness/reddit-client',
            gif: RedditClientGif,
            screenshot: RedditClientImg,
            description: 'React Redux Node.js'
        },
        {
            title: 'Insurance Tech Tools',
            number: 'five',
            position: 'bottom',
            deploy_link: 'https://github.com/codesciousness/insurance-tech-tools',
            repo_link: 'https://github.com/codesciousness/insurance-tech-tools',
            gif: InsuranceTechToolsGif,
            screenshot: InsuranceTechToolsImg,
            description: 'HTML SCSS JavaScript'
        },
        {
            title: 'Company Home Page with Flexbox',
            number: 'six',
            position: 'back',
            deploy_link: 'https://mycodefolio.com/company-homepage-flexbox',
            repo_link: 'https://github.com/codesciousness/company-homepage-flexbox',
            gif: CompanyHomepageGif,
            screenshot: CompanyHomepageImg,
            description: 'HTML SCSS JavaScript'
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