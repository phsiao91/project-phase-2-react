
import React from 'react'


function ImageTab({ place }) {






    return(
        <li className="card">
            <div className="place-image">
                <img src={place.image} alt={place.name}/>
            </div>
            <div className="description">
                <h4>{place.name}</h4>
                <p>{place.description}</p>
            </div>
        </li>
    )
}

export default ImageTab;