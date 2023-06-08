import {useState} from 'react'

import '../styles/header.css'
import { NavLink, Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import icInstagram from "../assets/icon-instagram.svg"
import icSpotify from "../assets/icon-spotify.svg"
import icWtsp from "../assets/icon-whatsapp.svg"
import iconMicrophone from '../assets/icon-microphone.png'
import iconLetter from '../assets/icon-letter.png'
import iconArrow from '../assets/icon-arrow.png'
import logo from '../assets/logo.png'

import Nav from '../components/nav/Nav'


const Header = () => {

  const [ activeNav, setActiveNav ] = useState(false)
  
  const handleNav = () => {
    setActiveNav(!activeNav)
    console.log("active navbar")
  }

  return(
    <header className='header'>

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
      
      <div className="header_content">
          <div className="header_logo">
              <NavLink className="logo-container"to="/">
                      <img className="logo" src={ logo } alt="logo" />
              </NavLink>
          </div>
          {/* <div className="nav_content"> */}
              <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>
          {/* </div> */}
          <div className="hamburger_nav">
              <Link to="#" className="menu-bars">
                  <FaBars onClick={ handleNav }/>
              </Link>
          </div>
      </div>

    </header>
  )

}

export default Header