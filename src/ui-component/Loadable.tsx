import React, { Suspense, ComponentType, ReactElement } from 'react';

// project imports
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = <P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> => (props: P): ReactElement => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
