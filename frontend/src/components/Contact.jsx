import graphic from '../assets/undraw_chatting.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
    return(

        <section id="contact">
            <div className="section-title">
                <h2>Contact</h2>
                <p>Lets discuss how I can benefit your team.</p>
                <hr></hr>
            </div>
                <div className="contact">
                    <form className="contact__left" name="contact" method="POST" data-netlify="true">
                            <label>Name <br></br>
                                <input type="text" name="name" placeholder="John Doe"/>
                            </label>
                            <label>Email <br></br>
                                <input type="email" name="email" placeholder="johndoe@email.com"/>
                            </label>
                            <label>Message <br></br>
                                <textarea name="message" rows="6" placeholder="Write your message here."></textarea>
                            </label>
                            <button className="button-5" type="submit">Send Message</button>
                    </form>
                    <div className="contact__right">
                        <img className="contact__right__graphic" src={graphic}></img>
                        <ul className="contact__right__info">
                            <div className="contact__right__info__item">
                                <div className="contact__icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <p>ozan@sereflioglu.com</p>
                            </div>
                            <div className="contact__right__info__item">
                                <div className="contact__icon">
                                <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <p>647-425-5678</p> 
                            </div>
                        </ul>   
                    </div>
                </div>
            </section>
    )
}