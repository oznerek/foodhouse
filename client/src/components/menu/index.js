import React from "react";
import MenuList from "./MenuList";
import MenuListPhone from "./MenuListPhone";
import Header from "../Header";
import Navigation from "../Navigation";

import DishList from "./DishList";
import { fetchMenu } from "../../actions";
import { connect } from "react-redux";

class Customers extends React.Component {
  componentDidMount() {
    this.props.fetchMenu(this.props.menu);
  }

  componentDidUpdate(prevProps) {
    if (this.props.menu !== prevProps.menu) {
      this.props.fetchMenu(this.props.menu);
    }
  }

  toogleList() {
    document.getElementById("toogleList").style.display = "block";
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div className="menu">
          <MenuList data-trigger="focus" />
          <MenuListPhone />
          <DishList recipes={this.props.menuList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { menu: state.menuSelected, menuList: state.menuList };
};

export default connect(
  mapStateToProps,
  { fetchMenu }
)(Customers);
