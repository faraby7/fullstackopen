import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addNewPerson = (event) => {

    if (persons.find((p) => p.name === newName) ? true : false) {
      alert(`${newName} is already added to phonebook`)
      return true
    }

    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) =>
          <li key={person.id}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App
