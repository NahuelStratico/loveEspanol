import {useState} from 'react'

import '../styles/header.css'
import { NavLink, Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { IoClose } from "react-icons/io5"



const Header = () => {

  const [ activeNav, setActiveNav ] = useState(false)
  const [ scroll, setScroll ] = useState(false)

  const scrollNav = () => {
      if(window.scrollY >= 10){
        setScroll(true)
      }else{
        setScroll(false)
      }
  }

  window.addEventListener('scroll', scrollNav)
  
  const handleNav = () => {
    setActiveNav(!activeNav)
  }


  return(
    <header className={scroll ? 'header active' : 'header'}>
      
        <div className="header_logo">
            <NavLink className="logo-container" to="/">
                    <img className="logo" src={ logo } alt="logo" />
            </NavLink>
        </div>

        
        <nav className={activeNav ? 'navbar_mobile' : 'navbar_desktop'}>
          <IoClose className="close_icon" onClick={handleNav}/>
        
          <ul className='navbar_content'>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={() => setActiveNav(false)} to="/">Our Lessons</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={() => setActiveNav(false)} to="/">teachers</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={() => setActiveNav(false)} to="/">level test</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={() => setActiveNav(false)} to="/">prices</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={() => setActiveNav(false)} to="/ClubConversacion">Club de conversacion</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={() => setActiveNav(false)} to="/SpanishForKids">Spanish for kids</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={() => setActiveNav(false)} to="/SnackdeSpanol">Snack de español</NavLink></li>
          </ul>
              
        </nav>        
        
        <div className="hamburger_nav">
            <Link to="#" className="menu-bars">
                <FaBars onClick={ handleNav }/>  
            </Link>
        </div>

    </header>
  )

}

export default Header