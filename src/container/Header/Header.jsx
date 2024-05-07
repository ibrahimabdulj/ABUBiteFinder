import React from "react";

import "./Header.css";
import AboutUs from "../AboutUs/AboutUs";
import { HashLink as Link } from "react-router-hash-link";
const Header = () => (
  <div className="landing" id="home">
    <div className="app__home">
      <div className="app__home-text">
        <h1>Delicious Foods At </h1>
        <h1>AHMADU BELLO UNIVERSITY ZARIA</h1>
        <p>
          Have a sweetest taste and relief one time with full of satisfaction
          that gives the best joy ever,
        </p>
        <p>BUT that can only be archieved here with us so chill.</p>
      </div>
      <Link to="#menu">
        <button className="button">Explore Menu</button>
      </Link>
    </div>
    <AboutUs />
  </div>
);

export default Header;
