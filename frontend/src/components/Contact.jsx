import { useState } from 'react';
import graphic from '../assets/undraw_chatting.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (event) => {
        setIsSubmitted(true);
    };
    
    return (
        <section id="contact">
            <div className="section-title">
                <h2>Contact</h2>
                <p>Lets discuss how I can benefit your team.</p>
                <hr />
            </div>
            <div className="contact">
                {isSubmitted ? (
                    <div className="success-message">
                        <p>Thank you! Your message has been sent.</p>
                    </div>
                ) : (
                    <form className="contact__left" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                        <label>
                            Name <br />
                            <input type="text" name="name" placeholder="John Doe" required/>
                        </label>
                        <label>
                            Email <br />
                            <input type="email" name="email" placeholder="johndoe@email.com" required/>
                        </label>
                        <label>
                            Message <br />
                            <textarea name="message" rows="6" placeholder="Write your message here." required/>
                        </label>
                        <button className="button-5" type="submit">Send Message</button>
                    </form>
                )}
                <div className="contact__right">
                    <img className="contact__right__graphic" src={graphic} alt="Contact Graphic" />
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
    );
}