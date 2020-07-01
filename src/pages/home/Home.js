import React, { useEffect, lazy, Suspense } from 'react';

import Navbar from 'components/Navbar';
import Hero from './components/Hero';

const Content = lazy(() => import('./components/Content'));
const OfferedBy = lazy(() => import('./components/OfferedBy'));

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback="">
        <Content />
        <OfferedBy />
      </Suspense>
    </>
  );
}

export default Home;
