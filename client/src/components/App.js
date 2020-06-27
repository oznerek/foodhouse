import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Menu from "./menu/index";
import Footer from "./home/Footer";
import Home from "./home/Home";
import Contact from "./home/contact";
import Login from "./employees/login";
import Employess from "./employees/EmployeeMenuList";
import NotFound from "./home/notFound";
import Navigation from "./home/navigation";
import Author from "./author";
import Header from "./home/Header";
import { uniqueKey } from './func';
import Register from './employees/register';

const App = () => {
  function checkUserId() {
    let user_id = localStorage.getItem("user_id");

    if (user_id === null) {
      localStorage.setItem("user_id", uniqueKey());
    }
  }
  checkUserId();

  

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <Header />
        <Navigation />
        <main className="containers">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/employee" component={Employess} />
            <Route path="/michaloznerek" component={Author} />

            <Route path="/home" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/contact" component={Contact} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
