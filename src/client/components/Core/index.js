import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Button } from "semantic-ui-react";

export const Outer = styled.div`
  background-color: ${props => (props.color || '#f9f9f9')};
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: ${props=> (props.padded ? '1em 0' : props.pad_medium ? '2em 0' : props.pad_large ? '3em 0' : '0')};
`;
export const Inner = styled(Container)`
  position: relative;
  width: 100%;
  padding: ${props=> (props.padded ? '0 1em' : props.pad_medium ? '0 2em' : props.pad_large ? '0 3em' : '0')};
  background-color: ${props => (props.color || 'transparent')};
  box-sizing: border-box;
`;
export const Badge = styled.div`
  width: 40.5px;
  height: 40.5px;
  background-color: #3abe84;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  color: #ffffff;
  line-height: 40.5px;
  text-align: center;
  font-family: Montserrat;
  font-weight: 200;
`;
export const Text = styled.p`
  padding: 1em 0;
`;
export const GreenButton = styled(Button)`&&& {
  background-color: #3abe84;
  display: flex;
  align-items: center;
  color: white;
  height: 43px;
  font-size: 12px;
  &:hover, &:focus {
    background-color: #4ace94;
    color: white;
  }
}`;
export const StyledIcon = styled.img`
  display: inline-flex;
  width: auto;
  height: 16px;
  margin: 0 5px;
`;

const Core = ({ className, children }) => (
  <Outer className={className}>
    <Inner>{children}</Inner>
  </Outer>
);
Core.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default Core;
