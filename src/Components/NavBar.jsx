import React from 'react'
import './Navbar.css'

function NavBar() {
  return (
    <nav className="nav-bar">
      <h3>Dom Dawson</h3>
      <ul>
        <li><a href="#intro">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
         <a href="/Dom Dawson CV.pdf" download="Dom Dawson CV.pdf">
            <button className="CV">Download CV</button>
         </a>
         
    </nav>
  )
}

export default NavBar