import React from 'react';
import ImageTab from './ImageTab';
import NavBar from './NavBar';



function ImageList (props) {
    console.log(props)
    

    const alertApp = (place) => {
        console.log(place)
        props.renderPlace(place)
    }

    const mapPlaces = () => {
        let mappedPlaces = props.renderOnList.map(eachPlace => {
            return (
                <ImageTab key={eachPlace.id}
                          place={eachPlace}
                          selectPlace={alertApp}
                    />
            )
        })
        return mappedPlaces
    }





    return(
        <div>
             <NavBar/>
             <h2>Hi, {props.renderUser}!</h2>
            {mapPlaces()}
            
        </div>
    )
}

export default ImageList;