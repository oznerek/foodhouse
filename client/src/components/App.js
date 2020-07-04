import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Menu from "./menu/index";
import Footer from "./home/footer";
import Home from "./home/home";
import Contact from "./home/contact";
import Login from "./usersPage/login";
import Employess from "./usersPage/EmployeeMenuList";
import NotFound from "./home/notFound";
import Navigation from "./home/navigation";
import Header from "./home/header";
import Register from './usersPage/register';
import { PrivateRoute } from './common/PrivateRoute';

class App extends Component {
  state ={};

  render(){
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <Header />
          <Navigation />
          <main className="containers">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/user" component={Employess} />
  
              <Route path="/menu" component={Menu} />
              <Route path="/contact" component={Contact} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
};

export default App;
