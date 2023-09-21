import './index.scss'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import { useEffect, useMemo } from 'react'




const Contact = () => {

  const refForm = useRef()


 


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_seaveid',
        'template_2fp52nb',
        refForm.current,
        'oJf8jf2UQA-NF2ZUf'
      )
      .then(
        () => {
          alert(`Message successfully sent!`)
          window.location.reload(false)
        },
        (error) => {
          alert(`Failed! Error: ${error.message}`)
          console.error(error)
        }
      )
  }

 

  return (
    <div className="container contact-page">
      <div className="text-zone div-form">
        <h1>Contact me</h1>
        <p>
          I am interested in freelance opportunities - specially ambitious or
          large projects. however, if you have other request or question, don't
          hesitate to contact me me using below form either
        </p>

        <div className="contact-form">
          <form
            ref={refForm}
            onSubmit={(e) => {
              sendEmail(e)
            }}
          >
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li className="subject">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SUBMIT" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      
      {/* <div className="info-map">
        Christian Daniel Miranda
        <br />
        Australia
        <br /> 
        Sydney
        <span>Christian.mir26@gmail.com</span>
      </div> */}
      {/* <div className="map-wrap">
      
      </div> */}
             
      <Loader type="pacman" />
    </div>
  )
}
export default Contact

{/*       <iframe id="mapa"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46071.42927930644!2d151.21460057506803!3d-33.8655141397235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f3298a729%3A0xef50fa5572780602!2sSydney%20CBD%2C%20NSW!5e0!3m2!1sen!2sau!4v1694674751352!5m2!1sen!2sau" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
 */}      
/* 

AIzaSyC5jcS8bNElAdxetmEXqJUvGHW4b9fR1XE
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC5jcS8bNElAdxetmEXqJUvGHW4b9fR1XE&libraries=places`;

import './index.scss'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const refForm = useRef()
  const position = [51.505, -0.09]

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_seaveid',
        'template_2fp52nb',
        refForm.current,
        'oJf8jf2UQA-NF2ZUf'
      )
      .then(
        () => {
          alert(`Message successfully sent!`)
          window.location.reload(false)
        },
        (error) => {
          alert(`Failed! Error: ${error.message}`)
          console.error(error)
        }
      )
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>Contact me</h1>
        <p>
          I am interested in freelance opportunities - specially ambitious or
          large projects. however, if you have other request or question, don't
          hesitate to contact me me using below form either
        </p>

        <div className="contact-form">
          <form
            ref={refForm}
            onSubmit={(e) => {
              sendEmail(e)
            }}
          >
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li className="subject">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SUBMIT" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="info-map">
        Christian Daniel Miranda
        <br />
        Australia
        <br />
        Sydney
        <span>Christian.mir26@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer
          className="leaflet-container"
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <Loader type="pacman" />
    </div>
  )
}

export default Contact
 */