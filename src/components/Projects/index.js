import { useEffect, useState } from 'react'
import './index.scss'
import picCountries from '../../assets/images/countries.jpeg'
import dreamLodge from '../../assets/images/dreamLodge.jpeg'
import amazon from '../../assets/images/amazon.jpeg'
import foodApp from '../../assets/images/foodApp.jpeg'
import movieApp from '../../assets/images/movieApp.jpeg'
import vetApp from '../../assets/images/vetApp.jpeg'
import { Loader } from 'react-loaders'

const Project = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsMounted(true)
      console.log(isMounted) // Esto se ejecuta antes de que se complete la actualización del estado.
    }, 6000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <div className="portoflioDivs">
      <h1>Portfolio</h1>
      <div className="main-cnt">
        <div className="portfolio-section-cnt main-cnt">
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
                <div
                  className={`project-description ${isMounted ? 'loaded' : ''}`}
                >
                  <p>
                    Developed a Full Stack Single Page Application. Utilized
                    React, Redux, and CSS for FrontEnd. BackEnd built with
                    NodeJS, fetching data from an API using Express. Features
                    include: rendering all countries with pagination, sorting
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
              <img
                src={dreamLodge}
                alt="project Pic"
                className="portfolio-img"
              />
              <a
                href="https://dreamlodgeprueba.firebaseapp.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`project-description ${isMounted ? 'loaded' : ''}`}
                >
                  <p>
                    DreamLodge is an app to rent a temporary rental and also
                    gives you the option to become an owner. It was my final
                    project of my degree at henry. Five people participated and
                    we widely achieved the expected results.DreamLodge is an app
                    to rent a temporary rental and also gives you the option to
                    become an owner.
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
                <div
                  className={`project-description ${isMounted ? 'loaded' : ''}`}
                >
                  <p>
                    This is a concise Amazon clone focusing primarily on
                    rendering product cards, user creation, and payment
                    processing. It was crafted using advanced technologies like
                    React.js, Next.js, and Tailwind CSS, highlighting the
                    ability to develop feature-rich, user-friendly applications.
                    <br />
                    <span className="portfolio-span">
                      Skills: React.js · Next.js · Tailwind CSS · User
                      Experience Design
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-section-cnt segundo-div">
          <div className="portfolio-section portfolio-first">
            <div className="portfolio-img-div">
              <img src={foodApp} alt="project Pic" className="portfolio-img" />
              <a
                href="https://food-app-eta-sage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`project-description ${isMounted ? 'loaded' : ''}`}
                >
                  <p>
                    This is a comprehensive Full Stack MERN web application
                    designed to facilitate food ordering and menu management. It
                    leverages a stack of advanced technologies including
                    Node.js, Express.js, MongoDB for the backend, React.js for
                    the frontend, and integrates Stripe as the payment gateway.
                    This project showcases the ability to create a fully
                    functional and user-friendly application for handling food
                    orders and payments.
                    <br />
                    <span className="portfolio-span">
                      {' '}
                      Skills: MongoDB · Express.js · React.js · Redux · Stripe
                      Payment Integration
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="portfolio-section portfolio-second">
            <div className="portfolio-img-div">
              <img src={movieApp} alt="project Pic" className="portfolio-img" />
              <a
                href="https://movie-project-a36d3.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`project-description ${isMounted ? 'loaded' : ''}`}
                >
                  <p>
                    This is a compact React project designed as a practicing
                    exercise, utilizing Firebase as the backend to interact with
                    a movie API. The application enables users to browse and
                    save their favorite movies, view detailed movie
                    descriptions, and features user authentication via email. It
                    showcases the integration of various technologies like
                    React, React Context, and Firebase for creating a
                    feature-rich and secure web application.
                    <br />
                    <span className="portfolio-span">
                      Skills: React · Hooks · Firebase · User Authentication ·
                      Movie API Integration
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="portfolio-section portfolio-third">
            <div className="portfolio-img-div">
              <a
                href="https://vetapp-f1cbe.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={vetApp} alt="project Pic" className="portfolio-img" />
                <div
                  className={`project-description ${isMounted ? 'loaded' : ''}`}
                >
                  <p>
                    This is a Full Stack MERN project with Amazon Cognito
                    authentication. It's designed for veterinary professionals
                    to efficiently manage patient records. It uses React Context
                    and custom hooks for state management, features a
                    user-friendly UI with Tailwind CSS, and includes a complete
                    CRUD system for patient data, including diagnoses and
                    discharge dates.
                    <br />
                    <span className="portfolio-span">
                      Skills: Amazon Cognito · React · Custom Hooks · Tailwind
                      CSS · CRUD
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Project

