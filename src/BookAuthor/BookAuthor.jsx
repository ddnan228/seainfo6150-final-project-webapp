import React from 'react'
import css from "./BookAuthor.module.css";

const BookAuthor = props => {
  return (
    <div className = {css.authorStyle}>
      <h2 className={css.title}>Author</h2>
      <h2 className={css.authorName}>{props.author}</h2>
      <p className={css.aboutAuthor}>{props.aboutAuthor}</p>
    </div>
  );
};

export default BookAuthor;
