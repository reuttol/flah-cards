import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/">Flash Cards</Link>
      <Link to="/cards">Manage Cards</Link>
    </nav>
  );
};

export default NavBar;
