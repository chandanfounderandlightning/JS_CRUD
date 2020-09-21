import React from 'react';
import {
  MainHeading,
  Section,
  Container,
  DownloadIcon,
  PersonIcon,
  Tile,
  NotesIcon,
  TileHeading,
  TileDescription,
  RoundBackground,
  Flex,
} from './styled';

import Lang from '../../../../lang/en';

const HowWorksSection: React.FC = () => {
  return (
    <>
      <Section>
        <Container>
          <MainHeading>{Lang.hiw}</MainHeading>
        </Container>
        <Container>
          <Flex>
            <Tile>
              <RoundBackground>
                <DownloadIcon />
              </RoundBackground>
              <TileHeading>{Lang.step1}</TileHeading>
              <TileDescription>{Lang.downloadApp}</TileDescription>
            </Tile>

            <Tile>
              <RoundBackground>
                <PersonIcon />
              </RoundBackground>
              <TileHeading>{Lang.step2}</TileHeading>
              <TileDescription>{Lang.verifyApp}</TileDescription>
            </Tile>

            <Tile>
              <RoundBackground>
                <NotesIcon />
              </RoundBackground>
              <TileHeading>{Lang.step3}</TileHeading>
              <TileDescription>{Lang.healthStatus}</TileDescription>
            </Tile>

            <Tile>
              <RoundBackground>
                <PersonIcon />
              </RoundBackground>
              <TileHeading>{Lang.step4}</TileHeading>
              <TileDescription>{Lang.displayStatus}</TileDescription>
            </Tile>
          </Flex>
        </Container>
      </Section>
    </>
  );
};

export default HowWorksSection;
