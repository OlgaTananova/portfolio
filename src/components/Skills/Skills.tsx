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
import cSharpLogo from '../../assets/images/cSharpIcon.svg';
import dotNetLogo from '../../assets/images/NETlogo.svg';
import sqlLogo from '../../assets/images/sqlLogo.svg';
import azureLogo from '../../assets/images/azureLogo.svg';
import dockerLogo from '../../assets/images/dockerLogo.svg';
import figmaLogo from '../../assets/images/figmaLogo.svg';

function Skills() {
    return (
        <section className="content-section skills"
                 id='skills'>
            <h2 className='section-heading'>Tech stack</h2>
            <p className='skills__list'>Languages: C#, TypeScript, JavaScript, HTML, CSS </p>

            <ul className='skills__icons'>
                <li className="skills__icon"
                    about='CSharp'>
                    <img className='skills__image'
                         src={cSharpLogo}
                         alt='CSharp logo'/>
                </li>
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
            </ul>
            <p className='skills__list'>Frameworks and Libraries: .NET, ASP.NET Core, React, Redux, EntityFramework,
                IdentityFramework, Node.js</p>
            <ul className="skills__icons">
                <li className="skills__icon"
                    about='.NET'>
                    <img className='skills__image'
                         src={dotNetLogo}
                         alt='DotNet logo'/>
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
                    about="Node.js">
                    <img className='skills__image'
                         src={nodeLogo}
                         alt='Node logo'/>
                </li>
            </ul>
            <p className='skills__list'>Databases: SQL(MSSQL, AzureSQL) and NoSQL(MongoDB)</p>
            <ul className="skills__icons">
                <li className="skills__icon"
                    about="SQL DB">
                    <img className='skills__image'
                         src={sqlLogo}
                         alt='SQLDb logo'/>
                </li>
                <li className="skills__icon"
                    about="MongoDB">
                    <img className='skills__image'
                         src={mongoLogo}
                         alt='Mongo logo'/>
                </li>
            </ul>
            <p className='skills__list'>Development Tools: Azure, Docker, Git, Webpack, Figma</p>
            <ul className="skills__icons">
                <li className="skills__icon"
                    about="Azure">
                    <img className='skills__image'
                         src={azureLogo}
                         alt='Azure logo'/>
                </li>
                <li className="skills__icon"
                    about="Docker">
                    <img className='skills__image'
                         src={dockerLogo}
                         alt='Docker logo'/>
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
                <li className="skills__icon"
                    about="Figma">
                    <img className='skills__image'
                         src={figmaLogo}
                         alt='Figma logo'/>
                </li>
            </ul>

        </section>
    )
}

export default Skills;
