import Box from "../Components/Box.jsx";
import SmallBox from "../Components/SmallBox.jsx";

function AboutMe() {  
    return (
        <div className="about-me">
            <p>I'm a Second year Software engineering student at Bournemouth University with a focus on full stack web development. </p>
            <p>I've always been driven by creating practical solutions to real world problems and have worked across every stage of web development. From designing UI wireframes, building frontend components and developing backend functionality. To testing, QA and launch. I pride myself in producing high-quality work for every project I undertake. </p>
            <p>Outside of coding I'm constantly working on DIY tech projects, whether it be tinkering with raspberry pis to create a home assistant, dabbling in electronics or 3D printing custom housings. I'm always eager to learn new skills to keep myself busy.</p>
            <p>Currently looking for an internship for internships so I can get some real world experience and to learn from experienced software engineers as I develop my skill set </p >
            <img src="" alt="Dom Dawson"/>
            <p>If you're interested in working with me, feel free to check out my CV</p>
            <a href="/Dom Dawson CV.pdf" download="Dom Dawson CV.pdf">
            <button className="CV">Download CV</button>
            </a>
                <div>
                <h3>Skills:</h3>
                <SmallBox content="Python"/>
                <SmallBox content="JavaScript"/>
                <SmallBox content="React"/>
                <SmallBox content="Express"/>   
                <SmallBox content="HTML & CSS"/>
                <SmallBox content="MySQL"/>
                <SmallBox content="MongoDB"/>
                <SmallBox content="Git & GitHub"/>
                <SmallBox content="Docker"/>
                </div>
                <div>
                <h3>Academic Achievements:</h3>
                <Box title="First Year" content="Achieved an average of 71% across all modules"/>
                <Box title="Computing in Business" content="Came 3rd place in BU annual Computing in Business competition"/>
                <Box title="Second Year" content="Maintaining an average of 87% across all modules so far"/>
                </div>
        </div>
    )
}

export default AboutMe