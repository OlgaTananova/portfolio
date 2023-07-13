import './Header.css';
import image from '../../assets/images/user.svg';
import NavigationLinks from "../NavigationLinks/NavigationLinks.tsx";

function Header() {
    return (
        <header className="section header">
            <div className="header__introduction-block">
                <img className="header__photo"
                     src={image}
                     alt="User's photo"/>
                <div className="header__intro-text-block">
                    <h2 className="header__text header__text_greeting">Hi, I'm a web-developer</h2>
                    <h2 className=" header__text header__text_name">{'< Olga Tananova / >'}</h2>
                </div>
            </div>
            <button className='header__nav-button'></button>
            <NavigationLinks verticalLayout={false} />
        </header>

    )
}

export default Header
