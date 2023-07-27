import './ProjectSlider.css';
import {ProjectSlides} from "../types.ts";
import {resolveImagePath} from "../../utils.ts";

function ProjectSlider({currentProject}: { currentProject: ProjectSlides }) {
    return (
        <div className='project'>
            <div className='project__wrapper'>
                <figure className='project__image'
                        style={{backgroundImage: `url(${resolveImagePath(currentProject.image)})`}}></figure>
                <div className="project__text-wrapper">
                    <h3 className='project__name'>{currentProject.name || ''}</h3>
                    <p className="project__description">{currentProject.description}</p>
                </div>
            </div>
            <p className="project__stack">Stack: {currentProject.stack}</p>
            <div className="project__links">
                <a className="project__link project__link_browser"
                   href={`${currentProject.browserUrl}`}
                   target='__blank'>Check it out</a>
                <a className="project__link project__link_demo"
                   href={`${currentProject.demoURL || ''}`}
                   target='__blank'>See the demo</a>
                <a className="project__link project__link_github"
                   href={`${currentProject.gitHubUrl}`}
                   target='__blank'>GitHub</a>
            </div>
        </div>
    )
}

export default ProjectSlider;
