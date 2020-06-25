import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults.js';

describe('SearchResults', () => {
    
    test('renders correctly to match snapshot', () => {
        const { asFragment } = render(<SearchResults image="mockImage" />);    
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders the correct elements', () => {
        const { queryByTestId, queryByAltText } = render(<SearchResults image="mockImage" />);

        expect(queryByTestId('SearchResults')).toBeTruthy();
        expect(queryByTestId('image-card')).toBeTruthy();
        expect(queryByAltText("mockImage")).toBeTruthy();

    });
});