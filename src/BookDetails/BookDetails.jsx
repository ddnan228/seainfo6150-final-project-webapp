import React from 'react'
import css from "./BookDetails.module.css";

const BookDetails = props => {
  return (
    <div className = {css.details}>
      <h2>Book Details</h2>
      <p>Reading Level: {props.readingLevel}<br />
        Pages: {props.pages}<br />
        Item Weight: {props.weight}<br />
        Language: {props.language}<br />
        ISBN-10: {props.is10num}<br />
        ISBN-13: {props.is13num}<br />
        Dimensions: {props.dimensions}<br />
        Publisher: {props.publisher}</p>
      <a className={css.link} href={props.amazon} target="_blank">--Buy it online at Amazon--</a>
    </div>
  );
};

export default BookDetails;
