import { NavLink } from "react-router-dom"

import '../../styles/header.css'
import { IoClose } from "react-icons/io5";

const Nav = ({ activeNav, setActiveNav }) => {

  const closeNav = () => {
    setActiveNav(!activeNav)
    console.log("active navbar")
  }

  return(
    <nav className="navbar">
        <IoClose className="close_icon" onClick={closeNav}/>
        
        
          <ul className= { activeNav ? 'open_nav' : 'close_Modal'}>
              <li className="navbar_item"><NavLink className="navbar_link link" to="/">Our Lessons</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" to="/">teachers</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" to="/">level test</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" to="/">prices</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" to="/ClubConversacion">Club de conversacion</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" to="/SpanishForKids">Spanish for kids</NavLink></li>
              <li className="navbar_item"><NavLink className="navbar_link link" to="/SnackdeSpanol">Snack de español</NavLink></li>
          </ul>
          
  

        
    </nav>
  )
}

export default Nav