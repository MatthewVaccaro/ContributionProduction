import React, { useState } from "react";
import "../style/components.scss";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

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
            <NavLink to="/" exact activeStyle={{ color: "#4d56db" }}>
              Home
            </NavLink>
            <NavLink
              to="/all_challenges"
              exact
              activeStyle={{ color: "#4d56db" }}
            >
              All Challenges
            </NavLink>
            <NavLink to="/resources" exact activeStyle={{ color: "#4d56db" }}>
              Resources
            </NavLink>
          </nav>
          <img onClick={toggler} src={menu} className="menu" />
        </div>
      </div>
      <div className={toggle ? "menu_container" : "menu_container hidden_menu"}>
        <nav className={toggle ? "mobile" : "mobile_hidden"}>
          <NavLink onClick={toggler} to="/">
            Home
          </NavLink>
          <NavLink onClick={toggler} to="/all_challenges">
            All Challenges
          </NavLink>
          <NavLink onClick={toggler} to="/resources">
            Resources
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
