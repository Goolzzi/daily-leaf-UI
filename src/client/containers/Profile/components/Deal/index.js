import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { GreenButton } from '../../../../components/Core';

const DealContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-context: space-between;
    align-items: stretch;
    justify-content: left;
    width: 100%;
    min-height: 200px;
    margin-bottom: 20px;
    padding: 0 0 0 160px;
`;
const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 140px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`;
const Title = styled.h1`
    font-family: Montserrat;
    font-size: 24px;
    text-align: left;
    color: #3c3d48;
`;
const Description = styled.p`
    font-family: PT Serif;
    font-size: 14px;
    line-height: 1.71;
    text-align: left;
    color: #3c3d48;
`;
const Extra = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Date = styled.p`
    font-family: PT Serif;
    font-size: 14px;
    line-height: 1.71;
    text-align: left;
    color: #3c3d48;
`;

const Deal = ({title, image, description, date, remove}) =>
    <DealContainer>
        <Image src={image} alt="img" />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Extra>
            <Date>{date}</Date>
            <GreenButton onClick={remove}>REMOVE</GreenButton>
        </Extra>
    </DealContainer>
Deal.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    remove: PropTypes.func,
};
Deal.defaultProps = {
    title: 'ANDERSON GLOSS JACKET',
    image: '/assets/imgs/deal.png',
    description: 'Gorilla Fondue (hybrid; 80.25% THC | 0.21 CBD)',
    date: '9/1/2017',
    remove: () => {}
}

export default Deal;
