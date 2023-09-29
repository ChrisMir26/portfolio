import "./index.scss"
import { Link, NavLink } from "react-router-dom"
import LogoS from "../../assets/images/Cblue.jpeg"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope,faHome,faUser,faBriefcase} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



const Sidebar = () =>{
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
            <img src={LogoS} alt="logo"/>
            </Link>
            <nav>
        <NavLink exact="true" activeclasname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclasname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclasname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclasname="active" className="project-link" to="/project">
            <FontAwesomeIcon icon={faBriefcase} color="4d4d4e"/>
        </NavLink>
            </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-daniel-miranda-8b5243172/">
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"/>
                </a>                    
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-daniel-miranda-8b5243172/">
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e"/>
                </a>                    
            </li>
        </ul>


        </div>
    )
}


export default Sidebar