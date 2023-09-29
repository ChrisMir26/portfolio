import './index.scss'
import picCountries from '../../assets/images/countries.jpeg'
import dreamLodge from '../../assets/images/dreamLodge.jpeg'
import amazon from '../../assets/images/amazon.jpeg'
import { Loader } from 'react-loaders'

const Project = () => {
  return (
    <div className="portoflioDivs">
      <h1>Portfolio</h1>

      <div className="portfolio-section-cnt">
        <div className="portfolio-section portfolio-first">
          <div className="portfolio-img-div">
            <img
              src={picCountries}
              alt="project Pic"
              className="portfolio-img"
            />
            <a
              href="https://github.com/ChrisMir26/CountriesPI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-description">
                <p>
                  Developed a Full Stack Single Page Application. Utilized
                  React, Redux, and CSS for FrontEnd. BackEnd built with NodeJS,
                  fetching data from an API using Express. Features include:
                  rendering all countries with pagination, sorting
                  alphabetically or by population, filtering by tourist
                  activities, country search, displaying details of selected
                  country, and creating tourist activities for one or more
                  countries.
                  <br />
                  <span className="portfolio-span">
                    {' '}
                    Skills: PostgreSQL · Sequelize.js · Node.js · React.js
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolio-section portfolio-second">
          <div className="portfolio-img-div">
            <img src={dreamLodge} alt="project Pic" className="portfolio-img" />
            <a
              href="https://dreamlodgeprueba.firebaseapp.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-description">
                <p>
                  DreamLodge is an app to rent a temporary rental and also gives
                  you the option to become an owner. It was my final project of
                  my degree at henry. 5 people participated and we widely
                  achieved the expected results.DreamLodge is an app to rent a
                  temporary rental and also gives you the option to become an
                  owner. It was my final project of my degree at henry. 5 people
                  participated and we widely achieved the expected results.
                  <br />
                  <span className="portfolio-span">
                    Skills: Communication · Firebase · Teamwork · Problem
                    Solving · React.js
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="portfolio-section portfolio-third">
          <div className="portfolio-img-div">
            <a
              href="https://amazon-clone-lyart-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={amazon} alt="project Pic" className="portfolio-img" />
              <div className="project-description">
                <p>
                  This is a concise Amazon clone focusing primarily on rendering
                  product cards, user creation, and payment processing. It was
                  crafted using advanced technologies like React.js, Next.js,
                  and Tailwind CSS, highlighting the ability to develop
                  feature-rich, user-friendly applications.
                  <br />
                  <span className="portfolio-span">
                    Skills: React.js · Next.js · Tailwind CSS · User Experience
                    Design
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Project
