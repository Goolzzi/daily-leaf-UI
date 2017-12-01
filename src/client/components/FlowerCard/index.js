import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { Badge } from '../Core';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;
const StyledCard = styled(Card)`
  &&& {
    width: 210px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    margin: 1em!important;
  }
`;
const StyledDescription = styled(Card.Description)`
  margin-bottom: 10px;
  color: #356DA4 !important;
`;
const Price = styled.span`
  font-family: Montserrat;
  font-weight: bolder;
  padding-right: 10px;
  font-size: 14px;
  color: #167e47;
`;
const OriginPrice = styled.span`
  font-size: 10px;
  opacity: 0.2;
  color: #000000;
`;
const ExtraInfo = styled.p`
  font-size: 10px;
  float: ${props => props.float};
`;


const FlowerCard = props => (
  <StyledLink to={`/deal-detail/${props.cardID}`}>
    <StyledCard>
      <Badge>-30%</Badge>
      <Image src={props.cardImg} alt="Flower" />
      <Card.Content>
        <Card.Header>
          {props.cardTitle}
        </Card.Header>
        <Card.Meta>
          {props.cardMeta}
        </Card.Meta>
        <StyledDescription>
          {props.cardDescription}
        </StyledDescription>
        <Card.Description textAlign="center">
          <Price>${props.price}</Price>
          <OriginPrice>${props.originPrice}</OriginPrice>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ExtraInfo float="left">
          <Icon name='marker' />
          {` ${props.distance} mi`}
        </ExtraInfo>
        <ExtraInfo float="right">
          <Icon name='clock' />
          {` ${props.timeEstimation} hours`}
        </ExtraInfo>
      </Card.Content>
    </StyledCard>
  </StyledLink>);

FlowerCard.propTypes = {
  cardID: PropTypes.string,
  cardImg: PropTypes.string,
  cardTitle: PropTypes.string,
  cardMeta: PropTypes.string,
  cardDescription: PropTypes.string,
  price: PropTypes.number,
  originPrice: PropTypes.number,
  distance: PropTypes.number,
  timeEstimation: PropTypes.number,
}

FlowerCard.defaultProps = {
  cardID: 'CARDID',
  cardImg: '/assets/imgs/card.png',
  cardTitle: '',
  cardMeta: '',
  cardDescription: 'Weekly Flower Specials on Select Flower - Green Goddess Remedies',
  price: 29.99,
  originPrice: 35,
  distance: 10.9,
  timeEstimation: 12,
}


export default FlowerCard;
