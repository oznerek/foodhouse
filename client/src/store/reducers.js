import { combineReducers } from "redux";

const menuReducer = () => {
  return ["Pizza", "Hamburger", "Pasta", "Sushi", "Kebab", "Salad", "Seafood"];
};

const selectedMenuReducer = (menuSelected = "Pizza", action) => {
  if (action.type === "MENU_ITEM_SELECTED") {
    return action.payload;
  }
  return menuSelected;
};

const renderMenuListReducer = (state = [], action) => {
  if (action.type === "MENU_FETCHED") {
    return action.payload;
  }
  return state;
};

const renderDishItemDetails = (state = [], action) => {
  if (action.type === "DISH_DETAILS_FETCHED") {
    return action.payload;
  }
  return state;
};

const shopingBasket = (state = [], action) => {
  if (action.type === "BASKET_FETCHED") {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  menu: menuReducer,
  menuSelected: selectedMenuReducer,
  menuList: renderMenuListReducer,
  dishDetails: renderDishItemDetails
});
