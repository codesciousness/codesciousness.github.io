import React, { useEffect } from 'react';
import './Education.css';
import CodecademyLogo from '../../resources/logos/Codecademy Logo.png';
import TAMUCLogo from '../../resources/logos/TAMUC Logo.png';
import UHDLogo from '../../resources/logos/UHD Logo.png';

const Education = () => {
    const schools = [
        {
            name: 'Codecademy',
            logo: CodecademyLogo,
            location: 'Online',
            major: 'Full-Stack Software Engineering',
            earn: 'Certificate',
            startDate: 'November 2020',
            endDate: 'Present',
            courses: ['JavaScript', 'React', 'SQL']
        },
        {
            name: 'Texas A&M University-Commerce',
            logo: TAMUCLogo,
            location: 'Online',
            major: 'General Studies',
            earn: 'Bachelors',
            startDate: 'August 2014',
            endDate: 'May 2016',
            courses: ['Database Design', 'Legal Environment of Business', 'Natural Resources Management']
        },
        {
            name: 'University of Houston-Downtown',
            logo: UHDLogo,
            location: 'Houston, TX',
            major: 'Chemistry w/Math Minor',
            earn: 'Associate',
            startDate: 'August 2006',
            endDate: 'August 2009',
            courses: ['Calculus III', 'Organic Chemistry', 'Set Theory']
        }
    ];

    const reveal = () => {
        const reveals = document.querySelectorAll('.Education__reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    };

    window.addEventListener('scroll', reveal);

    useEffect(() => {
        reveal();
    }, []);

    return (
        <section id="education" className="Education">
            <h2 className="Education__title Education__reveal">Education</h2>
            <div className="Education__container">
                {schools.map((school, index) =>
                    <div className="Education__school Education__reveal" key={`school-${index}`}>
                        <img className="Education__image" src={school.logo} alt={`${school.name} Logo`}/>
                        <div className="Education__content">
                            <div className="Education__content__align">
                                <h3 className="Education__school__name">{school.name}</h3>
                                <span className="Education__school__location">{school.location}</span>
                            </div>
                            <span className="Education__earned">{school.earn}</span>
                            <span className="Education__major"> in {school.major}</span>
                            <p className="Education__dates">
                                <span className="Education__date">{school.startDate}</span>
                                &nbsp;to&nbsp;
                                <span className="Education__date">{school.endDate}</span>
                            </p>
                            <h4 className="Education__courses">Sample of Courses Taken:</h4>
                            {school.courses.map((course, index) =>
                                <p className="Education__course" key={`course-${index}`}>&#9702; {course}</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Education;