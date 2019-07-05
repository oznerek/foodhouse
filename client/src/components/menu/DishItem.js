import React from "react";
import { connect } from "react-redux";
import { fetchDishDetails } from "../../actions";

class DishItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfDishes: 1,
      isChecked: false,
      extras: [],
      sauce: "Garlic",
      extrasCost: 0
    };
  }

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

  addExtras = this.addExtras.bind(this);
  addExtras(event) {
    let { name } = event.target;
    let priceForSelectedExtras  = parseFloat(event.target.value); //price of the selected extras

    this.setState(prevState => {
      const { extras } = prevState;
      if (extras.includes(name)) {
        this.setState({extrasCost: this.state.extrasCost - priceForSelectedExtras});
        return { extras: extras.filter(value => value !== name)}

      } else {
        this.setState({extrasCost: this.state.extrasCost + priceForSelectedExtras});
        return { extras: [...extras, name] }
      }
    });
  }

  handleChange = this.handleChange.bind(this);
  handleChange(event) {
    this.setState({ sauce: event.target.value });
  }

  
  sendOrder = this.sendOrder.bind(this);

  sendOrder(event) {
    event.preventDefault();
    let orderName = this.props.onItem.title;
    let orderCost = (parseFloat(this.props.price) + this.state.extrasCost).toFixed(2);
    let orderExtras = this.state.extras;
    let orderSauce = this.state.sauce;
    let orderCount = this.state.numberOfDishes;
    let user_id = localStorage.getItem('user_id');

    let sendOrderToBasket = {
      dish_name: orderName,
      dish_count: orderCount,
      dish_extras: orderExtras.toString(),
      dish_sauce: orderSauce,
      dish_cost: orderCost,
      user_id:  user_id,
      note: ""
    };

    // ---------------- SAVE DISH IN DATABASE : basket --------------- //
    fetch("/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendOrderToBasket)
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log("Order has added to database: basket");
      })
      .catch(function(err) {
        console.log(err);
      }); 
  }

  renderExtrasList() {
    let extrasName = [
      { name: "Salami", price: 1.5 },
      { name: "Chicken", price: 2.0 },
      { name: "Tomato", price: 1.5 },
      { name: "Olives", price: 1.5 },
      { name: "Chedar", price: 2.0 },
      { name: "Dried tomatoes", price: 1.5 },
      { name: "Goat Cheese", price: 2.0 },
      { name: "Gouda", price: 1.5 }
    ];
    return extrasName.map(item => (
      <div className="extras__item" key={item.name}>
        <span className="extras__name">
          <input
            type="checkbox"
            className="extras__input"
            onChange={this.addExtras}
            name={item.name}
            value={item.price}
          />
          {item.name}
        </span>
        <span className="extras__price">{item.price} PLN</span>
      </div>
    ));
  }
  render() {
    const { onItem, price } = this.props;
    let collapseIdName = onItem.title.replace(/ /g, "").slice(0, 10);
    let collapseName = "#" + collapseIdName;
    let finalPrice = (
      (parseFloat(this.props.price) + this.state.extrasCost) *
      this.state.numberOfDishes
    ).toFixed(2);
   
    return (
      <div className="cards">
        <div className="row">
          <div className="col-3 cards__left">
            <img
              className="cards__img"
              src={onItem.image_url}
              alt="food- pic"
            />
          </div>
          <div
            className="col-9 cards__right"
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
            <div className="extras__list">{this.renderExtrasList()}</div>
          </div>
          <form method="post">
            <div className="sauce">
              Sauce
              <select
                className="sauce__select"
                value={this.state.sauce}
                onChange={this.handleChange}
              >
                 <option value="" className="sauce__item">
                  None
                </option>
                <option value="Garlic" className="sauce__item">
                  Garlic
                </option>
                <option value="1000 Island" className="sauce__item">
                  Thousand Island dressing
                </option>
                <option value="Spice" className="sauce__item">
                  Spice{" "}
                </option>

                <option value="Mordor" className="sauce__item">
                  Mordor
                </option>
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
              <button className="btn btn__pay" onClick={this.sendOrder}>
                {finalPrice}
                PLN
                <span className="btn__span">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { menuList: state.menuList, detail: state.dishDetails };
};

export default connect(
  mapStateToProps,
  { fetchDishDetails }
)(DishItem);
