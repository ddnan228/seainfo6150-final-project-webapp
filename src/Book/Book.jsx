import React, {useEffect, useState} from 'react'
import { isEmpty } from "lodash";
import css from "./Book.module.css";
import BookCoverImage from "../BookCoverImage/BookCoverImage.jsx";
import BookIntroduction from "../BookIntroduction/BookIntroduction.jsx"
import BookDetails from "../BookDetails/BookDetails.jsx"
import BookAuthor from "../BookAuthor/BookAuthor.jsx"
import Form from "../Form/Form.jsx"

const Book = (props) => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const result = await fetch("https://demo5878926.mockable.io/books");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let displayContent;
  if(!isEmpty(fetchedData)) {
    var book = fetchedData[props.categoryId][props.bookId];
    displayContent = (
      <div className={css.wholeDiv}>
        <div className={css.titleDiv}>
          <h1>{book.title}</h1>
        </div>
        <div className={css.componentsList}>
          <BookCoverImage url={book.image._url} text={book.title} />
          <BookIntroduction intro={book.introduction} />
          <BookAuthor author={book.author} aboutAuthor={book.aboutAuthor} />
          <BookDetails
            pages={book.pages}
            weight={book.itemWeight}
            is10num={book["ISBN-10"]}
            is13num={book["ISBN-13"]}
            dimensions={book.Dimensions}
            publisher={book.Publisher}
            readingLevel={book.readingLevel}
            language={book.language}
            amazon={book.amazonUrl}
          />
        </div>
        <div className={css.formDiv}>
          <h2 className={css.formTitle}>Have read this before? Please leave us a review!</h2>
          <Form />
        </div>
      </div>
    );
  } else {
    displayContent = <div><center>Data is fetching</center></div>;
  }

  return (
    displayContent
  )
}

export default Book
