import React, { useContext ,useState} from 'react'
import './navbar.css';
import Hamburger from 'hamburger-react'
import {NavLink, NavNavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from '../App';

const Navbar = () => {
  
  const {state,dispatch}=useContext(UserContext);
  const RenderMenu =()=>{
    if(state){
      return (
        <>
        <div className="container">
      <div className="menu-icon" onClick={handleShowNavbar}>
      <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/quiz">Quiz</NavLink></li>
          <li><NavLink  to="/logout">Logout</NavLink></li>
          </ul>
        </div>
      </div>
           
       


        </>
      )
    }else{
      return(
        <>
        <div className="container">
      <div className="menu-icon" onClick={handleShowNavbar}>
         <Hamburger/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
          <li><NavLink  to="/">Home</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink  to="/login">Login</NavLink></li>
            <li><NavLink  to="/signup">Register</NavLink></li>

          </ul>
        </div>
      </div>
           

        </>
      )
    }
  }
  const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
  return (
    
    <>
    
    <nav className="navbar">
     <RenderMenu/>
    </nav>
   
    </>
  )
}

export default Navbar;
