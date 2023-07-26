import './ProjectPopup.css';
import ProjectSlider from "../ProjectSlider/ProjectSlider.tsx";
function ProjectPopup() {
    return (
        <div className="project-popup">
            <div className="project-popup__container">
                <button className="project-popup__close-btn"></button>
                <ProjectSlider />
                <button className='project-popup__scroll-btn project-popup__scroll-btn_left'></button>
                <button className='project-popup__scroll-btn project-popup__scroll-btn_right'></button>
            </div>
        </div>
    )
}

export default ProjectPopup;
