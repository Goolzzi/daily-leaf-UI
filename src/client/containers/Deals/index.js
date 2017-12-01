import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash'
import { Container, Grid, Responsive, ResponsiveProps } from 'semantic-ui-react';

import ContactUs from '../../components/ContactUs';
import { Outer, Inner } from '../../components/Core';
import Map from '../../components/Map';
import Section from '../../components/Section';
import FlowerCard from '../../components/FlowerCard';

import SearchForm from './components/SearchForm';
import ResultsHeader from './components/ResultsHeader';

const StyledContainer = styled.div`&&&{
    background-color: #f5f5f5;
    padding-bottom: 50px;
}`;
const StyledRow = styled(Grid.Row)`&&&{
    padding: 0;
}`;
const StyledGrid = styled(Grid)`&&&{
    margin: 0;
}`;
const ResultsForm = styled.div`
    padding: 10px 30px;
`;
const Cards = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-context: top;
align-items: center;
justify-content: space-around;
align-items: baseline;

`;
const MapView = styled.div`
    position: absolute;
    right: 0;
    width: 50%;
`

class Deals extends React.Component {
    state = {
        isMarkerShown: false,
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
                <StyledContainer>
                    <StyledGrid>
                            <Grid.Column width={8} style={{padding: 0}}>
                                    <SearchForm />
                                    <ResultsForm>
                                        <ResultsHeader />
                                        
                                        {/* <Section childs={features1} /> */}
                                    </ResultsForm>
                            </Grid.Column>
                            <MapView>
                                <Map
                                    isMarkerShown={this.state.isMarkerShown}
                                    onMarkerClick={this.handleMarkerClick}
                                    height={672}
                                />
                            </MapView>
                    </StyledGrid>
                    
                    <Inner style={{paddingTop: 40}}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={4}>
                                    <FlowerCard key={Math.random()} />
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <FlowerCard key={Math.random()} />
                                </Grid.Column>
                            </Grid.Row>
                        {
                            _.times(8, i => (
                                <Grid.Column width={4} key={i}>
                                    <FlowerCard key={Math.random()} />
                                </Grid.Column>
                            ))
                        }
                        </Grid>
                    </Inner>
                </StyledContainer>
                <ContactUs />
            </div>
            
            
        );
    }
}

export default Deals;