import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App.js";

describe("App", () => {
  
  test("renders correctly against snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('with no search results in state', () =>{  
    it('renders the correct elements', () => {
      const {queryByTestId} = render(<App />);

      expect(queryByTestId("nasa-logo")).toBeTruthy();
      expect(queryByTestId("Search")).toBeTruthy();
      expect(queryByTestId("SearchResults")).toBeFalsy();
    });
  });

});
