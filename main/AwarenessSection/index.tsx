import React from 'react';
import {
  LeftHeading,
  Container,
  SourceText,
  Column,
  ColumnRight,
  Flex,
  RightHeading,
  RightDescription,
  Section,
} from './styled';

import Lang from '../../../../lang/en';

const AwarenessSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <Flex>
          <Column>
            <LeftHeading>
              {Lang.dataShowHeading1} <br /> {Lang.dataShowHeading2}
            </LeftHeading>
            <SourceText>{Lang.sourceDate}</SourceText>
          </Column>
          <ColumnRight>
            <RightHeading>{Lang.lifeHeading}</RightHeading>
            <RightDescription>{Lang.lifeDescription}</RightDescription>
          </ColumnRight>
        </Flex>
      </Container>
    </Section>
  );
};

export default AwarenessSection;
