import './NavigationLinks.css';

function NavigationLinks({verticalLayout}: {verticalLayout: boolean}) {
    return (
        <nav className={`${verticalLayout? 'navigation_vertical' : ''} navigation `}>
            <ul className={`navigation__links ${verticalLayout? 'navigation__links_vertical' : ''}`}>
                <li className="navigation__element"><a href='#projects'
                                                       className="navigation__link"><span className="navigation__link-hash">#</span>Projects</a>
                </li>
                <li className="navigation__element"><a href='#aboutme'
                                                       className="navigation__link"><span className="navigation__link-hash">#</span>About me</a>
                </li>
                <li className="navigation__element"><a href='#skills'
                                                       className="navigation__link"><span className="navigation__link-hash">#</span>Skills</a>
                </li>
                <li className="navigation__element"><a href='#contacts'
                                                       className="navigation__link"><span className="navigation__link-hash">#</span>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationLinks;
