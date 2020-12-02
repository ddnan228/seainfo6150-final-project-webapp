import React from "react";
import { render } from "@testing-library/react";
import Book from "./Book.jsx";

it("renders the Book component correctly", () => {
  const { container } = render(
    <Book
      categoryId="babyTo2"
      bookId="0001-Potty"
    />
  );
  expect(container).toMatchSnapshot();
});
