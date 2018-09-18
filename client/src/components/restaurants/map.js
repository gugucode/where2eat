// map function


import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import L from "leaflet";

class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        // this.printRestOnMap = this.printRestOnMap.bind(this);
    };

    printMap = (restID) => {
        // create map and use the winning restaruant as center of the map
        let mymap;
        const allRest = this.props.data;
        for (let i = 0; i < allRest.length; i++) {
            if (restID == allRest[i].RestID) {
                console.log(allRest[i]);
                const r = allRest[i].restaurant;
                mymap = L.map('map').setView([r.location.latitude, r.location.longitude], 12);
                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox.streets',
                    accessToken: 'pk.eyJ1IjoiZ3VndWNvZGUiLCJhIjoiY2pocjU1Z3R2MWMwcjM3cHZnZDhqa3NyYyJ9.6qeZqaN1FcIHVZqSut1hgw'
                }).addTo(mymap);
                break;
            } 
        }
        console.log("hi")
        return mymap;
        // print out all restaurants 
        // allRest.forEach(function(restaurant) {
        //     console.log(restaurant.restaurant.id)
        //     if(this !== undefined){
        //         this.printRestOnMap(mymap,restaurant,restID);
        //     }
            
        // });          
    };

    printRestOnMap = (mymap,restaurant,restID)=>{
        restaurant = restaurant.restaurant
        var lat = restaurant.latitude;
        var long = restaurant.longitude;
        var rest_icon;
    
        if(restID == restaurant.RestID){
            rest_icon = {icon: L.AwesomeMarkers.icon({icon: 'glass', markerColor: 'blue', prefix: 'fa', iconColor: 'yellow', spin: 'true'}) };
        }else{
            rest_icon = {icon: L.AwesomeMarkers.icon({icon: 'glass', markerColor: 'blue', prefix: 'fa', iconColor: 'white'}) }        
        }
    
        var detail = $("<div>");
        var name = $("<p class='mapRestName'>"+restaurant.Name+"</p>");
        name.css("margin","5px 0")
        var address = $("<p class='mapLocat'>"+restaurant.Location+"</p>");
        address.css("margin","5px 0")
    
        // star rating html
        var rating_star = $("<div class='star-ratings-css'>");
        var stars = $("<div class='star-ratings-css-top'>");
        var stars_span = "<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>";
        // set stars tag's width by restaurant's rating
        stars.css("width",(restaurant.Rating/5).toFixed(2)*100+"%");
        stars.append(stars_span);
        rating_star.append(stars)
    
        detail.append(name,address,rating_star);
    
        // add restaurant to map
        L.marker([lat, long],rest_icon).addTo(mymap).bindPopup(detail.html());
    }

    componentDidMount = () => {
        const mymap = this.printMap(this.props.pickId);
        const allRest = this.props.data;
        // allRest.forEach(function(restaurant) {
        //     console.log(restaurant.restaurant.id)
        //     if(this !== undefined){
                // this.printRestOnMap(mymap,allRest[0],allRest[0].restaurant.id);
            // }
            
        // }); 
    }

    render() {
        return (
            <div id="map">
            
            </div>
        );
    }
};

export default Map;

Map.propTypes = {
  data: PropTypes.array
};

// function printRestOnMap(mymap,restaurant,restID){
//     var lat = restaurant.latitude;
//     var long = restaurant.longitude;
//     var rest_icon;

//     if(restID == restaurant.RestID){
//         rest_icon = {icon: L.AwesomeMarkers.icon({icon: 'glass', markerColor: 'blue', prefix: 'fa', iconColor: 'yellow', spin: 'true'}) };
//     }else{
//         rest_icon = {icon: L.AwesomeMarkers.icon({icon: 'glass', markerColor: 'blue', prefix: 'fa', iconColor: 'white'}) }        
//     }

//     var detail = $("<div>");
//     var name = $("<p class='mapRestName'>"+restaurant.Name+"</p>");
//     name.css("margin","5px 0")
//     var address = $("<p class='mapLocat'>"+restaurant.Location+"</p>");
//     address.css("margin","5px 0")

//     // star rating html
//     var rating_star = $("<div class='star-ratings-css'>");
//     var stars = $("<div class='star-ratings-css-top'>");
//     var stars_span = "<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>";
//     // set stars tag's width by restaurant's rating
//     stars.css("width",(restaurant.Rating/5).toFixed(2)*100+"%");
//     stars.append(stars_span);
//     rating_star.append(stars)

//     detail.append(name,address,rating_star);

//     // add restaurant to map
//     L.marker([lat, long],rest_icon).addTo(mymap).bindPopup(detail.html());
// }


// function printMap(restID){
//     // create map and use the winning restaruant as center of the map
//     var mymap;
//     for (var i = 0; i < allRest.length; i++) {
//         if (restID == allRest[i].RestID) {
//             console.log(allRest[i].Name);
//             var mymap = L.map('mapid').setView([allRest[i].latitude, allRest[i].longitude], 12);
//             L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//                 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//                 maxZoom: 18,
//                 id: 'mapbox.streets',
//                 accessToken: 'pk.eyJ1IjoiZ3VndWNvZGUiLCJhIjoiY2pocjU1Z3R2MWMwcjM3cHZnZDhqa3NyYyJ9.6qeZqaN1FcIHVZqSut1hgw'
//             }).addTo(mymap);
//             break;
//         } 
//     }

//     // print out all restaurants 
//     allRest.forEach(function(restaurant) {
//         printRestOnMap(mymap,restaurant,restID);
//     });
    
// }