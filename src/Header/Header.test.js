import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header.jsx";
import { BrowserRouter } from 'react-router-dom'

it("renders the Header component correctly", () => {
  // For component with <Link> must nest within <Router>
  const { container } = render(
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
