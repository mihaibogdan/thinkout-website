import React, { useEffect, lazy, Suspense } from 'react';

import Navbar from 'components/Navbar';
import Hero from './components/Hero';

const Content = lazy(() => import('./components/Content'));

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
      </Suspense>
    </>
  );
}

export default Home;
