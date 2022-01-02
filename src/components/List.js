import React from 'react'
import Person from './Person'


const List = () => {
    const persons =[{
        id: 1,
        name: "megh"
    },
    {
        id: 2,
        name: "jack"
    },
    {
        id: 3,
        name: "pack"
    },
    {
        id: 4,
        name: "nack"
    },
    ]
    // const personList = persons.map((person) => <Person person={person} />)
    return (
        
        <div>
            {
              persons.map((person) => {
                  return(
                      <div key={person.id}>
                          <Person person={person} />
                      </div>
                  )
              })
            }
        </div>
    )
}

export default List
