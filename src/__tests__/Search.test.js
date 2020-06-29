import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import Search from "../components/Search.js";

describe("Search", () => {
  test("renders correctly against snapshot", () => {
    const handleSearchMock = jest.fn();
    const { asFragment } = render(<Search setSearchResults={handleSearchMock} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct elements', () => {
    const handleSearchMock = jest.fn();
    const { queryByTestId } = render(<Search setSearchResults={handleSearchMock} />);
    
    expect(queryByTestId("search-form")).toBeTruthy();
    expect(queryByTestId("search-input")).toBeTruthy();
    expect(queryByTestId("search-btn")).toBeTruthy();
  });  

  describe('with input values entered', () => {
    it('updates on change', () => {
      const handleSearchMock = jest.fn();
      const { queryByPlaceholderText } = render(<Search setSearchResults={handleSearchMock} />);

      const searchInput = queryByPlaceholderText('Search');
      
      fireEvent.change(searchInput, {target: {value: "test"}});

      expect(searchInput.value).toBe("test");
    });
  });

  describe('Search Button', () => {
    describe('with an empty query', () =>{
      it("does not trigger handleSubmit function", () => {
        const handleSearchMock = jest.fn();
        const { queryByTestId } = render(<Search setSearchResults={handleSearchMock} />);
        
        fireEvent.click(queryByTestId('search-btn'));
        
        expect(handleSearchMock).not.toHaveBeenCalled();
      });
    });

    describe('with data inside query', () =>{
      it("triggers handleSubmit function", async () => {
        const handleSearchMock = jest.fn();

        const { queryByTestId, queryByPlaceholderText } = render(<Search setSearchResults={handleSearchMock} />);
        
        const searchInput = queryByPlaceholderText('Search');
        
        fireEvent.change(searchInput, {target: {value: "moon"}});

        fireEvent.click(queryByTestId('search-btn'));
        
        await wait(() => expect(handleSearchMock).toHaveBeenCalledTimes(1));
      });
    });
  });

});
