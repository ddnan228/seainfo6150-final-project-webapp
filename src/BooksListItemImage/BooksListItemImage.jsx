import React from "react";
import css from "./BooksListItemImage.module.css"

const BooksListItemImage = ({url, title}) => {
  return (
    <div className = {css.imageStyle}>
      <img src={url} alt={title} />
    </div>
  );
};

export default BooksListItemImage;
