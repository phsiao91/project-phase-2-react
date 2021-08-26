
import React, {useState} from 'react'


function ImageTab({ place, selectPlace, }) {

    const [ history, setHistory ] = useState( [] )


    const handleClick = () => {
        console.log(place.name)
        selectPlace(place)
        postHistory(place)
    }

    function postHistory(newHis){
        fetch('http://localhost:3000/history', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newHis)
        })
        .then (response => response.json())
        .then(oneHis => { console.log(oneHis)
        
         setHistory([ ...history, oneHis ])
        })
        
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