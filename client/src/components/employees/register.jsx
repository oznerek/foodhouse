import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { NavLink } from "react-router-dom";

class Register extends Form {
  state = {
    data: {
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    errors: {},
    sendMessage: "",
  };
  schema = {
    name: Joi.string().required().label('Name'),
    surname: Joi.string().required().label("Surname"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(8).label("Password"),
    repeatPassword: Joi.any().valid(Joi.ref('password')).required().label('Repeat password').options({ language: { any: { allowOnly: 'must match password' } } })
  }
  chekUserExist(data) {
    fetch("/checkUserExist", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: data.email}),
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        } 
        return response.json();
      })
      .then((users) => {
        if(users.length === 0 ) {
          this.registerAccount(data)
          this.setState({sendMessage: "Your account has create"});
          setTimeout(() => {
            window.location = '/';
          }, 2000)
        } else {
          this.setState({sendMessage: "This email is already registered"});
        }
      })   
  }

  registerAccount(data) {
    console.log('register func')
    fetch("/register", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })        
      .catch((err) => {
        console.log("caught it!", err);
      });
  }

  doSubmit = async (data) => {
    data = {...data, account_type: 'user'}
    await this.chekUserExist(data);
  }

  render() {
      const { sendMessage } = this.state;
    return (
        <div className="register">
            <form className="form" onSubmit={this.handleSubmit}>   
                <div className="form__header">Create your account</div>
                {this.renderInput("name", "Name")}
                {this.renderInput("surname", "Surname")}
                {this.renderInput("email", "Email",'email')}
                {this.renderInput("password", "Password", "password")}
                {this.renderInput("repeatPassword", "Repeat Password", "password")}
                {this.renderButton("Create Account")}
                {sendMessage && <div className="validate__success">{sendMessage}</div>}
                <NavLink to="/login" className="sign-in-link">Sign in</NavLink>
            </form>
        </div>
);
  }
}

export default Register;
