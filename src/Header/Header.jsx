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
          <Link className={css.linkStyle} to="/">
            <li className={css.navContent}>Home</li>
          </Link>
          <Link className={css.linkStyle} to="/allbooks">
            <li className={css.navContent}>All Books</li>
          </Link>
          <Link className={css.linkStyle} to="/aboutus">
            <li className={css.navContent}>About Us</li>
          </Link>
          <Link className={css.linkStyle} to="/contactus">
            <li className={css.navContent}>Contact Us</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
