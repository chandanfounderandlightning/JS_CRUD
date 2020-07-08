import styled from 'styled-components';
import { Ellipse } from '../../../../../assets/images';

export default styled.div`
  position: absolute;
  right: 0;
  left: inherit;
  display: flex;
  justify-content: flex-end;
  background: url(${Ellipse}) no-repeat right center / contain;
`;
