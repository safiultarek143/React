import React from 'react'
import Person from './Person'


const List = () => {
    const persons =[{
        
        name: "megh"
    },
    {
      
        name: "jack"
    },
    {
        
        name: "pack"
    },
    {

        name: "nack"
    },
    ]
    // const personList = persons.map((person) => <Person person={person} />)
    return (
        
        <div>
            {
              persons.map((person, index) => {
                  return(
                      
                          <Person key={index} person={person} />
                     
                  )
              })
            }
        </div>
    )
}

export default List
