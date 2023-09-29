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
import profilePic from '../../assets/images/profilPic.jpeg'

const About = () => {
  // El segundo argumento vacío [] asegura que esto solo se ejecute una vez

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>
        <p>
          After a decade of backpacking and exploring diverse cultures, I
          discovered my passion for programming and chose a career in web
          development. I refined my skills at the Soy Henry Bootcamp and have
          experience with technologies like JavaScript, React, Node, and more.
        </p>
        <p>
          I’m committed to team success and am seeking a position to apply my
          skills and grow professionally. My goal is to contribute to and grow
          with a company that values service and potential.
        </p>
       
      </div>

      <div className="profilDiv">
        <img src={profilePic} alt="" />
      </div>

      <Loader type="pacman" />
    </div>
  )
}

export default About

{
  /* <div className="stage-cube-cont">
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
</div> */
}
