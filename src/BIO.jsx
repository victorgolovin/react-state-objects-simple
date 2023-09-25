import React from 'react'
import { useState } from 'react'


const BIO = () => {

  const [person, setState] = useState({
    name: 'victor',
    surname: 'golovin',
    age: '29',
    sex: 'male',
    interests: ['youtube', 'word', 'games']
  });

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Surname: {person.surname}</p>
      <p>Age: {person.age}</p>
      <p>Sex: {person.sex}</p>
      <p>Interest: </p>
      <p>{person.interests.map(interest => (
        <p key={interest}>{interest}</p>
      ))}</p>
    </div>
  )
}

export default BIO
