import './ProjectSlider.css';
import {useState} from "react";
import {ProjectSlides} from "../types.ts";
import {projects} from "../data.ts";

function ProjectSlider() {
    const [currentProject, setCurrentProject] = useState(0)

    return (
        <div className='project'>
            <figure className='project__image' style={{backgroundImage: `url(${projects[currentProject].image})`}}></figure>
            <caption className='project__name'>{projects[currentProject].name}</caption>
            <p className="project__description">{projects[currentProject].description}</p>

        </div>
    )
}

export default ProjectSlider;
