import './App.css'
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import Projects from "../Projects/Projects.tsx";
import About from "../About/About.tsx";
import Contact from "../Contact/Contact.tsx";
import Skills from "../Skills/Skills.tsx";
import ProjectPopup from "../ProjectPopup/ProjectPopup.tsx";
import {projects} from "../data.ts";
import {MouseEventHandler, useEffect, useState} from "react";
import {ProjectSlides} from "../types.ts";

function App() {
    const [isProjectPopupOpened, setIsProjectPopupOpened] = useState<boolean>(false);
    const [allProjects, setAllProjects] = useState<ProjectSlides[]>([]);

    const initialCurrentProject = {
        about: '',
        id: '',
        browserUrl: '',
        gitHubUrl: '',
        demoURL: "",
        description: '',
        name: "",
        stack: "",
        image: ""
    }
    const [currentProject, setCurrentProject] = useState<ProjectSlides>(initialCurrentProject)

    useEffect(() => {
        setAllProjects(projects);
    }, []);

    const handleProjectClick = (ID: string) => {
        const project = allProjects.find((p: ProjectSlides) => {
            return p.id === ID;
        })
        const {
            id,
            image,
            name,
            gitHubUrl,
            stack,
            browserUrl,
            demoURL,
            description,
            about
        } = project || initialCurrentProject;
        setCurrentProject(
            {
                id, image, name, gitHubUrl, stack, browserUrl, about, description, demoURL: demoURL || ""
            }
        )
        setIsProjectPopupOpened(true);
    }

    const handleProjectPopupClose = () => {
        setIsProjectPopupOpened(false);
        setCurrentProject(initialCurrentProject);
    }

    const handleBackHomeClick: MouseEventHandler = () => {
        window.scroll(0,0);
    }
    const handleMoveBackClick = () => {
        const index = parseInt(currentProject.id || '0') - 1;
        if (index <= 1) {
            const updatedProject = allProjects.find((p: ProjectSlides) => {
                return p.id === '1'
            });
            setCurrentProject(updatedProject || initialCurrentProject);
        } else {
            const updatedProject = allProjects.find((p) => {
                return p.id === index.toString();
            })
            setCurrentProject(updatedProject || initialCurrentProject)
        }
    }

    const handleMoveForwardClick = () => {
        const index = parseInt(currentProject.id || '0') + 1;
        if (index >= allProjects.length) {
            const updatedProject = allProjects.find((p: ProjectSlides) => {
                return p.id === allProjects.length.toString();
            });
            setCurrentProject(updatedProject || initialCurrentProject);
        } else {
            const updatedProject = allProjects.find((p) => {
                return p.id === index.toString();
            })
            setCurrentProject(updatedProject || initialCurrentProject)
        }
    }

    const chooseProjectByBulletClick = (id: string) => {
        const project = allProjects.find((p: ProjectSlides) => {
            return p.id === id;
        });
        setCurrentProject(project || initialCurrentProject);
    }

    return (
        <div className="app">
            <Header/>
            <main className="section main">
                <Projects onClick={handleProjectClick}
                          projects={allProjects}/>
                <About/>
                <Skills/>
                <Contact/>
            </main>
            <Footer/>
            <button onClick={handleBackHomeClick} className='scroll-home-button'></button>
            <ProjectPopup isProjectPopupOpened={isProjectPopupOpened}
                          onClose={handleProjectPopupClose}
                          projects={allProjects}
                          currentProject={currentProject}
                          onMoveBack={handleMoveBackClick}
                          onMoveForward={handleMoveForwardClick}
                          onBulletClick={chooseProjectByBulletClick}/>
        </div>
    )
}

export default App
