import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import SimpleMap from './SimpleMap';


const MapPage = () => (
  <div>
    <GooglePlacesAutocomplete
      apiKey="AIzaSyDQXlCizvjTSf-aUfJLoqrV5dWx-lgm3kU"
    />
    <SimpleMap></SimpleMap>
  </div>
);

export default MapPage