import React, {useState} from 'react'
import GitHub from '../Assets/github.png'
import LinkedIn from '../Assets/linkedin.png'
import Email from '../Assets/email.png'
import Phone from '../Assets/phone-call.png'
import './Contact.css'

function  Contact() {

    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("dominicdawson99@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    }

    const copyPhone = () => {
        navigator.clipboard.writeText("+447482466757");
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    }

    return (
        <div className="contact">
            <p>If you'd like to get in touch or want to network, feel free to reach out to me :)</p>
            <h3>Get in Touch:</h3>
            <button 
                className="Email" 
                onClick={copyEmail}>
                <img src={Email} alt="Email" /> {copiedEmail ? "Copied" : "Email Me"}</button>
            <button 
                className="Phone"
                onClick={copyPhone}>
                <img src={Phone} alt="Phone" /> {copiedPhone ? "Copied" : "Phone"}</button>
            <h3>Or find me on:</h3>
            <button 
                className="LinkedIn" 
                onClick={() => window.open("https://www.linkedin.com/in/dominic-dawson-981b652b0/", "_blank")}>
                <img src={LinkedIn} alt="LinkedIn" /> LinkedIn</button>
            <button 
                className="GitHub" 
                onClick={() => window.open("https://github.com/Dom056", "_blank")}>
                <img src={GitHub} alt="GitHub" /> GitHub</button>
        </div>
    )
}

export default Contact