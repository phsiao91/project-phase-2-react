// import logo from './logo.svg';
// import './App.css';

import { Route, Switch } from 'react-router-dom'
import Login from './Login.js';
import React, { useState, useEffect } from 'react';
import ImageList from './ImageList'
import Gallery from './Gallery';
import NavBar from './NavBar.js';





function App() {

  const [ loggedUser, setLoggedUser] = useState("")
  const [ destinations, setDestinations] = useState([])

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


  return (
    <div>
     
    <Switch>
      <Route path="/gallery">
        <Gallery renderImages={destinations}/>
      </Route>
      <Route path="/image">
        <ImageList 
          renderOnList={destinations}
          renderUser={loggedUser}
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
