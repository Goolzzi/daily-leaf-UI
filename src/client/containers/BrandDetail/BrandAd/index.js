import React from 'react';
import styled from 'styled-components';

import { GreenButton, StyledIcon } from '../../../components/Core';

const BrandSection = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    padding: 95px 0 76px;
    text-align: center;
    background-image: url('/assets/imgs/brand-detail-back.png');
    background-size: cover;
`;

const BrandImage = styled.img`
    max-width: 220px;
`;

const BrandTitle = styled.h1`
    width: 311px;
    height: 30px;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: 1.5px;
    text-align: left;
    color: #ffffff;
    margin: 23px auto;
`;

const ActionItem = styled(GreenButton)`&&& {
    text-transform: uppercase;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: 3px;
}`;

const BrandAd = props => (
    <BrandSection>
        <BrandImage src="/assets/imgs/sample-brand.png" alt="sample-detail" />
        <BrandTitle>MARLEY NATURAL</BrandTitle>
        <ActionItem><StyledIcon src="/assets/imgs/favourite.svg" alt="F" />FAVOURITE</ActionItem>
    </BrandSection>
)
export default BrandAd;