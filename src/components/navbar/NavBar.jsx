import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navSection">
      <li className="listStyle">
        <NavLink to="/" style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
    };
  }}>Home</NavLink>
      </li>
      <li className="listStyle">
        <NavLink to="/about" style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
    };
  }}>About</NavLink>
      </li>
    </div>
  );
};

export default NavBar;
