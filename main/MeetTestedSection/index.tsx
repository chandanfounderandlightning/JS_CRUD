import React from 'react';
import { Section, Container, MainHeading } from './styled';
import ContentRow from './ContentRow';
import ContentRowBottom from './ContentRowBottom';
import HealthProfileSection from './HealthProfileSection';
import Lang from '../../../../lang/en';

const MeetTestedMe: React.FC = () => {
  return (
    <>
      <Section>
        <Container>
          <MainHeading>{Lang.MeetTestedHeading}</MainHeading>
        </Container>
        <ContentRow />
        <HealthProfileSection />
        <ContentRowBottom />
      </Section>
    </>
  );
};

export default MeetTestedMe;
