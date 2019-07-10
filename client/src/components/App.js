import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./menu/index";
import Footer from "./home/Footer";
import Home from "./home/Home";
import Contact from "./home/Contact";
import Login from "./employees/Login";
import Employess from "./employees/EmployeeMenuList";
import Author from './author'

const App = () => {
  function checkUserId () {
    let user_id = localStorage.getItem('user_id');

    if (user_id === null) {
      uniqueKey();
    }
  }
  checkUserId();

  function uniqueKey () {
    let table= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','q','p','r','s','t','u','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','Q','P','R','S','T','U','W','X','Y','Z',
            '1','2','3','4','5','6','7','8','9','0'];
    let uniqKey = [];
    for (let i=0; i<20; i++) {
      let x = parseInt(Math.random()*60);
      uniqKey.push(table[x]);
    }
    localStorage.setItem('user_id', uniqKey.join(''))
  }
  
  return (
    <span>
      <BrowserRouter>
      <span>
          <Route path="/login" exact component={Login} />
          <Route path="/Employee" exact component={Employess} />
          <Route path='/michaloznerek' exact component={Author} />
          <main className="containers">
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/contact" exact component={Contact} />
          <Footer />
        </main>
      </span>
       
      </BrowserRouter>
    </span>
  );
};

export default App;
