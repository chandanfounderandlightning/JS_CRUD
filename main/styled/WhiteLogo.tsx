import styled from 'styled-components';
import { WhiteLogo } from '../../../../assets/images';

export default styled(WhiteLogo)`
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;
