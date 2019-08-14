import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
 

 
class MapContainer extends Component {

    
   
    render() {
        
        const mapStyles = {
            width: '100%',
            height: '180px',
          };

        const { mapInfo } = this.props
        
        if (mapInfo === undefined){
          return <frameElement></frameElement> ;
      } else {

        return (
            <Map
              google={this.props.google}
              zoom={17}
              style={mapStyles}
              initialCenter={{ lat: this.props.mapInfo.lat, lng: this.props.mapInfo.lng}}
              center={{ lat: this.props.mapInfo.lat, lng: this.props.mapInfo.lng}} >
              <Marker position={{ lat: mapInfo.lat, lng: mapInfo.lng}}
                      icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                      }} />
            </Map>
            
        );
       }
     }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBJnSGfBv4Elsyz1_V_a2TlUjeLD9J3gCA'
  })(MapContainer);