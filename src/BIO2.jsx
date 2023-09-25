import React from 'react'
import { useState } from 'react'


const BIO2 = () => {

  const [person, setPerson] = useState({
    name: 'victor',
    surname: 'golovin',
    age: '29',
    sex: 'male',
    interests: ['youtube', 'word', 'games']
  });

  const handleNameInputChange = (event) => {
    setPerson ({
        ...person,
        name: event.target.value
    })
    console.log(event.target.value)
  }

  const handleSetNameBtnClick = () => {
    console.log('press')
  }

  return (
    <div>
      <input 
      type="text"
      name="name"
      value={person.name}
      onChange={handleNameInputChange} />
      
      <button 
      onClick={handleSetNameBtnClick}>
        Задать имя
      </button>

      <p>Name: {person.name}</p>
      <p>Surname: {person.surname}</p>
      <p>Age: {person.age}</p>
      <p>Sex: {person.sex}</p>
      <p>Interest: </p>
      {person.interests.map(interest => (
        <p key={interest}>{interest}</p>
      ))}
    </div>
  )
}

export default BIO2