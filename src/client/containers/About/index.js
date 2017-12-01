import React from 'react';
import styled from 'styled-components';

import { Grid, Responsive, ResponsiveProps } from 'semantic-ui-react';

import Banner from './components/Banner';
import Content from './components/Content';
import Location from './components/Location';
import { Inner, Outer } from '../../components/Core';
import ContactUs from '../../components/ContactUs';

const Dispensary = props =>
  <div>
    <Outer>
        <Banner />
    </Outer>
    <Outer color="#f5f5f2" pad_large>
      <Inner>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={12} computer={12}>
              <Content />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={4} computer={4}>
              <Location />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Inner>
    </Outer>
    <ContactUs />
  </div>

export default Dispensary;
