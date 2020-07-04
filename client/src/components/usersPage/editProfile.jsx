import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";
import { deleteAcount } from './../../services/userService';


class EditProfile extends Form {
  state = {
    data: {
        changeName: "",
        changeLastname: "",
        comments: ""
    },
    errors: {},
    sendMessage: "",
  };
  schema = {
    changeName: Joi.string().label('Change name'),
    changeLastname: Joi.string().label('Change last name'),
    comments: Joi.string().required().label("Comments"),
  }
  doSubmit= data => {
    console.log('do submit', data)
  }

  render() {
    const { sendMessage } = this.state;

    return (
      <div className="login">
        <form className="form mb-5" onSubmit={this.handleSubmit}>
          <div className="form__header">Change your personal data</div>
          {this.renderInput("changeName", "Change name", "text")}
          {this.renderInput("changeLastname", "Change lastname", "text")}
          {this.renderButton("Save")}
          {sendMessage && (
            <div className="validate__success">{sendMessage}</div>
          )}
        </form>
        <div onClick={this.ulopadPicture} className="btn form__btn mt-5">
            Upload Image
        </div>
        <div onClick={deleteAcount} className="btn form__btn mt-5">
            Delete Account
        </div>
      </div>
    );
  }

}

export default EditProfile;