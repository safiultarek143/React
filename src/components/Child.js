import React from 'react'

const Child = (props) => {
    return (
        <div>
            <button onClick={props.grettingMethod}>Gretting</button>
        </div>
    )
}

export default Child

