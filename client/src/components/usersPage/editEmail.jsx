import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";

class EditEmail extends Form {
  state = {
    data: {
      oldEmail: "",
      newEmail: "",
      repeatNewEmail: "",
    },
    errors: {},
    sendMessage: "",
  };
  schema = {
    oldEmail: Joi.string().required().label("Old email"),
    newEmail: Joi.string().required().label("New email"),
    repeatNewEmail: Joi.string().required().label("Confirm new email")
  }
  doSubmit= data => {
    console.log('do submit', data)
  }

  render() {
    const { sendMessage } = this.state;

    return (
      <div className="login">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__header">Change your email</div>
          {this.renderInput("oldEmail", "Old email", "Email")}
          {this.renderInput("newEmail", "New email", "Email")}
          {this.renderInput("repeatNewEmail", "Repeat new email", "Email")}
          {this.renderButton("Save")}
          {sendMessage && (
            <div className="validate__success">{sendMessage}</div>
          )}
        </form>
      </div>
    );
  }

}

export default EditEmail;