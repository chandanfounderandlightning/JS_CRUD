import styled from 'styled-components';
import { MenuIcon } from '../../../../assets/images';

export default styled.div`
  display: flex;
  width: 100%;
  nav {
    width: 100%;
  }
  .navbar-toggler {
    border: none;
    padding: 0;
    outline: none;
    .navbar-toggler-icon {
      background-image: url(${MenuIcon});
    }
  }
`;
