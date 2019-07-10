import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeHandler = this.changeHandler.bind(this);
  changeHandler(event) {
    let nameState = event.target.name;
    this.setState({ [nameState]: event.target.value });
  }

  sendMessage = this.sendMessage.bind(this);
  sendMessage() {
    let dataState = this.state;
    if (
      dataState.message === undefined ||
      dataState.name === undefined ||
      dataState.subject === undefined ||
      dataState.email === undefined
    ) {
      alert("Please complete all form before send Your message");
    } else {
      alert("Your message was send");
    }
  }

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    console.log(this.state);
    console.log(this.state.message);
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
                <a
                  href="http://facebook.com"
                  className="socialmedia__links-facebook"
                >
                  <i className="fab fa-facebook-square" />
                </a>
                <a
                  href="http://instagram.com"
                  className="socialmedia__links-instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="http:///twitter.com"
                  className="socialmedia__links-twitter"
                >
                  <i className="fab fa-twitter-square" />
                </a>
                <a
                  href="http://youtube.com"
                  className="socialmedia__links-youtube"
                >
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>

            <div className="message">
              <span className="message__line">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="message__input"
                  onChange={this.changeHandler}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="message__input"
                  onChange={this.changeHandler}
                />
              </span>

              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="message__input"
                onChange={this.changeHandler}
              />
              <textarea
                type="text"
                placeholder="Message"
                name="message"
                className="message__input message__input-message"
                onChange={this.changeHandler}
              />
              <button className="btn message__btn" onClick={this.sendMessage}>
                Send Message
              </button>
            </div>
          </div>
          {/* GOOGLE MAPS */}
          <div className="popup" id="popup__map">
            <div id="map" className="maps">
              <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 40.6606, lng: -73.8811 }}
              >
                <Marker position={{ lat: 40.6606, lng: -73.8811 }} />
              </Map>
            </div>
            <a href="#contact" className="popup__close maps__close">
              <i className="far fa-times-circle toogle__btn" />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCZsYz3RtR70-Jz3lgHYatmwjmOzmBDOoM"
})(Contact);
