import React, { Component } from "react";
import styled from "styled-components";
import { Container, Grid, Button , Responsive, ResponsiveProps } from 'semantic-ui-react';
import Select from 'react-select';

import { GreenButton } from '../../../../components/Core';
import DFInput from '../../../../components/Input';
import CategoryList from '../../../../components/CategoryList';


class SearchSection extends Component {  
  render() {
    return (
      <Container>
        <Grid centered>
          <Grid.Column computer={4} tablet={6} mobile={14}>
            <DFInput placeholder="What are you looking for?" />
          </Grid.Column>
          <Grid.Column computer={4} tablet={6} mobile={14}>
            <DFInput icon="/assets/imgs/target.png" value={'Poland, OR'} placeholder="Select Location..." />
          </Grid.Column>
          <Grid.Column computer={4} tablet={6} mobile={14}>
            <CategoryList />
          </Grid.Column>
          <Grid.Column computer={4} tablet={6} mobile={14}>            
            <GreenButton fluid>Search</GreenButton>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default SearchSection;