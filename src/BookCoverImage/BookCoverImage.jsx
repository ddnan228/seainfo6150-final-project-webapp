import React from 'react'
import css from "./BookCoverImage.module.css";

const BookCoverImage = ({url, text}) => {
  return (
    <div className = {css.bookCoverStyle}>
      <img src={url} alt={text} />
    </div>
  );
};

export default BookCoverImage;
