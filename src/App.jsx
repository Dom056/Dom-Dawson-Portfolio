import { useState } from 'react'
import Title from './Components/Title.jsx'
import Header from './Components/Header.jsx'
import Intro from './Sections/Intro.jsx'
import NavBar from './Components/NavBar.jsx'
import AboutMe from './Sections/AboutMe.jsx'
import Project from './Sections/Project.jsx'
import Contact from './Sections/Contact.jsx'
import './App.css'


function App() {

  return (
    <>
      <NavBar />
      <></>
      <div id="intro">
      <Title/>
      <Intro />
      </div>
      <div id="about">
      <Header header="About Me" />
      <AboutMe />
      </div>
      <div id="projects">
      <Header header="Projects" />
      <Project />
      </div>
      <div id="contact">
      <Header header="Contact" />
      <Contact />
      </div>
      
    </>
  )
}

export default App
