import React from "react";
import { render } from "@testing-library/react";
import BookAuthor from "./BookAuthor.jsx";

it("renders the BookAuthor component correctly", () => {
  const author="Leslie Patricelli";
  const aboutAuthor="Leslie Patricelli is the author-illustrator of a series of best-selling board books about everybody’s favorite bald baby. She is also the creator of the picture books Faster! Faster!, Bigger! Bigger!, and the Boston Globe–Horn Book Honor Book Higher! Higher!, among other books for children. She lives in Idaho.";

  const { container } = render(<BookAuthor author={author} aboutAuthor={aboutAuthor} />);
  expect(container).toMatchSnapshot();
});
