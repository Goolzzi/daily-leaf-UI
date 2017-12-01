import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Tab, Menu, Grid } from 'semantic-ui-react'

import ContactUs from '../../components/ContactUs';
import { Outer, Inner } from '../../components/Core';
import Deals from './components/Deals';

const Username = styled.div`
    position: relative;
    width: 100%;
    height: 140px;
    text-align: center;
    text-transform: uppercase;
    background-color: #167e47;
    color: white;
    font-family: Montserrat;
    font-weight: 900; 
    font-size: 45px;
    line-height: 140px;

`;
const TabMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 40px; 
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: white;
`;
const TabMenuItem = styled.button`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.57;
    letter-spacing: 0.7px;
    text-align: center;
    color: #3c3d48;
    background-color: transparent;
    border: none;
    &.active, &:hover, &:focus {
        color: #356da4;
        outline: none;
    }
`;
const TabContent = styled.div`
    position: relative;
    width: 100%;
    padding: 1em;
    border-radius: 5px;
    background: white;
`;

class Profile extends React.Component {
  static propTypes = {
    username: PropTypes.string,
  }
  static defaultProps = {
    username: 'JHON SMITH',
  }
  state = {
    menu: 'DEALS',
  }

  render() {
    return (
    <Outer color={'#f5f5f2'}>
      <Username>{this.props.username}</Username>
      <Inner>
        <TabMenu>
          <TabMenuItem
            className={this.state.menu === 'DEALS' ? 'active' : ''}
            onClick={() => this.setState({menu: 'DEALS'})}
          >DEALS</TabMenuItem>
          <TabMenuItem
            className={this.state.menu === 'FAVOURITES' ? 'active' : ''}
            onClick={() => this.setState({menu: 'FAVOURITES'})}
          >FAVOURITES</TabMenuItem>
          <TabMenuItem
            className={this.state.menu === 'BRANDS' ? 'active' : ''}
            onClick={() => this.setState({menu: 'BRANDS'})}
          >BRANDS</TabMenuItem>
          <TabMenuItem
            className={this.state.menu === 'SETTINGS' ? 'active' : ''}
            onClick={() => this.setState({menu: 'SETTINGS'})}
          >SETTINGS</TabMenuItem>
        </TabMenu>
        <TabContent>
          {this.state.menu === 'DEALS' && <Deals />}
        </TabContent>
      </Inner>
      <ContactUs />
    </Outer>);
  }
}  

export default Profile;
