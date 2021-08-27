import React from 'react';
import { NavLink} from 'react-router-dom'


function NavBar() {








    return(
        <header>
            <div className="header">
            <img src="https://thumbs.dreamstime.com/b/web-banner-site-travel-agency-flat-design-top-view-vector-illustration-69680781.jpg" />
            </div>
            <h1>Your Journey Awaits...</h1>
            <nav class="center">
                <NavLink className="button" to="./image">
                    HomePage
                </NavLink>
                <NavLink className="button" to="./gallery">
                    Gallery
                </NavLink>
                <NavLink className="button" to="./reviews">
                    Reviews
                </NavLink>
                <NavLink className="button" to="./itenerary">
                    Itinerary
                </NavLink>
                <NavLink className="button" to="./history">
                    History
                </NavLink>
                <NavLink className="button" to="./">
                    Logout
                </NavLink>

            </nav>
            
            
        </header>

    )
}

export default NavBar;