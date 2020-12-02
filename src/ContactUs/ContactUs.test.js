import React from "react";
import { render } from "@testing-library/react";
import ContactUs from "./ContactUs.jsx";

it("renders the ContactUs component correctly", () => {
  const { container } = render(<ContactUs />);
  expect(container).toMatchSnapshot();
});
