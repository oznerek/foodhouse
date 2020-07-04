import React from "react";
import $ from "jquery";
import Form from './../common/form';
import EditPassword from './editPassword';
import EditEmail from "./editEmail";
import EditProfile from './editProfile';

class EditUser extends Form{
  state = { category: "profile" }
  componentDidMount() {
    this.changeColor();
  }

  selectCategory = this.selectCategory.bind(this);
  selectCategory(event) {
    this.setState({ category: event.target.getAttribute("name") });
    this.changeColor();
  }

  changeColor() {
    $(".edit__navigation-item").click(function() {
      $(".edit__navigation-item").removeClass("editActive");
      $(this)
        .closest(".edit__navigation-item")
        .addClass("editActive");
    });
  }

  renderView() {
    let name = this.state.category;
    if (name === "profile") {
      return <EditProfile />
    } else if (name === "email") {
      return <EditEmail />
    } else if (name === "password") {
     return <EditPassword />
    }
  }

  render() {
    return (
      <span className="edit">
        <nav className="edit">
          <ul className="edit__navigation">
            <li
              className="edit__navigation-item editActive "
              name="profile"
              onClick={this.selectCategory}
            >
              Profile
            </li>
            <li
              className="edit__navigation-item"
              name="email"
              onClick={this.selectCategory}
            >
              Email
            </li>
            <li
              className="edit__navigation-item"
              name="password"
              onClick={this.selectCategory}
            >
              Password
            </li>
          </ul>
        </nav>
        {this.renderView()}
        {/* <EditPassword /> */}
      </span>
    );
  }
}

export default EditUser;
