import React, { useState, useEffect } from 'react';

import Link from 'components/Link';
import Logo from 'assets/img/logo.svg';
import { Container } from 'assets/styles/layout';
import { Nav } from './style';

function Navbar() {
  const [scrollStarted, setScrollStarted] = useState(window.scrollY > 10);

  useEffect(() => {
    const checkScrollStarted = () => {
      setScrollStarted((prevScrollStarted) => {
        if (!prevScrollStarted) {
          if (window.scrollY > 10) {
            return true;
          }
        } else if (window.scrollY < 11) {
          return false;
        }

        return prevScrollStarted;
      });
    };

    window.addEventListener('scroll', checkScrollStarted);
    return () => window.removeEventListener('scroll', checkScrollStarted);
  }, []);

  return (
    <>
      <Nav className={`${scrollStarted && 'scrolledNavbar'}`}>
        <Container>
          <Link to="/">
            <Logo width="162px" />
          </Link>

          <Link
            className="try-now"
            target="_blank"
            href="https://wa.me/491702988400?text=Hi%20there!"
            button
          >
            TRY IT NOW
          </Link>
        </Container>
      </Nav>
    </>
  );
}

export default Navbar;
