import React from 'react'
import logo from "../images/logo-header.png";
import css from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.headerAll}>
      <nav>
        <div>
          {/* logo with small size and route to the home page when click */}
          <Link to="/"><img className={css.headerLogo} src={logo} alt="logo-header" /></Link>
        </div>
        <ul className={css.navbarList}>
          {/* these links should show you how to connect up a link to a specific route */}
          <li className={css.navContent}>
            <Link className={css.linkStyle} to="/">Home</Link>
          </li>
          <li className={css.navContent}>
            <Link className={css.linkStyle} to="/allbooks">All Books</Link>
          </li>
          <li className={css.navContent}>
            <Link className={css.linkStyle} to="/aboutus">About Us</Link>
          </li>
          <li className={css.navContent}>
            <Link className={css.linkStyle} to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
