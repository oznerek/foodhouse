import React from "react";
import ShoppingBasket from "../menu/shoppingBasket";
import { NavLink, withRouter } from "react-router-dom";
import { login } from '../../store/actions/user.actions';
import { connect } from "react-redux";
import { store } from '../../store/config';
import $ from "jquery";

class Navigation extends React.Component {
    state = {
      showMobileMenu: false,
      isLoggedIn: false,
    };
    
  componentDidMount() {
    // const user = localStorage.getItem('token')
    store.subscribe(this.checkIfUserLogin);
  }
  
  checkIfUserLogin = () => {
    const user = store.getState();
    this.setState({isLoggedIn: user.users.isLoggedIn})
  }

  handleBodyOverflow() {
    $("body").addClass("hidden");
  }
  showMobileMenu = (e) => {
    if( $(window).width() < 500 )
      this.setState({ showMobileMenu: !this.state.showMobileMenu });
  };

  render() { 
  const { basketCount } = this.props;
  const { isLoggedIn } = this.state;
  let boxClass = ["toggle__nav"];
  let mobileMenu = ["nav__list"];
  let windowWidth = $(window).width();

  if (this.state.showMobileMenu) {
    boxClass.push("active");
    mobileMenu.push("active");
  }
  function checkIfMobile() {
    if (windowWidth > 500) {
      $(".nav__list, .toggle__nav").removeClass('active')
      $(".nav__list").removeClass("mobile");
    } else {
      $(".nav__list").addClass('mobile')
    }
  }

  $(window).resize(function () {
    windowWidth = $(window).width();
    checkIfMobile();
  }); 

  $( document ).ready(() => checkIfMobile());
    return (
      <nav className="navigation containers">
        <div className="nav__flex">
          <div className={mobileMenu.join(" ")}>
            <NavLink onClick={this.showMobileMenu} exact to="/" className="nav__item" >
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
            <span className="basket__label">{basketCount.length}</span>
          </a>
          <NavLink to={!isLoggedIn ? '/login' : '/user'} className="nav__item nav__item--login">
            <i className="fa fa-user-circle login-icon" aria-hidden="true" />
          </NavLink>
          <div onClick={this.showMobileMenu} className={boxClass.join(" ")} >
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

const mapStateToProps = (state) => {
  return { user: state.users, basketCount: state.shoppingBasket };
};
export default withRouter(connect(
  mapStateToProps, { login }
)(Navigation));