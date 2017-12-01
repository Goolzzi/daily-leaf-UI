import React, { Component } from "react";
import styled from "styled-components";
import { Container, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Title from '../Title';
import { Inner } from '../Core';
import FlowerCard from '../FlowerCard';

const SlickContainer = styled.div`
  display: flex !important;
  justify-content: center;
`;

const slickSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 4,
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  }, {
    breakpoint: 758,
    settings: {
      arrows: false,
      slidesToShow: 2,
    }
  }, {
    breakpoint: 520,
    settings: {
      arrows: false,
      slidesToShow: 1,
    }
  }],
  slidesToScroll: 1
}

const Section = props =>
  <Container>
    <Inner>
      <Title color={props.color}>{props.title}</Title>
      {props.viewType === 'group'
        ? <Grid centered>
          {props.childs.map(child => <Grid.Column key={Math.random()} width={16} mobile={8} tablet={5} computer={4} className="center aligned">{child}</Grid.Column>)}
        </Grid>
        : <Slider {...slickSettings}  >
          {props.childs.map(child => <SlickContainer key={Math.random()}>{child}</SlickContainer>)}
        </Slider>
      }
    </Inner>
  </Container>;

Section.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  viewType: PropTypes.string,
  childs: PropTypes.array,
};
Section.defaultProps = {
  title: '',
  color: 'white',
  viewType: 'group',
  childs: [
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
    <FlowerCard key={Math.random()} />,
  ],
};

export default Section;
