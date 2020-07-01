import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';

import Link from 'components/Link';
import Logo from 'assets/img/logo.svg';
import { Container } from 'assets/styles/layout';
import { SolidButton } from 'assets/styles/buttons';
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
          <Link href="https://thinkout.io/">
            <Logo width="162px" />
          </Link>

          <SolidButton
            className="try-now"
            onClick={() => {
              scroller.scrollTo('form', {
                duration: 250,
                smooth: true,
                offset: -120,
              });
            }}
          >
            DESCARCĂ
          </SolidButton>
        </Container>
      </Nav>
    </>
  );
}

export default Navbar;
