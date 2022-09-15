import React from 'react';
import { Suspense } from 'react';
import Loader from './Loader';

// ==============================|| LAZY LOADING ||============================== //

export default function Loadable(Component: any) {
  return (props: any) => (
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
  )
}
