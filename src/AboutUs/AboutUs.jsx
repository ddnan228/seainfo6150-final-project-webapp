import React from 'react';
import css from "./AboutUs.module.css";
import logoSmall from "../images/AboutUsLogo/Logo-small.png";
import logoMedium from "../images/AboutUsLogo/Logo-medium.png";
import logoLarge from "../images/AboutUsLogo/Logo-large.png";

const AboutUs = () => {
    return (
        <div className={css.allDiv}>
          <div className={css.titleDiv}>
            <h2>About Us - Next Book for Kids</h2>
          </div>
          <div className={css.textDiv}>
            <p>Our website is focus on collecting children's books information and categoried by ages. Welcome to our website to find next book for your kids! You can also leave reviews for those books you have read before.</p>
          </div>
          <picture className={css.imageDiv}>
            <source media="(max-width: 650px)" srcSet={logoSmall} />
            <source media="(max-width: 900px)" srcSet={logoMedium} />
            <source media="(min-width: 1100px)" srcSet={logoLarge} />
            <img src={logoMedium} alt="responsive logo" />
          </picture>
          <div className={css.textDiv}>
            <p>This website is also a web design project of course INFO6150 Web Design and User Experience Engineering at Northeastern University. This website is designed and implemented with HTML, JaveScript, React and CSS.</p>
          </div>
        </div>
    )
}

export default AboutUs
