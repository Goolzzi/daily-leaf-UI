import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Grid, Responsive, ResponsiveProps } from 'semantic-ui-react';

import { GreenButton, Inner } from '../Core';
import Input from '../Input';
import Title from '../Title';

const StyledGrid = styled(Grid)`&&& {
  background-color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 2em; }
`;

const ContactUs = () => (
  <StyledGrid centered>
    <Grid.Row>
      <Grid.Column width={16}>
        <Title align="center">GET DEALS DIRECTLY TO YOUR INBOX</Title>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column mobile={16} tablet={8} computer={6}>
        <Inner><Input placeholder="E-mail" /></Inner>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={4} computer={3}>
        <Inner><GreenButton fluid>SIGN UP</GreenButton></Inner>
      </Grid.Column>
    </Grid.Row>
  </StyledGrid>);

export default ContactUs;
