import React from 'react'
import Form from "../Form/Form";
import treefrog from "../images/treefrog.jpg";
import css from "./Home.module.css"

const Home = () => {
    return (
        <div className={css.homeAll}>
          <div className={css.titleDiv}>
            <h1>Next Book for Kids</h1>
          </div>
          <div>
          <ul className={css.categoriesList}>
            <a className={css.clickBlock} href="/foo">
              <li className={css.category1}>Baby to 2</li>
            </a>
            <a className={css.clickBlock} href="/foo">
              <li className={css.category2}>Ages 3 to 5</li>
            </a>
            <a className={css.clickBlock} href="/foo">
              <li className={css.category3}>Ages 6 to 8</li>
            </a>
            <a className={css.clickBlock} href="/foo">
              <li className={css.category4}>Ages 9 to 12</li>
            </a>
          </ul>
          </div>
        </div>
    )
}

export default Home
