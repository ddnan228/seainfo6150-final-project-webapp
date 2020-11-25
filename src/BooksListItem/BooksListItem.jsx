import React from "react";
import css from "./BooksListItem.module.css";
import BooksListItemImage from "../BooksListItemImage/BooksListItemImage.jsx";


const BooksListItem = (props) => {
   return (
     <div className={css.listItem}>
      <BooksListItemImage url={props.url} title={props.title} />
      <p className={css.titleStyle}>{props.title}</p>
     </div>
   );
}

export default BooksListItem;
