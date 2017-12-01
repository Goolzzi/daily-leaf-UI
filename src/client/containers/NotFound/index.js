import React, { Component } from "react";
import styled from "styled-components";

import { Outer } from '../../components/Core';

const Heading = styled.h1`
  font-size: 3em;
  margin-top: 50px;
`;
const Message = styled.p`
  font-style: italic;
  max-width: 80%;
  margin: 1em auto;
`;

const Banner = styled.img`
  height: auto;
  width: 300px;
  max-width: 80%;
  margin: auto;
  margin-bottom: 100px;
`;

class NotFoundPage extends Component {
  render() {
    return (
      <Outer>
        <Heading>Oops!</Heading>
        <Message>This is not the page you are looking for </Message>
        <Banner src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bundesstra%C3%9Fe_404_number.svg/2000px-Bundesstra%C3%9Fe_404_number.svg.png" />
      </Outer>
    );
  }
}

export default NotFoundPage;
