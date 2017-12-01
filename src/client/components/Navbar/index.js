import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import { Icon, Container } from 'semantic-ui-react';
import { StyledIcon } from '../Core';

const Nav = styled(Container)`
  &&& {
    display: flex;
    flex-direction: row;
    height: 100px;
    align-content: center;
    align-items: center;
    justify-content: center;
    padding: 1em;
    box-sizing: border-box;
  }
`;

const Logo = styled.div`
  display: flex;
  margin-right: auto;
`;

const LogoImage = styled.img`;
  height: 76px;
`;

const AuthMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-left: auto;
`;

const NavItem = styled.div`
  margin-right: 20px;
  font-size: 1em;
  ${StyledLink} {
    font-weight: bold;
    color: ${props => (props.active ? "#46b0ed" : "#515f71")};
    transition: color 1s ease;
  }
`;

const StyledLink = styled(Link)`
  font-size: 11px;
  letter-spacing: 2.1px;
  text-align: left;
  text-decoration: none;
  color: #3c3d48;
`;

const NavLink = ({ to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => {
      return (
        <NavItem active={match && match.isExact}>
          <StyledLink to={to} {...rest} />
        </NavItem>
      );
    }}
  />
);

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Logo>
          <NavLink to="/"><LogoImage src="/logo.png" alt="logo" /></NavLink>
        </Logo>
        <NavLink to="/deals">DEALS</NavLink>
        <NavLink to="/brands">BRANDS</NavLink>
        <NavLink to="/about">NEWS</NavLink>
        <NavLink to="/about">FAQS</NavLink>
        <NavLink to="/about">CONTACT</NavLink>
        <NavLink to="/about">ABOUT US</NavLink>
        <AuthMenu>
          <StyledIcon src="/assets/imgs/ic-search.svg" alt="search" />
          <StyledIcon src="/assets/imgs/ic-user.svg" alt="search" />
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </AuthMenu>
      </Nav>
    );
  }
}

export default Navbar;
