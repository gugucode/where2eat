// import React from "react";
// import L from "leaflet";

// const style = {
//   width: "100%",
//   height: "300px"
// };

// class Map extends React.Component {
//   componentDidMount() {
//     // create map
//     this.map = L.map("map", {
//       center: [49.8419, 24.0315],
//       zoom: 16,
//       layers: [
//         L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
//           attribution:
//             '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         })
//       ]
//     });

//     // add marker
//     this.marker = L.marker(this.props.markerPosition).addTo(this.map);
//   }
//   componentDidUpdate({ markerPosition }) {
//     // check if position has changed
//     if (this.props.markerPosition !== markerPosition) {
//       this.marker.setLatLng(this.props.markerPosition);
//     }
//   }
//   render() {
//     return <div id="map" style={style} />;
//   }
// }

// export default Map;

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
            <Marker position={[rest.location.latitude,rest.location.longitude]}>
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
            // this.props.data.map(rest => {
            //     rest.location ? 
            //     (<Marker position={[rest.restaurant.location.latitude,rest.restaurant.location.longitude]}>
            //         <Popup>
            //             <span>{rest.name} <br/> {`${rest.user_rating.aggregate_rating}/5`}</span>
            //         </Popup>
            //     </Marker>) :(
            //         ""
            //     )
            // })
            this.createMarker(this.props.data)

        }
        
      </Map>
    );
  }
}

export default ShowMap;
// window.ReactDOM.render(<SimpleExample />, document.getElementById('container'));