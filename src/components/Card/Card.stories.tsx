/* eslint-disable */
import Card from './Card';

export default {
  title: "Card",
};

export const Default = () => <Card data={{
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
}} />;

Default.story = {
  name: 'default',
};
