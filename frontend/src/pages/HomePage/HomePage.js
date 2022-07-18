import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  // example lat long {lat: 43.0339697, lng: -87.91184659999999}
  const[searchAddress, setSearchAddress] = useState('')
  const[searchPlace, setSearchPlace] = useState('')

  // const fetchAddress = async () => {
  //   try {
  //     console.log(searchAddress)
  //     // let response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDQXlCizvjTSf-aUfJLoqrV5dWx-lgm3kU");
  //     let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchAddress}}&key=AIzaSyDQXlCizvjTSf-aUfJLoqrV5dWx-lgm3kU`);
  //     console.log(response.data.results[0].geometry.location)
  //     setCars(response.data);
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };

  const fetchPlace = async () => {
    try {
      console.log(searchPlace)
      // let response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDQXlCizvjTSf-aUfJLoqrV5dWx-lgm3kU");
      let response = await axios.get(https://maps.googleapis.com/maps/api/distancematrix/json?destinations=New%20York%20City%2C%20NY&origins=Washington%2C%20DC&units=imperial&key=AIzaSyDQXlCizvjTSf-aUfJLoqrV5dWx-lgm3kU);
      console.log(response)
      // setCars(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    
   
  }, []);
  return (
    <div className="container">
      <h1>Home Page</h1>

      {/* <input value={searchAddress} onChange={(e)=>setSearchAddress(e.target.value)}></input>
      <button onClick={fetchAddress}>Find address</button> */}
      <input value={searchPlace} onChange={(e)=>setSearchPlace(e.targer.value)}></input>
      <button onClick={fetchPlace}>Find places</button>
      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
    </div>
  );
};

export default HomePage;
