import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

const ItemImage = styled.img`
    width: 100%;
`;
const ItemTitle = styled.h1`
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 500;
    text-align: left;
    color: #3c3d48;
`;
const ItemSummary = styled.p`
    font-family: PT Serif;
    font-size: 14px;
    text-align: left;
    color: #3c3d48;
`;
const ItemDetail = styled.div`
    padding: 20px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const BrandItem = props => (
    <Grid columns={'equal'}>
        <Grid.Row stretched>
            <Grid.Column>
                <ItemImage src="/assets/imgs/brand-item1.png" alt="item"/>
            </Grid.Column>
            <Grid.Column>
                <ItemDetail>
                    <ItemTitle>GHOST OG</ItemTitle>
                    <ItemSummary>Tune into shimmering downtempo bliss with this celebrated indica-leaning OG hybrid. Sweet notes of citrus and pine induce deep relaxation and upward release from stress and worry. Produced with care and respect, these crystal-covered herbs are a modern blessing for the mind, body, and spirit.
                        <br /><br /><b>LINEAGE:</b>
                            <br/>OG KUSH
                        <br /><br /><b>TASTE:</b>
                            <br />CITRUS, EARTHY, AND SWEET
                        <br /><br /><b>EFFECTS:</b>
                            <br />DEEP RELAXATION
                    </ItemSummary>
                </ItemDetail>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
            <Grid.Column>
                <ItemImage src="/assets/imgs/brand-item2.png" alt="item"/>
            </Grid.Column>
            <Grid.Column>
                <ItemDetail>
                    <ItemTitle>PLATINUM COOKIES</ItemTitle>
                    <ItemSummary>Platinum Cookies provides a lively and sweet euphoric lift that quickly builds up layers of long-lasting positive energy. This truly powerful, mindfully grown sativa-leaning hybrid delivers the friendliest of fire, raising inner comfort and consciousness. It's a treat for the senses, lush with flavors of spice and fruit.
                    <br /><br /><b>LINEAGE:</b>
                        <br/>A CROSS OF OG KUSH AND DURBAN POISON
                    <br /><br /><b>TASTE:</b>
                        <br />FRUITS AND SPICES
                    <br /><br /><b>EFFECTS:</b>
                        <br />PHYSICAL RELIEF AND MOOD-LIFTING
                    </ItemSummary>
                </ItemDetail>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)
export default BrandItem;