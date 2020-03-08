import React, { useState } from "react";
import "../style/components.scss";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import supportButton from "../assets/supportButton.svg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    console.log(toggle);
    setToggle(!toggle);
  };

  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </header>
      <div className="nav_master">
        <div className="nav_container">
          <div className="logo_container">
            <img classname="logo" src={logo} alt="logo" />
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/all_challenges">All Challenges</Link>
            <Link to="/resources">Resources</Link>
          </nav>
          <img onClick={toggler} src={menu} className="menu" />
        </div>
      </div>
      <div className={toggle ? "menu_container" : "menu_container hidden_menu"}>
        <nav className={toggle ? "mobile" : "mobile_hidden"}>
          <Link onClick={toggler} to="/">
            Home
          </Link>
          <Link onClick={toggler} to="/all_challenges">
            All Challenges
          </Link>
          <Link onClick={toggler} to="/resources">
            Resources
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
