import React from 'react'

const ClickOne = () => {
    const clickhandler =()=>{
        console.log("Clicked")
    }
    return (
        <div>
            <button onClick={clickhandler}>Click</button>
        </div>
    )
}

export default ClickOne
