import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SimpleMap from "../MapPage/SimpleMap";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  // TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  // example lat long {lat: 43.0339697, lng: -87.91184659999999}
  const[searchAddress, setSearchAddress] = useState('')
  const[searchPlace, setSearchPlace] = useState('')
  const [latLng, setLatLng] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLatLng([position.coords.latitude, position.coords.longitude])
      setLoaded(true)
    })
   
  },[])


  const fetchAddress = async () => {
    try {
      console.log(searchAddress)
      // let response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDQXlCizvjTSf-aUfJLoqrV5dWx-lgm3kU");
      let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchAddress}}&key=AIzaSyDQXlCizvjTSf-aUfJLoqrV5dWx-lgm3kU`);
      console.log(response.data.results[0].geometry.location)
      setLatLng([response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng])
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const fetchPlace = async () => {
    try {
      console.log(searchPlace)
      // let response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDQXlCizvjTSf-aUfJLoqrV5dWx-lgm3kU");
      let response = await axios.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=mongolian&inputtype=textquery&locationbias=circle%3A2000%4047.6918452%2C-122.2226413&key=AIzaSyDQXlCizvjTSf-aUfJLoqrV5dWx-lgm3kU",
      {headers: {'Access-Control-Allow-Origin': '*'}});
      console.log(response.data)
      // setCars(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };






   

  return (
    <div className="container">
      <h1>Home Page</h1>

      <input value={searchAddress} onChange={(e)=>setSearchAddress(e.target.value)}></input>
      <button onClick={fetchAddress}>Find address</button>
      <input value={searchPlace} onChange={(e)=>setSearchPlace(e.targer.value)}></input>
      <button onClick={fetchPlace}>Find places</button>
      {loaded ? <SimpleMap latLng = {latLng}></SimpleMap> : null}
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
