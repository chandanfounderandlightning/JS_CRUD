import React from 'react';
import { Section, Container, MainHeading } from './styled';
import CommunitySlider from './CommunitySlider';

const CommunitySection: React.FC = () => {
  return (
    <Section>
      <Container>
        <MainHeading>What our community says</MainHeading>
        <CommunitySlider />
      </Container>
    </Section>
  );
};

export default CommunitySection;
