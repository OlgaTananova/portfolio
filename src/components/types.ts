export interface ProjectSlides {
    id?: string,
    browserUrl: string,
    gitHubUrl: string,
    demoURL?: string,
    description: string,
    image: string,
    name: string,
    stack: string,
    about: string,
}

export interface ProjectPopupProps {
    id: number,
    isProjectPopupOpened: boolean,
}
