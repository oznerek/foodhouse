export const shoppingBasket = (state = [], action) => {
  if (action.type === "ADD_NEW_DISH") {
    let checkIfNewDishExists = false;
    state.map((dish) => {
      if (
        dish.dish_name === action.payload.dish_name &&
        dish.dish_extras === action.payload.dish_extras
      ) {
        Object.assign(dish, { dish_count: dish.dish_count + 1 });
        checkIfNewDishExists = true;
      }
    });

    if (checkIfNewDishExists) {
      return state;
    } else return [...state, action.payload];
  } else if (action.type === "DELETE_DISH") {
    return state.filter((dish) => dish !== action.payload);
  } else if (action.type === "INCREMENT_DISH") {
    return state.map((dish) =>
      dish === action.payload
        ? Object.assign(dish, { dish_count: dish.dish_count + 1 })
        : dish
    );
  } else if (action.type === "DECREMENT_DISH") {
    return state.map((dish) =>
      dish === action.payload
        ? Object.assign(
            dish,
            dish.dish_count > 1 ? { dish_count: dish.dish_count - 1 } : dish
          )
        : dish
    );
  } else if (action.type === "ADD_NOTE_TO_DISH") {
    console.log(action.payload);
    // must create a reducer for addnote
  }
  return state;
};
