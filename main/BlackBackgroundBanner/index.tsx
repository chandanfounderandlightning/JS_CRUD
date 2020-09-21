import React from 'react';
import Background from './styled/Background';
import SubHeading from './styled/SubHeading';

import Lang from '../../../../lang/en';

const BlackBackground: React.FC = () => {
  return (
    <>
      <Background>
        <SubHeading>{Lang.missonContent}</SubHeading>
      </Background>
    </>
  );
};

export default BlackBackground;
