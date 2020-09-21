import React from 'react';
import {
  ColumnLeft,
  ScanCodeCase,
  ColumnRight,
  Heading,
  Flex,
  Description,
  Container,
  EllipseBg,
} from './styled';
import { ProfileCase } from '../../../../assets/images';
import Lang from '../../../../lang/en';

const ContentRowBottom: React.FC = () => {
  return (
    <Container>
      <Flex>
        <ColumnLeft>
          <ScanCodeCase src={ProfileCase} />
          <EllipseBg />
        </ColumnLeft>
        <ColumnRight>
          <Heading>{Lang.expHeading}</Heading>
          <Description>{Lang.expDescription}</Description>
        </ColumnRight>
      </Flex>
    </Container>
  );
};

export default ContentRowBottom;
