import React from 'react'
import { useEffect, useState} from 'react'
import NavBar from './NavBar'
import ReviewTab from './ReviewTab'

function Reviews() {

    const [ reviews, setReviews ] = useState([])

    const getReviews = () => {
        fetch(" http://localhost:3000/reviews")
    .then(res => res.json())
    .then(fetchedReviews => {console.log(fetchedReviews)

      setReviews(fetchedReviews)

    })
    }
    useEffect(getReviews, [])

    const mapReviews = () => {
        let mappedReviews = reviews.map(eachReview =>{
            return(
                <ReviewTab key={eachReview.id}
                    review={eachReview}
                />
            )
        })
        return mappedReviews
    }






    return (
        <>
            <NavBar/>
            {mapReviews()}
        
        </>


    )
}

export default Reviews;