import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  margin-top: 20px;
  object-fit: contain;
  object-position: left;
  width: auto;
  height: auto;
`;

const Event = () => (
  <StyledImg src="/assets/imgs/event.png" alt="event" />
);

export default Event;