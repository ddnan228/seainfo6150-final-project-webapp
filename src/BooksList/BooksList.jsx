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
        {props.books.map((book,index) => (
          <Link key={index} className={css.clickBlock} to={"/book/"+book.categoryId+"/"+book.bookId}>
            <li key={index}>
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
