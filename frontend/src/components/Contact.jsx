// Contact Me Section

import { useState } from "react";
import graphic from "../assets/undraw_chatting.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Lets discuss how I can benefit your team.</p>
        <hr />
      </div>
      <div className="contact">
        <form
          className="contact__left"
          name="contact"
          method="POST"
          netlify
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name <br />
            <input type="text" name="name" placeholder="John Doe" required />
          </label>
          <label>
            Email <br />
            <input
              type="email"
              name="email"
              placeholder="johndoe@email.com"
              required
            />
          </label>
          <label>
            Message <br />
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here."
              required
            />
          </label>
          <button className="button-5" type="submit">
            Send Message
          </button>
        </form>
        <div className="contact__right">
          <img
            className="contact__right__graphic"
            src={graphic}
            alt="Contact Graphic"
          />
          <ul className="contact__right__info">
            <div className="contact__right__info__item">
              <div className="contact__icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>ozan@sereflioglu.com</p>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}
