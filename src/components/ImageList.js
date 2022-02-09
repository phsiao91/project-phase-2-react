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
             <h1>Welcome back!! {props.renderUser}</h1>
             <h2 className='header2'>Your Journey Awaits...</h2>
            {mapPlaces()}
            
        </div>
    )
}

export default ImageList;