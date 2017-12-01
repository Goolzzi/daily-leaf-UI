import React, { Component } from "react";
import styled from "styled-components";

import Location from './components/Location';
import Section from '../../components/Section';
import Map from '../../components/Map';
import FlowerCard from '../../components/FlowerCard';
import ContactUs from '../../components/ContactUs';
import { Outer } from '../../components/Core';


const BrandImg = styled.img`
  max-width: 640px;
  width: 80%;
  margin-bottom: 40px;
`;

class Home extends Component {
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
    const brands = [
      <img src="/assets/imgs/brandMarleyNatural.png" alt="brand" />,
      <img src="/assets/imgs/brandPistilPoint.png" alt="brand" />,
      <img src="/assets/imgs/brandLuckeys.png" alt="brand" />,
      <img src="/assets/imgs/brandS.png" alt="brand" />,
    ]
    return (
      <div>
        <Location />
        <Map
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
        <Outer pad_large>        
          <BrandImg src="/assets/imgs/featuredBrand.png" alt="brand" centered />
          <Section title="New Arrivals" color="#167e47" style={{ marginTop: 40}}/>
        </Outer>
        <Outer color="#167e47" pad_large>
          <Section title="FEATURED BRANDS" viewType="slick" childs={brands} />
        </Outer>
        <Outer pad_large>
          <Section title="DAILY LEAF TOP 10" color="#167e47" viewType="slick" />
        </Outer>
        <ContactUs />
      </div>
    );
  }
}

export default Home;
