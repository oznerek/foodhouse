import React from "react";
import MenuList from "./MenuList";
import MenuListPhone from "./MenuListPhone";
import DishList from "./DishList";
import { fetchMenu } from "../../store/actions";
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
        <div className="menu">
          <MenuList data-trigger="focus" />
          <MenuListPhone />
          <DishList recipes={this.props.menuList} />
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
