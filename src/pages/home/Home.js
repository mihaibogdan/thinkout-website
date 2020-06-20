import React, { useEffect, lazy, Suspense } from 'react';

import Navbar from 'components/Navbar';
import Hero from './components/Hero';

const Accounts = lazy(() => import('./components/Accounts'));
const Budgets = lazy(() => import('./components/Budgets'));
const Pricing = lazy(() => import('./components/Pricing'));
const Faq = lazy(() => import('./components/Faq'));

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback="">
        <Accounts />
        <Budgets />
        <Pricing />
        <Faq />
      </Suspense>
    </>
  );
}

export default Home;
