// import logo from './logo.svg';
// import './App.css';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom'
import Reviews from './Reviews';
import React, { useState, useEffect } from 'react';






function App() {

  const [ reviews, setReviews] = useState( [] )


  const handleForm=(newReview) => {
    console.log(newReview)
}




  return (
    <div>
      <NavBar/>
    <Switch>
      <Route>
        <Reviews addReview={handleForm}/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
