import React from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';

import { Outer, Inner, StyledIcon, GreenButton } from '../../../../components/Core';

const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const SlickContainer = styled.div`
    position: relative;
    display: block;
    width: 100%;
`;
const SlickItem = styled.div`&&& {
    width: 100vw;
    height: 450px!important;
    padding: 120px;
    background-image: url("/assets/imgs/dispensary.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}`;
const Title = styled.h1`
	font-family: Montserrat;
	font-size: 36px;
	font-weight: 900;
	line-height: 0.83;
	letter-spacing: 1.8px;
	text-align: left;
	color: #ffffff;
`;
const SubTitle = styled.p`
    margin-bottom: 60px;
    font-family: PTSerif;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.67;
    letter-spacing: 2.3px;
    text-align: left;
    color: #ffffff;
`;
const ActionGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 30px;
`;
const ActionItem = styled(GreenButton)`&&& {
    margin-right: 20px;
    text-transform: uppercase;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 10px;
    letter-spacing: 3px;
}`

const Banner = props =>
    <SlickContainer>
        <Slider {...settings}>
            <SlickItem>
                <Title>GREEN GRATITUDE</Title>
                <SubTitle>1436 SE Powell Blvd<br />Portland, OR 97202</SubTitle>
                <ActionGroup>
                    <ActionItem><StyledIcon src="/assets/imgs/favourite.svg" alt="F" />FAVOURITE</ActionItem>
                    <ActionItem><StyledIcon src="/assets/imgs/compass.svg" alt="C" />DIRECTIONS</ActionItem>
                </ActionGroup>
            </SlickItem>
            <SlickItem></SlickItem>
            <SlickItem></SlickItem>
            <SlickItem></SlickItem>
        </Slider>
    </SlickContainer>

export default Banner;
