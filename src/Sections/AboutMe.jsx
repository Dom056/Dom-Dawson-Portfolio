import Box from "../Components/Box.jsx";
import Pic2 from "../Assets/CIB GroupPhoto.jpg";
import Python from "../Assets/python.png"
import JavaScript from "../Assets/js.png"
import react from "../Assets/react.png"
import HTML from "../Assets/html-5.png"
import MySQL from "../Assets/mysql.png"
import Git from "../Assets/git.png"
import Docker from "../Assets/docker.png"
import Figma from "../Assets/figma.png"
import MongoDB from "../Assets/mongodb.png"
import Express from "../Assets/express.png"
import CSS from "../Assets/css-3.png"

import "./AboutMe.css";

function AboutMe() {  
    return (
        <div className="about-me">
            <div className="about-me-section">
            <img className="group-pic" src={Pic2} alt="CIB Group Photo"/>
            <div className="about-text">
            <p>I'm a Second year Software engineering student at Bournemouth University with a focus on full stack web development. </p>
            <p>I've always been driven by creating practical solutions to real world problems and have worked across every stage of web development. From designing UI wireframes, building frontend components and developing backend functionality. To testing, QA and launch. I pride myself in producing high-quality work for every project I undertake. </p>
            <p>Outside of coding I'm constantly working on DIY tech projects, whether it be tinkering with raspberry pis, dabbling in electronics or 3D printing custom housings. I'm always eager to learn new skills to keep myself busy.</p>
            <p>Currently looking for an internship for internships so I can get some real world experience and to learn from experienced software engineers as I develop my skill set. </p >
            </div>
            </div>
                <div className="skills">    
                <h3>👨‍💻 Skills:</h3>
                <ul>
                <li className="tech-item"><img src={Python} alt="Python"/> <span>Python</span></li>
                <li className="tech-item"><img src={JavaScript} alt="JavaScript"/> <span>JavaScript</span></li>
                <li className="tech-item"><img src={react} alt="React"/> <span>React</span></li>
                <li className="tech-item"><img src={Express} alt="Express"/> <span>Express</span></li>   
                <li className="tech-item"><img src={HTML} alt="HTML"/> <span>HTML</span></li>
                <li className="tech-item"><img src={CSS} alt="CSS"/> <span>CSS</span></li>
                <li className="tech-item"><img src={MySQL} alt="MySQL"/> <span>MySQL</span></li>
                <li className="tech-item"><img src={MongoDB} alt="MongoDB"/> <span>MongoDB</span></li>
                <li className="tech-item"><img src={Git} alt="Git & GitHub"/> <span>Git & GitHub</span></li>
                <li className="tech-item"><img src={Docker} alt="Docker"/> <span>Docker</span></li>
                <li className="tech-item"><img src={Figma} alt="Figma"/> <span>Figma</span></li>
                </ul>
                </div>
                <div className="achievements">
                <h3>🎓 Academic Achievements:</h3>
                <ul> 
                <li><Box title="First Year 📚" content="Achieved an average of 72% across all modules"/></li>
                <li><Box title="Computing in Business 🥉" content="Came 3rd place in BU annual Computing in Business competition"/></li>
                <li><Box title="Second Year 📈" content="Maintaining an average of 87% across all modules so far"/></li>
                </ul>
                </div>
        </div>
    )
}

export default AboutMe