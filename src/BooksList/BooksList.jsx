import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import BooksListItem from "../BooksListItem/BooksListItem.jsx";
import css from "./BooksList.module.css";

const BooksList = props => {
  return (
    <div className={css.wholeDiv}>
      <div className={css.titleDiv}><h1>{props.pageTitle} - Next Book for Kids</h1></div>
      <ul className={css.booksList}>
        {props.books.map(book => (
          <Link className={css.clickBlock} to={"/bar/"+book.categoryId+"/"+book.bookId}>
            <li key={book.bookId}>
              <BooksListItem url={book.image._url} title={book.title} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired
};
export default BooksList;
