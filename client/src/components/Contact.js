import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const Contact = () => {
  return (
    <div>
      <Header />
      <Navigation />
    <section className="contact" id="contact">
      <h1 className="contact__header">Contact Us</h1>
      <div className="contact__content">
        <div className="address">
          <p className="address__title">Address</p>
          <p className="address__code">
            <a href="#popup__map" className="address__link">
              753 Stanley Avenue, New York, 11803
              <i className="fas fa-map-marker-alt" />
            </a>
          </p>
          <p className="address__title">Phone number</p>
          <p className="address__code">516-575-9496</p>
          <p className="address__title">Email</p>
          <p className="address__code">contact@food-house.com</p>
          {/* --- Zdublowane wiec zrobic osoby plik js --- */}

          <h2 className="address__title">Follow Us</h2>
          <div className="socialmedia__links contact__links">
            <a href="http://facebook.com" className="socialmedia__links-facebook">
              <i className="fab fa-facebook-square" />
            </a>
            <a href="http://instagram.com" className="socialmedia__links-instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="http:///twitter.com" className="socialmedia__links-twitter">
              <i className="fab fa-twitter-square" />
            </a>
            <a href="http://youtube.com" className="socialmedia__links-youtube">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>

        <div className="message">
          <span className="message__line">
            <input type="text" placeholder="Your Name" className="message__input" />
            <input type="email" placeholder="Email" className="message__input" />
          </span>

          <input type="text" placeholder="Subject" className="message__input" />
          <textarea
            type="text"
            placeholder="Message"
            className="message__input message__input-message"
          />

          <button className="btn message__btn">Send Message</button>
        </div>
      </div>
{/* GOOGLE MAPS */}
      <div className="popup" id="popup__map">
        <div id="map" className="maps" />
        <a href="#contact" className="popup__close maps__close">
          <i className="far fa-times-circle toogle__btn" />
        </a>
      </div>
    </section>
    </div>
  );
};

export default Contact;
