import GitHub from '../Assets/github.png'
import LinkedIn from '../Assets/linkedin.png'
import Email from '../Assets/email.png'
import Phone from '../Assets/phone-call.png'
import './Contact.css'

function  Contact() {
    return (
        <div className="contact">
            <p>If you'd like to get in touch, feel free to reach out to me :)</p>
            <h3>Get in Touch:</h3>
            <button><img src={Email} alt="Email" /> Email Me</button>
            <button><img src={Phone} alt="Phone" /> Phone</button>
            <h3>Or find me on:</h3>
            <button><img src={LinkedIn} alt="LinkedIn" /> LinkedIn</button>
            <button><img src={GitHub} alt="GitHub" /> GitHub</button>
        </div>
    )
}

export default Contact