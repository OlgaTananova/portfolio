import './NavigationLinks.css';
import {MouseEventHandler} from "react";

function NavigationLinks({verticalLayout, onLinkClick}: {verticalLayout: boolean, onLinkClick: MouseEventHandler}) {
    const handleLinkClick:MouseEventHandler = (e)=> {
        onLinkClick(e);
    }
    return (
        <nav className={`${verticalLayout? 'navigation_vertical' : ''} navigation `}>
            <ul className={`navigation__links ${verticalLayout? 'navigation__links_vertical' : ''}`}>
                <li onClick={handleLinkClick} className="navigation__element"><a href='#projects'
                                                       className="navigation__link"><span className="navigation__link-hash">#</span>Projects</a>
                </li>
                <li onClick={handleLinkClick} className="navigation__element"><a href='#aboutme'
                                                       className="navigation__link navigation__link_about"><span className="navigation__link-hash">#</span>About me</a>
                </li>
                <li  onClick={handleLinkClick} className="navigation__element"><a href='#skills'
                                                       className="navigation__link"><span className="navigation__link-hash">#</span>Skills</a>
                </li>
                <li  onClick={handleLinkClick} className="navigation__element"><a href='#contact'
                                                       className="navigation__link"><span className="navigation__link-hash">#</span>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationLinks;