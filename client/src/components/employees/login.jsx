import React from "react";
import Employee from './EmployeeMenuList';
import Joi from "joi-browser";
import Form from "../common/form";
import { NavLink } from "react-router-dom";

class Login extends Form {
  state = {
    data: {
      login: "",
      password: "",
    },
    errors: {},
    sendMessage: ""
  }
  schema = {
    login: Joi.string().required().email().label('Login'),
    password: Joi.string().required().label("Password"),
    }

  doSubmit = (data) => {
    this.setState({sendMessage: "Login success"});
    setTimeout(() => {
      window.location = '/';
    }, 1000)
  }

  render() {
    const { sendMessage } = this.state;

    return (
      <div className="login">
          <form className="form" onSubmit={this.handleSubmit}>   
              <div className="form__header">Sign In</div>
              {this.renderInput("login", "Login")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Sign In")}
              {sendMessage && <div className="validate__success">{sendMessage}</div>}
              <NavLink to="/register" className="sign-in-link">Register account</NavLink>
          </form>
      </div>
    );
  }
}

export default Login;
