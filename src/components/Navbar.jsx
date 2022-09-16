import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </nav>
  );
};

export default Navbar;
