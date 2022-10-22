import React from 'react';
import './Skills.css';
import ReduxIcon from '../../resources/icons/redux-logo.png';
import ExpressIcon from '../../resources/icons/expressjs-icon.png';
import SQLIcon from '../../resources/icons/sql-icon.png';
import PostgreSQLIcon from '../../resources/icons/postgresql-icon.png';
import RDIcon from '../../resources/icons/responsive-design-icon.png';
import MongoDBIcon from '../../resources/icons/mongoDB-logo.png';
import TypeScriptIcon from '../../resources/icons/typescript-icon.png';
import ReactNativeIcon from '../../resources/icons/react-native-icon.png';

const Skills = () => {
    const skills = [
        {
            name: 'JavaScript',
            years: 2,
            experience: 8,
            icon: <i className="fab fa-js-square fa-4x"></i>
        },
        {
            name: 'HTML5',
            years: 2,
            experience: 7,
            icon: <i className="fab fa-html5 fa-4x"></i>
        },
        {
            name: 'CSS3',
            years: 2,
            experience: 6,
            icon: <i className="fab fa-css3-alt fa-4x"></i>
        },
        {
            name: 'Responsive Design',
            years: 2,
            experience: 6,
            icon: <img className="Skills__icon" src={RDIcon} alt="Responsive Design Icon" />
        },
        {
            name: 'SASS',
            years: 2,
            experience: 4,
            icon: <i className="fab fa-sass fa-4x"></i>
        },
        {
            name: 'Git',
            years: 2,
            experience: 4,
            icon: <i className="fab fa-git-alt fa-4x"></i>
        },
        {
            name: 'React',
            years: 1.5,
            experience: 6,
            icon: <i className="fab fa-react fa-4x"></i>
        },
        {
            name: 'Redux',
            years: 1.5,
            experience: 5,
            icon: <img className="Skills__icon" src={ReduxIcon} alt="Redux Icon" />
        },
        {
            name: 'Node.js',
            years: 1.5,
            experience: 4,
            icon: <i className="fab fa-node fa-4x"></i>
        },
        {
            name: 'Express',
            years: 1.5,
            experience: 5,
            icon: <img className="Skills__icon" src={ExpressIcon} alt="Express Icon" />
        },
        {
            name: 'SQL',
            years: 1,
            experience: 3,
            icon: <img className="Skills__icon" src={SQLIcon} alt="SQL Icon" />
        },
        {
            name: 'PostgreSQL',
            years: 1,
            experience: 3,
            icon: <img className="Skills__icon" src={PostgreSQLIcon} alt="PostgreSQL Icon" />
        },
        {
            name: 'Database Design',
            years: 1,
            experience: 3,
            icon: <i className="fas fa-database fa-4x"></i>
        },
        {
            name: 'MongoDB',
            years: 0.5,
            experience: 3,
            icon: <img className="Skills__icon__short" src={MongoDBIcon} alt="MongoDB Icon" />
        },
        {
            name: 'React Native',
            years: 0.5,
            experience: 4,
            icon: <img className="Skills__icon" src={ReactNativeIcon} alt="React Native Icon" />
        },
        {
            name: 'TypeScript',
            years: 0.5,
            experience: 4,
            icon: <img className="Skills__icon" src={TypeScriptIcon} alt="TypeScript Icon" />
        }
    ];

    return (
        <section id="skills" className="Skills">
            <h2 className="Skills__title">Technical Skills</h2>
            <table className="Skills__table">
                <thead className="Skills__table__head">
                    <tr className="Skills__table__row">
                        <th className="Skills__table__header">Languages/<br/>Technologies</th>
                        <th className="Skills__table__header">Years</th>
                        <th className="Skills__table__header">Experience<br/>Level (1-10)</th>
                    </tr>
                </thead>
                <tbody className="Skills__table__body">
                    {skills.map((skill, index) =>
                        <tr className="Skills__table__row" key={`skill-${index}`}>
                            <td className="Skills__table__data">
                                <span className="Skills__table__span">{skill.name}</span>
                            </td>
                            <td className="Skills__table__data">{skill.years}</td>
                            <td className="Skills__table__data Skills__table__experience">
                                {Array(skill.experience).fill(skill.experience).map((level, idx) => {
                                    if (idx + 1 === Array(skill.experience).length)
                                    return <div className="Skills__table__level" key={`level-${idx}`}>{idx + 1}</div>
                                    else
                                    return <div className="Skills__table__level" key={`level-${idx}`}></div>
                                })}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="Skills__icons">
                {skills.map((skill, index) =>
                    <div className="Skills__icons__container" key={index}>
                        {skill.icon}
                        <p>{skill.name}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Skills;