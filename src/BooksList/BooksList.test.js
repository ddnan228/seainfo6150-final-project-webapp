import React from "react";
import { render } from "@testing-library/react";
import BooksList from "./BooksList.jsx";
import { BrowserRouter } from 'react-router-dom'

it("renders the BooksList component correctly", () => {
  const test = [
    {
      categoryId: "babyTo2",
      bookId: "0001-Potty",
      title: "Potty",
      image: {
        _url: "https://images-na.ssl-images-amazon.com/images/I/9195S4FTnOL.jpg"
      },
    },
    {
      categoryId: "babyTo2",
      bookId: "0002-TouchThinkLearn-Fly",
      title: "TouchThinkLearn: Fly!",
      image: {
        _url: "https://images-na.ssl-images-amazon.com/images/I/41m71V1vZjL.jpg"
      },
    }
  ]

  // For component with <Link> must nest within <Router>
  const { container } = render(
    <BrowserRouter>
      <BooksList
        books={Object.values(test)}
        pageTitle="Books for baby to 2 years old"
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
