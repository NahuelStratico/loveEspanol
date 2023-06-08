import { NavLink } from "react-router-dom"

import '../../styles/header.css'
import { IoClose } from "react-icons/io5";

const Nav = ({ activeNav, setActiveNav }) => {

  const closeNav = () => {
    setActiveNav(!activeNav)
    console.log("active navbar")
  }

  return(
    <nav className={activeNav? 'navbar_mobile': 'navbar_desktop'}>
        <IoClose className="close_icon" onClick={closeNav}/>
        
          <ul className='navbar_content'>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={closeNav} to="/">Our Lessons</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={closeNav} to="/">teachers</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={closeNav} to="/">level test</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={closeNav} to="/">prices</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={closeNav} to="/ClubConversacion">Club de conversacion</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={closeNav} to="/SpanishForKids">Spanish for kids</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" onClick={closeNav} to="/SnackdeSpanol">Snack de español</NavLink></li>
          </ul>
               
    </nav>
  )
}

export default Nav