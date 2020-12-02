import React from "react";
import { render } from "@testing-library/react";
import BookDetails from "./BookDetails.jsx";

it("renders the BookCoverImage component correctly", () => {
  const { container } = render(
    <BookDetails
      pages="28"
      weight="10.9 ounces"
      is10num="0763644765"
      is13num="978-0763644765"
      dimensions="7.06 x 0.58 x 7.06 inches"
      publisher="Candlewick; Illustrated edition (September 14, 2010)"
      readingLevel="Baby - 2 years"
      language="English"
      amazon="https://www.amazon.com/gp/product/B007HOOAH6/"
    />
  );
  expect(container).toMatchSnapshot();
});
