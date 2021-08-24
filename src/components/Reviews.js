import React, { useState } from 'react'



function Reviews(props) {

    const [username, setUsername] = useState(" ")
    console.log("useState Username is: ", username)


     const handleSubmit = (e) => {
         e.preventDefault()
        //props.addReview
     }




    return(
        <>
        <form onSubmit={handleSubmit} >
            {/* onSubmit={handleSubmit} */}
            <h1>Log-in </h1>
            <label htmlFor="username"> Username </label>
            <input type="text" 
            id="username" 
            value={username}
            onChange ={ e => {
            setUsername(e.target.value) 
            //console.log("Username after Submit, " , username)
            }}/>

            <label htmlFor="password"> Password </label>
            <input type="text" id="password" />

            <input type="submit" value="Enter" />

        </form>
        </>
    )
}

export default Reviews;