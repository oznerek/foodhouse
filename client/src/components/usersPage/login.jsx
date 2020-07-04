import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { NavLink } from "react-router-dom";
import { login } from "../../store/actions/user.actions";
import { connect } from "react-redux";

class Login extends Form {
  state = {
    data: {
      login: "",
      password: "",
    },
    errors: {},
    sendMessage: "",
  };
  schema = {
    login: Joi.string()
      .required()
      .email()
      .label("Login"),
    password: Joi.string()
      .required()
      .label("Password"),
  };

  doSubmit = async (data) => {
    let spiiner = <i style={{color: '#262626'}}className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
    this.setState({ sendMessage: spiiner });

    try {
      const response = await this.props.login(data)
      this.setState({ sendMessage: response.payload.message });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { sendMessage } = this.state;

    return (
      <div className="login">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__header">Sign In</div>
          {this.renderInput("login", "Login")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Sign In")}
          {sendMessage && (
            <div className="validate__success">{sendMessage}</div>
          )}
          <NavLink to="/register" className="sign-in-link">
            Register account
          </NavLink>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.users };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
