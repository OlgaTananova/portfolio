import './NavigationPopup.css';
import NavigationLinks from "../NavigationLinks/NavigationLinks.tsx";

function NavigationPopup() {
    return (
        <>
            <label className='navigation-button'>
                <input type="checkbox"/>
            </label>
            <nav className="navigation-popup">
                 <NavigationLinks verticalLayout={true}/>
            </nav>
        </>
    )
}

export default NavigationPopup;
