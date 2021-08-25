import React from 'react'
import { useState } from 'react'


function IteneraryTab ({place}) {
    console.log(place)

    const [ count, setCount]  = useState(1)
    const [ price, setPrice ] = useState(place.price)

    const increaseClick = (e) => {
        console.log(e)
        
        setCount(( count ) => count + 1 )
        // let updatePrice = count * place.price
        // setPrice(updatePrice)

}
    const decreaseCLick = (e) => {
        console.log(e)

        setCount(( count ) => count - 1 )
        // let updatePrice = count * place.price
        // setPrice(updatePrice)
    }
    // const newPrice = () => {
    //     let updatePrice = count * place.price
    //     setPrice(updatePrice)
    // }
    

    return (
        <div>
            <li className="card">
                <div className="place-image">
                 <img src={place.image} alt={place.name}/>
                </div>
            </li>
            <button onClick={increaseClick}> + </button>
                <p>{count} nights</p>
            <button onClick={decreaseCLick}> - </button>
            <p>Total price: {price * count} USD</p>
            
        </div>
    )
}

export default IteneraryTab;