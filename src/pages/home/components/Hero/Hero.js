import React from 'react';

import { Heading1, Paragraph } from 'assets/styles/typography';
import Link from 'components/Link';
import StartupThumb from 'assets/img/hero/image.png';
import { ContentSection, ImageSection } from 'assets/styles/layout';

import { HeroSection, CTARow } from './style';

function Hero() {
  return (
    <>
      <HeroSection>
        <ContentSection>
          <Heading1>Understand how money moves your business</Heading1>
          <Paragraph margin="20px 0px 0px 0px" fontSize="18px">
            ThinkOut is the online platform that delivers financial analysis and forecasting for
            SMEs in just a few minutes, based on the transaction history from their bank accounts.
          </Paragraph>
          <CTARow>
            <Link
              button
              target="_blank"
              href="https://wa.me/491702988400?text=Hi%20there!"
              color="white"
            >
              SIGN UP
            </Link>
          </CTARow>
        </ContentSection>

        <ImageSection right>
          <img src={StartupThumb} alt="" />
        </ImageSection>
      </HeroSection>
    </>
  );
}

export default Hero;
