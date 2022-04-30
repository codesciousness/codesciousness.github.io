import React from 'react';
import './Skills.css';
import ReduxIcon from '../../resources/icons/redux-logo.png';
import ExpressIcon from '../../resources/icons/expressjs-icon.png';
import SQLIcon from '../../resources/icons/sql-icon.png';
import PostgreSQLIcon from '../../resources/icons/postgresql-icon.png';
import RDIcon from '../../resources/icons/responsive-design-icon.png';

const Skills = () => {
    return (
        <section className="Skills">
            <h2 className="Skills__title">Full-Stack Skills</h2>
            <table className="Skills__table">
                <thead className="Skills__table__head">
                    <tr className="Skills__table__row">
                        <th className="Skills__table__header">{'Languages & Technologies'}</th>
                        <th className="Skills__table__header">Years</th>
                        <th className="Skills__table__header">Experience Level (1-10)</th>
                    </tr>
                </thead>
                <tbody className="Skills__table__body">
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">JavaScript</span></td>
                        <td className="Skills__table__data">2</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">HTML5</span></td>
                        <td className="Skills__table__data">1.5</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">CSS3</span></td>
                        <td className="Skills__table__data">1.5</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">SASS</span></td>
                        <td className="Skills__table__data">1</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">Git</span></td>
                        <td className="Skills__table__data">1.5</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">GitHub</span></td>
                        <td className="Skills__table__data">1.5</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">React</span></td>
                        <td className="Skills__table__data">1</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">Redux</span></td>
                        <td className="Skills__table__data">1</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">Node</span></td>
                        <td className="Skills__table__data">1</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">Express</span></td>
                        <td className="Skills__table__data">1</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">SQL</span></td>
                        <td className="Skills__table__data">1</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                    <tr className="Skills__table__row">
                        <td className="Skills__table__data"><span className="Skills__table__span">PostgreSQL</span></td>
                        <td className="Skills__table__data">1</td>
                        <td className="Skills__table__data Skills__table__experience">
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                            <div className="Skills__table__level"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="Skills__icons">
                <div className="Skills__icons__container">
                    <i className="fab fa-js-square fa-4x"></i>
                    <p>JavaScript</p>
                </div>
                <div className="Skills__icons__container">
                    <i className="fab fa-html5 fa-4x"></i>
                    <p>HTML5</p>
                </div>
                <div className="Skills__icons__container">
                    <i className="fab fa-css3-alt fa-4x"></i>
                    <p>CSS3</p>
                </div>
                <div className="Skills__icons__container">
                    <i className="fab fa-sass fa-4x"></i>
                    <p>SASS</p>
                </div>
                <div className="Skills__icons__container">
                    <i className="fab fa-git-alt fa-4x"></i>
                    <p>Git</p>
                </div>
                <div className="Skills__icons__container">
                    <i className="fab fa-github fa-4x"></i>
                    <p>GitHub</p>
                </div>
                <div className="Skills__icons__container">
                    <i className="fab fa-react fa-4x"></i>
                    <p>React</p>
                </div>
                <div className="Skills__icons__container">
                    <img className="Skills__icon" src={ReduxIcon} alt="Redux Icon" />
                    <p>Redux</p>
                </div>
                <div className="Skills__icons__container">
                    <i className="fab fa-node fa-4x"></i>
                    <p>Node.js</p>
                </div>
                <div className="Skills__icons__container">
                    <img className="Skills__icon" src={ExpressIcon} alt="Express Icon" />
                    <p>Express.js</p>
                </div>
                <div className="Skills__icons__container">
                    <img className="Skills__icon" src={SQLIcon} alt="SQL Icon" />
                    <p>SQL</p>
                </div>
                <div className="Skills__icons__container">
                    <img className="Skills__icon" src={PostgreSQLIcon} alt="PostgreSQL Icon" />
                    <p>PostgreSQL</p>
                </div>
                <div className="Skills__icons__container">
                    <img className="Skills__icon" src={RDIcon} alt="Responsive Design Icon" />
                    <p>Responsive Design</p>
                </div>
                <div className="Skills__icons__container">
                    <i className="fas fa-database fa-4x"></i>
                    <p>Database Design</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;