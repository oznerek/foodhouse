const initialState = {
    token: "",
    isLoggedIn: false,
  };

 export const users = (state = initialState, action) => {
    if (action.type === "LOGIN_USER") {
      return action.payload;
    } else if (action.type === "LOGOUT_USER") {
      return action.payload;
    } else if (action.type === "DELETE_USER") {
      return action.payload;
    }
    return state;
  };