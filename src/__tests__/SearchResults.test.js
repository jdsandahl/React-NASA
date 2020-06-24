import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults.js';

describe('SearchResults', () => {
    const { asFragment } = render(<SearchResults />);

    test('renders correctly', () => {
        expect(asFragment()).toMatchSnapshot();
    });
});