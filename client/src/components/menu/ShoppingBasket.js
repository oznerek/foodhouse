import React from "react";
import $ from "jquery";

class ShoppingBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketList: [],
      totalPrice: 0,
      unique_id: "",
      user_id: localStorage.getItem("user_id")
    };
  }

  componentDidMount() {
    this.fetchBasket();
    this.uniqueKey();

  }

  fetchBasket() {
    fetch("/basket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: this.state.user_id })
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
      .then(basketList =>
        this.setState({
          basketList
        })
      )
      .catch(err => {
        console.log("caught it!", err);
      });
  }

  increment(x) {
    console.log("dodaj 1");
    console.log("state", x);
    this.setState(prevState => ({
      basketList: prevState.basketList.map(obj =>
        obj.basket_id === x
          ? Object.assign(obj, { dish_count: parseFloat(obj.dish_count) + 1 })
          : obj
      )
    }));
  }

  decrement(x) {
    this.setState(prevState => ({
      basketList: prevState.basketList.map(obj =>
        obj.basket_id === x
          ? Object.assign(
              obj,
              obj.dish_count > 1
                ? { dish_count: parseFloat(obj.dish_count) - 1 }
                : obj
            )
          : obj
      )
    }));
  }

  deleteOrder = (number) => {
    this.delete(number);
  }

  delete(number) {
    fetch("/menu", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ basket_id: number })
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .catch(err => {
        console.log("caught it!", err);
      });
    this.fetchBasket();
  }

  addNoteToDish = x => event => {
    let userNote = event.target.value;
    this.setState(prevState => ({
      basketList: prevState.basketList.map(obj =>
        obj.basket_id === x ? Object.assign(obj, { note: userNote }) : obj
      )
    }));
  };

  uniqueKey() {
    let table = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "q",
      "p",
      "r",
      "s",
      "t",
      "u",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "Q",
      "P",
      "R",
      "S",
      "T",
      "U",
      "W",
      "X",
      "Y",
      "Z",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0"
    ];
    let uniqKey = [];
    for (let i = 0; i < 20; i++) {
      let x = parseInt(Math.random() * 60);
      uniqKey.push(table[x]);
    }
    this.setState({ unique_id: uniqKey.join("") });
  }

  sendOrder = () => {
    this.state.basketList.length > 0 ?
(
    this.state.basketList.forEach(item => {
      let orderName = item.dish_name;
      let orderCost = parseFloat(item.dish_cost).toFixed(2);
      let orderExtras = item.dish_extras;
      let orderSauce = item.dish_sauce;
      let orderCount = item.dish_count;
      let user_id = localStorage.getItem("user_id");
      let note = item.note;
      let unique_id = this.state.unique_id;

      let sendOrderToOrderList = {
        dish_name: orderName,
        dish_count: orderCount,
        dish_extras: orderExtras,
        dish_sauce: orderSauce,
        total_price: orderCost,
        user_id: user_id,
        note: note,
        unique_id: unique_id,
        status: "ordered"
      };


    $(".popup__done").css("display", "block")
    $(".overflow").css("display", "none")
    $(".popup__btn").attr('disabled', true)

    setTimeout(function() {
      window.location.href = "#";
      $(".popup__done").css("display", "none");
      $(".overflow").css("display", "block");
      $(".popup__btn").attr('disabled', false)

    }, 5000);

    fetch("/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendOrderToOrderList)
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log("Order has added to database: order_list ");
      })
      .catch(function(err) {
        console.log(err);
      });
  })
   )   :       window.location.href = `/menu`;

  }

  render() {
    const { basketList } = this.state;
    let totalPrice = 0;
    this.state.basketList.forEach(item => {
      totalPrice += parseFloat(item.dish_cost * item.dish_count);
    });

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
            {/* POPUP  SEND ORDER- STATUS OK */}
            <div className="popup__done">
              <p>Success</p>
              <i className="far fa-check-circle popup__done-icon " />
              <p>Your order was added</p>
            </div>

            <div className="overflow">
              {basketList.length > 0 ? (
                basketList.map(item => {
                  let collapseName = "#" + item.basket_id;

                  return (
                    <div
                      className="popup__order"
                      key={item.dish_name + item.dish_sauce}
                    >
                      <div className="popup__toogle">
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
                              onClick={() => this.decrement(item.basket_id)}
                            >
                              -
                            </button>
                            <div className="popup__count">
                              {item.dish_count}
                            </div>
                            <button
                              className="popup__change-more"
                              onClick={() => this.increment(item.basket_id)}
                            >
                              +
                            </button>
                          </div>
                          <div className="popup__delete">
                            {(item.dish_cost * item.dish_count).toFixed(2)} PLN
                            <div className="popup__change">
                              <a data-toggle="collapse" href={collapseName}>
                                {" "}
                                <i className="far fa-edit popup__icon" />
                              </a>
                              <i
                                className="far fa-trash-alt popup__icon"
                                onClick={() => this.deleteOrder(item.basket_id)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="dish__note panel-collapse collapse"
                        id={item.basket_id}
                      >
                        <textarea
                          type="text"
                          placeholder="Your additional wishes or other information (allergy etc.)"
                          className="dish__note-input"
                          onChange={this.addNoteToDish(item.basket_id)}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                // POP UP NO-ORDER
                <div className="popup__basket">
                  <p className="empty__text">Your basket is empty</p>
                  <p className='empty__text-demo'> You are in demo website. Here should be a basket list generate from DB</p>
                  <i className="fas fa-exclamation-circle empty__icon" />
                </div>
              )}
            </div>
            <div className="popup__total">
              <p>Total price:</p>
              <p> {totalPrice.toFixed(2)} PLN</p>
            </div>
          </div>
         
            <button className="popup__btn" onClick={this.sendOrder}>
              ORDER
            </button>
          
        </div>
      </div>
    );
  }
}

export default ShoppingBasket;

