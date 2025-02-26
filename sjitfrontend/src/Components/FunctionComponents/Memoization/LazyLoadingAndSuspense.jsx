import { Suspense, lazy } from "react";
const LazyComp = lazy(() => import('../SignUp.jsx'));
const LazyLoadingAndSuspense = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComp />
        <h1>Vanakkam da</h1>
      </Suspense>
    </div>
  );
};
export default LazyLoadingAndSuspense;
