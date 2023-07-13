import './NavigationPopup.css';
import NavigationLinks from "../NavigationLinks/NavigationLinks.tsx";

function NavigationPopup() {
    return (
        <nav className="navigation-popup">
            <button className="navigation-popup__close-btn"></button>
            <NavigationLinks verticalLayout={true}/>
        </nav>
    )
}

export default NavigationPopup;
