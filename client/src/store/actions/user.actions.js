import { loginUser, logoutUser, deleteAcount } from '../../services/userService';

export const login = (userData) => async (dispatch) => {
  const response = await loginUser(userData);
  if (response.token) {
    return dispatch ({
      type: "LOGIN_USER",
      payload: {...response, isLoggedIn: true},
    });
  }
  else {
    return dispatch ({
      type: "LOGIN_USER",
      payload: {...response, isLoggedIn: false},
    });
  }
};

export const logout = () => {
  logoutUser();
  return {
    type: "LOGOUT_USER",
    payload: {message:'Logout', token: '', isLoggedIn: false}
  }
}

export const deleteUser = () => {
  deleteAcount();
  return {
    type: "DELETE_USER",
    payload: {message:'Delete account', token: '', isLoggedIn: false}
  }
}