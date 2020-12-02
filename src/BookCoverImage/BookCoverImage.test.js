import React from "react";
import { render } from "@testing-library/react";
import BookCoverImage from "./BookCoverImage.jsx";

it("renders the BookCoverImage component correctly", () => {
  const url="https://images-na.ssl-images-amazon.com/images/I/9195S4FTnOL.jpg";

  const { container } = render(<BookCoverImage url={url} />);
  expect(container).toMatchSnapshot();
});
