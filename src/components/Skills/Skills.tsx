import './Skills.css';
import reactLogo from '../../assets/images/react.svg';
import typescriptLogo from '../../assets/images/typescript.svg';
import javascriptLogo from '../../assets/images/javascript.svg';
import htmlLogo from '../../assets/images/html.svg';
import cssLogo from '../../assets/images/css.svg';
import reduxLogo from '../../assets/images/redux.svg';
import nodeLogo from '../../assets/images/node.svg';
import mongoLogo from '../../assets/images/mongo.svg';
import gitLogo from '../../assets/images/git.svg';
import webpackLogo from '../../assets/images/webpack.svg';

function Skills() {
    return (
        <section className="content-section skills"
                 id='skills'>
            <h2 className='section-heading'>Skills</h2>
            <p className='skills__list'>React, TypeScript, JavaScript, HTML, CSS, Redux, Node.js, Express.js, MongoDB,
                                        Git, Webpack</p>
            <ul className='skills__icons'>
                <li className="skills__icon"
                    about='JavaScript'>
                    <img className='skills__image'
                         src={javascriptLogo}
                         alt='Javascript logo'/>
                </li>
                <li className="skills__icon"
                    about='TypeScript'>
                    <img className='skills__image'
                         src={typescriptLogo}
                         alt='Typescript logo'/>
                </li>
                <li className="skills__icon"
                    about='React'>
                    <img className='skills__image'
                         src={reactLogo}
                         alt='React logo'/>
                </li>
                <li className="skills__icon" about='Redux'>
                    <img className='skills__image'
                         src={reduxLogo}
                         alt='Redux logo'/>
                </li>
                <li className="skills__icon"
                    about='HTML'>
                    <img className='skills__image'
                         src={htmlLogo}
                         alt='HTML logo'/>
                </li>
                <li className="skills__icon"
                    about="CSS">
                    <img className='skills__image'
                         src={cssLogo}
                         alt='CSS logo'/>
                </li>
                <li className="skills__icon"
                    about="Node.js">
                    <img className='skills__image'
                         src={nodeLogo}
                         alt='Node logo'/>
                </li>
                <li className="skills__icon"
                    about="MongoDB">
                    <img className='skills__image'
                         src={mongoLogo}
                         alt='Mongo logo'/>
                </li>
                <li className="skills__icon"
                    about="Git">
                    <img className='skills__image'
                         src={gitLogo}
                         alt='Git logo'/>
                </li>
                <li className="skills__icon"
                    about='Webpack'>
                    <img className='skills__image'
                         src={webpackLogo}
                         alt='Webpack logo'/>
                </li>
            </ul>
        </section>
    )
}

export default Skills;
