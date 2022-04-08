import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section className="Skills">
            <h2 className="Skills__title">Skills</h2>
            <div className="Skills__icons" role="presentation">
                <div>
                    <i className="fab fa-html5 fa-5x"></i>
                    <p>HTML5</p>
                </div>
                <div>
                    <i className="fab fa-css3-alt fa-5x"></i>
                    <p>CSS3</p>
                </div>
                <div>
                    <i className="fab fa-sass fa-5x"></i>
                    <p>SASS</p>
                </div>
                <div>
                    <i className="fab fa-js-square fa-5x"></i>
                    <p>JavaScript</p>
                </div>
                <div>
                    <i className="fab fa-react fa-5x"></i>
                    <p>React</p>
                </div>
                <div>
                    <i className="fab fa-node fa-5x"></i>
                    <p>Node.js</p>
                </div>
                <div>
                    <i className="fab fa-git-alt fa-5x"></i>
                    <p>Git</p>
                </div>
                <div>
                    <i className="fab fa-github fa-5x"></i>
                    <p>GitHub</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;