import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "../Navbar";

const Outer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #fff;
`;

const Header = ({ className }) =>
  <Outer className={className}>
    <Navbar />
  </Outer>;
Header.propTypes = {
  className: PropTypes.string
};
export default Header;
