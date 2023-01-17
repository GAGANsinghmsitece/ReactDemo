import React, { lazy, Suspense } from 'react';
interface popularImage {
  image: String
}

interface CardProps {
  data: {
    main_image: String
    title: String,
    price: String,
    change: String,
    type: String,
    tvl: String,
    popular_prices: popularImage[]
  }
};
const LazyCard = lazy(() => import('./Card'));

const Card = (props: CardProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCard {...props} />
  </Suspense>
);

export default Card;
