import React from "react";
import MenuList from "./menuList";
import MenuListPhone from "./menuListPhone";
import DishList from "./dishList";
import { fetchMenu, selectMenu } from "../../store/actions/dish.actions";
import { connect } from "react-redux";

class Customers extends React.Component {
  componentDidMount() {
    if (this.props.dishList.length === 0 ) {
      this.props.fetchMenu(this.props.selectedDishType);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedDishType !== prevProps.selectedDishType) {
      this.props.fetchMenu(this.props.selectedDishType);
    }
  }

  render() {
    const { selectMenu , dishList, selectedDishType } = this.props;
    return (
        <div className="menu">
          <MenuList selectedDish={selectedDishType} onChange={selectMenu} />
          <MenuListPhone onChange={selectMenu} />
          <DishList dishList={dishList} />
        </div>
    );
  }
}

const mapStateToProps = state => {
  const {selectedDishType , dishList } = state.dishes;
  return { selectedDishType, dishList };
};

export default connect(
  mapStateToProps,
  { fetchMenu, selectMenu }
)(Customers);
