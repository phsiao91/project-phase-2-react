// import logo from './logo.svg';
// import './App.css';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom'
import Reviews from './Reviews';
import React, { useState, useEffect } from 'react';
import ImageList from './ImageList'






function App() {

  const [ reviews, setReviews] = useState([])
  const [ destinations, setDestinations] = useState([])

  const getPlaces = () => {
    fetch(" http://localhost:3000/countries")
    .then(res => res.json())
    .then(fetchedPlaces => {console.log(fetchedPlaces)

      setDestinations(fetchedPlaces)

    })
  }
  useEffect(getPlaces, [])


//   const handleForm=(newReview) => {
//     console.log(newReview)
// }

  console.log(destinations)


  return (
    <div>
      <NavBar/>
    <Switch>
      {/* <Route>
        <Reviews 
        // addReview={handleForm}
        />
      </Route> */}
      <Route path="/image">
        <ImageList 
          renderOnList={destinations}
          />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
