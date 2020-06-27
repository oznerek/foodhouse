import React from "react";
import ShoppingBasket from "../menu/ShoppingBasket";
import { NavLink } from "react-router-dom";
import $ from "jquery";

class Navigation extends React.Component {
    state = {
      showMobileMenu: false,
      numberOfDish: 0,
      user_id: localStorage.getItem("user_id"),
    };
    
  componentDidMount() {
    this.fetchBasket();
  }

  fetchBasket() {
    let numberOfDish = JSON.parse(localStorage.getItem("basket"));
    if (numberOfDish) {
      this.setState({ numberOfDish: numberOfDish.length });
    }
  }
  handleBodyOverflow() {
    $("body").addClass("hidden");
  }
  showMobileMenu = (e) => {
    if( $(window).width() < 500 )
      this.setState({ showMobileMenu: !this.state.showMobileMenu });
  };

  render() {
    let boxClass = ["toggle__nav"];
    let mobileMenu = ["nav__list mobile"];
    let windowWidth = $(window).width();
    if (this.state.showMobileMenu) {
      boxClass.push("active");
      mobileMenu.push("active");
    }
    function checkIfMobile() {
      if (windowWidth > 500) {
        $(".nav__list mobile, .toggle__nav").removeClass("active");
        $(".nav__list").removeClass('mobile')
      } else {
        $(".nav__list").addClass('mobile')
      }
    }
    checkIfMobile();

    $(window).resize(function () {
      windowWidth = $(window).width();
      checkIfMobile();
    });

    return (
      <nav className="navigation containers">
        <div className="nav__list" onClick={this.myFunction}>
          <div className={mobileMenu.join(" ")}>
            <NavLink onClick={this.showMobileMenu} to="/home" className="nav__item" >
              Home
            </NavLink>
            <NavLink onClick={this.showMobileMenu} to="/menu" className="nav__item">
              Menu
            </NavLink>
            <NavLink onClick={this.showMobileMenu} to="/contact" className="nav__item">
              Contact
            </NavLink>
          </div>
          <a
            href="#popup_basket"
            className="basket nav__item"
            onClick={this.handleBodyOverflow}
          >
            <i className="fas fa-shopping-basket" />
            <span className="basket__label">{this.state.numberOfDish}</span>
          </a>
          <NavLink to="/login" className="nav__item nav__item--login">
            <i className="fa fa-user-circle login-icon" aria-hidden="true" />
          </NavLink>
          <div className={boxClass.join(" ")} onClick={this.showMobileMenu}>
            <div className="toggle__nav--box">
              <span className="toggle__line" />
            </div>
          </div>
        </div>
        <ShoppingBasket />
      </nav>
    );
  }
}

export default Navigation;
