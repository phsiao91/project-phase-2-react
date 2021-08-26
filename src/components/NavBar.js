import React from 'react';
import { NavLink} from 'react-router-dom'


function NavBar() {








    return(
        <header>
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