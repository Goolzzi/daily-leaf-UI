import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Grid, Responsive, ResponsiveProps } from 'semantic-ui-react';

import { GreenButton, StyledIcon, Badge } from '../../../../components/Core';

const Inner = styled.div`
    padding: 2em;
    background-color: white;
`;
const Header = styled.span`
    height: 14px;
    margin-right: 20px;
	font-family: Montserrat;
	font-size: 11px;
	letter-spacing: 2.1px;
	text-align: left;
    color: #167e47;
`;
const DealName = styled.p`
    height: 30px;
    margin-top: 30px;
	font-family: Montserrat;
	font-size: 30px;
	font-weight: 900;
	line-height: 1.0;
	letter-spacing: 1.5px;
	text-align: left;
	color: #3c3d48;
`;
const PriceContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`
const PresentPrice = styled.span`
    font-family: Montserrat;
    font-size: 27px;
    color: #167e47;
`
const CuttingPrice = styled.span`
    font-family: Montserrat;
    font-size: 15px;
    color: #adaeb4;
    text-decoration: line-through;
    margin-left: 13.5px;
`
const DealContent = styled.p`
    font-family: PTSerif;
    font-size: 18px;
    line-height: 1.8;
    letter-spacing: 0.7px;
    text-align: left;
    color: #5b5d69;
`
const Divider = styled.div`
    background-color: #e5e5e5;
    width: 100%;
    height: 1px;
    margin 30px 0;
`
const ActionGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`;
const ActionItem = styled(GreenButton)`&&& {
    text-transform: uppercase;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: 3px;
}`
const styledButton = styled.button`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    width: 126px;
    height: 29px;
    margin-right: 10px;
    border: none;
    border-radius: 100px;
    
    img {
        position: absolute;
        left: 20px;
    }
`;
const Twitter = styled(styledButton)`&&& {
    color: white;
	background-color: #55acee;
}`;
const Facebook = styled(styledButton)`&&& {
    color: white;
	background-color: #3b5998;
}`;


const Detail = props =>
    <Inner color="white" pad_medium>
        <Badge> -9% </Badge>
        <Header>FOLLOWERS</Header>
        <Header>CATEGORIES</Header>
        <DealName>{props.dealName}</DealName>
        <PriceContainer>
            <PresentPrice>${props.presentPrice.toFixed(2)}</PresentPrice>
            <CuttingPrice>${props.cuttingPrice.toFixed(2)}</CuttingPrice>
        </PriceContainer>
        <DealContent>Every Tuesday, Industry, Seniors, and Vets get 15% off. Stop in Terpene Station, get the best products in Oregon, and $ave!!!<br/><br/>
            *Cannot combine with other offers.
        </DealContent>
        <Divider />
        <ActionGroup>
            <ActionItem><StyledIcon src="/assets/imgs/compass.svg" alt="C" />DIRECTIONS</ActionItem>
            <ActionItem><StyledIcon src="/assets/imgs/unlock.svg" alt="U" />DEAL BANK</ActionItem>
            <ActionItem><StyledIcon src="/assets/imgs/favourite.svg" alt="F" />FAVOURITE</ActionItem>
        </ActionGroup>
        <div>
            <Twitter><img src="/assets/imgs/logo-twitter.svg" alt="T" />TWEET</Twitter>
            <Facebook><img src="/assets/imgs/logo-facebook.svg" alt="F" />SHARE</Facebook>
        </div>
    </Inner>;

Detail.propTypes = {
    dealName: PropTypes.string,
    presentPrice: PropTypes.number,
    cuttingPrice: PropTypes.number
};
Detail.defaultProps = {
    dealName: 'TWIST IT TUESDAY',
    presentPrice: 11,
    cuttingPrice: 12
};

export default Detail;
