import React from "react";

function Functions(props) {
    console.log(props)
    return(
        <h1>Learn React with patience. Here Name is {props.name} and Age is {props.age}{props.children}</h1>
        // <h3> {props.children} <h3>

    )
    
}
export default Functions