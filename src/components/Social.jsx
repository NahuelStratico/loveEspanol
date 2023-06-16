import icInstagram from "../assets/icon-instagram.svg"
import icSpotify from "../assets/icon-spotify.svg"
import icWtsp from "../assets/icon-whatsapp.svg"
import iconMicrophone from '../assets/icon-microphone.png'
import iconLetter from '../assets/icon-letter.png'
import iconArrow from '../assets/icon-arrow.png'

import '../styles/social.css'

const Social = () => {
  return (
    <div className='header_social'>
        <div className='claim'>
          <a className='link_trial' href="#" target="_blank">
            <p>Claim your free trial</p>
          </a>
        </div>

        <div className='suscribe'>
          <div className='suscribe-content'>
            <div className='suscribe-text'>
              <p>Suscribe for FREE to Snack the Español </p>
              <img src={iconArrow} className='arrow-icon'/>
              <p> Podcast and newsletter with exclusive content</p>
            </div>
            <div className='suscribe_icons'>
              <a className='link_trial' href="#" target="_blank">
                <img className='icons-social letter' src={ iconLetter } alt="icon letter" />
              </a>
              <a className='link_trial' href="#" target="_blank">
                <img className='icons-social micro' src={ iconMicrophone } alt="icon microphone" />
              </a>
            </div>
          </div>

          <div className='icons-social_container'>
            <a className='link_trial' href="#" target="_blank">
              <img className='icons-social' src={ icWtsp } alt="icon whatsapp" />
            </a>
            <a className='link_trial' href="#" target="_blank">
              <img className='icons-social' src={ icSpotify } alt="icon spotify" />
            </a>
            <a className='link_trial' href="#" target="_blank">
              <img className='icons-social' src={ icInstagram } alt="icon instagram" />
            </a>
          </div>

        </div>
     
    </div>  
  )
}

export default Social