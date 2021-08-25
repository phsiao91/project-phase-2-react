import React from 'react';
import { NavLink} from 'react-router-dom'


function NavBar() {








    return(
        <header>
            <h1>You're Journey Awaits!!!</h1>
            <nav>
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
                    Itenerary
                </NavLink>
                <NavLink className="button" to="./">
                    Logout
                </NavLink>

            </nav>
            
            
        </header>

    )
}

export default NavBar;