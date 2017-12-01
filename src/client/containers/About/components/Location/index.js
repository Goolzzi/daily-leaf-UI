import React from 'react';
import styled from 'styled-components';

import { Inner } from '../../../../components/Core';
import Map from '../../../../components/Map';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em 0;
    border-radius: 5px;
    background: white;
`;
const Divider = styled.div`
    width: 100%;
    height: 1px;
    margin: 1em 0;
    background-color: #e5e5e5;
`;
const Title = styled.p`
    padding: 0;
    margin: 0;
    font-family: Montserrat;
	font-size: 12px;
	line-height: 1.5;
	letter-spacing: 0.3px;
	text-align: left;
	color: #3c3d48;
`;
const Hours = styled.div`
    display: flex;
    flex-direction: column;
    font-family: PT Serif;
	font-size: 9px;
	line-height: 2.0;
	letter-spacing: 0.6px;
	color: #5b5d69;
`;
const Hour = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const StyledP = styled.div`
    padding: 0;
    ${props => (props.right && 'margin-left: auto')};
`;
const PhoneNumber = styled.p`
    font-family: PT Serif;
	font-size: 12px;
	line-height: 1.5;
	letter-spacing: 0.6px;
	text-align: left;
	color: #5b5d69;
`;
const Address = styled.p`
    padding: 0;
    ${props => (props.name && `margin-top: 15px`)};
    ${props => (props.name && `font-weight: bold`)};
    font-family: PT Serif;
	font-size: 12px;
	line-height: 1.5;
	letter-spacing: 0.6px;
	text-align: left;
    color: ${props => (props.name ? '#356DA4' : '#5b5d69')};
`;

const Location = props =>
    <Container>
        <Inner padded>
            <Map height={130} />
        </Inner>
        <Divider />
        <Inner padded>
            <Title>HOURS</Title>
            <Hours>
                <Hour><StyledP>Sunday</StyledP>	    <StyledP right>12:00 PM - 09:00 PM</StyledP></Hour>
                <Hour><StyledP>Monday</StyledP> 	<StyledP right>12:00 PM - 10:00 PM</StyledP><br/></Hour>
                <Hour><StyledP>Tuesday</StyledP> 	<StyledP right>12:00 PM - 10:00 PM</StyledP><br/></Hour>
                <Hour><StyledP>Wednesday</StyledP> 	<StyledP right>12:00 PM - 10:00 PM</StyledP><br/></Hour>
                <Hour><StyledP>Thursday</StyledP> 	<StyledP right>12:00 PM - 10:00 PM</StyledP><br/></Hour>
                <Hour><StyledP>Friday</StyledP> 	<StyledP right>12:00 PM - 10:00 PM</StyledP> <br/></Hour>
                <Hour><StyledP>Saturday</StyledP> 	<StyledP right>11:00 AM - 10:00 PM</StyledP><br/></Hour>
            </Hours>
        </Inner>
        <Divider />
        <Inner padded>
            <Title>PHONE</Title>
            <PhoneNumber>503-477-8380</PhoneNumber>
        </Inner>
        <Divider />
        <Inner padded>
            <Title>RELATED LOCATIONS</Title>
            <Address name>Terpene Station PDX</Address>
            <Address>1436 SE Powell Blvd<br />Portland, OR 97202</Address>
        </Inner>
    </Container>

export default Location;
