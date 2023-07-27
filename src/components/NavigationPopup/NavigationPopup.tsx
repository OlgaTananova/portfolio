import './NavigationPopup.css';
import NavigationLinks from "../NavigationLinks/NavigationLinks.tsx";
import {useRef, MouseEventHandler} from "react";

function NavigationPopup() {
    const ref = useRef(null);
    const handleLinkClick: MouseEventHandler = () => {
        if (ref !== null) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ref.current.checked = false;
        }
    }
    return (
        <>
            <label className='navigation-button'>
                <input ref={ref} type="checkbox"/>
            </label>
            <nav className="navigation-popup">
                 <NavigationLinks onLinkClick={handleLinkClick} verticalLayout={true}/>
            </nav>
        </>
    )
}

export default NavigationPopup;
