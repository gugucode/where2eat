

import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class ShowMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        center: [props.chose.location.latitude,props.chose.location.longitude],
        zoom: 13,
    };
  }

  createMarker = (data) =>{
    let result = [];
    for(let i=0; i<data.length; i++){
        const rest = data[i].restaurant;
        result.push(
            <Marker position={[rest.location.latitude,rest.location.longitude]} key={i}>
                <Popup>
                    <span>{rest.name} <br/> {`${rest.user_rating.aggregate_rating}/5`}</span>
                </Popup>
            </Marker>
        )
    }
    return result;
  }

  render() {
    const position = this.state.center;
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {
            this.createMarker(this.props.data)
        }
        
      </Map>
    );
  }
}

export default ShowMap;
