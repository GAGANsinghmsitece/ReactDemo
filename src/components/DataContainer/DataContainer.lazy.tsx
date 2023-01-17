import React, { lazy, Suspense } from 'react';
interface DataContainerProps {
  title: String,
  subtitle: String,
  change: String
}
const LazyDataContainer = lazy(() => import('./DataContainer'));

const DataContainer = (props: DataContainerProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDataContainer {...props} />
  </Suspense>
);

export default DataContainer;
