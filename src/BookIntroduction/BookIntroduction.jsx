import React from 'react'
import css from "./BookIntroduction.module.css";

const BookIntroduction = props => {
  return (
    <div className = {css.introductionStyle}>
      <h2>Introduction</h2>
      {props.intro}
    </div>
  );
};

export default BookIntroduction;
