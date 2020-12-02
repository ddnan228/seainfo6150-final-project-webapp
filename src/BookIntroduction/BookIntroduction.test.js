import React from "react";
import { render } from "@testing-library/react";
import BookIntroduction from "./BookIntroduction.jsx";

it("renders the BookIntroduction component correctly", () => {
  const introduction="There comes a point in a toddler’s life when going in one’s diaper is only one possible option, and the question must be raised: \"Should I go in my potty?\". With pitch-perfect humor and pacing, Leslie Patricelli follows the inner dialogue and hilarious actions of everyone’s favorite Baby, winding up with an over-the-top look of surprise and delight that will have both parents and offspring laughing out loud--\"I did it!\"";

  const { container } = render(<BookIntroduction intro={introduction} />);
  expect(container).toMatchSnapshot();
});
