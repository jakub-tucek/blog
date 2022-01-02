import type { FC } from 'react';
import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';

import LogoImage from '../../svg/start-laptop.svg';

export const Navigation: FC = () => {
  return (
    <div className="container-lg px-0 px-lg-5 top-navigation">
      <Navbar className="navbar-light bg-white px-3" expand="lg">
        <a className="navbar-brand" href="/">
          <img className="img-fluid top-navigation__logo" src={LogoImage} alt="logo" />
        </a>
        <Navbar.Toggle aria-controls="responsive-nav" />
        <Navbar.Collapse id="responsive-nav">
          <Nav className="m-auto">
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
          <ul className="navbar-nav ml-0 ml-lg-5 align-items-sm-left align-items-lg-center">

            <NavItem>

            </NavItem>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
