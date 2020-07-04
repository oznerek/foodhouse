import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { NavLink } from "react-router-dom";
import { chekUserExist } from './../../services/userService';

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


  doSubmit = async data => {
    let spiner = <i style={{color: '#262626'}}className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
    this.setState({ sendMessage: spiner });

    try {
      const response = await chekUserExist({...data, account_type: 'user'});
      this.setState({ sendMessage: response.message });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
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
