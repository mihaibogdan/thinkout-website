import React from 'react';

import { Heading4, Paragraph } from 'assets/styles/typography';
import StartupThumb from 'assets/img/hero/image.png';
import { ContentSection, ImageSection } from 'assets/styles/layout';
import { Wrapper, OfferedBySection } from './styles';

function OfferedBy() {
  return (
    <Wrapper>
      <OfferedBySection data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
        <ContentSection>
          <Heading4>Cine îți oferă acest ebook?</Heading4>
          <Paragraph margin="20px 0px 0px 0px">
            ThinkOut este o platformă de analiză și planificare de cash flow special creată pentru
            antreprenorii care își doresc să țină sub control încasările și plățile, să planifice cu
            grijă viitorul propriei afaceri și să ia decizii informate de business.
          </Paragraph>
        </ContentSection>

        <ImageSection right>
          <img height="550px" src={StartupThumb} alt="" />
        </ImageSection>
      </OfferedBySection>
    </Wrapper>
  );
}

export default OfferedBy;
