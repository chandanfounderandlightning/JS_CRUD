import React from 'react';
import {
  ColumnRightFull,
  ScanCodeCase,
  ColumnRight,
  Heading,
  Flex,
  Description,
  Container,
  Row,
} from './styled';
import { CaseGroup } from '../../../../assets/images';
import Lang from '../../../../lang/en';

const HealthProfileSection: React.FC = () => {
  return (
    <Container>
      <Row>
        <Flex>
          <ColumnRight>
            <Heading>{Lang.healthProfileHeading}</Heading>
            <Description>{Lang.healthProfileDescription}</Description>
          </ColumnRight>
          <ColumnRightFull>
            <ScanCodeCase src={CaseGroup} />
          </ColumnRightFull>
        </Flex>
      </Row>
    </Container>
  );
};

export default HealthProfileSection;