// import { useEffect,useState } from 'react'
// import './index.scss'
// import picCountries from '../../assets/images/countries.jpeg'
// import dreamLodge from '../../assets/images/dreamLodge.jpeg'
// import amazon from '../../assets/images/amazon.jpeg'
// import { Loader } from 'react-loaders'

// const Project = () => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       setIsMounted(true);
//       console.log(isMounted) // Esto se ejecuta antes de que se complete la actualización del estado.
//     }, 6000);

//     return () => clearTimeout(timerId);
//   }, []);

//   return (
//     <div className="portoflioDivs">
//       <h1>Portfolio</h1>

//       <div className="portfolio-section-cnt">
//         <div className="portfolio-section portfolio-first">
//           <div className="portfolio-img-div">
//             <img
//               src={picCountries}
//               alt="project Pic"
//               className="portfolio-img"
//             />
//             <a
//               href="https://github.com/ChrisMir26/CountriesPI"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className={`project-description ${isMounted ? 'loaded' : ''}`}>
//                 <p >
//                   Developed a Full Stack Single Page Application. Utilized
//                   React, Redux, and CSS for FrontEnd. BackEnd built with NodeJS,
//                   fetching data from an API using Express. Features include:
//                   rendering all countries with pagination, sorting
//                   alphabetically or by population, filtering by tourist
//                   activities, country search, displaying details of selected
//                   country, and creating tourist activities for one or more
//                   countries.
//                   <br />
//                   <span className="portfolio-span">
//                     {' '}
//                     Skills: PostgreSQL · Sequelize.js · Node.js · React.js
//                   </span>
//                 </p>
//               </div>
//             </a>
//           </div>
//         </div>

//         <div className="portfolio-section portfolio-second">

//           <div className="portfolio-img-div">
//             <img src={dreamLodge} alt="project Pic" className="portfolio-img" />
//             <a
//               href="https://dreamlodgeprueba.firebaseapp.com/home"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className={`project-description ${isMounted ? 'loaded' : ''}`}>
//                 <p >
//                   DreamLodge is an app to rent a temporary rental and also gives
//                   you the option to become an owner. It was my final project of
//                   my degree at henry. Five people participated and we widely
//                   achieved the expected results.DreamLodge is an app to rent a
//                   temporary rental and also gives you the option to become an
//                   owner.
//                   <br />
//                   <span className="portfolio-span">
//                     Skills: Communication · Firebase · Teamwork · Problem
//                     Solving · React.js
//                   </span>
//                 </p>
//               </div>
//             </a>
//           </div>
//         </div>
//         <div className="portfolio-section portfolio-third">
//           <div className="portfolio-img-div">
//             <a
//               href="https://amazon-clone-lyart-ten.vercel.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={amazon} alt="project Pic" className="portfolio-img" />
//               <div className={`project-description ${isMounted ? 'loaded' : ''}`}>
//                 <p>
//                   This is a concise Amazon clone focusing primarily on rendering
//                   product cards, user creation, and payment processing. It was
//                   crafted using advanced technologies like React.js, Next.js,
//                   and Tailwind CSS, highlighting the ability to develop
//                   feature-rich, user-friendly applications.
//                   <br />
//                   <span className="portfolio-span">
//                     Skills: React.js · Next.js · Tailwind CSS · User Experience
//                     Design
//                   </span>
//                 </p>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//       <Loader type="pacman" />
//     </div>
//   )
// }

// export default Project
