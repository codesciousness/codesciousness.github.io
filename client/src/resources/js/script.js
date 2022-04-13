const portfolio = document.getElementById('portfolio');
const projects = document.querySelectorAll('.projects');

const getDistance = () => {
    let viewportWidth = window.innerWidth;
    let distToPortfolio = portfolio.getBoundingClientRect().top;
    projects.forEach(project => {
        if (viewportWidth > 1500 && distToPortfolio > 100) {
            project.style.margin = '3rem';
        }
        else if (viewportWidth > 1500 && distToPortfolio <= 100) {
            project.style.margin = '1rem';
        }
        else if (viewportWidth < 1500 && viewportWidth >= 1250) {
            project.style.margin = '1rem';
        }
        else if (viewportWidth < 1250 && viewportWidth >= 950 && distToPortfolio > 100) {
            project.style.margin = '2rem';
        }
        else if (viewportWidth < 1250 && viewportWidth >= 950 && distToPortfolio <= 100) {
            project.style.margin = '1rem';
        }
        else if (viewportWidth < 950 && viewportWidth >= 900) {
            project.style.margin = '1rem';
        }
        else if (viewportWidth < 900 && viewportWidth >= 567 && distToPortfolio > 100) {
            project.style.margin = '2rem';
        }
        else if (viewportWidth < 900 && viewportWidth >= 567 && distToPortfolio <= 100) {
            project.style.margin = '1rem';
        }
        else if (viewportWidth < 567 && distToPortfolio > 50) {
            project.style.margin = '2rem';
        }
        else if (viewportWidth < 567 && distToPortfolio <= 50) {
            project.style.margin = '1rem 0';
        }
    });
}

['load', 'scroll', 'resize'].forEach(event => window.addEventListener(event, getDistance));