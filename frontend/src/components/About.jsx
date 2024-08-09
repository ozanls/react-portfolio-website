// About Me Section 

import headshot from '../assets/headshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import scrollToSection from './scrollToSection';


export default function About () {
    return(
        <section id="about">
            <div className="section-title">
                <h2>About Me</h2>
                <p>Who is Ozan Sereflioglu?</p>
                <hr></hr>
            </div>
                <div className="about">
                    <div className="about__left">
                        <img className="about__left__headshot" src={headshot} alt="Ozan Sereflioglu headshot"></img>
                    </div>
                    <div className="about__right">
                        <p className="about__right__text">
                        Hello and welcome! I'm Ozan, and i've been working as a Full Stack Developer since early 2024.
                        Coming from a background in Marketing, my lifelong passion for technology drove me to pursue Web Development. I pride myself on my willingness to learn, and am always looking for new ways to challenge myself. I'm currently looking for new opportunities, so please feel free to reach out if you think I would be a good fit for your team!
                        </p>
                        <div className="about__right__buttons">
                            <a onClick={() => scrollToSection('contact')}>                    
                                <button className="button-1">Contact Me</button>
                            </a>
                            <a href="https://www.linkedin.com/in/ozanlago/" target="_blank">
                                <button className="button-6"><FontAwesomeIcon icon={faLinkedin} /></button>
                            </a>
                            <a href="https://github.com/ozanls" target="_blank">
                                <button className="button-6"><FontAwesomeIcon icon={faGithub} /></button>
                            </a>
                            <a href="https://x.com/OzanLS" target="_blank">
                                <button className="button-6"><FontAwesomeIcon icon={faXTwitter} /></button>
                            </a>
                        </div>
                    </div>
                </div>
        </section>
    )
}