import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataContainer from './DataContainer';

describe('<DataContainer />', () => {
  test('it should mount', () => {
    render(<DataContainer change="+" title="label 1" subtitle="label 2" />);

    const dataContainer = screen.getByTestId('DataContainer');

    expect(dataContainer).toBeInTheDocument();
  });
});