import React from 'react';

import IteneraryTab from './IteneraryTab';
import NavBar from './NavBar';

function Itenerary (props) {

    const mapPlaces = () => {
        let mappedPlaces = props.renderOnItenerary.map(eachPlace => {
            return (
                <IteneraryTab key={eachPlace.id}
                          place={eachPlace}
                          //selectPlace={alertApp}
                    />
            )
        })
        return mappedPlaces
    }

    return (
        <div>
            <NavBar />
            {mapPlaces()}

            <div>
                <p>Cart Total : </p>
            </div>
        </div>
    )
}

export default Itenerary;