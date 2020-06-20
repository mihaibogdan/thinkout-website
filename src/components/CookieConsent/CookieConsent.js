import React, { useState } from 'react';
import Cookies from 'js-cookie';

import { Paragraph } from 'assets/styles/typography';
import { SolidButton } from 'assets/styles/buttons';
import Link from 'components/Link';
import { Wrapper, Container } from './styled';

function CookieNotice() {
  const [fadeOut, setFadeOut] = useState(false);
  const [cookie, setCookie] = useState(Cookies.get('cookie-consent'));

  if (cookie) return null;

  return (
    <Wrapper className={fadeOut ? 'fade-out' : ''}>
      <Container>
        <Paragraph color="inherit">
          In order to give you a better service thinkout.io uses cookies. By continuing to browse
          the site you are agreeing to our <Link href="/terms-and-conditions">use of cookies</Link>.
        </Paragraph>
        <SolidButton
          onClick={() => {
            setFadeOut(true);
            setTimeout(() => {
              setCookie(Cookies.set('cookie-consent', true, { expires: 365 }));
            }, 300);
          }}
        >
          I AGREE
        </SolidButton>
      </Container>
    </Wrapper>
  );
}

export default CookieNotice;
