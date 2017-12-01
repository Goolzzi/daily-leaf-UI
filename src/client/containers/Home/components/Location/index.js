import React, { Component } from "react";
import styled from "styled-components";

import Search from '../Search';

const Heading = styled.h1`&&&{
  display: flex;
  flex: 1;
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 900;
  line-height: 50px;
  color: #fff;}
`;
const Subheading = styled.p`&&&{
  max-width: 360px;
  margin-bottom: 40px;
  line-height: 20px;
  font-family: PT Serif;
  font-weight: lighter;
  font-size: 14px;
  letter-spacing: 0.7px;
  color: #fff;}
`;
const LocationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 120px 0 80px;
  text-align: center;
  background-image: url('/assets/imgs/home-location-section.png');
  background-size: cover;
`;
const Slogan = styled.p`
  margin: 0 auto 30px;
  line-height: 25px;
  font-family: Montserrat;
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: 2.8px;
  color: #ffffff;
`;
const SloganNumber = styled.span`
  margin-right: 10px;
  font-size: 30px;
  font-weight: bold;
  line-height: 0.83;
  color: #fff9b2;
`;


class Location extends Component {
  render() {
    return (
      <LocationSection>
        <Heading>LIGHT UP</Heading>
        <Subheading>The Daily Leaf helps you find the best weed deals your city, Let's explore.</Subheading>
        <Slogan><SloganNumber>9,060</SloganNumber> Deals Redeemd</Slogan>
        <Slogan><SloganNumber>$10,923</SloganNumber> Saved</Slogan>
        <Search />
      </LocationSection>
    );
  }
}

export default Location;
