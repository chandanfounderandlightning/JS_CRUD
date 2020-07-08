import React from 'react';
import {
  AwarenessSection,
  BlackBackgroundBanner,
  CommunitySection,
  Footer,
  GreenBackgroundBanner,
  MeetTestedSection,
  HowWorksSection,
  LandingHeader,
  LandingBanner,
  PartnerLogoSection,
} from './index';

const MainPage: React.FC = () => {
  return (
    <>
      <LandingHeader />
      <LandingBanner />
      <BlackBackgroundBanner />
      <HowWorksSection />
      <CommunitySection />
      <MeetTestedSection />
      <AwarenessSection />
      <PartnerLogoSection />
      <GreenBackgroundBanner />
      <Footer />
    </>
  );
};

export default MainPage;
