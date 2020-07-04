const initialState = {
  selectedDishType: 'pizza',
  dishTypeList: [],
  dishList: [],

}

export const dishes = (state= initialState, action) => {
  if (action.type === "MENU_ITEM_SELECTED") {
    return {...state, selectedDishType : action.payload };
  } else if (action.type === "MENU_FETCHED") {
    return {...state, dishList: action.payload};
  } else if (action.type === "DISH_DETAILS_FETCHED") {
      return action.payload;
    }
  return state;
}