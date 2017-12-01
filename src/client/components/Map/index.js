import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import MapStyle from './style';

const Map = compose(
    withProps( props => ({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `${props.height || '463'}px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    })),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 45.582679, lng: -122.687222 }}
      defaultOptions={{ styles: MapStyle }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 45.582679, lng: -122.687222 }} icon="/assets/imgs/map-marker.svg" onClick={props.onMarkerClick} />}
    </GoogleMap>
  );

  export default Map;