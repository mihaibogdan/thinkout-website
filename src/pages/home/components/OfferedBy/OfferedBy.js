import React from 'react';

import { Heading1, Paragraph } from 'assets/styles/typography';
import Link from 'components/Link';
import StartupThumb from 'assets/img/hero/image.png';
import { ContentSection, ImageSection } from 'assets/styles/layout';
import { Wrapper, OfferedBySection, CTARow } from './styles';

function OfferedBy() {
  return (
    <Wrapper>
      <OfferedBySection data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
        <ContentSection>
          <Heading1>Cine îți oferă acest ebook?</Heading1>
          <Paragraph margin="20px 0px 0px 0px">
            ThinkOut este o platformă de analiză și planificare de cash flow special creată pentru
            antreprenorii care își doresc să țină sub control încasările și plățile, să planifice cu
            grijă viitorul propriei afaceri și să ia decizii informate de business.
          </Paragraph>
          <CTARow>
            <Link button target="_blank" href="https://app.thinkout.io/register-user" color="white">
              ÎNCEARCĂ
            </Link>
          </CTARow>
        </ContentSection>

        <ImageSection right>
          <img src={StartupThumb} alt="" />
        </ImageSection>
      </OfferedBySection>
    </Wrapper>
  );
}

export default OfferedBy;
