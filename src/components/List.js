import React from 'react'

const List = () => {
    const persons =['Tarif','Sorif','Emon','joy','Israfil']
    return (
        // <div>
        //     <h2>{persons[0]}</h2>
        //     <h2>{persons[1]}</h2>
        //     <h2>{persons[2]}</h2>
        //     <h2>{persons[3]}</h2>
        //     <h2>{persons[4]}</h2>
        // </div>
        // explicit return
        <div>
            {
                persons.map((person)=> <h2>{person}</h2>)
            }
        </div>
            // explicit return
    )
}

export default List
