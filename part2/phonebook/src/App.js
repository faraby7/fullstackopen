import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', number: '123-123-123'}
  ])
  const [ newPerson, setNewPerson ] = useState({ name: '', number: ''})

  const addNewPerson = (event) => {

    if (persons.find((p) => p.name === newPerson.name ) ? true : false) {
      alert(`${newPerson.name } name is already added to phonebook`)
    }

    if (persons.find((p) => p.number === newPerson.number ) ? true : false) {
      alert(`${newPerson.number } number is already added to phonebook`)
    } else {

      event.preventDefault()
      const personObject = {
        name: newPerson.name,
        number: newPerson.number,
        id: persons.length + 1,
      }

      setPersons(persons.concat(personObject))
      setNewPerson({ name: '', number: ''})
    }

  }

  const handleNameChange = (event) => {
    setNewPerson({ name: event.target.value, number: newPerson.number})
  }

  const handleNumberChange = (event) => {
    setNewPerson({ name: newPerson.name, number: event.target.value,})
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input
          value={newPerson.name}
          onChange={handleNameChange}/>
          <br/>
          number: <input
          value={newPerson.number}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) =>
          <li key={person.id}>{person.name}  .  {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App
