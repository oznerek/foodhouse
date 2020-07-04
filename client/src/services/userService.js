import jwtDecode from 'jwt-decode';
const jwt = require("jsonwebtoken");

export function loginUser(data) {
  let token = '';
  return fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((user) => {
      if (user.length > 0) {
        token = jwt.sign(user[0], "jwt_secret_password");
        localStorage.setItem("token", token);
        setTimeout(() => {
            window.location = "/user";
          }, 2000);
        return { token, message: "Login correctly" };
      }else {
        localStorage.setItem("token", token);
        return {token, message: "Wrong login or password" };
      }
    })
    .catch((err) => {
      console.log("caught it!", err);
      return { message: "Something went wrong, please try again" };
    });
}

export function logoutUser() {
  localStorage.removeItem("token");
}

export function chekUserExist(data) {
  return fetch("/checkUserExist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: data.email }),
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((users) => {
      if (users.length === 0) {
        return registerAccount(data);
      } else {
        return { message:"This email is already registered"};
      }
    });
}

export function registerAccount(data) {
  return fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      setTimeout(() => {
        window.location = "/";
      }, 2000);
      const respons = response.json();
      return {message:"Your account has create", respons};
    })
    .catch((err) => {
      console.log("Error log", err);
    });
}

export function deleteAcount() {
  console.log('usuwam')
  const user = getCurrentUser();
  return fetch(`/delete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: user.user_id }),
  })
  .then(response => response.json())
}

export function getCurrentUser() {
  try {
      const jwt = localStorage.getItem('token');
      return jwtDecode(jwt);
    } catch (er) {
        return null;
    }
}
