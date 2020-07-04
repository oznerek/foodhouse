import React from "react";
import $ from "jquery";
import { incrementDish, decrementDish, deleteDish } from '../../store/actions/basket.actions';
import { store } from '../../store/config';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { sendOrder } from '../../services/basketServices';

class ShoppingBasket extends React.Component {
  state = {
      totalPrice: 0,
      basketList: [],
    };

  componentDidMount() {
    store.subscribe(this.change);
    
    const basketList = this.props.basket
    if (basketList){
      this.setState({ basketList },  this.countPrice(basketList));
    }
  }
  change = () => {
    const basketList = store.getState().shoppingBasket;
    this.setState({ basketList }, this.countPrice(basketList))
  }

  countPrice(basketList) {
    if (basketList.length > 0) {
      let newTotalPice = 0
      basketList.forEach((item) => {
        newTotalPice += item.dish_cost * item.dish_count;
      });
      return this.setState({ totalPrice: newTotalPice});
    };
  }

  addNoteToDish = (x) => (event) => {
    console.log(event.target.value)
    let userNote = event.target.value;
    this.setState((prevState) => ({
      basketList: prevState.basketList.map((obj) =>
        obj === x ? Object.assign(obj, { note: userNote }) : obj
      ),
    }));
  };

  popUpClose() {
    $("body").removeClass("hidden");  
  }

  render() {
    const { basketList, totalPrice } = this.state;
    return (
      <div className="popup" id="popup_basket">
        <div className="popup__basket">
          <span>
          <div className="popup__header">
            <p className="popup__header-name">Basket</p>
            <a href="#" className="popup__close" onClick={this.popUpClose}>
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
              basketList.map((item, val) => {
                let collapseName = item.dish_name.replace(/ /g, '').slice(0,10)+ val;
                let hrefLink = '#' + collapseName;
                return (
                  <div
                    className="popup__order"
                    key={collapseName}
                  >
                    <p className="popup__dish-name">{item.dish_name}</p>
                    <div className="popup__toogle">
                      <div className="popup__dish">
                        <p className="popup__dish-extras">
                          Extras: <span> {item.dish_extras} </span> 
                        </p>
                        <p className="popup__dish-sauce">
                          Sauce: <span> {item.dish_sauce} </span> 
                        </p>
                      </div>
                      <div className="popup__order-count">
                        <div className="popup__change">
                          <button
                            className="less"
                            onClick={() => this.props.decrementDish(item)}
                          >
                            -
                          </button>
                          <div className="popup__count">{item.dish_count}</div>
                          <button
                            className="more"
                            onClick={() => this.props.incrementDish(item)}
                          > 
                            +
                          </button>
                        </div>
                        <div className="popup__delete">
                          <p>
                            {(item.dish_cost * item.dish_count).toFixed(2)} PLN
                          </p>
                          <div className="popup__change">
                            <a data-toggle="collapse" href={hrefLink}>
                              <i className="far fa-edit popup__icon" />
                            </a>
                            <i
                              className="far fa-trash-alt popup__icon"
                              onClick={() => this.props.deleteDish(item)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dish__note panel-collapse collapse"
                      id={collapseName}
                    >
                      <textarea
                        type="text"
                        placeholder="Your additional wishes or other information (allergy etc.)"
                        className="dish__note-input"
                        onChange={this.addNoteToDish(item)}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              // POP UP NO-ORDER
              <span>
                <p className="empty__text">Your basket is empty</p>
                <i className="fas fa-exclamation-circle empty__icon" />
              </span>
            )}
          </div>
            </span>
          <span>
            <div className="popup__total">
              <p>Total price:</p>
              <p> { totalPrice.toFixed(2) } PLN</p>
            </div>
            
            {basketList.length !== 0 ? (<button className="popup__btn" onClick={() => sendOrder(basketList)}> ORDER  </button>) : (<NavLink className="popup__btn" to='/menu'>MAKE AN ORDER</NavLink>)} 
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { basket: state.shoppingBasket };
};
export default connect(
  mapStateToProps, { incrementDish, decrementDish, deleteDish }
)(ShoppingBasket);
