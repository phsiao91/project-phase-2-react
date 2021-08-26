import React, { useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'



function Login(props) {

    const [username, setUsername] = useState(" ")
    console.log("useState Username is: ", username)


    function handleSubmit(e) {
        e.preventDefault()
        
        
    }


    return(
        <>
        <h1 class="center">breakFree </h1>
        
        <form onSubmit={handleSubmit} >
            {/* onSubmit={handleSubmit} */}
            <h2>Log-in </h2>
            <label htmlFor="username"> Username </label>
            <input type="text" 
            id="username" 
            value={username}
            onChange ={ e => {
            setUsername(e.target.value) 
            //console.log("Username after Submit, " , username)
            }}/>

            <label htmlFor="password"> Password </label>
            <input type="password" id="password" />
            <NavLink to="/image">
            <input type="submit" value="Enter" 
            onClick={props.addUser(username)}/>
            </NavLink>
        </form>
        
        </>
    )
}

export default Login;