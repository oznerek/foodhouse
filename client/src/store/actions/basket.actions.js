export const addDish = (dish) => {
    return {
      type: "ADD_NEW_DISH",
      payload: dish
    }
  }
  export const deleteDish = (dish) => {
    return {
      type: "DELETE_DISH",
      payload: dish
    }
  }
  export const incrementDish = (dish) => {
    return {
      type: "INCREMENT_DISH",
      payload: dish
    }
  }
  export const decrementDish = (dish) => {
    return {
      type: "DECREMENT_DISH",
      payload: dish
    }
  }
  
  export const addNoteToDish = (note, dish) => {
    return {
      type: "ADD_NOTE_TO_DISH",
      payload: {dish, note}
    }
  }