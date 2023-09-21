// import {
//   faCss3,
//   faGitAlt,
//   faHtml5,
//   faJsSquare,
//   faNodeJs,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { Loader } from 'react-loaders'
import profilePic from "../../assets/images/profilPic.jpeg"

const About = () => {
  // El segundo argumento vacío [] asegura que esto solo se ejecute una vez

  return (
    <div className="container about-page"> 
      <div className="text-zone">
        <h1>About Me</h1>
        <p>
          I code the front-end with finesse, Crafting interfaces, no less. But
          deep within the server's core, I tackle challenges, seek for more.
        </p>
        <p>
          From databases to UI's grace, In the tech world, I find my place. With
          stacks and frameworks, I am adept, A Full Stack Developer, fully
          equipped.
        </p>
        <p>
          From databases to UI's grace, In the tech world, I find my place. With
          stacks and frameworks, I am adept, A Full Stack Developer, fully
          equipped.
        </p>
      </div>

    <div className='profilDiv'>

      <img src={profilePic} alt=""/>

    </div>
     

      <Loader type="pacman" />
    </div>
  )
}

export default About



{/* <div className="stage-cube-cont">
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
</div> */}