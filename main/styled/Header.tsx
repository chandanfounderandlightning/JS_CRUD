import styled from 'styled-components';

export default styled.header`
  position: absolute;
  width: 100%;
  z-index: 9;
  top: 18px;
  @media (max-width: 991px) {
    padding: 3px 0;
    position: static;
    background: #232734;
  }
`;
