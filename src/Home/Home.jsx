import React from 'react'
import css from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className={css.homeAll}>
          <div className={css.titleDiv}>
            <h1>Home Page - Next Book for Kids</h1>
          </div>
          <div>
          <ul className={css.categoriesList}>
            <Link className={css.clickBlock} to="/babyto2">
              <li className={css.category1}>Baby to 2</li>
            </Link>
            <Link className={css.clickBlock} to="/3to5">
              <li className={css.category2}>Ages 3 to 5</li>
            </Link>
            <Link className={css.clickBlock} to="/6to8">
              <li className={css.category3}>Ages 6 to 8</li>
            </Link>
            <Link className={css.clickBlock} to="/9to12">
              <li className={css.category4}>Ages 9 to 12</li>
            </Link>
          </ul>
          </div>
        </div>
    )
}

export default Home
