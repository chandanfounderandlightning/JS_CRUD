import React from 'react';
import {
  ColumnLeft,
  ScanCodeCase,
  ColumnRight,
  Heading,
  Flex,
  Description,
  Container,
} from './styled';
import { CodeScanCase } from '../../../../assets/images';
import Lang from '../../../../lang/en';

const ContentRow: React.FC = () => {
  return (
    <Container>
      <Flex>
        <ColumnLeft>
          <ScanCodeCase src={CodeScanCase} />
        </ColumnLeft>
        <ColumnRight>
          <Heading>
            {Lang.scanCodeSectionHeading} <br />
            {Lang.scanCodeSectionHeading2} <br />
            {Lang.scanCodeSectionHeading3}
          </Heading>
          <Description>
            {Lang.scanCodeDescription} <br /> {Lang.scanCodeDescription2}
            <br /> {Lang.scanCodeDescription3} <br />
            {Lang.scanCodeDescription4}
          </Description>
        </ColumnRight>
      </Flex>
    </Container>
  );
};

export default ContentRow;
