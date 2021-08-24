import React from 'react';
import ImageTab from './ImageTab';



function ImageList (props) {
    console.log(props)

    const mapPlaces = () => {
        let mappedPlaces = props.renderOnList.map(eachPlace => {
            return (
                <ImageTab key={eachPlace.id}
                          place={eachPlace}
                    />
            )
        })
        return mappedPlaces
    }





    return(
        <div>
            {mapPlaces()}
        </div>
    )
}

export default ImageList;