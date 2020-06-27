import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__author">
        <p> Copyright by Michał Oznerek <sup>&copy;</sup> - 2019 </p>
      </div>
      <div className="footer__author">
        <a href="https://oznerek.github.io/portfolio/" className="footer__link"> Contact </a>
      </div>
      <div className="footer__powered">
        Powered  by
        <a href="http://food2fork.com" style={{marginLeft: 10}} >
          Food2Fork.com
        </a>
      </div>
      <div className="footer__powered">
        <NavLink exact to="/login">
          Login
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
