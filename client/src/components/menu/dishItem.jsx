import React from "react";
import { connect } from "react-redux";
import { addDish } from "../../store/actions/basket.actions";
import {
  renderExtrasList,
  renderSauceList,
} from "../../services/menuService";

class DishItem extends React.Component {
  state = {
    numberOfDishes: 1,
    isChecked: false,
    extras: [],
    sauce: "Garlic",
    extrasCost: 0,
  };

  increment = () => {
    this.setState({
      numberOfDishes: this.state.numberOfDishes + 1,
    });
  };

  decrement = () => {
    if (this.state.numberOfDishes > 1) {
      this.setState({
        numberOfDishes: this.state.numberOfDishes - 1,
      });
    }
  };

  addExtras = (event) => {
    let { name } = event.target;
    let priceForSelectedExtras = parseFloat(event.target.value); //price of the selected extras

    this.setState((prevState) => {
      const { extras } = prevState;
      if (extras.includes(name)) {
        this.setState({
          extrasCost: this.state.extrasCost - priceForSelectedExtras,
        });
        return { extras: extras.filter((value) => value !== name) };
      } else {
        this.setState({
          extrasCost: this.state.extrasCost + priceForSelectedExtras,
        });
        return { extras: [...extras, name] };
      }
    });
  };

  handleChange = (event) => {
    this.setState({ sauce: event.target.value });
  };

  addNewDish = (event) => {
    event.preventDefault();
    let orderName = this.props.onItem.title;
    let orderCost = (
      parseFloat(this.props.price) + this.state.extrasCost
    ).toFixed(2);
    let orderExtras = this.state.extras;
    let orderSauce = this.state.sauce;
    let orderCount = this.state.numberOfDishes;
    let user_id = localStorage.getItem("user_id");

    let sendOrderToBasket = {
      dish_name: orderName,
      dish_count: orderCount,
      dish_extras: orderExtras.toString(),
      dish_sauce: orderSauce,
      dish_cost: orderCost,
      user_id: user_id,
      note: "",
    };

    let basket = JSON.parse(localStorage.getItem("basket"));
    let newBasket = [];
    basket === null
      ? (newBasket = [sendOrderToBasket])
      : (newBasket = [...basket, sendOrderToBasket]);

    // localStorage.setItem('basket', JSON.stringify(newBasket));
    this.props.addDish(sendOrderToBasket);
  };

  render() {
    // renderExtrasList();
    const { onItem, price } = this.props;
    let collapseIdName = onItem.recipe_id;
    let collapseName = "#" + collapseIdName;
    let finalPrice = (
      (parseFloat(this.props.price) + this.state.extrasCost) *
      this.state.numberOfDishes
    ).toFixed(2);

    return (
      <div className="cards">
        <div className="d-flex">
          <div className="cards__left mr-4">
            <img
              className="cards__img "
              src={onItem.image_url}
              alt="food- pic"
            />
          </div>
          <div
            className="cards__right"
            data-toggle="collapse"
            href={collapseName}
          >
            <div className="">
              <div className="cards__header">
                <span> {onItem.title} </span>
                <span className="toogle">
                  <i className="far fa-times-circle toogle__btn" />
                </span>
              </div>
              <div className="cards__body">
                {" "}
                Here should be in a Dish description loaded from API, but the
                app quickly uses the free user key Here should be in a Dish
                description loaded from API, but the app quickly uses the free
                user key{" "}
              </div>
              <span className="cards__header-price"> {price} PLN</span>
            </div>
          </div>
        </div>
        <div id={collapseIdName} className="panel-collapse collapse extras">
          <div className="extras">
            <h4 className="extras__header active">Extras to dish</h4>
            <div className="extras__list">{renderExtrasList()}</div>
          </div>
          <form method="post">
            <div className="sauce">
              Sauce
              <select
                className="sauce__select"
                value={this.state.sauce}
                onChange={this.handleChange}
              >
                {renderSauceList()}
              </select>
            </div>
          </form>
          <div className="pay">
            <div className="pay__count">
              <span className="pay__less" onClick={this.decrement}>
                -
              </span>
              <span className="pay__input" id="pay__input">
                {" "}
                {this.state.numberOfDishes}{" "}
              </span>
              <span className="pay__more" onClick={this.increment}>
                +
              </span>
            </div>
            <div className="pay__price">
              <button className="btn btn__pay" onClick={this.addNewDish}>
                <span>{finalPrice}</span>
                PLN
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.dishDetails,
    basket: state.shopingBasket,
  };
};

export default connect(
  mapStateToProps,
  { addDish }
)(DishItem);
