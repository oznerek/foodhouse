import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__author">
      <p>
        Copyright by Michał Oznerek <sup>&copy;</sup> - 2019
      </p>
      <a href='https://oznerek.github.io/portfolio/' className="footer__link">
        {" "}
        Contact{" "}
      </a>
      </div>
      <div className='footer__powered'>
        Powered by
        <a href="http://food2fork.com" className="footer__link">
          {" "}
          Food2Fork.com
        </a>
      </div>
      <div className='footer__powered'><a href="/login">Login</a></div>
    </footer>
  );
};

export default Footer;
