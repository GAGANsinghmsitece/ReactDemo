import React, { lazy, Suspense } from 'react';
interface LabelProps {
  title: String
}
const LazyLabel = lazy(() => import('./Label'));

const Label = (props: LabelProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLabel {...props} />
  </Suspense>
);

export default Label;
