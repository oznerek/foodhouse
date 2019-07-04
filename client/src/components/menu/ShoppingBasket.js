import React from "react";

class ShoppingBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketList: [],
      dish_cost: 0,
      dish_count: 0,
      total_price: 0,
      user_id: localStorage.getItem('user_id')
    };
  }

  componentDidMount() {
    this.fetchBasket();
  }


  fetchBasket() {
    fetch("/basket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user_id : this.state.user_id}) 
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(dataBasket =>
        dataBasket.map(user => ({
          basket_id: `${user.basket_id}`,
          dish_name: `${user.dish_name}`,
          dish_count: `${user.dish_count}`,
          dish_extras: `${user.dish_extras}`,
          dish_sauce: `${user.dish_sauce}`,
          dish_cost: `${user.dish_cost}`,
          note: `${user.note}`
        }))
      )
      .then(
        basketList =>
          this.setState({
            basketList
          }),
        dish_cost => this.setState({ dish_cost }),
        dish_count => this.setState({ dish_count })
      )

      .catch(err => {
        console.log("caught it!", err);
      });
  }

  increment = () => {
    console.log("dodaj 1");
    // this.state.basketList.dish_count + 1
  };

  decrement = () => {
    if (this.item.dish_count > 1) {
      // this.item.dish_count-1
      console.log("odejmij 1");
    }
  };

  deleteOrder = this.deleteOrder.bind(this)
  deleteOrder(number) {
    console.log('cokolwiek:',number)
    this.delete(number)
  }
  delete(number) {
    console.log('number', number)

    fetch("/menu", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({basket_id : number}) 
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      }).catch(err => {
        console.log("caught it!", err);
      });

      this.fetchBasket();
    }

  render() {
    const { basketList } = this.state;
    console.log(basketList);
    return (
      // -----------------POP UP BASKET--------------------
      <div className="popup" id="popup_basket">
        {/* ------------- POPUP ORDER ------------------- */}
        <div className="popup__basket">
          <div>
            <div className="popup__header">
              <p className="popup__header-name">Basket</p>
              <a href="#" className="popup__close">
                <i className="far fa-times-circle toogle__btn" />
              </a>
            </div>
            <div className="overflow">
              {basketList.length > 0 ? (
                basketList.map(item => {
                  return (
                    <div
                      className="popup__order"
                      key={item.dish_name + item.dish_sauce}
                    >
                      <div className="popup__dish">
                        <p className="popup__dish-name">{item.dish_name}</p>
                        <p className="popup__dish-extras">
                          Extras: {item.dish_extras}
                        </p>
                        <p className="popup__dish-sauce">
                          Sauce: {item.dish_sauce}
                        </p>
                      </div>
                      <div className="popup__tabletsize">
                        <div className="popup__change">
                          <button
                            className="popup__change-less"
                            onClick={this.decrement}
                          >
                            -
                          </button>
                          <div className="popup__count">{item.dish_count}</div>
                          <button
                            className="popup__change-more"
                            onClick={this.increment}
                          >
                            +
                          </button>
                        </div>
                        <div className="popup__delete">
                          {item.dish_cost} PLN
                          <div className="popup__change">
                            <i className="far fa-edit popup__icon" />
                            <i className="far fa-trash-alt popup__icon" onClick={() => this.deleteOrder(item.basket_id)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="popup__basket">
                  <p className="empty__text">Your basket is empty</p>
                  <i className="fas fa-exclamation-circle empty__icon" />
                </div>
              )}
            </div>
            <div className="popup__total">
              <p>Total price:</p>
              <p> 0 PLN</p>
            </div>
          </div>
          <a href="#">
            <button className="popup__btn">ORDER</button>
          </a>
        </div>
      </div>
    );
  }
}

export default ShoppingBasket;
// {
//   /* --------------POPUP DONE ------------- */
// }
// {
//   /* <div className="popup__basket">
//           <p className="popup__done">Success</p>
//           <i className="far fa-check-circle popup__done-icon "></i>
//           <p className="popup__done">Your order was added</p>
//       </div>  */
// }

// {
//   /* -----------POPUP NO ORDER ------------  */
// }
// {
//   /* <div className="popup__basket">
//        <p className="empty__text">Your basket is empty</p>
//         <i className="fas fa-exclamation-circle empty__icon"></i>
//         <a href="#">
//           <button className="popup__btn empty__btn">Make order</button>
//         </a>
//       </div>  */
// }
