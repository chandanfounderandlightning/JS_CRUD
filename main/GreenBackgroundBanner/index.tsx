import React from 'react';
import { Link } from 'react-router-dom';
import {
  Background,
  SubHeading,
  ItuneIcon,
  PlayStoreIcon,
  AppCol,
} from './styled';

import Lang from '../../../../lang/en';

const GreenBackgroundBanner: React.FC = () => {
  return (
    <>
      <Background>
        <SubHeading>{Lang.trustContent}</SubHeading>
        <AppCol>
          <Link to="/">
            <ItuneIcon />
          </Link>
          <Link to="/">
            <PlayStoreIcon />
          </Link>
        </AppCol>
      </Background>
    </>
  );
};

export default GreenBackgroundBanner;
