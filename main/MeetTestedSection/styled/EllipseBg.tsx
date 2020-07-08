import styled from 'styled-components/macro';

export default styled.div`
  background: #f9f9f9;
  width: 444px;
  height: 444px;
  position: absolute;
  border-radius: 50%;
  top: 80px;
  left: -45px;
  z-index: -1;
  @media (max-width: 1300px) {
    width: 380px;
    height: 380px;
    top: 130px;
    left: 0;
  }
`;
