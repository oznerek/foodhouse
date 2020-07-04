import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Textarea from "./textarea";
import $ from "jquery";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit(this.state.data);
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
   
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  onFocus = (event) => {
    $(event.target).parent().addClass("active");
  };
  onBlur = (event) => {
    if (!event.target.value) {
      $(event.target).parent().removeClass("active");
    }
  };

  renderButton(label) {
    return (
      <div disabled={this.validate()} onClick={this.handleSubmit} className="btn form__btn">
        {label}
      </div>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        error={errors[name]}
      />
    );
  }

  renderTextarea(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Textarea
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        error={errors[name]}
      />
    );
  }
}

export default Form;
