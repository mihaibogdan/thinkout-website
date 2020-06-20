import { hot } from 'react-hot-loader/root';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import theme from './config/theme.config';
import GlobalStyle from './assets/styles/globalStyles';

const CookieConsent = lazy(() =>
  import(/* webpackChunkName: "CookieConsent" */ 'components/CookieConsent')
);
const Home = lazy(() => import(/* webpackChunkName: "Home" */ './pages/home'));

AOS.init({
  once: true,
  offset: 0,
});

document.addEventListener('aos:in', ({ detail }) => {
  const duration = detail.getAttribute('data-aos-duration') || 0;

  setTimeout(() => {
    detail.classList.add('aos-finished');
  }, duration);
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Suspense fallback="">
          <CookieConsent />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default hot(App);
