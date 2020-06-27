import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { googleMapApiKey } from '../utils/config';
import Joi from 'joi-browser';
import Form from '../common/form';
import { socialMedia, contact } from '../utils/data';

class Contact extends Form {
  state = {
    data: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    errors: {},
    sendMessage: ""
  };

  schema = {
    name: Joi.string().required().label('Name'),
    email: Joi.string().required().email().label("Email"),
    subject: Joi.string().required().label("Subject"),
    message: Joi.string().required().label("Message"),
  }

  doSubmit = (data) => {
    this.setState({sendMessage: "Success, Your message was send"});
  }

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    const { sendMessage } = this.state;
    return (
      <div>
        <section className="contact" id="contact">
          <h1 className="contact__header">Contact Us</h1>
          <div className="contact__content">
            <div className="address">
              {contact.map(item => (
                <span key={item.title}>
                  <p className="address__title">{item.title}</p>
                  <p className="address__code">
                    {(item.link) 
                    ? <a href={item.link} className="address__link"> {item.fill}  
                        {(item.iconClass) ? <i className={item.iconClass} /> : ''} 
                      </a> 
                    : <span>{item.fill}</span> } 
                  </p>
                </span>
              ))}

              <h2 className="address__title">Follow Us</h2>
              <div className="socialmedia__links contact__links">
                {socialMedia.map(item => (
                  <a key={item.linkClass} href={item.link} target="_blank" className={item.linkClass} >
                    <i className={item.iconClass} />
                  </a>

                ))}
              </div>
            </div>

            <form className="form" onSubmit={this.handleSubmit}>
              <span className="form__row">
                {this.renderInput("name", "Name")}
                {this.renderInput("email", "Email",'email')}
              </span>
              {this.renderInput("subject", "Subject")}
              {this.renderTextarea("message", "Message")}
              {this.renderButton("Send Message")}
              {sendMessage && <div className="validate__success">{sendMessage}</div>}
            </form>
          </div>

          {/* GOOGLE MAPS */}
          <div className="popup" id="popup__map">
            <div id="map" className="maps">
              <Map
                google={this.props.google}
                zoom={15}
                style={{mapStyles}}
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
  apiKey: googleMapApiKey
})(Contact);
