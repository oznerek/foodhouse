import React from "react";
import $ from 'jquery'
import Employee from './EmployeeMenuList'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      department: "Kitchen",
      errorLabelText : '',
      status: true

    };
  }

  login = this.login.bind(this);
  login(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  checkdata = this.checkdata.bind(this);
  checkdata(event) {
    event.preventDefault();
    let login = this.state.login;
    let password = this.state.password;
    let database = this.state.department;
    
    if (login && password) {
      let userData = {
        login: login,
        password: password,
        database: database
      };
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data.length > 0) {

            $('.errorLogin').css('display','none');
            window.location.href='/employee';         
               return ( <Employee loginData={this.state.login} />);


          } else {
            this.setState({errorLabelText: 'Incorrect Login or Password'});
            $('.errorLogin').css('display','block')
          }
        })
        .catch(err => {
          console.log("error:", err);
        });
    } else {
      this.setState({errorLabelText: 'Please complete all fields'});
      $('.errorLogin').css('display','block');
    }
  }


  render() {
    return (
      <div className="login">
        <form metod="post" className="login__form" onSubmit={this.login}>
          <label className="errorLogin"> {this.state.errorLabelText}</label>

          <span className="info">
            <label htmlFor="login">Login</label>
            <i className="far fa-question-circle tooltips">
              <div className="tooltips__text">
                <div> Use this data for login:</div>
                <div> For Kitchen: <div>login: Kitchen1, password: Kitchen1234'</div></div>
                <div> For Staff:<div>login: Staff1, password: Staff1234</div></div>
                <div> For Admin:<div>login: Admin1, password: Admin1234</div> </div>
              </div>
            </i>
          </span>
          <input
            name="login"
            type="text"
            className="input__login"
            value={this.state.login}
            onChange={this.login}
          />
          <label htmlFor="login">Password</label>
          <input
            name="password"
            type="password"
            className="input__password"
            value={this.state.password}
            onChange={this.login}
          />
          <label htmlFor="login">Select department</label>

          <select name="department" id="" onChange={this.login}>
            <option value="kitchen">Kitchen</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
          </select>

          <button className="login__btn" onClick={this.checkdata}>
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
