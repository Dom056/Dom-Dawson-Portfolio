import './navbar.css'

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="name">
      <h3>Dom Dawson</h3>
      </div>
      <ul>
        <li><a href="#intro">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        <div className="CV" >
         <a href="/Dom Dawson CV.pdf" download="Dom Dawson CV.pdf">
            <button className="CV-button">Download CV</button>
         </a>
        </div>
         
    </nav>
  )
}

export default NavBar