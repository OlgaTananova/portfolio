import './Projects.css';
import {EventHandler, MouseEventHandler} from "react";
import {ProjectSlides} from "../types.ts";
import {resolveImagePath} from "../../utils.ts";

function Projects({onClick, projects}: {onClick: EventHandler<any>, projects: ProjectSlides[]}) {
    const handleCardClick: MouseEventHandler = (e) => {
        onClick(e.currentTarget.id)
    }

    return (
        <section id='projects'
                 className="content-section projects">
            <ul className="project-list">
                {projects.map((project)=>{
                    return (
                        <li onClick={handleCardClick} id={`${project.id || '0'}`} key={project.id || 0} about={project.about || ''} style={{backgroundImage: `url(${resolveImagePath(project.image || '')}`}} className="project-card">
                            <div className="project-card__image"/>
                            <p className='project-card__about'>{project.name || ''}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Projects;
