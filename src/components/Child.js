import React from 'react'

const Child = (props) => {
    return (
        <div>
            <button onClick={ () => props.grettingMethod("child")}>Gretting</button>
        </div>
    )
}

export default Child

