import React from 'react';
import { Link } from 'react-router-dom';
import {
  BannerSection,
  BannerRow,
  BannerLeftCol,
  BannerRightCol,
  BannerHeading,
  BannerDescription,
  BannerActionCol,
  Container,
  PlayStoreIcon,
  ItuneIcon,
} from './styled';

import Lang from '../../../lang/en';

const LandingBanner: React.FC = () => {
  return (
    <>
      <BannerSection>
        <Container>
          <BannerRow>
            <BannerLeftCol>
              <BannerHeading>
                Your digital <br /> partner <br /> in the pandemic
              </BannerHeading>
              <BannerDescription>{Lang.bannerParagraph}</BannerDescription>
              <BannerActionCol>
                <Link to="/">
                  <ItuneIcon />
                </Link>
                <Link to="/">
                  <PlayStoreIcon />
                </Link>
              </BannerActionCol>
            </BannerLeftCol>
            <BannerRightCol />
          </BannerRow>
        </Container>
      </BannerSection>
    </>
  );
};

export default LandingBanner;
