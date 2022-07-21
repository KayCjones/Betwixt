import React from "react";
import {
    GoogleMap, 
    useLoadScript,
    Marker, 
    InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/style.css";

const libraries = ["places"];
const mapContainerStyle = {
    width: 
    height: 
};

const center = {
    lag:
    lng: 
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};

export default function SearchLocation() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <h2></h2>
            <GoogleMap
            mapContainerStyle={mapContainerStyle} zoom={8} center={center}
            ></GoogleMap>
        </div>
    )






}
