import React from "react";
import { render } from "@testing-library/react";
import BooksListItemImage from "./BooksListItemImage.jsx";

it("renders the BooksListItemImage component correctly", () => {
  const { container } = render(
    <BooksListItemImage
      url="https://images-na.ssl-images-amazon.com/images/I/9195S4FTnOL.jpg"
      title="Potty"
    />
  );
  expect(container).toMatchSnapshot();
});
