import React from "react";
import { extrasName, sauceList } from "./../components/utils/data";

export function renderExtrasList() {
  return extrasName.map((item) => (
    <div className="extras__item" key={item.name}>
      <span className="extras__name">
        <input
          type="checkbox"
          className="extras__input"
          onChange={addExtras}
          name={item.name}
          value={item.price}
        />
        <label>{item.name}</label>
      </span>
      <span className="extras__price">{item.price} PLN</span>
    </div>
  ));
}

export function renderSauceList() {
  return sauceList.map((item) => (
    <option key={item} value={item} className="sauce__item">
      {item}
    </option>
  ));
}

function addExtras (event){
  let { name } = event.target;
  console.log(name)
//   let priceForSelectedExtras = parseFloat(event.target.value); //price of the selected extras

//   this.setState((prevState) => {
//     const { extras } = prevState;
//     if (extras.includes(name)) {
//       this.setState({
//         extrasCost: this.state.extrasCost - priceForSelectedExtras,
//       });
//       return { extras: extras.filter((value) => value !== name) };
//     } else {
//       this.setState({
//         extrasCost: this.state.extrasCost + priceForSelectedExtras,
//       });
//       return { extras: [...extras, name] };
//     }
//   });
};


  // addNewDish = (event) => {
  //   event.preventDefault();
  //   let orderName = this.props.onItem.title;
  //   let orderCost = (
  //     parseFloat(this.props.price) + this.state.extrasCost
  //   ).toFixed(2);
  //   let orderExtras = this.state.extras;
  //   let orderSauce = this.state.sauce;
  //   let orderCount = this.state.numberOfDishes;
  //   let user_id = localStorage.getItem("user_id");

  //   let sendOrderToBasket = {
  //     dish_name: orderName,
  //     dish_count: orderCount,
  //     dish_extras: orderExtras.toString(),
  //     dish_sauce: orderSauce,
  //     dish_cost: orderCost,
  //     user_id: user_id,
  //     note: "",
  //   };
    
  //   let basket = JSON.parse(localStorage.getItem("basket"));
  //   let newBasket = [];
  //   (basket === null ) ? newBasket = [sendOrderToBasket] : newBasket = [...basket, sendOrderToBasket];
    
  //   // localStorage.setItem('basket', JSON.stringify(newBasket));
  //   this.props.addDish(sendOrderToBasket);
  // };