import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

describe('<Card />', () => {
  test('it should mount', () => {
    render(<Card data={{
      "main_image": "Bitcoin.png",
      "title": "Bitcoin (BTC)",
      "price": "$31,812.80",
      "change": "+10%",
      "type": "+",
      "tvl": "$60,000",
      "popular_prices": [{
        "image": "Solana.png",
      }, {
        "image": "Ethereum.png",
      }, {
        "image": "BinanceCoin.png",
      }]
    }} />);

    const card = screen.getByTestId('Card');

    expect(card).toBeInTheDocument();
  });
});