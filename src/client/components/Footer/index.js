import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid, Icon, Container } from 'semantic-ui-react';

import { Outer, Inner, Text } from '../Core';
import Event from './components/Event';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #88888C;
`;
const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;
const FooterTitle = styled.h1`
  color: white;
  font-size: 11px;
  letter-spacing: 2.1px;
`;
const StyledLink = styled(Link)`
  color: #88888C;
  margin-top: 10px;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #595a63;
`;
const CopyRight = styled.div`
  color: #88888c;
  height: 50px;
  line-height: 50px;
`


const Footer = ({ className }) =>
  <Outer color="#282830">
    <Container className={className}>
      <Grid centered style={{paddingTop: '60px', paddingBottom: '10px'}}>
        <Grid.Row>
          <Grid.Column width={4}>
            <StyledDiv>
              <LogoImage src="/logo.png" alt="logo" />
              <FooterTitle>FOLLOW US</FooterTitle>
              <Grid>
              <Grid.Row columns={4}>
                <Grid.Column><a style={{marginRight: 20}}><img src="/assets/imgs/facebook.png" alt="FC" style={{ width: 26 }} /></a></Grid.Column>
                <Grid.Column><a style={{marginRight: 20}}><img src="/assets/imgs/instagram.png" alt="FC" style={{ width: 26 }} /></a></Grid.Column>
                <Grid.Column><a style={{marginRight: 20}}><img src="/assets/imgs/twitter.png" alt="FC" style={{ width: 26 }} /></a></Grid.Column>
                <Grid.Column><a style={{marginRight: 20}}><img src="/assets/imgs/youtube.png" alt="FC" style={{ width: 26 }} /></a></Grid.Column>
              </Grid.Row>
              </Grid>
            </StyledDiv>
          </Grid.Column>
          <Grid.Column width={4}>
            <StyledDiv>
            <FooterTitle>PAGES</FooterTitle>
              <StyledLink to="/home">Home</StyledLink>
              <StyledLink to="/home">Deals</StyledLink>
              <StyledLink to="/home">Brands</StyledLink>
              <StyledLink to="/home">News</StyledLink>
              <StyledLink to="/home">FAQs</StyledLink>
              <StyledLink to="/home">Priacy Policy</StyledLink>
              <StyledLink to="/home">Terms and Conditions</StyledLink>
            </StyledDiv>
          </Grid.Column>
          <Grid.Column width={4}>
          <StyledDiv>
            <FooterTitle>UPCOMING EVENTS</FooterTitle>
              <Event />
              <Event />
            </StyledDiv>
          </Grid.Column>
          <Grid.Column width={4}>
          <StyledDiv>
            <FooterTitle>NEWS</FooterTitle>
            A KEY INGREDIENT TO A KNOCKOUT WATCH IS THE STRAP<br />
            <Text><Icon name="clock" />3 days ago</Text>
            A KEY INGREDIENT TO A KNOCKOUT WATCH IS THE STRAP<br />
            <Text><Icon name="clock" />3 days ago</Text>
            </StyledDiv>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Divider />
    <Container>
      <CopyRight>{'© 2017 The Daily Leaf'}</CopyRight>
    </Container>
  </Outer>;
Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
