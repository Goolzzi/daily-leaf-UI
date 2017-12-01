import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Grid, Responsive, ResponsiveProps } from 'semantic-ui-react';

import { Outer, Inner } from '../../components/Core';
import Section from '../../components/Section';
import ContactUs from '../../components/ContactUs';
import FlowerCard from '../../components/FlowerCard';
import Map from '../../components/Map';

import Detail from './components/Detail';

const StyledGridColumn = styled(Grid.Column)`&&&{
    padding: 0!important;
    background: ${props => (props.bkcolor || 'white')};
}`;
const DealTypeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    img {
        height: 100px;
        border: 2px solid rgba(151, 151, 151, 0.12);
    }
`;
const LocationInfo = styled.p`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 20px;
    color: #167e47;
`;
const Address = styled.p`
    font-family: PT Serif;
    font-size: 16px;
`;

const DealDetail = (props) =>
    <div>
        <Outer color="#f5f5f2" pad_large>
            <Container className="bo-4">
                <Grid centered>
                    <Grid.Row>
                        <StyledGridColumn mobile={16} tablet={8} computer={8}>
                            <img src="/assets/imgs/detail.png" alt="details" />
                        </StyledGridColumn>
                        <StyledGridColumn mobile={16} tablet={8} computer={8}>
                            <Detail />
                        </StyledGridColumn>
                    </Grid.Row>
                    <Grid.Row>
                        <StyledGridColumn bkcolor="transparent" mobile={16} tablet={8} computer={8}>
                            <DealTypeContainer>
                                <img src="/assets/imgs/detail.png" alt="details" />
                                <img src="/assets/imgs/detail.png" alt="details" />
                                <img src="/assets/imgs/detail.png" alt="details" />
                                <img src="/assets/imgs/detail.png" alt="details" />
                            </DealTypeContainer>
                        </StyledGridColumn>
                        <Grid.Column mobile={16} tablet={9} computer={5}>
                            <LocationInfo>Mediable Monday at Kind Heart Collective</LocationInfo>
                            <Address>8217 N. Denver Ave. <br />Portland, OR 97217</Address>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={7} computer={3}>
                            <Map height={130}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>            
            {/*props.match.params.id*/}
        </Outer>
        <Outer color="#eeeeee" pad_large>
            <Section title="NEARBY DEALS" color="#167e47" viewType="slick" childs={props.nearByDeals} />
        </Outer>
        <ContactUs />
    </div>;
DealDetail.propTypes = {
    nearByDeals: PropTypes.array,
};
DealDetail.defaultProps = {
    nearByDeals: [
        <FlowerCard key={Math.random()} />,
        <FlowerCard key={Math.random()} />,
        <FlowerCard key={Math.random()} />,
        <FlowerCard key={Math.random()} />,
    ],
};

export default DealDetail;
