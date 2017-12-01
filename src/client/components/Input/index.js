import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
`;
const StyledInput = styled.input`
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  width: 100%;
  height: 43px;
  padding: ${props => (props.icon ? "5px 8px 5px 30px" : "10px")};
  line-height: 24px;
  border-radius: 3px;
  color: #3c3d48;
  background-color: #ffffff;
  border: 2px solid #d9d9d9;
  outline: none;

  &:focus, &:hover {
    outline: none;
    border: 2px solid rgba(81, 203, 238, 1);
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`;
const StyledImage = styled.img`
  position: absolute;
  top: 14px;
  left: 14px;
  width: 16px;
  height: 16px;
`;

const DFInput = props => (
  <StyledDiv>
    <StyledInput
      icon={props.icon}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
    {props.icon && <StyledImage src={props.icon} alt="icon" />}
  </StyledDiv>);
DFInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func,
};
DFInput.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  icon: null,
  onChange: (e) => { console.log(e); }
};

export default DFInput;
