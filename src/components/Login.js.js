import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'



function Login(props) {

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
            <NavLink to="/image">
            <input type="submit" value="Enter" />
            </NavLink>
        </form>
        
        </>
    )
}

export default Login;