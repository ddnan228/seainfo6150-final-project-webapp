import React from 'react'
import logo from "../images/logo-header.png";
import css from "./Header.module.css"

const Header = () => {
  return (
    <header className={css.headerAll}>
      <nav>
        <div>
          {/* logo with small size and route to the home page when click */}
          <a href="/"><img className={css.headerLogo} src={logo} alt="logo-header" /></a>
        </div>
        <ul className={css.navbarList}>
          {/* these links should show you how to connect up a link to a specific route */}
          <li className={css.navContent}>
            <a className={css.linkStyle} href="/">Home</a>
          </li>
          <li className={css.navContent}>
            <a className={css.linkStyle} href="/foo">All Books</a>
          </li>
          <li className={css.navContent}>
            <a className={css.linkStyle} href="/foo">By Age</a>
          </li>
          <li className={css.navContent}>
            <a className={css.linkStyle} href="/aboutus">About Us</a>
          </li>
          <li className={css.navContent}>
            <a className={css.linkStyle} href="/contactus">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
