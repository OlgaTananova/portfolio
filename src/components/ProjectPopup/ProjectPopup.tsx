import './ProjectPopup.css';
import ProjectSlider from "../ProjectSlider/ProjectSlider.tsx";
import {EventHandler, MouseEventHandler} from "react";
import {ProjectSlides} from "../types.ts";

function ProjectPopup({isProjectPopupOpened, onClose, currentProject, projects, onMoveBack, onMoveForward, onBulletClick}: {
    isProjectPopupOpened: boolean,
    onClose: MouseEventHandler,
    currentProject: ProjectSlides,
    projects: ProjectSlides[],
    onMoveBack: MouseEventHandler,
    onMoveForward: MouseEventHandler,
    onBulletClick: EventHandler<any>
}) {
    const handleCloseButtonClick: MouseEventHandler = (e) => {
        onClose(e);
    }

    const handleOverlayClick: MouseEventHandler = (e)=>{
        if (e.target === e.currentTarget) onClose(e);
    }

    const handleMoveLeftClick: MouseEventHandler = (e) => {
        onMoveBack(e);
    }

    const handleMoveRightClick: MouseEventHandler = (e) => {
        onMoveForward(e);
    }

    const handleBulletClick: MouseEventHandler = (e) => {
        onBulletClick(e.currentTarget.id)
    }

    return (
        <div onClick={handleOverlayClick} className={`project-popup ${isProjectPopupOpened ? 'project-popup_opened' : ''}`}>
            <div className="project-popup__container">
                <button onClick={handleCloseButtonClick}
                        className="project-popup__close-btn"></button>
                <div className='project-popup__slider-wrapper'>
                    <button onClick={handleMoveLeftClick} className='project-popup__scroll-btn project-popup__scroll-btn_left'></button>
                <ProjectSlider currentProject={currentProject}/>
                <button onClick={handleMoveRightClick} className='project-popup__scroll-btn project-popup__scroll-btn_right'></button>
                </div>
                <div className='project-popup__bullet-section'>
                    {projects.map((p)=>{
                        return (<span id={p.id} onClick={handleBulletClick} className={`project-popup__bullet ${p.id === currentProject.id? 'project-popup__bullet_active' : ''}`} key={p.id}></span>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectPopup;
