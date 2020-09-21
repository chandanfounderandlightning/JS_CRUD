import styled from 'styled-components';

export default styled.div`
  width: 33.33%;
  padding: 57px 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    box-shadow: 0px 4px 30px rgba(0, 7, 14, 0.1);
    border-radius: 1px;
    transform: translateY(-3px);
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
