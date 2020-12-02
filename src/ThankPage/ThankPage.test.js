import React from "react";
import { render } from "@testing-library/react";
import ThankPage from "./ThankPage.jsx";

it("renders the AboutUs component correctly", () => {
  const { container } = render(<ThankPage />);
  expect(container).toMatchSnapshot();
});
