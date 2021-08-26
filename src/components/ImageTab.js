
import React from 'react'


function ImageTab({ place, selectPlace, }) {


    const handleClick = () => {
        console.log(place.name)
        selectPlace(place)
    }



    return(
        <>
        <li className="card">
            <div className="place-image">
                <img src={place.image} alt={place.name}
                class="center"
                />
            </div>
            <div className="description">
                <h4 class="center">{place.name}</h4>
                <p>{place.description}</p>
            </div>
            <button className="buttonImg" onClick={handleClick}>
            Price: {place.price} USD/night
            </button>
            <p></p>
        </li>
        </>
    )
}

export default ImageTab;