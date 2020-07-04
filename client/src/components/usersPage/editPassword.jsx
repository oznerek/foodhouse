import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";

class EditPassword extends Form {
  state = {
    data: {
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    },
    errors: {},
    sendMessage: "",
  };
  schema = {
    oldPassword: Joi.string().required().label("Old password"),
    newPassword: Joi.string().required().label("New password"),
    repeatNewPassword: Joi.string().required().label("Confirm new password")
  }
  doSubmit= data => {
    console.log('do submit', data)
  }

  render() {
    const { sendMessage } = this.state;

    return (
      <div className="login">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__header">Change your password</div>
          {this.renderInput("oldPassword", "Old password", "password")}
          {this.renderInput("newPassword", "New password", "password")}
          {this.renderInput("repeatNewPassword", "Repeat new password", "password")}
          {this.renderButton("Save")}
          {sendMessage && (
            <div className="validate__success">{sendMessage}</div>
          )}
        </form>
      </div>
    );
  }

}

export default EditPassword;
