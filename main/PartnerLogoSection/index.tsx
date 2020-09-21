import React from 'react';
import { PartnerSection, Container, Flex, LogoImg } from './styled';
import {
  HippaLogo,
  Jumio,
  HippaLogo2,
  Jumio2,
} from '../../../../assets/images';
const PartnerLogoSection: React.FC = () => {
  return (
    <PartnerSection>
      <Container>
        <Flex>
          <LogoImg src={HippaLogo} />
          <LogoImg src={Jumio} style={{ height: 35 }} />
          <LogoImg src={HippaLogo2} />
          <LogoImg src={Jumio2} style={{ height: 35 }} />
          <LogoImg src={HippaLogo2} />
        </Flex>
      </Container>
    </PartnerSection>
  );
};

export default PartnerLogoSection;
