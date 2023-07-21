import './Projects.css';
import image1 from '../../assets/images/shoppingify.jpg';
import image2 from '../../assets/images/movies-explorer.jpg';
import image3 from '../../assets/images/mesto.jpg';
import image4 from '../../assets/images/travelling-across-russia.jpg';
import image5 from '../../assets/images/how-to-learn.jpg';
function Projects() {
    return (
        <section id='projects'
                 className="content-section projects">
            <ul className="project-list">
                <li about='Shopping app (React, Redux, TypeScript, Express, MongoDB, OpenAI API)' className="project-card">
                    <img className="project-card__image" src={image1}
                         alt="Project image"/>
                    <p className='project-card__about'>Shoppingify</p>
                </li>
                <li about='App to search movies (React, Redux, Express, MongoDB, TMDB API)' className="project-card">
                    <img className="project-card__image" src={image2}
                         alt="Project image"/>
                    <p className='project-card__about'>Movies explorer</p>
                </li>
                <li about='Social network app (React, Express, MongoDB)' className="project-card">
                    <img className="project-card__image" src={image3}
                         alt="Project image"/>
                    <p className='project-card__about'>Mesto</p>
                </li>
                <li about='Landing page' className="project-card">
                    <img className="project-card__image" src={image4}
                         alt="Project image"/>
                    <p className='project-card__about'>Travel across Russia</p>
                </li>
                <li about='Landing page' className="project-card">
                    <img className="project-card__image" src={image5}
                         alt="Project image"/>
                    <p className='project-card__about'>Learning how to learn</p>
                </li>
            </ul>
        </section>
    )
}

export default Projects;
