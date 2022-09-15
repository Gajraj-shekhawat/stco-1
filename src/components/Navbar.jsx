import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const n = useNavigate();
  return (
    <nav className={styles.container}>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { background: "#b10606" } : null;
        }}
        to={"/0"}
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { background: "#b10606" } : null;
        }}
        to={"/cart"}
      >
        Cart
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { background: "#b10606" } : null;
        }}
        to={"/about"}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
