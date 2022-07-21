import React, { useEffect, useState } from "react";
import GoogleMapReact, {Marker} from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{'color':'red'}}>{text}</div>;

export default function SimpleMap(props){
   
    
    const defaultProps = {
        center: {
        lat: props.latLng[0],
        lng: props.latLng[1]
        },
        zoom: 11
    };
    useEffect(()=>{
       
    },[])

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '500px', width: '100%' }}>
       <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDQXlCizvjTSf-aUfJLoqrV5dWx-lgm3kU" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals={true}
        >
            <AnyReactComponent
            lat={props.latLng[0]}
            lng={props.latLng[1]}
            text="My Marker"
            />
        </GoogleMapReact>
      
        </div>
    );
}

