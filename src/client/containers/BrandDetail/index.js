import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import ContactUs from '../../components/ContactUs';
import Section from '../../components/Section';
import BrandAd from './BrandAd';
import BrandItem from './BrandItem';
import FlowerCard from '../../components/FlowerCard';
import { Outer, Inner } from '../../components/Core';
import Map from '../../components/Map';

const BrandAdImage = styled.img`
    width: 100%;
`;
const MissionView = styled.div`
    background-color: #ffffff;
    padding: 50px 28px 40px 28px;
`;
const MissionTitle = styled.h1`
	width: 193px;
	height: 49px;
	font-family: Montserrat;
	font-size: 40px;
	font-weight: 500;
	text-align: left;
	color: #3c3d48;
`;
const MissionContent = styled.p`
    font-family: PT Serif;
    font-size: 15px;
    line-height: 1.73;
    letter-spacing: 0.7px;
    text-align: justify;
    color: #3c3d48;
    margin-top: 32px;
` 

class BrandDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMarkerShown : false
        };
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }
    render() {
        return (
            <div>
                <BrandAd />
                <Outer pad_large>
                    <Inner>
                        <BrandAdImage src="/assets/imgs/brand-ad-image.png" alt="ad image"/>
                    </Inner>
                </Outer>
                <Outer pad_large>
                    <Inner>
                        <Grid columns={'equal'}>
                            <Grid.Row stretched>
                                <Grid.Column>
                                    <MissionView>
                                        <MissionTitle>MISSION</MissionTitle>
                                        <MissionContent>
                                            Marley Natural™ is a premium product line crafted with awareness, authenticity, and a genuine respect for nature’s nourishing benefits. Our flower, accessories, and body care products are all responsibly sourced and integrity driven. Each of our offerings is a direct reflection of the Marley ethos that integrates nature’s goodness with a belief in the positive potential of herb. As agents of change, we promote positivity, connectivity, and personal transformation. And as believers in progress, we offer an exceptional lifestyle line that is inspired by Jamaica’s vibrant energy. We are proud to be the official Bob Marley cannabis brand.
                                        </MissionContent>
                                    </MissionView>
                                    
                                </Grid.Column>
                                <Grid.Column>
                                    <Map
                                        isMarkerShown={this.state.isMarkerShown}
                                        onMarkerClick={this.handleMarkerClick} 
                                        height={511} 
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Inner>
                </Outer>
                <Outer>
                    <Inner>
                        <BrandItem />
                    </Inner>
                </Outer>
                <Outer pad_large>
                    <Section title="DEALS" color="#167e47" viewType="slick" childs={this.props.nearByDeals} />
                </Outer>
                <ContactUs />
            </div>
        )
    }
}
BrandDetail.propTypes = {
    nearByDeals: PropTypes.array,
};
BrandDetail.defaultProps = {
    nearByDeals: [
        <FlowerCard key={Math.random()} />,
        <FlowerCard key={Math.random()} />,
        <FlowerCard key={Math.random()} />,
        <FlowerCard key={Math.random()} />,
    ],
};

export default BrandDetail;