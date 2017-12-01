import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import { Outer, Inner } from '../../components/Core';
import Brand from './components/Brand';

import ContactUs from '../../components/ContactUs';
const BrandImg = styled.img`
    width: 100%;
    margin-bottom: 40px;
`;
class Brands extends Component {
    render() {
        return (
            <div>
                <Outer pad_large>
                    <Inner>
                        <BrandImg src="/assets/imgs/brand-banner.jpg" alt="brand" centered />
                        <Grid columns={'equal'}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Brand brandImg="/assets/imgs/brand-1.png" />
                                </Grid.Column>
                                <Grid.Column>
                                    <Brand brandImg="/assets/imgs/brand-2.png" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Brand brandImg="/assets/imgs/brand-3.png" />
                                </Grid.Column>
                                <Grid.Column>
                                    <Brand brandImg="/assets/imgs/brand-4.png" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Brand brandImg="/assets/imgs/brand-5.png" />
                                </Grid.Column>
                                <Grid.Column>
                                    <Brand brandImg="/assets/imgs/brand-6.png" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Inner>
                    
                </Outer>
                <ContactUs />
            </div>
        )
    }
}

export default Brands;