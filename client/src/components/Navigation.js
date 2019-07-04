import React from "react";
import ShoppingBasket from "./menu/ShoppingBasket";
import { NavLink} from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfDish: 0,
      user_id : localStorage.getItem('user_id')
    };
  }
  componentDidMount(){
    this.fetchBasket();
  }

  
  fetchBasket() {
    fetch("/basket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user_id : 'jBzN1Fny0f8Dd826Y7gb'}) 
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(numberOfDish =>
        this.setState({
          numberOfDish: numberOfDish.length
        })
      )
      .catch(err => {
        console.log("caught it!", err);
      });
  }


  render() {
    return (
      <nav className="navigation">
        <ul className="nav__list" onClick={this.myFunction}>
          <NavLink activeClassName="active" exact to="/">
            <li className="nav__item">Home</li>
          </NavLink>
          <NavLink activeClassName="active" exact to="/menu">
            <li className="nav__item">Menu</li>
          </NavLink>
          <NavLink activeClassName="active" exact to="/contact">
            <li className="nav__item">Contact</li>
          </NavLink>
          <a
            href="#popup_basket"
            className="basket"

          >
            <li className="nav__item ">
              <i className="fas fa-shopping-basket" />
              <span className="basket__label">{this.state.numberOfDish}</span>
            </li>{" "}
          </a>
        </ul>
        <ShoppingBasket />
      </nav>
    );
  }
}

export default Navigation;
