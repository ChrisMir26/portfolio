import "./index.scss"
import LogoTitle from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom"
import {Loader} from "react-loaders"
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Home = () =>{
return(
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hi,  <br/> I'm {" "}
            <img src={LogoTitle} alt="developer"/>
            Christian
            <br/>
            Full Stack Developer
            </h1>
        <h2>Javascript | Node js | React Redux</h2>
        <Link to="contact" className="flat-button">CONTACT ME</Link>
        </div>

    </div>
    <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNodeJs} color="#69a05b" />
          </div>
        </div>
      </div>
    
        <Loader type="pacman"/>

        
    </>
)
}

export default Home