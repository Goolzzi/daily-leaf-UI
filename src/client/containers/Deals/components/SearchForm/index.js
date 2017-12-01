import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Form, Responsive, ResponsiveProps } from 'semantic-ui-react';
import Slider, { Range } from 'rc-slider';

import Title from '../../../../components/Title';
import DFInput from '../../../../components/Input';
import CategoryList from '../../../../components/CategoryList';
import { GreenButton } from '../../../../components/Core';


const FormContainer = styled(Container)`&&&{
    padding: 30px 25px 15px 30px;
}`;
const SliderLabel = styled.h5`
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 100;
    margin-bottom: 10px;
`

class SearchForm extends React.Component {
    state = { radius: 10 };
    handleChange = ( value ) => this.setState({ radius: value })
    render() {
        const sliderStyle = {
            railsStyle: {
                backgroundColor: 'transparent',
                border: '1px solid #d0d0d0',
                borderRadius: 3,
                height: 8
            },
            trackStyle: {
                backgroundColor: '#3abe84',
                height: 8
            },
            handleStyle: {
                height: 16,
                width: 16,
                border: '4px solid #167e47',
            }
        }
        const { radius } = this.state;
        return (
            <FormContainer>
                <Title color={'#167e47'}>New Arrivals</Title>
                <Grid columns={'equal'}>
                    <Grid.Row>
                        <Grid.Column>
                            <DFInput placeholder="What are you looking for?" />
                        </Grid.Column>
                        <Grid.Column>
                            <DFInput icon="/assets/imgs/target.png" value={'Poland, OR'} placeholder="Select Location..." />
                        </Grid.Column>
                        <Grid.Column>
                            <CategoryList />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={11} as={Form}>
                            <SliderLabel>Radius: {radius}mi</SliderLabel>
                            <Slider
                                name="radius"
                                min={0}
                                max={30}
                                step={1}
                                value={radius}
                                railStyle={sliderStyle.railsStyle}
                                trackStyle={sliderStyle.trackStyle}
                                handleStyle={sliderStyle.handleStyle}
                                onChange={this.handleChange}
                            />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <GreenButton fluid>Search</GreenButton>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </FormContainer>
        );
    }
}
export default SearchForm;