import React from "react";
import { render } from "@testing-library/react";
import BooksListItem from "./BooksListItem.jsx";

it("renders the BooksListItem component correctly", () => {
  const { container } = render(
    <BooksListItem
      url="https://images-na.ssl-images-amazon.com/images/I/9195S4FTnOL.jpg"
      title="Potty"
    />
  );
  expect(container).toMatchSnapshot();
});
