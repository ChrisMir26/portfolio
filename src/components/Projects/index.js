import './index.scss'
import picCountries from '../../assets/images/countries.jpeg'
import dreamLodge from '../../assets/images/dreamLodge.jpeg'
import {Loader} from "react-loaders"


const Project = () => {
  return (
    <div className="portoflioDivs">
      <h1>Portfolio</h1>

    <div className="portfolio-section-cnt">
      <div className="portfolio-section portfolio-first">
        <div className="portfolio-img-div">
        <a href="https://github.com/ChrisMir26/CountriesPI" target="_blank" rel="noopener noreferrer">
          <img src={picCountries} alt="project Pic" className="portfolio-img" />
          </a>
        </div>
      </div>
      <div className="portfolio-section portfolio-second">
        <div className="portfolio-img-div">
        <a href="https://dreamlodgeprueba.web.app/" target="_blank" rel="noopener noreferrer">

          <img src={dreamLodge} alt="project Pic" className="portfolio-img" />
          </a>
        </div>
      </div>
      </div>
      <Loader type="pacman"/>

    </div>
  )
}

export default Project