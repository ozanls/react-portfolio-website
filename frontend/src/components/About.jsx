import headshot from '../assets/headshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

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
                        <img className="about__left__headshot" src={headshot}></img>
                    </div>
                    <div className="about__right">
                        <p className="about__right__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>
                        <div className="about__right__buttons">
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