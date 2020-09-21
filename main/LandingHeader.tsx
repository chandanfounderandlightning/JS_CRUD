import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
  Container,
  MainLogo,
  Header,
  NavLink,
  BlackButton,
  Flex,
  WhiteLogo,
} from './styled';
import Lang from '../../../lang/en';

const LandingHeader: React.FC = () => {
  return (
    <Header>
      <Container>
        <Flex>
          <Navbar className="p-0" expand="lg">
            <Navbar.Brand href="/">
              <MainLogo />
              <WhiteLogo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <NavLink href="/">{Lang.blog}</NavLink>
              </Nav>
              <Nav>
                <NavLink href="/">{Lang.hiw}</NavLink>
              </Nav>
              <Nav>
                <NavLink href="/">
                  <BlackButton>{Lang.forBusiness}</BlackButton>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Flex>
      </Container>
    </Header>
  );
};

export default LandingHeader;
