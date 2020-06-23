import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search.js";

describe("Search", () => {
  const { asFragment } = render(<Search />);

  test("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
