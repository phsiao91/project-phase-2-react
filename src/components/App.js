// import logo from './logo.svg';
// import './App.css';

import { Route, Switch } from 'react-router-dom'
import Login from './Login.js';
import React, { useState, useEffect } from 'react';
import ImageList from './ImageList'
import Gallery from './Gallery';
import Reviews from './Reviews.js';
import Itenerary from './Itenerary.js';





function App() {

  const [ loggedUser, setLoggedUser] = useState("")
  const [ destinations, setDestinations] = useState([])
  const [ itenerary, setItenerary ] = useState([])

  const getPlaces = () => {
    fetch(" http://localhost:3000/countries")
    .then(res => res.json())
    .then(fetchedPlaces => {console.log(fetchedPlaces)

      setDestinations(fetchedPlaces)

    })
  }
  useEffect(getPlaces, [])


  function handleUser(username) {
    console.log("In App,", username )
    setLoggedUser(`${username}`)
    
  
  }

  console.log("LoggedUser,", loggedUser)
  console.log(destinations)

  const mapPlace = (place) => {
    console.log(place)

    let ifAdded = itenerary.find(eachPlace =>
      eachPlace.id === place.id)

      if(!ifAdded) {
        setItenerary([...itenerary, place])
      }
        else{
          console.log("Already Added!!")
        
      }
  }


  return (
    <div>
     
    <Switch>
      <Route path="/gallery">
        <Gallery renderImages={destinations}/>
      </Route>
      <Route path="/itenerary">
        <Itenerary renderOnItenerary={itenerary}/>
      </Route>
      <Route path="/image">
        <ImageList 
          renderOnList={destinations}
          renderUser={loggedUser}
          renderPlace={mapPlace}
          />
      </Route>
      <Route path="/reviews">
        <Reviews
        />
      </Route>
      <Route path="/">
        <Login 
        addUser={handleUser}
        />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
